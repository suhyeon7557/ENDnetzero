"use client";

import { useEffect } from "react";

export default function HistoryPage() {
  useEffect(() => {
    const overlay = document.getElementById("popup_overlay");
    const body = document.getElementById("history_popup_body");
    const title = document.getElementById("popup_title");
    const openers = Array.from(document.querySelectorAll<HTMLButtonElement>(".open-popup"));
    const closeBtn = overlay?.querySelector(".popup_close") as HTMLButtonElement | null;

    const open = (tplId: string) => {
      if (!overlay || !body) return;
      const tpl = document.getElementById(tplId);
      body.innerHTML = tpl ? tpl.innerHTML : "<p>내용이 없습니다.</p>";
      // 팝업 제목: 템플릿 안의 첫 번째 제목(h1~h6) 또는 버튼의 data-title
      let popupTitle = "상세";
      if (tpl) {
        const heading = tpl.querySelector("h1, h2, h3, h4, h5, h6");
        if (heading?.textContent) popupTitle = heading.textContent;
      }
      if (title) title.textContent = popupTitle;
      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
    };
    const close = () => {
      if (!overlay || !body) return;
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      body.innerHTML = "";
    };

    openers.forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-popup") || "";
        open(id);
      });
    });
    overlay?.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
    closeBtn?.addEventListener("click", close);
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onEsc);

    return () => {
      openers.forEach(btn => btn.replaceWith(btn.cloneNode(true)));
      overlay?.removeEventListener("click", (e) => { if (e.target === overlay) close(); });
      closeBtn?.removeEventListener("click", close);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // 서브 탭 활성화/패널 전환
  useEffect(() => {
    const tabLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".sub_tabs a[role='tab']"));
    const panels = Array.from(document.querySelectorAll<HTMLElement>(".tab_content"));
    const titleEl = document.querySelector<HTMLElement>("#cont_inner .cont_title");

    const onTabClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const panelId = target.getAttribute("href") || "";
      // 탭 활성화 토글
      document.querySelectorAll(".sub_tabs li").forEach(li => li.classList.remove("is-active"));
      target.parentElement?.classList.add("is-active");
      // 패널 전환
      panels.forEach(p => {
        p.setAttribute("hidden", "");
        p.classList.remove("is-active");
      });
      const active = document.querySelector<HTMLElement>(panelId);
      active?.removeAttribute("hidden");
      active?.classList.add("is-active");
      // 타이틀 변경
      if (titleEl) titleEl.textContent = target.textContent || titleEl.textContent || "";
    };

    tabLinks.forEach(a => a.addEventListener("click", onTabClick));
    return () => tabLinks.forEach(a => a.removeEventListener("click", onTabClick));
  }, []);
  return (
    <main role="main" aria-label="탄소중립 히스토리">
      <div id="Content" className="History">
        <div id="nav_wrap" aria-label="내비게이션 영역">
          <div id="nav_inner">
            <div className="visual" aria-label="서브 비주얼 영역">
              <div className="visual_inner">
                <nav className="breadcrumb" aria-label="경로">
                  <ol>
                    <li><a href="/"><img src="/images/ic_home_white.svg" alt="홈" /></a></li>
                    <li aria-hidden="true">›</li>
                    <li>광주의 탄소중립</li>
                  </ol>
                </nav>
                <div className="sub_title_wrap">
                  <h1 className="sub_title">탄소중립 히스토리</h1>
                </div>
                <ul className="sub_tabs" role="tablist" aria-label="서브 탭 메뉴 영역">
                  <li className="is-active"><a id="tab-global" href="#panel-global" role="tab" aria-selected="true" aria-controls="panel-global">국제사회</a></li>
                  <li><a id="tab-korea" href="#panel-korea" role="tab" aria-controls="panel-korea">우리나라</a></li>
                  <li><a id="tab-gwangju" href="#panel-gwangju" role="tab" aria-controls="panel-gwangju">광주광역시</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="content_wrap" aria-label="콘텐츠 영역">
          <div id="cont_inner">
          <h2 className="cont_title">국제사회</h2>
            {/* 탭 패널: 국제사회 */}
            <div id="panel-global" className="tab_content is-active" role="tabpanel" aria-labelledby="tab-global">
            <section className="history_wrap" aria-label="국제사회 히스토리 타임라인">
              <h2 className="visually-hidden">국제사회</h2>
              <div className="timeline" aria-hidden="true" />

              {/* 1980 */}
              <article className="event e1980" aria-label="1980">
                <h3 className="year">Since <span className="year_num">1980</span></h3>
                <ul className="bullets">
                  <li>· 인간이 배출한 온실가스에 따른<br/> 지구온난화 인식 확산</li>
                </ul>
              </article>

              {/* 1988 */}
              <article className="event e1988" aria-label="1988">
                <h3 className="year"><span className="year_num">1988</span></h3>
                <ul className="bullets">
                  <li>· UN 환경계획 및 기후변화정부간협의체(IPCC) 설립</li>
                </ul>
              </article>

              {/* 1992 */}
              <article className="event e1992" aria-label="1992">
                <h3 className="year"><span className="year_num">1992</span></h3>
                <ul className="bullets">
                  <li>· 브라질 리우<span className="txt_blue"> UN 기후변화협약(UNFCCC) 채택</span>
                    <button type="button" className="btn_more open-popup" data-popup="p1992"></button>
                  </li>
                </ul>
              </article>

              {/* 1995 */}
              <article className="event e1995" aria-label="1995">
                <h3 className="year"><span className="year_num">1995</span></h3>
                <ul className="bullets">
                  <li>· 매년 협약 당사국 총회(COP) 개회, 기후변화 완화 및 적응 등 국제 논의 주도</li>
                </ul>
              </article>

              {/* 1997 */}
              <article className="event e1997" aria-label="1997">
                <h3 className="year"><span className="year_num">1997</span></h3>
                <ul className="bullets">
                  <li>· <span className="txt_blue">교토의정서 채택</span>, 주요 선진국 대상
                    <button type="button" className="btn_more open-popup" data-popup="p1997"></button>
                  </li>
                  <li>· 온실가스 감축 목표 부여, 1차 감축 목표 설정</li>
                </ul>
              </article>

              {/* 2007 */}
              <article className="event e2007" aria-label="2007">
                <h3 className="year"><span className="year_num">2007</span></h3>
                <ul className="bullets">
                  <li>· 발리행동계획 채택<br /> 선진국과 개발도상국이 함께 온실가스 감축 추진 합의</li>
                </ul>
              </article>

              {/* 2009~2014 */}
              <article className="event e2009" aria-label="2009~2014">
                <h3 className="year"><span className="year_num">2009~2014</span></h3>
                <ul className="bullets">
                  <li>· 기후변화협약 당사국 총회 등 국제사회 합의를 위한 초석 다짐<br />
                        (칸쿤, 더반플랫폼, 도사, 바르샤바, 라마 등)
                  </li>
                </ul>
              </article>

              {/* 2015 */}
              <article className="event e2015" aria-label="2015">
                <h3 className="year"><span className="year_num">2015</span></h3>
                <ul className="bullets">
                  <li>· <span className="txt_blue">파리협정 채택</span>, 지구 온도 2℃ 상승 이하로 억제하고
                    <button type="button" className="btn_more open-popup" data-popup="p2015"></button>
                    <br />
                    1.5℃ 상승 이내로 유지하도록 노력, 당사국 대상 상향식 감축 목표 설정
                  </li>
                </ul>
              </article>

              {/* 2018 */}
              <article className="event e2018" aria-label="2018">
                <h3 className="year"><span className="year_num">2018</span></h3>
                <ul className="bullets">
                  <li>· IPCC 1.5℃ 특별보고서 채택<button type="button" className="btn_more open-popup" data-popup="p2018"></button>< br />
                  지속가능한 지구를 위한 기온 상승 1.5℃ 제한 설정</li>
                </ul>
              </article>

              {/* 2020 */}
              <article className="event e2020" aria-label="2020">
                <h3 className="year"><span className="year_num">2020</span></h3>
                <ul className="bullets">
                  <li>· 우리나라 포함, 2050 탄소중립 선언 국가 증가</li>
                </ul>
              </article>

              {/* 2021~2024 */}
              <article className="event e2021" aria-label="2021~2014">
                <h3 className="year"><span className="year_num">2021~2014</span></h3>
                <ul className="bullets">
                  <li>· IPCC 6차 평가보고서 채택(소그룹 I, II, III 종합보고서)<br/>
                        글로벌 메탄서약 추진 및 기후위기상황 점검( COP26 개회 )
                  </li>
                </ul>
              </article>
            </section>
            </div>

            {/* 탭 패널: 우리나라 */}
            <div id="panel-korea" className="tab_content" role="tabpanel" aria-labelledby="tab-korea" hidden>
              <section className="history_wrap" aria-label="우리나라 히스토리 타임라인">
                <div className="timeline" aria-hidden="true" />

                <article className="event k2009" aria-label="2009">
                  <h3 className="year">Since <span className="year_num">2009</span></h3>
                  <ul className="bullets">
                    <li>· 2020년 온실가스 배출전망 대비 30% 감축 목표 제시</li>
                  </ul>
                </article>

                <article className="event k2010" aria-label="2010">
                  <h3 className="year"> <span className="year_num">2010</span></h3>
                  <ul className="bullets">
                    <li>· 제1차 국가 기후변화 적응대책 수립</li>
                  </ul>
                </article>

                <article className="event k2011" aria-label="2011">
                  <h3 className="year"> <span className="year_num">2011</span></h3>
                  <ul className="bullets">
                    <li>· 저탄소녹색성장기본법 제정</li>
                  </ul>
                </article>

                <article className="event k2012" aria-label="2012">
                  <h3 className="year"> <span className="year_num">2012</span></h3>
                  <ul className="bullets">
                    <li>· 온실가스에너지 목표관리제 실시</li>
                  </ul>
                </article>

                <article className="event k2014" aria-label="2014">
                  <h3 className="year"> <span className="year_num">2014</span></h3>
                  <ul className="bullets">
                    <li>· 온실가스 감축 로드맵 수립</li>
                  </ul>
                </article>

                <article className="event k2015" aria-label="2015">
                  <h3 className="year"> <span className="year_num">2015</span></h3>
                  <ul className="bullets">
                    <li>· 제2차 국가 기후변화 적응대책 수립</li>
                    <li>· 2030 국가 온실가스 배출전망(BAU) 대비 37% 감축 목표 제시, 배출권거래제 실시</li>
                    <li>· 국가결정기여(NDC)제출</li>
                  </ul>
                </article>

                <article className="event k2016" aria-label="2016">
                  <h3 className="year"> <span className="year_num">2016</span></h3>
                  <ul className="bullets">
                    <li>· 제1차 국가 기후변화대응 기본계획 수립</li>
                    <li>· 2030 국가 온실가스감축 기본로드맵 수립</li>
                    <li>· 파리협정 국내 비준 절차 완료, UN 비준서 발효</li>
                  </ul>
                </article>

                <article className="event k2018" aria-label="2018">
                  <h3 className="year"> <span className="year_num">2018</span></h3>
                  <ul className="bullets">
                    <li>· 2030 국가 온실가스감축 기본로드맵 수정안 마련</li>
                  </ul>
                </article>
                <article className="event k2019" aria-label="2019">
                  <h3 className="year"> <span className="year_num">2019</span></h3>
                  <ul className="bullets">
                    <li>· 제2차 국가 기후변화대응 기본계획 수립</li>
                  </ul>
                </article>
                <article className="event k2020" aria-label="2020">
                  <h3 className="year"> <span className="year_num">2020</span></h3>
                  <ul className="bullets">
                    <li>· 제3차 국가 기후변화 적응대책 수립</li>
                    <li>· 2017년 대비 24.4% 감축하는 목표를 포함한 2030 NDC 갱신안 제출</li>
                  </ul>
                </article>

                <article className="event k2021" aria-label="2021">
                  <h3 className="year"> <span className="year_num">2021</span></h3>
                  <ul className="bullets">
                    <li>· 기후위기 대응을 위한 탄소중립 녹색성장 기본법 제정</li>
                    <li>· 2030년까지 2018년 대비 40% 감축하는 NDC 상향안 발표(COP26)</li>
                  </ul>
                </article>

                <article className="event k2023" aria-label="2023">
                  <h3 className="year"> <span className="year_num">2023</span></h3>
                  <ul className="bullets">
                    <li>· 제1차 국가 탄소중립·녹색성장 기본계획 수립 </li>
                    <li>· 제3.5차 국가 기후위기 적응 강화대책 수립</li>
                  </ul>
                </article>

                <article className="event k2025" aria-label="2025">
                  <h3 className="year"> <span className="year_num">2025</span></h3>
                  <ul className="bullets">
                    <li>· 제4차 국가 기후위기 적응 강화대책 수립</li>
                  </ul>
                </article>
              </section>
            </div>
            {/* 탭 패널: 광주광역시 (추후 컨텐츠) */}
            <div id="panel-gwangju" className="tab_content" role="tabpanel" aria-labelledby="tab-gwangju" hidden>
              <section className="history_wrap" aria-label="광주광역시 히스토리 타임라인">
                <div className="timeline" aria-hidden="true" />
                <article className="event g2010" aria-label="2010">
                  <h3 className="year"> <span className="year_num">Since 2010</span></h3>
                  <ul className="bullets">
                    <li>· 저탄소 녹색아파트 조성사업</li>
                  </ul>
                </article>

                <article className="event g2012" aria-label="2012">
                  <h3 className="year"> <span className="year_num">2021</span></h3>
                  <ul className="bullets">
                    <li>· 제1차 광주광역시 기후변화 적응대책 수립</li>
                  </ul>
                </article>

                <article className="event g2015" aria-label="2015">
                  <h3 className="year"> <span className="year_num">2015</span></h3>
                  <ul className="bullets">
                    <li>· 공동주택 햇빛발전소 보급지원, 신재생에너지 주택지원사업,<br/>
                        탄소중립포인트제 시행(~현재)
                    </li>
                  </ul>
                </article>

                <article className="event g2016" aria-label="2016">
                  <h3 className="year"> <span className="year_num">2016</span></h3>
                  <ul className="bullets">
                    <li>· 광주광역시 기후변화 대응 조례 제정</li>
                    <li>· 제2차 광주광역시 기후변화 적응대책 수립</li>
                  </ul>
                </article>

                <article className="event g2017" aria-label="2017">
                  <h3 className="year"> <span className="year_num">2017</span></h3>
                  <ul className="bullets">
                    <li>· 광주온도 1℃ 낮추기 프로젝트</li>
                  </ul>
                </article>
                <article className="event g2018" aria-label="2018">
                  <h3 className="year"> <span className="year_num">2018</span></h3>
                  <ul className="bullets">
                    <li>· 2030 광주광역시 온실가스 감축로드맵 수립</li>
                  </ul>
                </article>
                <article className="event g2020" aria-label="2020">
                  <h3 className="year"> <span className="year_num">2020</span></h3>
                  <ul className="bullets">
                    <li>· 광주광역시 신·재생에너지 보급 촉진 지원 조례 재정 </li>
                  </ul>
                </article>

                <article className="event g2021" aria-label="2021">
                  <h3 className="year"> <span className="year_num">2021</span></h3>
                  <ul className="bullets">
                    <li>· 제3차 광주광역시 기후위기 적응대책 수립 </li> 
                  </ul>
                </article>

                <article className="event g2022" aria-label="2024">
                  <h3 className="year"> <span className="year_num">2022</span></h3>
                  <ul className="bullets">
                    <li>· 광주광역시 기후변화대응 기본계획 수립</li>
                    <li>· 출자·출연기관 온실가스 목표관리제 추진(~현재)</li>
                    <li>· 광주광역시 탄소중립지원센터 지정 및 운영(~현재)</li>
                  </ul>
                </article>

                <article className="event g2024" aria-label="2024">
                  <h3 className="year"> <span className="year_num">2024</span></h3>
                  <ul className="bullets">
                    <li>· 광주광역시 기후위기 대응 기본 조례 제정</li>
                    <li>· 광주광역시 온실가스감축인지 예산제 운영 조례 제정</li>
                    <li>· 제1차 광주광역시 탄소중립·녹색성장 기본계획 수립 </li>
                    <li>· 기업탄소액션 추진(~현재) </li>
                  </ul>
                </article>
              </section>
            </div>
          </div>
        </div>
      </div>


      {/* 히스토리 팝업 오버레이 (공통 디자인 재사용) */}
      <div id="popup_overlay" aria-hidden="true">
        <div className="popup_modal" role="dialog" aria-modal="true" aria-labelledby="popup_title">
          <div className="popup_header">
            <strong id="popup_title">상세</strong>
            <button type="button" className="popup_close" aria-label="닫기">×</button>
          </div>
          <div className="popup_body">
            <div id="history_popup_body"></div>
          </div>
        </div>
      </div>

      {/* 컨텐츠 템플릿(공통 팝업 디자인 구조: popup_desc + popup_list) */}
      <div className="visually-hidden" aria-hidden="true">
        <div id="p1992">
          <h4 style={{ display: 'none' }}>UN 기후변화협약(UNFCCC) 채택</h4>
          <p className="popup_desc">UN환경개발회의 개최(1992년 6월, 브라질 리우데자네이루)</p>
          <ul className="popup_list">
            <li>UN기후변화협약(UNFCCC, United Nations Conference on Environment &amp; Development) 채택</li>
            <li>선진국과 개도국이 ‘공동의 그러나 차별화된 책임’에 따라 각자의 능력에 맞게 온실가스 감축을 약속</li>
            <li>협약 최고의 의사결정기구는 당사국총회(COP)로 이행 및 과학기술적 측면 검토</li>
            <li>2000년까지 온실가스 배출 규모를 1990년 수준으로 안정화 권고(42개국 참여·부속서 국가)</li>
            <li>당시 우리나라는 비부속서 국가로, 감축의무를 부담하지 않는 개도국으로 분류</li>
          </ul>
        </div>
        <div id="p1997">
          <h4 style={{ display: 'none' }}>교토의정서 채택</h4>
          <p className="popup_desc">제3차 UN기후변화협약 당사국총회(COP3, 1997년 12월, 일본 교토)</p>
          <ul className="popup_list">
            <li>UN기후변화협약(UNFCCC) 당사국총회(COP3), 교토의정서 채택(선진국 온실가스 감축 의무 규정)</li>
            <li>부속서1 국가들에게 제1차 공약기간(2008~2012년) 동안 온실가스 배출량을 1990년 수준 대비 평균 5.2% 감축
              의무 부과, 6개의 온실가스 배출원 정의(CO2, CH4, N2O, HFC, PFC, SF6)
            </li>
            <li>교토의정서는 '신축성 매커니즘'으로 불리는 청정개발체제, 배출권거래제, 공동이행제도 도입하여 온실가스를
              비용효과적으로 감축하고 개도국의 지속가능한 발전을 지원 계기 마련함
            </li>
          </ul>
        </div>
        <div id="p2015">
          <h4 style={{ display: 'none' }}>파리협정 채택</h4>
          <p className="popup_desc">UN기후변화협약 당사국총회(COP21, 2015년, 프랑스 파리)</p>
          <ul className="popup_list">
            <li>2020년부터 모든 국가가 온실가스 감축에 참여하는 신기후체제 파리협정 채택</li>
            <li>기존 교토의정서 체제를 넘어 모든 국가가 자국의 상황을 반영한 온실가스 감축하는 보편적인 체제가 마련됨</li>
            <li>지구 평균기온 상승을 산업화 이전 대비 2℃ 보다 낮은 수준으로 유지하고, 1.5℃ 로 제한 목표</li>
            <li>모든 국가가 자발적으로 결정한 온실가스 감축목표를 5년 단위로 제출하고 이행 노력</li>
            <li>2021년 제 26차 당사국총회(COP26, 글래스고) 치열한 협상을 통해 파리협정의 세부이행규칙을 완성함</li>
          </ul>
        </div>
        <div id="p2018">
          <h4 style={{ display: 'none' }}>IPCC 1.5℃ 특별보고서 채택</h4>
          <p className="popup_desc">IPCC 1.5℃ 특별보고서 채택(2018년 10월, 서울)</p>
          <ul className="popup_list">
            <li>2015년 파리협정 채택 시 합의된 1.5℃ 목표의 과학적 근거 마련</li>
            <li>UN기후변화협약(UNFCCC) 당사국 총회가 IPCC에 공식 요청하여 작성</li>
            <li>온실가스 배출량 및 흡수량에 대한 국가통계와 정책이행에 관한 보고서 제출</li>
          </ul>
        </div>
      </div>
    </main>
  );
}


