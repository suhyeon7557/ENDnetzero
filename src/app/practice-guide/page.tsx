'use client';

import '@/layout/practice-guide.scss';

export default function PracticeGuidePage() {
  return (
    <main role="main" aria-label="생활실천안내">
      <div id="Content" className="Subpage PracticeGuide">
        {/* 상단 비주얼 영역 */}
        <div id="nav_wrap" aria-label="내비게이션 영역">
          <div id="nav_inner">
            <div className="visual" aria-label="서브 비주얼 영역">
              <div className="visual_inner">
                <nav className="breadcrumb" aria-label="경로">
                  <ol>
                    <li><a href="/"><img src="/images/ic_home_white.svg" alt="홈" /></a></li>
                    <li aria-hidden="true">›</li>
                    <li>시민실천</li>
                    <li aria-hidden="true">›</li>
                    <li>생활실천안내</li>
                  </ol>
                </nav>
                <div className="sub_title_wrap">
                  <h1 className="sub_title">생활실천안내</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div id="content_wrap" aria-label="콘텐츠 영역">
          <div id="cont_inner">
            <h3 className="cont_title">탄소중립 생활실천 안내서</h3>
            
            {/* 안내서 다운로드 섹션 */}
            <section className="guidebook_section">
              
              <div className="guidebook_wrap">
                <div className="guidebook_images">
                  <div className="guidebook_item">
                    <img src="/images/image_guidebook01.png" alt="가정편 안내서" />
                  </div>
                  <div className="guidebook_item">
                    <img src="/images/image_guidebook02.png" alt="학교편 안내서" />
                  </div>
                  <div className="guidebook_item">
                    <img src="/images/image_guidebook03.png" alt="기업편 안내서" />
                  </div>
                </div>
                
                <div className="download_btns">
                  <a href="#" className="download_btn" download>
                    <img src="/images/ic_download_blue.svg" alt="" />
                    <span>가정편 다운로드</span>
                  </a>
                  <a href="#" className="download_btn" download>
                    <img src="/images/ic_download_blue.svg" alt="" />
                    <span>학교편 다운로드</span>
                  </a>
                  <a href="#" className="download_btn" download>
                    <img src="/images/ic_download_blue.svg" alt="" />
                    <span>기업편 다운로드</span>
                  </a>
                  <a href="#" className="download_btn" download>
                    <img src="/images/ic_download_blue.svg" alt="" />
                    <span>요약 다운로드</span>
                  </a>
                  <a href="#" className="download_btn" download>
                    <img src="/images/ic_download_blue.svg" alt="" />
                    <span>리플렛 다운로드</span>
                  </a>
                </div>
              </div>
            </section>

            {/* 실천 카테고리 아코디언 섹션 */}
            <h3 className="cont_title">5대 분야별 생활실천</h3>
            <section className="practice_section">
              
              <div className="practice_accordion">
                
                {/* 에너지 절약 */}
                <div className="accordion_item">
                  <button type="button" className="accordion_header" aria-expanded="false">
                    <span className="accordion_title">에너지 절약</span>
                    <span className="accordion_icon"></span>
                  </button>
                  <div className="accordion_content">
                    <div className="tab_wrap">
                      <div className="tab_btns">
                        <button type="button" className="tab_btn active">가정</button>
                        <button type="button" className="tab_btn">기업</button>
                        <button type="button" className="tab_btn">학교</button>
                      </div>
                      <div className="tab_content active">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">불필요한 조명기구 소등하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">112,794원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">539,897톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">세탁기 사용 횟수 줄이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">3,874원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">16,930톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">3</span>
                              <span className="text">전기밥솥 보온 시간 줄이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">205,544원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">810,076톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">4</span>
                              <span className="text">전기장판 사용 시간 줄이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">141,250원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">676,111원</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">6</span>
                              <span className="text">텔레비전 시청 시간 줄이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">32,609원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">157,190원</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">7</span>
                              <span className="text">가전제품 대기전력 차단하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">38,124원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">182,472원</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">8</span>
                              <span className="text">비데 절전기능 사용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">18,928원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">13,004원</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">9</span>
                              <span className="text">디지털 탄소발자국 줄이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">10</span>
                              <span className="text">고효율 가전제품 사용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">96,785원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">304,755원</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">11</span>
                              <span className="text">고효율 조리기구 사용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">33,735원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">161,481원</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">12</span>
                              <span className="text">냉장고 에너지 효율 높이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">18,670원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">131,718톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">13</span>
                              <span className="text">절수 설비·기기 설치하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">77,942원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">53,068톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">14</span>
                              <span className="text">난방온도 2°C 낮추고, 냉방온도 2°C 높이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">57,282원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">323,048톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">15</span>
                              <span className="text">친환경 저녹스 보일러 사용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">438,738원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">559,117톤</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="tab_content">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">승강기 격측 운행하고, 계단 이용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">1.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">48,870톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">불필요한 조명기구 소등하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">1.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">2,007톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">3</span>
                              <span className="text">전자기기 대기전력 차단하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">0.40톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">17,420톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">4</span>
                              <span className="text">컴퓨터 절전기능 사용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">0.60톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">23,701톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">5</span>
                              <span className="text">고효율 전자기기 사용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">23.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">33,062톤</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="tab_content">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">빈 교실의 조명은 소등하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">1.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">772톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">전자기기 대기전력 차단하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">1.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">1,247톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">3</span>
                              <span className="text">절수 설비·기기 설치하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">5.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">6,338톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">4</span>
                              <span className="text">난방온도 2°C낮추고, 냉방온도 2°C 높이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">2.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">2,322톤</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 친환경 소비 */}
                <div className="accordion_item">
                  <button type="button" className="accordion_header" aria-expanded="false">
                    <span className="accordion_title">친환경 소비</span>
                    <span className="accordion_icon"></span>
                  </button>
                  <div className="accordion_content">
                    <div className="tab_wrap">
                      <div className="tab_btns">
                        <button type="button" className="tab_btn active">가정</button>
                        <button type="button" className="tab_btn">기업</button>
                        <button type="button" className="tab_btn">학교</button>
                      </div>
                      <div className="tab_content active">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">녹색제품 구매하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">저탄소·친환경 인증 농축수산물 구매하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">3</span>
                              <span className="text">우리나라, 우리지역, 제철 식재료 이용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">682,186톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">4</span>
                              <span className="text">품질이 보증되고 오래 사용 가능한 제품 구매하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">5</span>
                              <span className="text">다회용기에 내용물만 구매하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">4,665톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">6</span>
                              <span className="text">과대포장 제품 안 사기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">7</span>
                              <span className="text">재활용하기 쉬운 재질·구조로 된 제품 구매하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">8</span>
                              <span className="text">새활용, 재활용 제품 구매하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">9</span>
                              <span className="text">국산목재로 만든 제품 구매하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">10</span>
                              <span className="text">중고제품 구매하고, 안 쓰는 제품 나눔하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">11</span>
                              <span className="text">물은 받아서 사용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">25,541원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">17,381톤</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="tab_content">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">기업 내 녹색제품 구매제도 운영하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">저탄소·친환경 식단 운영하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">3</span>
                              <span className="text">탄소발자국을 고려한 소비 촉진하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">4</span>
                              <span className="text">자원순환성을 고려한 제품 전략 수립하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">5</span>
                              <span className="text">국산 목재로 만든 제품 구매하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="tab_content">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">저탄소·친환경 식단 운영하기 </span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">교내에서 텃밭 채소 기르기 </span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">3</span>
                              <span className="text">교복 물려주기 </span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">4</span>
                              <span className="text">국산 목재로 만든 제품 구매하기 </span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">5</span>
                              <span className="text">물 절약하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">0.10톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">158톤</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 친환경 교통 */}
                <div className="accordion_item">
                  <button type="button" className="accordion_header" aria-expanded="false">
                    <span className="accordion_title">친환경 교통</span>
                    <span className="accordion_icon"></span>
                  </button>
                  <div className="accordion_content">
                    <div className="tab_wrap">
                      <div className="tab_btns">
                        <button type="button" className="tab_btn active">가정</button>
                        <button type="button" className="tab_btn">기업</button>
                        <button type="button" className="tab_btn">학교</button>
                      </div>
                      <div className="tab_content active">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">개인용 자동차 대신 대중교통 이용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">178,598원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">518,113톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">가까운 거리는 걷거나 자전거 이용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">108,381원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">314,436톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">3</span>
                              <span className="text">자동차 고유 서비스 이용 시 무공해차 이용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">7,423원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">7,049톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">4</span>
                              <span className="text">무공해차 구매하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">2,600,813톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">5</span>
                              <span className="text">친환경 운전 실천하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">367,492원</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">1,066,109톤</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="tab_content">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">임직원 대상 대중교통, 자전거 이용 활성화하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">4.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">158,879톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">공용차량을 무공해차로 교체하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">2.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">103,757톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">3</span>
                              <span className="text">출퇴근 시 친환경 운전 실천하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">5 .00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">214,142톤</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="tab_content">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">등하교 시 도보 및 대중교통 이용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">19.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value highlight">22,298톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">왕복 3km 정도의 짧은 거리는 도보로 통학하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">14.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">16,953톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">3</span>
                              <span className="text">차량 이용이 필요한 거리는 대중교통 이용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">5.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">5,345톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">4</span>
                              <span className="text">교직원 출퇴근 시 친환경 운전하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">6.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">7,159톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">5</span>
                              <span className="text">스쿨버스는 무공해차로 교체하고, 학교에 전기 충전기 설치하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 자원 순환 */}
                <div className="accordion_item">
                  <button type="button" className="accordion_header" aria-expanded="false">
                    <span className="accordion_title">자원 순환</span>
                    <span className="accordion_icon"></span>
                  </button>
                  <div className="accordion_content">
                    <div className="tab_wrap">
                      <div className="tab_btns">
                        <button type="button" className="tab_btn active">가정</button>
                        <button type="button" className="tab_btn">기업</button>
                        <button type="button" className="tab_btn">학교</button>
                      </div>
                      <div className="tab_content active">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">비닐포장 줄이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">131,234톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">음식물 쓰레기 줄이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">2,592톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">3</span>
                              <span className="text">음식 포장·배달 시 1회용품 사용 줄이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">11,921톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">4</span>
                              <span className="text">1회용 컵 대신 다회용 컵 사용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">450,247톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">5</span>
                              <span className="text">컵 홀더 사용 줄이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">130톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">6</span>
                              <span className="text">물티슈 덜 쓰기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">81,373톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">7</span>
                              <span className="text">종이 타월, 핸드 드라이어 대신 개인 손수건 사용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">283,769톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">8</span>
                              <span className="text">인쇄 시 종이 사용 줄이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">80,129톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">9</span>
                              <span className="text">전자 영수증·청구서 이용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">4,302톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">10</span>
                              <span className="text">재활용을 위한 분리배출 실천하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">96,041톤</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="tab_content">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">교1회용품 줄이기 지침 운영하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">2.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">74,669톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">종이 타월, 핸드 드라이어 대신 개인 손수건 사용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">1.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">47,059톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">3</span>
                              <span className="text">인쇄 시 종이 사용 줄이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">0.50톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">20,413톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">4</span>
                              <span className="text">종이 없는 회의 활성화하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">0.50톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">22,262톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">5</span>
                              <span className="text">전자 영수증·청구서 이용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">0.02톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">805톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">6</span>
                              <span className="text">재활용을 위한 분리배출 실천하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">0.60톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">24,467톤</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="tab_content">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">음식을 먹을 만큼만 담기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">0.20톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">181톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">다회용 컵 사용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">27.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">31,946톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">3</span>
                              <span className="text">종이 타월, 핸드 드라이어 대신 개인 손수건 사용하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">17.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">20,134톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">4</span>
                              <span className="text">인쇄 시 종이 사용 줄이기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">7.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">8,734톤</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">5</span>
                              <span className="text">재활용을 위한 분리배출 실천하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">9.00톤</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">10,468톤</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 흡수원 보호 */}
                <div className="accordion_item">
                  <button type="button" className="accordion_header" aria-expanded="false">
                    <span className="accordion_title">흡수원 보호</span>
                    <span className="accordion_icon"></span>
                  </button>
                  <div className="accordion_content">
                    <div className="tab_wrap">
                      <div className="tab_btns">
                        <button type="button" className="tab_btn active">가정</button>
                        <button type="button" className="tab_btn">기업</button>
                        <button type="button" className="tab_btn">학교</button>
                      </div>
                      <div className="tab_content active">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">탄소흡수원의 중요성 알고 보호하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">나무심기 운동 참여하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">비용절감</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="tab_content">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">탄소흡수원의 중요성 알고 보호하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">ESG와 연계하여 탄소중립 숲 조성하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="tab_content">
                        <ul className="practice_list">
                          <li>
                            <div className="practice_main">
                              <span className="num">1</span>
                              <span className="text">탄소흡수원의 중요성 알고 보호하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="practice_main">
                              <span className="num">2</span>
                              <span className="text">나무심기 운동 참여하기</span>
                            </div>
                            <div className="practice_effect">
                              <div className="effect_item">
                                <span className="effect_label">기업/학교 참여 효과</span>
                                <span className="effect_value">없음</span>
                              </div>
                              <div className="effect_item">
                                <span className="effect_label">10% 참여효과</span>
                                <span className="effect_value highlight">없음</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </div>

      {/* 아코디언 및 탭 스크립트 */}
      <script src="/js/practice-guide.js"></script>
    </main>
  );
}

