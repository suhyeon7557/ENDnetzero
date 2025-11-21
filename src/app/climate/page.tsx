"use client";

export default function ClimatePage() {
  return (
    <main role="main" aria-label="기후변화">
      <div id="Content" className="Climate">
        <div id="nav_wrap" aria-label="내비게이션 영역">
          <div id="nav_inner">
            <div className="visual" aria-label="서브 비주얼 영역">
              <div className="visual_inner">
                <nav className="breadcrumb" aria-label="경로">
                  <ol>
                    <li><a href="/"><img src="/images/ic_home_white.svg" alt="홈" /></a></li>
                    <li aria-hidden="true">›</li>
                    <li>기후변화</li>
                  </ol>
                </nav>
                <div className="sub_title_wrap">
                  <h1 className="sub_title">기후변화</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="content_wrap" aria-label="콘텐츠 영역">
          <div id="cont_inner">

            {/* 섹션 1: 정의 */}
            <div className="section">
            <h2 className="cont_title">기후변화의 정의</h2>
              <div className="desc_group">
                <ul className="desc_list">
                  <li className="section_head">    
                       <span className="dot" aria-hidden="true" />
                       기후변화란 수십년 이상 장기간에 걸쳐 평균 기온, 강수, 바람 등 기후의 패턴이 변하는 현상으로 자연적인 변동뿐 아니라 인간 활동이 직접적 원인이 되는 변화까지 포함된다.
                  </li> 
                  <li> · IPCC : 수십 년 이상 지속되는 기후 평균 또는 변동의 변화, 자연적·인위적 요인 모두 포함</li>
                  <li> · UNFCCC : 인간 활동이 대기 조성에 변화를 일으켜 발생하는 장기적 기후 변화</li>
                </ul>
              </div>
              <div className="ozone_note_group">
                <figure className="ozone_fig">
                  <img src="/images/image_ozone.svg" alt="오존층과 지구 기후 관련 인포그래픽" />
                  <figcaption className="visually-hidden">오존층과 기후 관련 설명 이미지</figcaption>
                </figure>
                <div className="note_list">
                  <p className="note">이 그림은 인간 활동으로 인해 <span>오존층이 파괴되고 온실가스가 증가</span>하는 과정을 보여줍니다.</p>
                  <p className="note">태양에서 오는 빛은 일부가 지구에 흡수되고 일부는 우주로 빠져나가야 하지만 <span>공장, 차량, 화석연료 </span>사용등에서 배출되는 온실가스가 이 열을 가두어 지구온난화를 일으킵니다.</p>
                  <br />
                  <p className="note">또한 <span>스프레이나 냉장기기에서 발생하는 CFCs(프레온가스)</span>는 <span>오존층을 직접 파괴</span>하여 유해한 자외선이 더 많이 지표로 도달하게 만듭니다.</p>
                  <p className="note"><span>삼림파괴</span>는 <span>이산화탄소 흡수원을 줄여</span> 기후변화를 더욱 악화시킵니다.</p>
                  <br />
                  <p className="note">이 그림은 이러한 요소들이 서로 연결되어 지구 환경에 복합적인 영향을 미친다는 점을 시각적으로 보여줍니다.</p>
                </div>
              </div>
            </div>

            {/* 섹션 2: 주요 현상 */}
            <div className="section">
              <div className="section_head">
                <h2 className="cont_title">기후변화의 주요 현상</h2>
              </div>

              <div className="card_grid">
                {/* 카드 1 */}
                <div className="card">
                  <h3 className="card_head">지구 평균 기온 상승 (지구 온난화)</h3>
                  <div className="card_body">
                    <div className="thumb">
                      <img src="/images/image_ozone01.svg" alt="" />
                    </div>
                    <ul className="bullets">
                      <li>· 산업화 이후 전 세계 평균기온이 지속적으로 상승</li>
                      <li>· 최근 수십년간 속도가 가속화됨</li>
                    </ul>
                  </div>
                </div>

                {/* 카드 2 */}
                <div className="card">
                  <h3 className="card_head">극단적 기상현상 빈도 증가</h3>
                  <div className="card_body">
                    <div className="thumb">
                      <img src="/images/image_ozone02.svg" alt="" />
                    </div>
                    <ul className="bullets">
                      <li>· 폭염, 집중호우, 태풍, 가뭄이 더 자주, 더 강하게 발생</li>
                      <li>· 지역별 격차로 기온·강수의 불균형 심화</li>
                    </ul>
                  </div>
                </div>

                {/* 카드 3 */}
                <div className="card">
                  <h3 className="card_head">빙하·해빙 감소와 해수면 상승</h3>
                  <div className="card_body">
                    <div className="thumb">
                      <img src="/images/image_ozone03.svg" alt="" />
                    </div>
                    <ul className="bullets">
                      <li>· 북극 해빙 및 빙하 감소로 인한 해수면 상승</li>
                      <li>· 해안 저지대 국가와 도시가 홍수 위험에 직면</li>
                    </ul>
                  </div>
                </div>

                {/* 카드 4 */}
                <div className="card">
                  <h3 className="card_head">생태계 변화</h3>
                  <div className="card_body">
                    <div className="thumb">
                      <img src="/images/image_ozone04.svg" alt="" />
                    </div>
                    <ul className="bullets">
                      <li>· 서식지 이동, 멸종위기종 증가</li>
                      <li>· 농업 작물 수확 시기 변화, 병충해 확산</li>
                    </ul>
                  </div>
                </div>
                {/* 와이드 카드 (그리드 내부) */}
                <div className="card card-wide">
                  <h3 className="card_head">사회 경제적 변화</h3>
                  <div className="card_body">
                    <div className="thumb">
                      <img src="/images/image_ozone05.svg" alt="" />
                    </div>
                    <ul className="bullets">
                      <li>· 농업, 어업, 산업구조의 변화 및 기후재난 대응 비용 급증</li>
                      <li>· 국제협력 강화, IPCC 권고와 UNFCCC 협약 등 국제적으로 강화된 탄소중립 정책이 주요 전환으로 추진</li>
                      <li>· 극심한 기후변화로 인한 온열질환자 증가 및 전염병 확산 가능성 증가</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


