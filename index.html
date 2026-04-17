<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PinDrop — 지역 이벤트 지도</title>
<link href="https://fonts.googleapis.com/css2?family=Gmarket+Sans:wght@300;500;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=21aa6a962aa0c145f9458ab6704219e5"></script>
<style>
  :root {
    --bg:#0a0a0f; --surface:#12121a; --card:#1a1a26; --border:#2a2a3a;
    --accent:#ff4d6d; --accent2:#ffd166; --accent3:#06d6a0;
    --text:#f0f0f5; --muted:#8888aa; --radius:16px;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Noto Sans KR',sans-serif;background:var(--bg);color:var(--text);height:100vh;overflow:hidden;display:flex;flex-direction:column;}

  /* Header */
  header{padding:10px 18px;display:flex;align-items:center;justify-content:space-between;background:rgba(10,10,15,0.97);border-bottom:1px solid var(--border);z-index:100;backdrop-filter:blur(12px);gap:12px;flex-shrink:0;}
  .logo{font-family:'Gmarket Sans',sans-serif;font-size:20px;font-weight:700;background:linear-gradient(135deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;white-space:nowrap;}
  .logo span{font-weight:300;}
  .header-right{display:flex;align-items:center;gap:10px;flex-shrink:0;}
  .filter-chips{display:flex;gap:5px;flex-wrap:wrap;}
  .chip{padding:4px 11px;border-radius:20px;font-size:12px;font-weight:500;border:1px solid var(--border);background:var(--surface);color:var(--muted);cursor:pointer;transition:all 0.2s;}
  .chip.active,.chip:hover{border-color:var(--accent);color:var(--accent);background:rgba(255,77,109,0.1);}
  .chip[data-cat="세일"].active{border-color:#ffd166;color:#ffd166;background:rgba(255,209,102,0.1);}
  .chip[data-cat="공연"].active{border-color:#06d6a0;color:#06d6a0;background:rgba(6,214,160,0.1);}
  .chip[data-cat="전시"].active{border-color:#a29bfe;color:#a29bfe;background:rgba(162,155,254,0.1);}
  .chip[data-cat="기타"].active{border-color:#74b9ff;color:#74b9ff;background:rgba(116,185,255,0.1);}
  .auth-btn{display:flex;align-items:center;gap:8px;padding:7px 14px;border-radius:20px;border:1px solid var(--border);background:var(--surface);color:var(--text);font-family:'Noto Sans KR',sans-serif;font-size:12px;font-weight:500;cursor:pointer;transition:all 0.2s;white-space:nowrap;}
  .auth-btn:hover{border-color:var(--accent);color:var(--accent);}
  .auth-avatar{width:24px;height:24px;border-radius:50%;object-fit:cover;}
  .auth-name{max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .realtime-dot{width:7px;height:7px;border-radius:50%;background:var(--accent3);box-shadow:0 0 6px var(--accent3);animation:pgreen 2s infinite;flex-shrink:0;}
  @keyframes pgreen{0%,100%{opacity:1;}50%{opacity:0.3;}}

  /* Layout */
  .app-body{display:flex;flex:1;overflow:hidden;min-height:0;}

  /* Kakao Map */
  #map-container{flex:1;position:relative;overflow:hidden;}
  #kakao-map{width:100%;height:100%;}

  /* Custom marker overlay */
  .custom-marker{position:relative;cursor:pointer;display:flex;flex-direction:column;align-items:center;}
  .marker-pin{width:44px;height:54px;display:flex;align-items:center;justify-content:center;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 4px 12px rgba(0,0,0,0.5);transition:transform 0.15s;}
  .marker-pin:hover{transform:rotate(-45deg) scale(1.15);}
  .marker-emoji{transform:rotate(45deg);font-size:20px;line-height:1;}
  .marker-badge{padding:3px 8px;border-radius:10px;font-size:10px;font-weight:700;color:#fff;white-space:nowrap;margin-top:2px;font-family:'Noto Sans KR',sans-serif;box-shadow:0 2px 8px rgba(0,0,0,0.4);}
  .marker-label{background:rgba(8,8,18,0.85);color:#e0e0f0;padding:2px 7px;border-radius:4px;font-size:10px;font-weight:700;font-family:'Noto Sans KR',sans-serif;margin-top:2px;white-space:nowrap;border:1px solid rgba(255,255,255,0.1);}

  /* Map hint */
  .map-hint{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);background:rgba(10,10,15,0.88);border:1px solid var(--border);border-radius:20px;padding:7px 16px;font-size:12px;color:var(--muted);backdrop-filter:blur(8px);pointer-events:none;white-space:nowrap;z-index:10;}

  /* Sidebar */
  #sidebar{width:310px;background:var(--surface);border-left:1px solid var(--border);display:flex;flex-direction:column;overflow:hidden;flex-shrink:0;}
  .sidebar-header{padding:14px 18px 10px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;}
  .sidebar-title{font-size:11px;font-weight:700;color:var(--muted);letter-spacing:1.2px;text-transform:uppercase;}
  .count-badge{background:var(--accent);color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:10px;}
  #event-list{flex:1;overflow-y:auto;padding:10px;display:flex;flex-direction:column;gap:7px;}
  #event-list::-webkit-scrollbar{width:3px;}
  #event-list::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px;}

  .event-card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:11px;cursor:pointer;transition:all 0.2s;position:relative;overflow:hidden;display:flex;gap:10px;align-items:flex-start;}
  .event-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:2px 0 0 2px;}
  .event-card[data-cat="팝업"]::before{background:#ff4d6d;}.event-card[data-cat="세일"]::before{background:#ffd166;}
  .event-card[data-cat="공연"]::before{background:#06d6a0;}.event-card[data-cat="전시"]::before{background:#a29bfe;}.event-card[data-cat="기타"]::before{background:#74b9ff;}
  .event-card:hover{border-color:#3a3a50;transform:translateX(2px);}
  .event-card.selected{border-color:var(--accent);background:rgba(255,77,109,0.07);}
  .mine-dot{position:absolute;top:10px;right:10px;width:6px;height:6px;border-radius:50%;background:var(--accent2);}
  .card-thumb{width:44px;height:44px;border-radius:10px;flex-shrink:0;background:var(--border);display:flex;align-items:center;justify-content:center;font-size:24px;}
  .card-body{flex:1;min-width:0;}
  .card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;gap:4px;}
  .cat-tag{font-size:9px;font-weight:700;padding:2px 7px;border-radius:5px;letter-spacing:0.5px;white-space:nowrap;flex-shrink:0;}
  .cat-tag.팝업{background:rgba(255,77,109,0.2);color:#ff4d6d;}.cat-tag.세일{background:rgba(255,209,102,0.2);color:#ffd166;}
  .cat-tag.공연{background:rgba(6,214,160,0.2);color:#06d6a0;}.cat-tag.전시{background:rgba(162,155,254,0.2);color:#a29bfe;}.cat-tag.기타{background:rgba(116,185,255,0.2);color:#74b9ff;}
  .time-left{font-size:10px;color:var(--muted);white-space:nowrap;}
  .time-left.urgent{color:var(--accent);font-weight:700;}
  .card-title{font-size:13px;font-weight:700;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .card-loc{font-size:11px;color:var(--muted);}
  .card-author{font-size:10px;color:var(--muted);margin-top:2px;opacity:0.7;}
  .add-btn{margin:10px;padding:12px;border-radius:var(--radius);border:2px dashed var(--border);background:transparent;color:var(--muted);font-family:'Noto Sans KR',sans-serif;font-size:13px;font-weight:500;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;justify-content:center;gap:6px;flex-shrink:0;}
  .add-btn:hover{border-color:var(--accent);color:var(--accent);background:rgba(255,77,109,0.05);}
  .no-events{text-align:center;padding:36px 20px;color:var(--muted);font-size:13px;line-height:1.8;}

  /* Modal */
  .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.78);backdrop-filter:blur(6px);z-index:500;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity 0.2s;}
  .modal-overlay.open{opacity:1;pointer-events:all;}
  .modal{background:var(--card);border:1px solid var(--border);border-radius:20px;padding:24px;width:480px;max-width:96vw;max-height:92vh;overflow-y:auto;transform:translateY(20px);transition:transform 0.2s;}
  .modal-overlay.open .modal{transform:translateY(0);}
  .modal::-webkit-scrollbar{width:4px;}.modal::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px;}
  .modal-title{font-family:'Gmarket Sans',sans-serif;font-size:17px;font-weight:700;margin-bottom:16px;background:linear-gradient(135deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
  .form-group{margin-bottom:12px;}
  .form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;}
  label{display:block;font-size:10px;font-weight:700;color:var(--muted);margin-bottom:5px;letter-spacing:0.8px;text-transform:uppercase;}
  input,textarea{width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:9px 12px;color:var(--text);font-family:'Noto Sans KR',sans-serif;font-size:13px;outline:none;transition:border-color 0.2s;}
  input:focus,textarea:focus{border-color:var(--accent);}
  textarea{resize:none;height:58px;}
  .cat-select{display:flex;gap:6px;flex-wrap:wrap;}
  .cat-opt{padding:5px 13px;border-radius:20px;font-size:12px;font-weight:500;border:1px solid var(--border);background:var(--surface);color:var(--muted);cursor:pointer;transition:all 0.15s;}
  .cat-opt.sel{border-color:var(--accent);color:var(--accent);background:rgba(255,77,109,0.15);}
  .section-title{font-size:10px;font-weight:700;color:var(--accent);letter-spacing:1px;text-transform:uppercase;margin:14px 0 10px;display:flex;align-items:center;gap:8px;}
  .section-title::after{content:'';flex:1;height:1px;background:var(--border);}
  .section-block{background:rgba(255,255,255,0.02);border:1px solid var(--border);border-radius:12px;padding:14px;margin-bottom:12px;}
  .pin-style-tabs{display:flex;gap:8px;margin-bottom:12px;}
  .pst{flex:1;padding:10px 8px;border-radius:12px;border:1px solid var(--border);background:var(--surface);color:var(--muted);font-family:'Noto Sans KR',sans-serif;font-size:12px;font-weight:500;cursor:pointer;text-align:center;transition:all 0.2s;}
  .pst.active{border-color:var(--accent);color:var(--text);background:rgba(255,77,109,0.1);}
  .pst-icon{font-size:22px;margin-bottom:4px;display:block;}
  .icon-grid{display:grid;grid-template-columns:repeat(8,1fr);gap:5px;}
  .icon-opt{width:36px;height:36px;border-radius:8px;border:1px solid var(--border);background:var(--surface);font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.15s;}
  .icon-opt:hover,.icon-opt.sel{border-color:var(--accent);background:rgba(255,77,109,0.15);transform:scale(1.12);}
  .label-row{display:flex;gap:8px;align-items:flex-end;}
  .label-row input{flex:1;}
  .label-pos{display:flex;gap:4px;}
  .lp-btn{padding:6px 10px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--muted);font-size:11px;cursor:pointer;transition:all 0.15s;white-space:nowrap;}
  .lp-btn.sel{border-color:var(--accent2);color:var(--accent2);background:rgba(255,209,102,0.1);}

  /* Location preview in modal */
  .loc-preview{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:8px 12px;font-size:12px;color:var(--accent3);margin-bottom:4px;display:none;}
  .loc-preview.show{display:block;}

  .modal-actions{display:flex;gap:10px;margin-top:16px;}
  .btn-cancel{flex:1;padding:11px;border-radius:12px;border:1px solid var(--border);background:transparent;color:var(--muted);font-family:'Noto Sans KR',sans-serif;font-size:13px;cursor:pointer;transition:all 0.2s;}
  .btn-cancel:hover{border-color:var(--text);color:var(--text);}
  .btn-submit{flex:2;padding:11px;border-radius:12px;border:none;background:linear-gradient(135deg,var(--accent),#ff6b6b);color:#fff;font-family:'Noto Sans KR',sans-serif;font-size:13px;font-weight:700;cursor:pointer;transition:all 0.2s;}
  .btn-submit:hover{opacity:0.9;transform:translateY(-1px);}
  .btn-submit:disabled{opacity:0.5;cursor:not-allowed;transform:none;}
  .hint{font-size:11px;color:var(--muted);margin-top:6px;}

  /* Kakao infowindow custom */
  .kk-info{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:14px;min-width:200px;max-width:240px;box-shadow:0 12px 40px rgba(0,0,0,0.6);font-family:'Noto Sans KR',sans-serif;}
  .kk-info-top{display:flex;align-items:center;gap:8px;margin-bottom:8px;}
  .kk-info-icon{font-size:28px;}
  .kk-info-cat{font-size:9px;font-weight:700;padding:2px 7px;border-radius:5px;}
  .kk-info-title{font-size:14px;font-weight:700;color:#f0f0f5;margin-bottom:4px;line-height:1.3;}
  .kk-info-desc{font-size:12px;color:#8888aa;margin-bottom:8px;line-height:1.5;}
  .kk-info-footer{font-size:11px;color:#8888aa;display:flex;flex-direction:column;gap:3px;}
  .kk-info-del{margin-top:8px;width:100%;padding:6px;border-radius:8px;border:1px solid rgba(255,77,109,0.3);background:transparent;color:#ff4d6d;font-family:'Noto Sans KR',sans-serif;font-size:11px;cursor:pointer;}
  .kk-info-del:hover{background:rgba(255,77,109,0.15);}
  .kk-info-close{position:absolute;top:-8px;right:-8px;width:22px;height:22px;border-radius:50%;background:#ff4d6d;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;}

  /* Toast */
  .toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--card);border:1px solid var(--border);border-radius:12px;padding:10px 20px;font-size:13px;z-index:9999;opacity:0;transition:all 0.3s;pointer-events:none;white-space:nowrap;box-shadow:0 8px 24px rgba(0,0,0,0.5);}
  .toast.show{opacity:1;transform:translateX(-50%) translateY(0);}
  .toast.success{border-color:var(--accent3);color:var(--accent3);}
  .toast.error{border-color:var(--accent);color:var(--accent);}

  /* Loading */
  .loading{position:fixed;inset:0;background:rgba(10,10,15,0.9);z-index:9000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;}
  .loading.hidden{display:none;}
  .spinner{width:40px;height:40px;border:3px solid var(--border);border-top-color:var(--accent);border-radius:50%;animation:spin 0.8s linear infinite;}
  @keyframes spin{to{transform:rotate(360deg);}}
  .loading-text{font-size:14px;color:var(--muted);}

  /* Login */
  .login-prompt{position:fixed;inset:0;background:rgba(10,10,15,0.94);z-index:8000;display:flex;align-items:center;justify-content:center;}
  .login-prompt.hidden{display:none;}
  .login-card{background:var(--card);border:1px solid var(--border);border-radius:24px;padding:40px;text-align:center;max-width:340px;width:90%;}
  .login-logo{font-family:'Gmarket Sans',sans-serif;font-size:34px;font-weight:700;background:linear-gradient(135deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;}
  .login-sub{font-size:13px;color:var(--muted);margin-bottom:28px;line-height:1.7;}
  .google-btn{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:13px;border-radius:14px;border:1px solid var(--border);background:var(--surface);color:var(--text);font-family:'Noto Sans KR',sans-serif;font-size:14px;font-weight:500;cursor:pointer;transition:all 0.2s;}
  .google-btn:hover{border-color:#4285f4;background:#4285f4;color:#fff;}
  .google-icon{width:20px;height:20px;flex-shrink:0;}
</style>
</head>
<body>

<div class="loading" id="loading">
  <div class="spinner"></div>
  <div class="loading-text">카카오맵 & Firebase 연결 중...</div>
</div>

<div class="login-prompt" id="login-prompt">
  <div class="login-card">
    <div class="login-logo">PinDrop</div>
    <div class="login-sub">실시간 지역 이벤트 공유 지도<br>Google 계정으로 시작하세요 🗺️</div>
    <button class="google-btn" id="google-login-btn">
      <svg class="google-icon" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      Google로 로그인
    </button>
  </div>
</div>

<div class="toast" id="toast"></div>

<header>
  <div class="logo">Pin<span>Drop</span></div>
  <div class="filter-chips" id="filters">
    <div class="chip active" data-cat="전체">전체</div>
    <div class="chip" data-cat="팝업">팝업</div>
    <div class="chip" data-cat="세일">세일</div>
    <div class="chip" data-cat="공연">공연</div>
    <div class="chip" data-cat="전시">전시</div>
    <div class="chip" data-cat="기타">기타</div>
  </div>
  <div class="header-right">
    <div class="realtime-dot" title="실시간 연결됨"></div>
    <button class="auth-btn" id="auth-btn">로그인</button>
  </div>
</header>

<div class="app-body">
  <div id="map-container">
    <div id="kakao-map"></div>
    <div class="map-hint" id="map-hint">🗺️ 로그인 후 지도를 클릭해 핀을 꽂으세요</div>
  </div>

  <div id="sidebar">
    <div class="sidebar-header">
      <div class="sidebar-title">실시간 이벤트</div>
      <div class="count-badge" id="event-count">0</div>
    </div>
    <div id="event-list"></div>
    <button class="add-btn" id="open-add-btn">＋ 새 이벤트 등록</button>
  </div>
</div>

<!-- Modal -->
<div class="modal-overlay" id="modal">
  <div class="modal">
    <div class="modal-title">📌 새 이벤트 핀 등록</div>

    <div class="section-title">기본 정보</div>
    <div class="loc-preview" id="loc-preview">📍 지도 클릭 위치 선택됨</div>
    <div class="form-group">
      <label>이벤트 이름</label>
      <input type="text" id="f-title" placeholder="예: 무신사 팝업스토어"/>
    </div>
    <div class="form-row">
      <div>
        <label>카테고리</label>
        <div class="cat-select" id="cat-select" style="margin-top:2px;">
          <div class="cat-opt sel" data-v="팝업">팝업</div>
          <div class="cat-opt" data-v="세일">세일</div>
          <div class="cat-opt" data-v="공연">공연</div>
          <div class="cat-opt" data-v="전시">전시</div>
          <div class="cat-opt" data-v="기타">기타</div>
        </div>
      </div>
      <div>
        <label>유효 기간 종료</label>
        <input type="datetime-local" id="f-expiry"/>
      </div>
    </div>
    <div class="form-row">
      <div>
        <label>지역/주소</label>
        <input type="text" id="f-loc" placeholder="예: 홍대 어울마당로"/>
      </div>
      <div>
        <label>설명</label>
        <input type="text" id="f-desc" placeholder="간단한 설명"/>
      </div>
    </div>

    <div class="section-title">핀 꾸미기</div>
    <div class="section-block">
      <label style="margin-bottom:10px;">핀 스타일</label>
      <div class="pin-style-tabs" id="pin-style-tabs">
        <div class="pst active" data-style="icon"><span class="pst-icon">😊</span>이모지 핀</div>
        <div class="pst" data-style="text-only"><span class="pst-icon">🔤</span>텍스트 배지</div>
      </div>
      <div id="panel-icon">
        <label>아이콘 선택</label>
        <div class="icon-grid" id="icon-grid"></div>
      </div>
      <div id="panel-text-only" style="display:none;">
        <p style="font-size:12px;color:var(--muted);padding:4px 0;">카테고리 색상 배지에 텍스트가 표시됩니다.</p>
      </div>
    </div>

    <div class="section-block">
      <label style="margin-bottom:8px;">지도 위 텍스트 레이블</label>
      <div class="label-row">
        <div style="flex:1;"><input type="text" id="f-label" placeholder="비워두면 이름 자동 사용"/></div>
        <div>
          <label style="margin-bottom:4px;">표시</label>
          <div class="label-pos">
            <div class="lp-btn sel" data-pos="show">보임</div>
            <div class="lp-btn" data-pos="none">숨김</div>
          </div>
        </div>
      </div>
    </div>

    <p class="hint">📍 지도를 먼저 클릭하면 위치가 자동으로 지정돼요</p>
    <div class="modal-actions">
      <button class="btn-cancel" id="modal-cancel">취소</button>
      <button class="btn-submit" id="modal-submit">핀 꽂기 📌</button>
    </div>
  </div>
</div>

<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCTMAi2EZSx1fhY794NyKS3XtlCfOsLnn0",
  authDomain: "pindrop-app-fcb28.firebaseapp.com",
  projectId: "pindrop-app-fcb28",
  storageBucket: "pindrop-app-fcb28.firebasestorage.app",
  messagingSenderId: "421838566039",
  appId: "1:421838566039:web:d053d9ae72fb29e16dafd2"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ── State ──
const CAT_COLORS = {'팝업':'#ff4d6d','세일':'#ffd166','공연':'#06d6a0','전시':'#a29bfe','기타':'#74b9ff'};
const ICONS = ['🎉','🛍️','🎵','🎨','🍔','🍰','☕','🌸','💄','👗','🎭','📸','🏪','🎤','🎪','🌟','🔥','💥','🎯','🎲','🏋️','🌈','🎀','🦋','🍺','🍜','🎸','🎹','🎬','🌙','✨','🏆'];
let events = [], currentUser = null, activeFilter = '전체';
let pendingLat = null, pendingLng = null, selectedId = null;
let selectedPinStyle = 'icon', selectedIcon = '🎉', selectedLabelPos = 'show';
let kakaoMap = null, markers = {}; // id -> {marker, overlay}

// ── Toast ──
function toast(msg, type='success') {
  const t = document.getElementById('toast');
  t.textContent = msg; t.className = `toast ${type} show`;
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── Kakao Map Init ──
function initMap() {
  const container = document.getElementById('kakao-map');
  const options = {
    center: new kakao.maps.LatLng(37.5665, 126.9780), // 서울 중심
    level: 7
  };
  kakaoMap = new kakao.maps.Map(container, options);

  // 지도 컨트롤
  kakaoMap.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);
  kakaoMap.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT);

  // 지도 클릭 이벤트
  kakao.maps.event.addListener(kakaoMap, 'click', function(mouseEvent) {
    if (!currentUser) { toast('먼저 로그인해주세요! 🔐', 'error'); return; }
    const latlng = mouseEvent.latLng;
    pendingLat = latlng.getLat();
    pendingLng = latlng.getLng();
    // 주소 역지오코딩
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2Address(pendingLng, pendingLat, (result, status) => {
      if (status === kakao.maps.services.Status.OK && result[0]) {
        const addr = result[0].road_address
          ? result[0].road_address.address_name
          : result[0].address.address_name;
        document.getElementById('f-loc').value = addr;
        document.getElementById('loc-preview').textContent = '📍 ' + addr;
      } else {
        document.getElementById('loc-preview').textContent = `📍 위도 ${pendingLat.toFixed(5)}, 경도 ${pendingLng.toFixed(5)}`;
      }
      document.getElementById('loc-preview').classList.add('show');
    });
    openModal();
  });

  document.getElementById('loading').classList.add('hidden');
}

// Kakao Maps SDK 로드 후 실행
if (typeof kakao !== 'undefined' && kakao.maps) {
  kakao.maps.load(initMap);
} else {
  window.addEventListener('load', () => {
    if (typeof kakao !== 'undefined') kakao.maps.load(initMap);
    else { document.getElementById('loading').classList.add('hidden'); toast('카카오맵 로드 실패', 'error'); }
  });
}

// ── Auth ──
const provider = new GoogleAuthProvider();
async function doLogin() {
  try { await signInWithPopup(auth, provider); }
  catch(e) { toast('로그인 실패: ' + e.message, 'error'); }
}
document.getElementById('google-login-btn').addEventListener('click', doLogin);
document.getElementById('auth-btn').addEventListener('click', async () => {
  if (currentUser) { if (confirm('로그아웃 하시겠어요?')) await signOut(auth); }
  else doLogin();
});

onAuthStateChanged(auth, user => {
  currentUser = user;
  const loginPrompt = document.getElementById('login-prompt');
  const authBtn = document.getElementById('auth-btn');
  const mapHint = document.getElementById('map-hint');
  if (user) {
    loginPrompt.classList.add('hidden');
    authBtn.innerHTML = `<img class="auth-avatar" src="${user.photoURL||''}" onerror="this.style.display='none'"/><span class="auth-name">${user.displayName||user.email}</span>&nbsp;<span style="color:var(--muted)">·</span>&nbsp;<span style="color:var(--accent)">로그아웃</span>`;
    mapHint.textContent = '🗺️ 지도를 클릭해 핀을 꽂으세요';
    toast(`${user.displayName||'사용자'}님 환영해요! 🎉`);
  } else {
    loginPrompt.classList.remove('hidden');
    authBtn.textContent = '로그인';
    mapHint.textContent = '🗺️ 로그인 후 지도를 클릭해 핀을 꽂으세요';
  }
});

// ── Firestore realtime ──
const q = query(collection(db,'events'), orderBy('createdAt','desc'));
onSnapshot(q, snapshot => {
  const now = Date.now();
  events = snapshot.docs
    .map(d => ({id:d.id,...d.data()}))
    .filter(ev => {
      const t = ev.expiry?.toDate ? ev.expiry.toDate().getTime() : new Date(ev.expiry).getTime();
      return t > now;
    });
  renderMarkers();
  renderList();
}, err => {
  toast('DB 오류: ' + err.message, 'error');
});

// ── Helpers ──
function timeLeft(expiry) {
  const t = expiry?.toDate ? expiry.toDate() : new Date(expiry);
  const diff = t - Date.now();
  if (diff <= 0) return {text:'만료됨', urgent:true, expired:true};
  const h = Math.floor(diff/36e5), d = Math.floor(h/24);
  if (d > 0) return {text:`${d}일 ${h%24}시간 남음`, urgent:d<=1, expired:false};
  return {text:`${h}시간 남음`, urgent:true, expired:false};
}
function filteredEvents() {
  return events.filter(e => activeFilter==='전체' || e.cat===activeFilter);
}

// ── Kakao Custom Marker ──
function makeMarkerContent(ev) {
  const color = CAT_COLORS[ev.cat] || '#aaa';
  const tl = timeLeft(ev.expiry);
  const isTextOnly = ev.pinStyle === 'text-only';
  const label = (ev.label || ev.title || '').slice(0, 12);
  const showLabel = ev.labelPos !== 'none';

  if (isTextOnly) {
    return `
      <div class="custom-marker" data-id="${ev.id}">
        <div class="marker-badge" style="background:${color}">${label}</div>
        ${tl.urgent ? `<div style="width:8px;height:8px;border-radius:50%;background:${color};margin:2px auto;animation:pgreen 1s infinite;"></div>` : ''}
      </div>`;
  }
  return `
    <div class="custom-marker" data-id="${ev.id}">
      <div class="marker-pin" style="background:${color}">
        <span class="marker-emoji">${ev.icon||'📍'}</span>
      </div>
      ${showLabel ? `<div class="marker-label">${label}</div>` : ''}
      ${tl.urgent ? `<div style="width:8px;height:8px;border-radius:50%;background:${color};margin:2px auto;animation:pgreen 1s infinite;box-shadow:0 0 6px ${color};"></div>` : ''}
    </div>`;
}

function makeInfoContent(ev) {
  const color = CAT_COLORS[ev.cat] || '#aaa';
  const tl = timeLeft(ev.expiry);
  const isMe = currentUser && ev.authorUid === currentUser.uid;
  return `
    <div class="kk-info">
      <div class="kk-info-top">
        <span class="kk-info-icon">${ev.icon||'📍'}</span>
        <span class="kk-info-cat" style="background:${color}22;color:${color}">${ev.cat}</span>
      </div>
      <div class="kk-info-title">${ev.title}</div>
      <div class="kk-info-desc">${ev.desc||'-'}</div>
      <div class="kk-info-footer">
        <span>⏰ <span style="color:${tl.urgent?'#ff4d6d':color}">${tl.text}</span></span>
        <span>📍 ${ev.loc||''}</span>
        <span>👤 ${ev.authorName||'익명'}</span>
      </div>
      ${isMe ? `<button class="kk-info-del" onclick="window.__deletePin('${ev.id}')">🗑 핀 삭제</button>` : ''}
    </div>`;
}

// ── Render Markers ──
function renderMarkers() {
  if (!kakaoMap) return;
  const visible = filteredEvents();
  const visibleIds = new Set(visible.map(e=>e.id));

  // Remove markers not in current filter
  Object.keys(markers).forEach(id => {
    if (!visibleIds.has(id)) {
      markers[id].marker.setMap(null);
      markers[id].overlay.setMap(null);
      delete markers[id];
    }
  });

  visible.forEach(ev => {
    if (markers[ev.id]) {
      // Update existing overlay content
      markers[ev.id].overlay.setContent(makeMarkerContent(ev));
      markers[ev.id].infoOverlay.setContent(makeInfoContent(ev));
      return;
    }
    const pos = new kakao.maps.LatLng(ev.lat, ev.lng);

    // Custom overlay as marker
    const overlay = new kakao.maps.CustomOverlay({
      position: pos,
      content: makeMarkerContent(ev),
      yAnchor: 1,
      zIndex: 3,
    });
    overlay.setMap(kakaoMap);

    // Info overlay (hidden by default)
    const infoOverlay = new kakao.maps.CustomOverlay({
      position: pos,
      content: makeInfoContent(ev),
      yAnchor: 1.15,
      zIndex: 5,
    });

    // Click on marker
    setTimeout(() => {
      const el = overlay.getContent();
      if (el && el.addEventListener) {
        el.addEventListener('click', () => toggleInfo(ev.id));
      } else {
        // fallback: poll for DOM node
        const check = setInterval(() => {
          const node = document.querySelector(`.custom-marker[data-id="${ev.id}"]`);
          if (node) { node.addEventListener('click', () => toggleInfo(ev.id)); clearInterval(check); }
        }, 100);
      }
    }, 200);

    markers[ev.id] = { overlay, infoOverlay, open: false };
  });
}

let openInfoId = null;
function toggleInfo(id) {
  // Close currently open
  if (openInfoId && markers[openInfoId]) {
    markers[openInfoId].infoOverlay.setMap(null);
    markers[openInfoId].open = false;
  }
  if (openInfoId === id) { openInfoId = null; selectedId = null; renderList(); return; }

  selectedId = id;
  openInfoId = id;
  const ev = events.find(e=>e.id===id);
  if (!ev || !markers[id]) return;
  const pos = new kakao.maps.LatLng(ev.lat, ev.lng);
  markers[id].infoOverlay.setPosition(pos);
  markers[id].infoOverlay.setMap(kakaoMap);
  markers[id].open = true;

  // Pan map to marker
  kakaoMap.panTo(pos);
  renderList();
}

// Global delete function called from infowindow HTML
window.__deletePin = async (id) => {
  const ev = events.find(e=>e.id===id);
  if (!ev) return;
  if (!confirm(`"${ev.title}" 핀을 삭제할까요?`)) return;
  try {
    await deleteDoc(doc(db,'events',id));
    if (markers[id]) {
      markers[id].overlay.setMap(null);
      markers[id].infoOverlay.setMap(null);
      delete markers[id];
    }
    openInfoId = null; selectedId = null;
    toast('핀이 삭제됐어요 🗑');
  } catch(e) { toast('삭제 실패: '+e.message,'error'); }
};

// ── Render List ──
function renderList() {
  const list = document.getElementById('event-list');
  const visible = filteredEvents();
  document.getElementById('event-count').textContent = visible.length;
  if (!visible.length) {
    list.innerHTML = `<div class="no-events">🗺️ 이 카테고리에<br>등록된 이벤트가 없어요<br><br>지도를 클릭해 추가해보세요!</div>`;
    return;
  }
  list.innerHTML = '';
  [...visible].sort((a,b)=>{
    const ta=a.expiry?.toDate?a.expiry.toDate():new Date(a.expiry);
    const tb=b.expiry?.toDate?b.expiry.toDate():new Date(b.expiry);
    return ta-tb;
  }).forEach(ev => {
    const tl = timeLeft(ev.expiry);
    const isMe = currentUser && ev.authorUid===currentUser.uid;
    const card = document.createElement('div');
    card.className = 'event-card' + (selectedId===ev.id?' selected':'');
    card.setAttribute('data-cat', ev.cat);
    card.innerHTML = `
      ${isMe?'<div class="mine-dot" title="내가 올린 핀"></div>':''}
      <div class="card-thumb">${ev.icon||'📍'}</div>
      <div class="card-body">
        <div class="card-top">
          <span class="cat-tag ${ev.cat}">${ev.cat}</span>
          <span class="time-left ${tl.urgent?'urgent':''}">${tl.text}</span>
        </div>
        <div class="card-title">${ev.title}</div>
        <div class="card-loc">📍 ${ev.loc||''}</div>
        <div class="card-author">by ${ev.authorName||'익명'}</div>
      </div>`;
    card.addEventListener('click', () => {
      if (ev.lat && ev.lng) {
        kakaoMap.panTo(new kakao.maps.LatLng(ev.lat, ev.lng));
        kakaoMap.setLevel(4);
        toggleInfo(ev.id);
      }
    });
    list.appendChild(card);
  });
}

// ── Modal ──
function openModal() {
  const d = new Date(Date.now()+3*864e5);
  document.getElementById('f-expiry').value = new Date(d-d.getTimezoneOffset()*6e4).toISOString().slice(0,16);
  document.getElementById('modal').classList.add('open');
}
document.getElementById('open-add-btn').addEventListener('click', () => {
  if (!currentUser) { toast('로그인이 필요해요','error'); return; }
  // Use map center
  const center = kakaoMap.getCenter();
  pendingLat = center.getLat(); pendingLng = center.getLng();
  document.getElementById('loc-preview').textContent = '📍 지도 중심 위치';
  document.getElementById('loc-preview').classList.add('show');
  openModal();
});
document.getElementById('modal-cancel').addEventListener('click',()=>{
  document.getElementById('modal').classList.remove('open');
  document.getElementById('loc-preview').classList.remove('show');
});

// Pin style tabs
document.getElementById('pin-style-tabs').addEventListener('click',e=>{
  const tab=e.target.closest('.pst'); if(!tab) return;
  document.querySelectorAll('.pst').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active'); selectedPinStyle=tab.getAttribute('data-style');
  document.getElementById('panel-icon').style.display=selectedPinStyle==='icon'?'':'none';
  document.getElementById('panel-text-only').style.display=selectedPinStyle==='text-only'?'':'none';
});

// Category
let selectedCat='팝업';
document.getElementById('cat-select').addEventListener('click',e=>{
  const opt=e.target.closest('.cat-opt'); if(!opt) return;
  document.querySelectorAll('.cat-opt').forEach(o=>o.classList.remove('sel'));
  opt.classList.add('sel'); selectedCat=opt.getAttribute('data-v');
});

// Label pos
document.querySelectorAll('.lp-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.lp-btn').forEach(b=>b.classList.remove('sel'));
    btn.classList.add('sel'); selectedLabelPos=btn.getAttribute('data-pos');
  });
});

// Icon grid
const iconGrid=document.getElementById('icon-grid');
ICONS.forEach(ic=>{
  const d=document.createElement('div');
  d.className='icon-opt'+(ic===selectedIcon?' sel':'');
  d.textContent=ic;
  d.addEventListener('click',()=>{
    document.querySelectorAll('.icon-opt').forEach(o=>o.classList.remove('sel'));
    d.classList.add('sel'); selectedIcon=ic;
  });
  iconGrid.appendChild(d);
});

// ── Submit ──
document.getElementById('modal-submit').addEventListener('click', async () => {
  if (!currentUser) { toast('로그인이 필요해요','error'); return; }
  if (!pendingLat || !pendingLng) { toast('지도에서 위치를 먼저 선택해주세요','error'); return; }
  const title=document.getElementById('f-title').value.trim();
  const expiry=document.getElementById('f-expiry').value;
  if (!title||!expiry) { toast('이름과 유효기간을 입력해주세요','error'); return; }

  const btn=document.getElementById('modal-submit');
  btn.disabled=true; btn.textContent='저장 중...';
  try {
    await addDoc(collection(db,'events'),{
      title, cat:selectedCat,
      loc: document.getElementById('f-loc').value.trim()||'위치 미정',
      desc: document.getElementById('f-desc').value.trim()||'',
      expiry: new Date(expiry),
      lat: pendingLat, lng: pendingLng,
      pinStyle: selectedPinStyle,
      icon: selectedPinStyle==='icon' ? selectedIcon : '',
      label: document.getElementById('f-label').value.trim()||title,
      labelPos: selectedLabelPos,
      authorUid: currentUser.uid,
      authorName: currentUser.displayName||currentUser.email,
      authorPhoto: currentUser.photoURL||null,
      createdAt: serverTimestamp(),
    });
    document.getElementById('modal').classList.remove('open');
    document.getElementById('loc-preview').classList.remove('show');
    ['f-title','f-loc','f-desc','f-label'].forEach(id=>document.getElementById(id).value='');
    toast('핀이 등록됐어요! 🎉');
  } catch(e) {
    toast('저장 실패: '+e.message,'error');
  } finally {
    btn.disabled=false; btn.textContent='핀 꽂기 📌';
  }
});

// Filters
document.getElementById('filters').addEventListener('click',e=>{
  const chip=e.target.closest('.chip'); if(!chip) return;
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
  chip.classList.add('active'); activeFilter=chip.getAttribute('data-cat');
  // Close open info
  if (openInfoId && markers[openInfoId]) { markers[openInfoId].infoOverlay.setMap(null); }
  openInfoId=null; selectedId=null;
  renderMarkers(); renderList();
});

setInterval(()=>{ renderList(); }, 60000);
</script>
</body>
</html>
