export default function SearchPage() {
  return (
    <main role="main" aria-label="통합검색 페이지">
      <div id="Content" className="SearchPage">
        {/* subpage와 동일한 비주얼 영역 구조 */}
        <div id="nav_wrap" aria-label="내비게이션 영역">
          <div id="nav_inner">
            <div className="visual" aria-label="서브 비주얼 영역">
              <div className="visual_inner">
                <nav className="breadcrumb" aria-label="경로">
                  <ol>
                    <li><a href="/"><img src="/images/ic_home_white.svg" alt="홈" /></a></li>
                    <li aria-hidden="true">›</li>
                    <li>이용안내</li>
                  </ol>
                </nav>
                <div className="sub_title_wrap">
                  <h1 className="sub_title">통합검색</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="content_wrap" aria-label="콘텐츠 영역">
          <div id="cont_inner">
            {/* 검색창 (비주얼 아래 컨텐츠 영역) */}
            <form className="sr-searchbar" role="search" aria-label="통합 검색">
					<label htmlFor="q" className="visually-hidden">검색어 입력</label>
					<div className="sr-search_inputwrap">
						<input id="q" name="q" type="text" placeholder="검색어를 입력해주세요" />
						<button type="submit" className="sr-searchbtn" aria-label="검색">
							<img src="/images/ic_search_blue.svg" alt="" aria-hidden="true" />
						</button>
					</div>
            </form>

            {/* 결과 요약 */}
            <section className="sr-summary" aria-label="검색 요약">
                <p className="sr-summary_text">
                    검색어 <span className="sr-query">'<span className="sr-keyword">탄소중립</span>'</span> 에 대한 <span className="point sr-count">225</span>개의 검색결과입니다.
                </p>
                <ul className="sr-tabs" role="tablist" aria-label="검색 범주">
                    <li className="is-active"><a href="#" role="tab" aria-selected={true}>전체 검색</a></li>
                    <li><a href="#" role="tab">페이지 검색</a></li>
                    <li><a href="#" role="tab">게시물 검색</a></li>
                </ul>
            </section>

             {/* 페이지 검색 */}
            <section className="sr-section" aria-labelledby="sec-pages">
            <div className="sr-section_head">
                <h2 id="sec-pages">
                  페이지 검색
                  <span className="sr-count" aria-label="2개 결과">(127)</span>
                </h2>
                <a href="#" className="sr-more" aria-label="페이지 검색 더보기">검색결과 더보기 ›</a>
            </div>
            <ul className="sr-list">
                <li>
                    <a href="#">
                        <p className="sr-item_desc">
                        개인정보 처리방침 본 개인정보 처리방침은 2023년 12월 01일부터 시행됩니다. 광주 기후에너지진흥원은 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관련 법령이 정한 바를 준수하여,
                        적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에, 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하고 있습니다.
                        </p>
                        <nav className="sr-item_meta" aria-label="브래드크럼">
                        <ol className="breadcrumb">
                            <li><a href="/"><img src="/images/ic_home_black.svg" alt="홈" /></a></li>
                            <li aria-hidden="true">›</li>
                            <li><a href="/guide" tabIndex={-1}>이용안내</a></li>
                            <li aria-hidden="true">›</li>
                            <li><a href="/source/basic-info" tabIndex={-1}>개인정보처리방침</a></li>
                        </ol>
                        </nav>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p className="sr-item_desc">
                        우리나라의 2018년 온실가스 총배출량(LULUCF 제외)은 1990년도에 비해 149.0% 증가했고 2017년도보다는 2.5% 증가했습니다.1990년대는 경제성장에 따라 온실가스 배출량도 크게 늘었
                        고 1998년 외환위기의 영향으로 온실가스 총배출량은 14.1% 감소한 이후로 2000년대는 경기가 회복되면서 온실가스 배출량이 꾸준히 증가했습니다. <em className="hl">탄소중립</em>은 이렇게 인간활동에 의해 배출된 온실가스 총배출량을 줄이는 것을 목표로 하는 정책입니다.
                        </p>
                        <nav className="sr-item_meta" aria-label="브래드크럼">
                        <ol className="breadcrumb">
                            <li><a href="/"><img src="/images/ic_home_black.svg" alt="홈" /></a></li>
                            <li aria-hidden="true">›</li>
                            <li><a href="/guide" tabIndex={-1}>탄소중립</a></li>
                            <li aria-hidden="true">›</li>
                            <li><a href="/source/policy" tabIndex={-1}>탄소중립</a></li>
                        </ol>
                        </nav>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p className="sr-item_desc">
                        우리나라의 2018년 온실가스 총배출량(LULUCF 제외)은 1990년도에 비해 149.0% 증가했고 2017년도보다는 2.5% 증가했습니다.1990년대는 경제성장에 따라 온실가스 배출량도 크게 늘었
                        고 1998년 외환위기의 영향으로 온실가스 총배출량은 14.1% 감소한 이후로 2000년대는 경기가 회복되면서 온실가스 배출량이 꾸준히 증가했습니다. <em className="hl">탄소중립</em>은 이렇게 인간활동에 의해 배출된 온실가스 총배출량을 줄이는 것을 목표로 하는 정책입니다.
                        </p>
                        <nav className="sr-item_meta" aria-label="브래드크럼">
                        <ol className="breadcrumb">
                            <li><a href="/"><img src="/images/ic_home_black.svg" alt="홈" /></a></li>
                            <li aria-hidden="true">›</li>
                            <li><a href="/guide" tabIndex={-1}>탄소중립</a></li>
                            <li aria-hidden="true">›</li>
                            <li><a href="/source/policy" tabIndex={-1}>탄소중립</a></li>
                        </ol>
                        </nav>
                    </a>
                </li>
            </ul>
            </section>

            {/* 게시물 검색 */}
            <section className="sr-section" aria-labelledby="sec-posts">
            <div className="sr-section_head">
                <h2 id="sec-posts">게시물 검색(86)</h2>
                <a href="#" className="sr-more" aria-label="게시물 검색 더보기">검색결과 더보기 ›</a>
            </div>
            <ul className="sr-list sr-list--posts">
                <li>
                <a href="#">
                    <h3 className="sr-item_title">중소·중견기업 <em className="hl">탄소중립</em> 이해·자기진단시범 설명회 개최</h3>
                    <nav className="sr-item_meta" aria-label="브래드크럼">
                      <ol className="breadcrumb">
                        <li><a href="/"><img src="/images/ic_home_black.svg" alt="홈" /></a></li>
                        <li aria-hidden="true">›</li>
                        <li><a href="#" tabIndex={-1}>소통하기</a></li>
                        <li aria-hidden="true">›</li>
                        <li><a href="#" tabIndex={-1}>공지사항</a></li>
                      </ol>
                    </nav>
                </a>
                </li>
                <li>
                <a href="#">
                    <h3 className="sr-item_title">광주2030 <em className="hl">탄소중립</em> 실천단 참여단체 모집</h3>
                    <nav className="sr-item_meta" aria-label="브래드크럼">
                      <ol className="breadcrumb">
                        <li><a href="/"><img src="/images/ic_home_black.svg" alt="홈" /></a></li>
                        <li aria-hidden="true">›</li>
                        <li><a href="#" tabIndex={-1}>시민실천</a></li>
                        <li aria-hidden="true">›</li>
                        <li><a href="#" tabIndex={-1}>참여모집</a></li>
                      </ol>
                    </nav>
                </a>
                </li>
                <li>
                <a href="#">
                    <h3 className="sr-item_title">데이터 공모전: 광주형 <em className="hl">탄소중립</em> 도시 정보 기반 세미나 개최(12/4)</h3>
                    <nav className="sr-item_meta" aria-label="브래드크럼">
                      <ol className="breadcrumb">
                        <li><a href="/"><img src="/images/ic_home_black.svg" alt="홈" /></a></li>
                        <li aria-hidden="true">›</li>
                        <li><a href="#" tabIndex={-1}>정책자료</a></li>
                        <li aria-hidden="true">›</li>
                        <li><a href="#" tabIndex={-1}>공지/행사</a></li>
                      </ol>
                    </nav>
                </a>
                </li>
            </ul>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}


