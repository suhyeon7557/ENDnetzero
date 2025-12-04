"use client";

export default function DirectionPage() {
  return (
    <main role="main" aria-label="찾아오시는 길">
      <div id="Content" className="Direction">
        <div id="nav_wrap" aria-label="내비게이션 영역">
          <div id="nav_inner">
            <div className="visual" aria-label="서브 비주얼 영역">
              <div className="visual_inner">
                <nav className="breadcrumb" aria-label="경로">
                  <ol>
                    <li><a href="/"><img src="/images/ic_home_white.svg" alt="홈" /></a></li>
                    <li aria-hidden="true">›</li>
                    <li>소통하기</li>
                  </ol>
                </nav>
                <div className="sub_title_wrap">
                  <h1 className="sub_title">탄소중립지원센터</h1>
                </div>
                <ul className="sub_tabs" role="tablist" aria-label="서브 탭 메뉴 영역">
                  <li><a href="#" role="tab">비전과 전략</a></li>
                  <li><a href="#" role="tab">센터 인력</a></li>
                  <li><a href="#" role="tab">운영 성과</a></li>
                  <li className="is-active"><a href="#" role="tab" aria-selected="true">오시는 길</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="content_wrap" aria-label="콘텐츠 영역">
          <div id="cont_inner">
            <h2 className="cont_title">찾아오시는 길</h2>
            
            <div className="direction_wrap">
              {/* 지도 이미지 영역 */}
              <div className="map_area">
                <img src="/images/image_map.png" alt="광주기후에너지진흥원 위치 지도" />
              </div>

              {/* 정보 영역 */}
              <div className="info_area">
                <div className="info_header">
                  <h3 className="info_title">광주기후에너지진흥원</h3>
                  <p className="info_subtitle">Gwangju Climate & Energy Agency</p>
                </div>

                <ul className="info_list">
                  {/* 주소 */}
                  <li className="info_item">
                    <div className="info_icon">
                      <img src="/images/ic_map_black.svg" alt="주소" />
                    </div>
                    <div className="info_content">
                      <p className="info_ko">광주 서구 천변우하로 181 (유촌동 719-2)</p>
                      <p className="info_en">Gwangju Climate and Energy Agency(GCEA), 181 Chunbyunwoogaro, Seo-gu, Gwangju, 61954</p>
                    </div>
                  </li>

                  {/* 전화 */}
                  <li className="info_item">
                    <div className="info_icon">
                      <img src="/images/ic_call_black.svg" alt="전화" />
                    </div>
                    <div className="info_content">
                      <p className="info_ko">062-601-1311 , 1312</p>
                    </div>
                  </li>

                  {/* 팩스 */}
                  <li className="info_item">
                    <div className="info_icon">
                      <img src="/images/ic_fax_black.svg" alt="팩스" />
                    </div>
                    <div className="info_content">
                      <p className="info_ko">062-601-1313</p>
                    </div>
                  </li>

                  {/* 오시는 길 안내 */}
                  <li className="info_item info_route">
                    <div className="info_icon">
                      <img src="/images/ic_car_black.svg" alt="오시는 길" />
                    </div>
                    <div className="info_content">
                      <p className="info_ko">내방로를 따라 우덕교차로를 진입하여 좌회전 &gt; 우덕1교차로에서 '광주환경공단 방면 (무진로 옆길)'으로 우측방향 &gt; 길을 따라 자회전하여 직진 &gt; 길 끝에서 좌회전하여 천변우하로를 따라 이동 후 도착</p>
                    </div>
                  </li>
                </ul>

                {/* 길찾기 버튼 */}
                <a 
                  href="https://map.kakao.com/?q=광주기후에너지진흥원" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn_direction"
                >
                  <img src="/images/ic_location_white.svg" alt="" />
                  길찾기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

