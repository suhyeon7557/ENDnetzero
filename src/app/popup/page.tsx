'use client';

import { useState } from 'react';

export default function PopupPage() {
  const [open, setOpen] = useState(true);

  return (
    <main role="main" aria-label="팝업 데모 페이지">
      <div
        id="popup_overlay"
        className={open ? 'is-open' : ''}
        aria-hidden={open ? 'false' : 'true'}
      >
        <div
          className="popup_modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup_title"
        >
          <div className="popup_header">
            <h2 id="popup_title">UN 기후변화협약(UNFCCC) 체결</h2>
            <button
              type="button"
              className="popup_close"
              aria-label="닫기"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="popup_body">
            <p className="popup_desc">유엔환경개발회의 개최(1992년 6월, 브라질 리우데자네이루)</p>
            <ul className="popup_list">
              <li>유엔기후변화협약(UNFCCC, United Nations Conference on Environment &amp; Development) 채택</li>
              <li>선진국과 개도국이 ‘공동의 그러나 차별화된 책임’에 따라 각자의 능력에 맞게 온실가스 감축을 약속</li>
              <li>협약 최고의 의사결정기구는 당사국총회(COP)로 이행 및 과학기술적 측면 검토</li>
              <li>2000년까지 온실가스 배출 규모를 1990년 수준으로 안정화시킬 것을 권고함(42개국 참여·부속서 국가)</li>
              <li>당시 우리나라는 비부속서 국가로, 감축의무를 부담하지 않는 개도국으로 분류됨</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}


