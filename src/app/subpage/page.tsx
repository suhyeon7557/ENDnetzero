"use client";

import { useEffect } from "react";

export default function SubpagePage() {
  // 클라이언트에서 탭 연동 스크립트 연결
  useEffect(() => {
    const subTabLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".sub_tabs a[role='tab']"));
    const innerTabLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".inner_tabs a"));
      const contTitle = document.querySelector<HTMLElement>("#cont_inner .cont_title");
    const contentWrap = document.querySelector<HTMLElement>("#content_wrap");

    const setActive = (liList: NodeListOf<HTMLLIElement>, activeLi: HTMLLIElement) => {
      liList.forEach(li => li.classList.remove("is-active"));
      activeLi.classList.add("is-active");
    };

      const showInnerFor = (sectionName: string) => {
        const panels = Array.from(document.querySelectorAll<HTMLElement>(".inner_tabs"));
        panels.forEach(p => p.setAttribute("hidden", ""));
        const target = document.querySelector<HTMLElement>(`.inner_tabs[data-section="${sectionName}"]`) || panels[0];
        target?.removeAttribute("hidden");
        // 해당 섹션의 첫 탭 활성화
        const firstInnerLi = target?.querySelector<HTMLLIElement>("li");
        if (firstInnerLi) {
          const innerAll = target!.querySelectorAll<HTMLLIElement>("li");
          setActive(innerAll, firstInnerLi);
          const firstText = firstInnerLi.querySelector("a")?.textContent?.trim();
          if (contTitle && firstText) contTitle.textContent = firstText;
        }
      };

    const onSubClick = (e: Event) => {
      e.preventDefault();
      const a = e.currentTarget as HTMLAnchorElement;
      const li = a.parentElement as HTMLLIElement;
      const all = document.querySelectorAll<HTMLLIElement>(".sub_tabs li");
      setActive(all, li);
      const sectionName = a.textContent?.trim() || "";
      // 상단 탭 선택 시 해당 섹션의 내부 탭 및 컨텐츠 패널 표시
      showInnerFor(sectionName);
      const order = ["전환","건물","수송","농·축산","폐기물","산업","흡수원"];
      const idx = Math.max(0, order.indexOf(sectionName));
      const allPanels = Array.from(document.querySelectorAll<HTMLElement>("#cont_inner .tab_content"));
      allPanels.forEach(p => { p.classList.remove("is-active"); p.setAttribute("hidden",""); });
      const targetPanel = document.getElementById(`content_${String(idx+1).padStart(2,'0')}`);
      if (targetPanel) { targetPanel.classList.add("is-active"); targetPanel.removeAttribute("hidden"); }
      contentWrap?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const onInnerClick = (e: Event) => {
      e.preventDefault();
      const a = e.currentTarget as HTMLAnchorElement;
      const li = a.parentElement as HTMLLIElement;
      const all = document.querySelectorAll<HTMLLIElement>(".inner_tabs li");
      setActive(all, li);
      const txt = a.textContent?.trim();
      if (contTitle && txt) contTitle.textContent = txt;
    };

    subTabLinks.forEach(a => a.addEventListener("click", onSubClick));
    innerTabLinks.forEach(a => a.addEventListener("click", onInnerClick));

    // 초기 표시: 현재 활성 상단 탭 기준으로 내부 탭 표시
    const activeTop = document.querySelector<HTMLLIElement>(".sub_tabs li.is-active a");
    showInnerFor(activeTop?.textContent?.trim() || "");

    return () => {
      subTabLinks.forEach(a => a.removeEventListener("click", onSubClick));
      innerTabLinks.forEach(a => a.removeEventListener("click", onInnerClick));
    };
  }, []);
  return (
    <main role="main" aria-label="서브페이지 콘텐츠">
    <div id="Content" className="Subpage">
        <div id="nav_wrap" aria-label="내비게이션 영역">
            <div id="nav_inner">
                <div className="visual" aria-label="서브 비주얼 영역">
                    <div className="visual_inner">
                        <nav className="breadcrumb" aria-label="경로">
                            <ol>
                                <li><a href="/"><img src="/images/ic_home_white.svg" alt="홈" /></a></li>
                                <li aria-hidden="true">›</li>
                                <li>정책지표</li>
                            </ol>
                        </nav>
                        <div className="sub_title_wrap">
                            <h1 className="sub_title">부문별 정책지표</h1>
                        </div>
                        <ul className="sub_tabs" role="tablist" aria-label="서브 탭 메뉴 영역">
                            <li className="is-active"><a href="#" role="tab" aria-selected="true">전환</a></li>
                            <li><a href="#" role="tab">건물</a></li>
                            <li><a href="#" role="tab">수송</a></li>
                            <li><a href="#" role="tab">농·축산</a></li>
                            <li><a href="#" role="tab">폐기물</a></li>
                            <li><a href="#" role="tab">산업</a></li>
                            <li><a href="#" role="tab">흡수원</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="content_wrap" aria-label="콘텐츠 영역">
             <div id="cont_inner">
              {/* 내부 탭 (컨텐츠 영역용) - 전환 */}
              <div className="inner_tabs" aria-label="탭 영역 - 전환" data-section="전환">
                <ul>
                  <li className="is-active"><a href="#">재생에너지 비중</a></li>
                  <li><a href="#">태양광 자가발전 비율</a></li>
                  <li><a href="#">1차 에너지 공급량 중 신재생에너지 비중</a></li>
                  <li><a href="#">전력자립도</a></li>
                  <li><a href="#">에너지 집약도(GRDP당 최종에너지소비량)</a></li>
                  <li><a href="#">전력소비량 증가율</a></li>
                  <li><a href="#">전력 탄소집약도</a></li>
                  <li><a href="#">에너지효율 개선율</a></li>
                  <li><a href="#">탄소중립 생활 실천도(에너지)</a></li>
                </ul>
              </div>

              {/* 내부 탭 - 건물 (자리만 생성, 내용은 추후 입력) */}
              <div className="inner_tabs" aria-label="탭 영역 - 건물" data-section="건물" hidden>
                <ul>
                  <li className="is-active"><a href="#">30년 이상 노후 건축물 비율</a></li>
                  <li><a href="#">그린리모델링 건축물 비율</a></li>
                  <li><a href="#">건물 부문 탄소집약도</a></li>
                  <li><a href="#">단위 면적당 에너지소비량</a></li>
                  <li><a href="#">제로에너지건축물 인증 비율</a></li>
                  <li><a href="#">가구당 한달 전력소비량</a></li>
                  <li><a href="#">공공부문 대상 기관 온실가스 감축률</a></li>
                  <li><a href="#">1인당 하루 물 사용량</a></li>
                  <li><a href="#">탄소중립 생활 실천도(건물)</a></li>
                </ul>
              </div>

              {/* 내부 탭 - 수송 */}
              <div className="inner_tabs" aria-label="탭 영역 - 수송" data-section="수송" hidden>
                <ul>
                <li className="is-active"><a href="#">전기수소차(승용) 보급률</a></li>
                  <li><a href="#">공공 부문 전기수소차 비율</a></li>
                  <li><a href="#">대중교통 수송분담률</a></li>
                  <li><a href="#">승용차 일간 평균 주행거리</a></li>
                  <li><a href="#">등록 대수 대비 온실가스 배출량</a></li>
                  <li><a href="#">수송 부문 탄소집약도</a></li>
                  <li><a href="#">자전거 수단 분담률</a></li>
                  <li><a href="#">탄소중립 생활 실천도(수송)</a></li>
                </ul>
              </div>

              {/* 내부 탭 - 농·축산 */}
              <div className="inner_tabs" aria-label="탭 영역 - 농·축산" data-section="농·축산" hidden>
                <ul>
                  <li className="is-active"><a href="#">논벼 재배면적</a></li>
                  <li><a href="#">친환경 농산물 인증면적</a></li>
                  <li><a href="#">가축 사육두수 변화율</a></li>
                  <li><a href="#">경지 면적당 화학비료 사용량</a></li>
                  <li><a href="#">농업 부문 석유 소비량 비중</a></li>
                  <li><a href="#">총인구 대비 농업인 비율</a></li>
                  <li><a href="#">도시농업 경지면적</a></li>    
                  <li><a href="#">로컬푸드 매출액</a></li>
                  <li><a href="#">1인당 하루 음식물류 폐기물 발생량</a></li>    
                  <li><a href="#">식생활교육 참여자수(누적)</a></li>
                  <li><a href="#">탄소중립 생활 실천도(소비)</a></li>
                  
                </ul>
              </div>

              {/* 내부 탭 - 폐기물 */}
              <div className="inner_tabs" aria-label="탭 영역 - 폐기물" data-section="폐기물" hidden>
                <ul>
                  <li className="is-active"><a href="#">생활폐기물 감량률</a></li>
                  <li><a href="#">1인당 하루 생활폐기물 발생량</a></li>
                  <li><a href="#">공공기관 녹색제품 구매 비율</a></li>
                  <li><a href="#">생활폐기물 매립 비율</a></li>
                  <li><a href="#">공공 소각시설 에너지 발생률(직전년도대비)</a></li>
                  <li><a href="#">생활폐기물 재활용률</a></li>
                  <li><a href="#">순환이용률</a></li>
                  <li><a href="#">탄소중립 생활 실천도(자원순환)</a></li>

                </ul>
              </div>

              {/* 내부 탭 - 산업 */}
              <div className="inner_tabs" aria-label="탭 영역 - 산업" data-section="산업" hidden>
                <ul>
                  <li className="is-active"><a href="#">산업 부문 탄소집약도</a></li>
                  <li><a href="#">산업 부문 전력 소비량</a></li>
                  <li><a href="#">지역 제조업 탄소생산성</a></li>
                  <li><a href="#">에너지다소비사업장 에너지 소비량</a></li>
                  <li><a href="#">제조업・건설업 온실가스 배출량</a></li>
                  <li><a href="#">산업 부문 전력 소비량 증가율</a></li>
                </ul>
              </div>

              {/* 내부 탭 - 흡수원 */}
              <div className="inner_tabs" aria-label="탭 영역 - 흡수원" data-section="흡수원" hidden>
                <ul>
                  <li className="is-active"><a href="#">1인당 도시공원 면적</a></li>
                  <li><a href="#">불투수 면적 비율</a></li>
                  <li><a href="#">1인당 생활권 도시림 면적</a></li>
                  <li><a href="#">가로수 증가율</a></li>
                  <li><a href="#">녹지율</a></li>
                  <li><a href="#">산림 면적 비율</a></li>
                  <li><a href="#">평균 임목축적</a></li>
                  <li><a href="#">시설녹지 온실가스 흡수량</a></li>
                </ul>
              </div>

              {/* 컨텐츠 영역 타이틀 및 패널 자리 */}
              <h2 className="cont_title">재생에너지 비중</h2>
              <div id="content_01" className="tab_content is-active" aria-label="전환 부문 탭 영역" role="tabpanel">
                {/* 전환 컨텐츠 영역 (작성 예정) */}
              </div>
              <div id="content_02" className="tab_content" aria-label="건물 부문 탭 영역" role="tabpanel" hidden>
                {/* 건물 컨텐츠 영역 (작성 예정) */}
              </div>
              <div id="content_03" className="tab_content" aria-label="수송 부문 탭 영역" role="tabpanel" hidden>
                {/* 수송 컨텐츠 영역 (작성 예정) */}
              </div>
              <div id="content_04" className="tab_content" aria-label="농·축산 부문 탭 영역" role="tabpanel" hidden>
                {/* 농·축산 컨텐츠 영역 (작성 예정) */}
              </div>
              <div id="content_05" className="tab_content" aria-label="폐기물 부문 탭 영역" role="tabpanel" hidden>
                {/* 폐기물 컨텐츠 영역 (작성 예정) */}
              </div>
              <div id="content_06" className="tab_content" aria-label="산업 부문 탭 영역" role="tabpanel" hidden>
                {/* 산업 컨텐츠 영역 (작성 예정) */}
              </div>
              <div id="content_07" className="tab_content" aria-label="흡수원 부문 탭 영역" role="tabpanel" hidden>
                {/* 흡수원 컨텐츠 영역 (작성 예정) */}
              </div>
            </div>
        </div>
    </div>
    </main>
  );
}

