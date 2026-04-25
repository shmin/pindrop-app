# pindrop

iPod 스타일로 Google 시트를 다루는 PWA.

## 🌐 배포 URL

https://shmin.github.io/pindrop-app/

## 📱 설치 방법 (iPhone)

1. Safari로 위 URL 접속
2. 공유 버튼 → "홈 화면에 추가"
3. 홈에서 아이콘 탭하면 앱처럼 실행

## 🛠 GitHub Pages 활성화 (저장소 소유자용)

1. 이 저장소 → Settings → Pages
2. "Build and deployment"
   - Source: **Deploy from a branch**
   - Branch: **main** / `/` (root)
3. Save

5분쯤 기다리면 위 URL에서 접속 가능.

## 📂 파일 구조

```
index.html              ← 메인 앱
manifest.json           ← PWA 메타데이터
service-worker.js       ← 오프라인용 셸 캐싱
icon.svg                ← 원본 아이콘
icon-192.png            ← 안드로이드 홈
icon-512.png            ← 큰 사이즈, 마스커블
apple-touch-icon.png    ← iOS 홈
```

## 🚧 진행 상황

- [x] PWA 골격 (manifest, service worker, 아이콘)
- [x] iPod UI 셸 + 휠/버튼 컨트롤
- [x] Apps Script URL 입력 화면
- [ ] Google Sheets 데이터 읽기/쓰기 (다음)
- [ ] 셀 편집기, 이미지 첨부 (다음)

## 🔗 다음 단계: Google Sheets 연동

Apps Script에 다음 코드 붙여넣고 웹앱으로 배포:

```javascript
// (다음 업데이트에서 제공)
```
