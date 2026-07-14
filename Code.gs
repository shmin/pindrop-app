const PHOTO_MAX_BYTES = 2 * 1024 * 1024;
const PHOTO_WIDTH = 96;
const PHOTO_HEIGHT = 96;
const PHOTO_GAP = 8;

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('시트 사진 등록')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}

function getSpreadsheetSchema(spreadsheetUrl) {
  const spreadsheetId = extractSpreadsheetId_(spreadsheetUrl);
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const tabs = spreadsheet.getSheets().map(function(sheet) {
    const lastColumn = Math.max(sheet.getLastColumn(), 1);
    const headers = sheet.getRange(1, 1, 1, lastColumn).getDisplayValues()[0];
    const sampleRange = sheet.getRange(2, 1, 1, lastColumn);
    const validations = sampleRange.getDataValidations()[0];
    const numberFormats = sampleRange.getNumberFormats()[0];
    const fields = [];

    headers.forEach(function(header, index) {
      const label = String(header || '').trim();
      if (!label) return;
      fields.push(buildField_(label, index + 1, validations[index], numberFormats[index]));
    });

    if (!fields.length) {
      throw new Error('"' + sheet.getName() + '" 탭의 첫 번째 행에 열 이름이 없습니다.');
    }

    return {
      id: sheet.getSheetId(),
      name: sheet.getName(),
      fields: fields,
      photoLimit: inferPhotoLimit_(fields),
    };
  });

  return {
    spreadsheetId: spreadsheetId,
    spreadsheetName: spreadsheet.getName(),
    tabs: tabs,
  };
}

function registerRecord(payload) {
  if (!payload || !payload.spreadsheetId || payload.sheetId === undefined) {
    throw new Error('등록할 스프레드시트와 탭 정보가 없습니다.');
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  const insertedImages = [];

  try {
    const spreadsheet = SpreadsheetApp.openById(payload.spreadsheetId);
    const sheet = spreadsheet.getSheetById(Number(payload.sheetId));
    if (!sheet) throw new Error('선택한 시트 탭을 찾을 수 없습니다.');

    const lastColumn = Math.max(sheet.getLastColumn(), 1);
    const row = Math.max(sheet.getLastRow() + 1, 2);
    const rowValues = new Array(lastColumn).fill('');

    Object.keys(payload.values || {}).forEach(function(columnKey) {
      const column = Number(columnKey);
      if (!Number.isInteger(column) || column < 1 || column > lastColumn) return;
      rowValues[column - 1] = normalizeValue_(payload.values[columnKey]);
    });

    sheet.getRange(row, 1, 1, lastColumn).setValues([rowValues]);

    const photos = Array.isArray(payload.photos) ? payload.photos : [];
    const groupedByColumn = {};
    photos.forEach(function(photo) {
      const column = Number(photo.column);
      if (!groupedByColumn[column]) groupedByColumn[column] = [];
      groupedByColumn[column].push(photo);
    });

    Object.keys(groupedByColumn).forEach(function(columnKey) {
      const column = Number(columnKey);
      const columnPhotos = groupedByColumn[column];
      if (!Number.isInteger(column) || column < 1 || column > lastColumn) {
        throw new Error('사진을 넣을 열 위치가 올바르지 않습니다.');
      }

      sheet.setColumnWidth(column, Math.max(sheet.getColumnWidth(column), PHOTO_WIDTH + 12));
      sheet.setRowHeight(row, Math.max(sheet.getRowHeight(row), columnPhotos.length * (PHOTO_HEIGHT + PHOTO_GAP) + 4));

      columnPhotos.forEach(function(photo, photoIndex) {
        const blob = dataUrlToBlob_(photo.dataUrl, photo.name || ('photo-' + (photoIndex + 1) + '.jpg'));
        const image = sheet.insertImage(blob, column, row, 6, 6 + photoIndex * (PHOTO_HEIGHT + PHOTO_GAP));
        image.setWidth(PHOTO_WIDTH).setHeight(PHOTO_HEIGHT);
        image.setAltTextTitle(photo.name || '등록 사진');
        image.setAltTextDescription('웹앱에서 ' + new Date().toLocaleString('ko-KR') + ' 등록');
        insertedImages.push(image);
      });
    });

    SpreadsheetApp.flush();
    return {
      success: true,
      row: row,
      sheetName: sheet.getName(),
      photoCount: photos.length,
    };
  } catch (error) {
    insertedImages.forEach(function(image) {
      try { image.remove(); } catch (ignored) {}
    });
    throw new Error(error && error.message ? error.message : String(error));
  } finally {
    lock.releaseLock();
  }
}

function buildField_(label, column, validation, numberFormat) {
  const normalized = label.toLowerCase();
  let kind = 'text';
  let options = [];

  if (/사진|이미지|photo|image/.test(normalized)) {
    kind = 'photo';
  } else if (validation) {
    const criteria = validation.getCriteriaType();
    const args = validation.getCriteriaValues();
    if (criteria === SpreadsheetApp.DataValidationCriteria.VALUE_IN_LIST) {
      kind = 'select';
      options = (args[0] || []).map(String);
    } else if (criteria === SpreadsheetApp.DataValidationCriteria.VALUE_IN_RANGE) {
      kind = 'select';
      options = args[0].getDisplayValues().flat().filter(String);
    } else if (criteria === SpreadsheetApp.DataValidationCriteria.CHECKBOX) {
      kind = 'checkbox';
    }
  }

  if (kind === 'text') {
    if (/날짜|일자|date/.test(normalized) || /[dmy].*[dmy]/i.test(numberFormat || '')) kind = 'date';
    else if (/수량|개수|금액|가격|번호|number|qty|price/.test(normalized)) kind = 'number';
    else if (/메모|비고|설명|내용|조치|특이사항/.test(normalized)) kind = 'textarea';
  }

  return { column: column, label: label, kind: kind, options: options, required: /\*$|필수/.test(label) };
}

function inferPhotoLimit_(fields) {
  const photoFields = fields.filter(function(field) { return field.kind === 'photo'; });
  if (!photoFields.length) return 0;
  if (photoFields.length > 1) return photoFields.length;
  const match = photoFields[0].label.match(/최대\s*(\d+)\s*장/);
  return match ? Math.max(1, Math.min(Number(match[1]), 10)) : 1;
}

function extractSpreadsheetId_(value) {
  const text = String(value || '').trim();
  const urlMatch = text.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  const idMatch = text.match(/^[a-zA-Z0-9-_]{20,}$/);
  if (urlMatch) return urlMatch[1];
  if (idMatch) return idMatch[0];
  throw new Error('올바른 Google 스프레드시트 주소를 입력해 주세요.');
}

function normalizeValue_(value) {
  if (value && typeof value === 'object' && value.type === 'date' && value.value) {
    const parts = String(value.value).split('-').map(Number);
    if (parts.length === 3) return new Date(parts[0], parts[1] - 1, parts[2]);
  }
  if (value && typeof value === 'object' && value.type === 'number') {
    return value.value === '' ? '' : Number(value.value);
  }
  if (value && typeof value === 'object' && value.type === 'checkbox') return Boolean(value.value);
  return value && typeof value === 'object' ? value.value : value;
}

function dataUrlToBlob_(dataUrl, fileName) {
  const match = String(dataUrl || '').match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!match) throw new Error('사진 데이터 형식이 올바르지 않습니다.');
  const bytes = Utilities.base64Decode(match[2]);
  if (bytes.length > PHOTO_MAX_BYTES) {
    throw new Error(fileName + ' 사진이 2MB를 초과했습니다. 다시 압축해 주세요.');
  }
  return Utilities.newBlob(bytes, match[1], fileName);
}
