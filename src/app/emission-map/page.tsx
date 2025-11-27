"use client";

import { useState, useEffect } from "react";

export default function EmissionMapPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [selectedDistrict, setSelectedDistrict] = useState("광산구");
  const [selectedDong, setSelectedDong] = useState("우산동");
  const [selectedIndicator, setSelectedIndicator] = useState("1");

  // 구별 동 데이터
  const dongData: { [key: string]: string[] } = {
    "광산구": ["우산동", "도산동", "신흥동", "어룡동", "월곡1동", "월곡2동", "송정1동", "송정2동", "신가동", "신창동", "수완동", "임곡동", "상도동", "본량동", "첨단1동", "첨단2동", "비아동", "하남동", "동곡동"],
    "동구": ["충장동", "동명동", "계림1동", "계림2동", "산수1동", "산수2동", "지산1동", "지산2동", "서석동", "학동", "학운동", "지원1동", "지원2동"],
    "서구": ["양동", "농성1동", "농성2동", "광천동", "유덕동", "치평동", "상무1동", "상무2동", "화정1동", "화정2동", "화정3동", "화정4동", "서창동", "금호1동", "금호2동", "풍암동", "동천동", "매월동"],
    "남구": ["양림동", "방림1동", "방림2동", "봉선1동", "봉선2동", "사직동", "월산동", "월산4동", "월산5동", "백운1동", "백운2동", "주월1동", "주월2동", "진월동", "효덕동", "송암동", "대촌동"],
    "북구": ["중앙동", "임동", "신안동", "풍향동", "문화동", "문흥1동", "문흥2동", "두암1동", "두암2동", "두암3동", "오치1동", "오치2동", "석곡동", "건국동", "일곡동", "매곡동", "삼각동", "용봉동", "운암1동", "운암2동", "운암3동", "동림동", "우치동", "양산동"],
  };

  // 일반 현황 지표 (전년대비 증감률: 1,2,3,5,6,7 / 박스없음: 4,8,9)
  const generalIndicators = [
    { id: "1", name: "인구수", statType: "change", unit: "명" },
    { id: "2", name: "가구수", statType: "change", unit: "가구" },
    { id: "3", name: "자동차 등록대수", statType: "change", unit: "대" },
    { id: "4", name: "공원 수", statType: "hidden", unit: "개소" },
    { id: "5", name: "생활폐기물 발생량", statType: "change", unit: "톤" },
    { id: "6", name: "신재생 에너지 발전량", statType: "change", unit: "kw" },
    { id: "7", name: "전력 소비량", statType: "change", unit: "MW" },
    { id: "8", name: "음식물류 폐기물 발생량", statType: "hidden", unit: "톤" },
    { id: "9", name: "사업체 수", statType: "hidden", unit: "개" },
  ];

  // 주요 지표 (전년대비 증감률: 2,3,5,6,8 / 현재값: 1,7,9 / 박스없음: 4)
  const keyIndicators = [
    { id: "1", name: "건물부문 1인당 연간 온실가스 배출량", statType: "none", unit: "tCO2eq" },
    { id: "2", name: "아파트 비율", statType: "change", unit: "%" },
    { id: "3", name: "30년 이상 노후건축물 비율", statType: "change", unit: "%" },
    { id: "4", name: "수송부문 1인당 연간 온실가스 배출량", statType: "hidden", unit: "tCO2eq" },
    { id: "5", name: "1인당 자동차 등록대수", statType: "change", unit: "%" },
    { id: "6", name: "친환경차 보급률", statType: "change", unit: "%" },
    { id: "7", name: "전력소비량 대비 재생에너지 발전 비율", statType: "none", unit: "%" },
    { id: "8", name: "1인당 생활폐기물 발생량", statType: "change", unit: "톤" },
    { id: "9", name: "1인당 공원면적", statType: "none", unit: "㎡" },
  ];

  const indicators = activeTab === "general" ? generalIndicators : keyIndicators;
  const currentIndicator = indicators.find((ind) => ind.id === selectedIndicator) || indicators[0];
  const dongs = dongData[selectedDistrict] || [];

  // 구 변경 시 첫 번째 동으로 초기화
  useEffect(() => {
    if (dongs.length > 0) {
      setSelectedDong(dongs[0]);
    }
  }, [selectedDistrict]);

  // 탭 변경 시 첫 번째 지표로 초기화
  useEffect(() => {
    setSelectedIndicator("1");
  }, [activeTab]);

  return (
    <main role="main" aria-label="행정동별 배출지도">
      <div id="Content" className="Subpage EmissionMap">
        {/* 상단 비주얼 영역 */}
        <div id="nav_wrap" aria-label="내비게이션 영역">
          <div id="nav_inner">
            <div className="visual" aria-label="서브 비주얼 영역">
              <div className="visual_inner">
                <nav className="breadcrumb" aria-label="경로">
                  <ol>
                    <li><a href="/"><img src="/images/ic_home_white.svg" alt="홈" /></a></li>
                    <li aria-hidden="true">›</li>
                    <li>우리동네 탄소배출지도</li>
                  </ol>
                </nav>
                <div className="sub_title_wrap">
                  <h1 className="sub_title">행정동별 배출지도</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div id="content_wrap" aria-label="콘텐츠 영역">
          <div id="cont_inner">
            <h2 className="cont_title_big">행정동별 배출지도</h2>

            <div className="emission_content">
              <div className="emission_layout">
                {/* 왼쪽 영역 */}
                <div className="emission_left">
                  {/* 탭 버튼 */}
                  <div className="main_tabs" role="tablist">
                    <button 
                      type="button" 
                      role="tab" 
                      className={`tab_btn ${activeTab === "general" ? "is-active" : ""}`}
                      onClick={() => setActiveTab("general")}
                    >
                      일반 현황
                    </button>
                    <button 
                      type="button" 
                      role="tab" 
                      className={`tab_btn ${activeTab === "key" ? "is-active" : ""}`}
                      onClick={() => setActiveTab("key")}
                    >
                      주요 지표
                    </button>
                  </div>

                  {/* 지표 선택 */}
                  <div className="select_wrap indicator_select">
                    <select 
                      value={selectedIndicator} 
                      onChange={(e) => setSelectedIndicator(e.target.value)}
                      aria-label="지표 선택"
                    >
                      {indicators.map((ind) => (
                        <option key={ind.id} value={ind.id}>{ind.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* 지표 제목 + 다운로드 버튼 */}
                  <div className="indicator_header">
                    <div className="indicator_title">
                      <h3 className="cont_title">{currentIndicator.name}</h3>
                    </div>
                    <div className="download_btns">
                      <button type="button" className="download_btn" aria-label="XLSX 다운로드">
                        <img src="/images/ic_download_blue.svg" alt="" />
                        <span>XLSX</span>
                      </button>
                      <button type="button" className="download_btn" aria-label="CSV 다운로드">
                        <img src="/images/ic_download_blue.svg" alt="" />
                        <span>CSV</span>
                      </button>
                      <button type="button" className="download_btn" aria-label="PNG 다운로드">
                        <img src="/images/ic_download_blue.svg" alt="" />
                        <span>PNG</span>
                      </button>
                    </div>
                  </div>

                  {/* 그래프 영역 */}
                  <div className="chart_area">
                    <div className="chart_container" id="emission_chart">
                      {/* 차트 들어갈 공간 */}
                    </div>
                  </div>

                  {/* 통계 박스 - 전년대비 증감률 */}
                  {currentIndicator.statType === "change" && (
                    <div className="stat_box">
                      <div className="stat_item">
                        <span className="stat_label">전년대비 증감률</span>
                        <span className="stat_value">
                          <strong className="txt_blue">523,056</strong>
                          <span className="unit">{currentIndicator.unit}</span>
                          <div className="change_rate">
                            <span className="triangle_up"></span>
                            <span className="txt_red">(1.2%)</span>
                          </div>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 통계 박스 - 조성 면적 */}
                  {currentIndicator.statType === "area" && (
                    <div className="stat_box">
                      <div className="stat_item">
                        <span className="stat_label">조성 면적</span>
                        <span className="stat_value">
                          <strong className="txt_blue">12,345</strong>
                          <span className="unit">{currentIndicator.unit}</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 통계 박스 - 현재 값 */}
                  {currentIndicator.statType === "none" && (
                    <div className="stat_box">
                      <div className="stat_item">
                        <span className="stat_label">현재 값</span>
                        <span className="stat_value">
                          <strong className="txt_blue">523,056</strong>
                          <span className="unit">{currentIndicator.unit}</span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 오른쪽 영역 */}
                <div className="emission_right">
                  {/* 구/동 선택 */}
                  <div className="district_selects">
                    <div className="select_wrap district_select">
                      <select 
                        value={selectedDistrict} 
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                        aria-label="구 선택"
                      >
                        <option value="광산구">광산구</option>
                        <option value="동구">동구</option>
                        <option value="서구">서구</option>
                        <option value="남구">남구</option>
                        <option value="북구">북구</option>
                      </select>
                    </div>
                    <div className="select_wrap dong_select">
                      <select 
                        value={selectedDong} 
                        onChange={(e) => setSelectedDong(e.target.value)}
                        aria-label="동 선택"
                      >
                        {dongs.map((dong) => (
                          <option key={dong} value={dong}>{dong}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 지도 영역 */}
                  <div className="map_area">
                    <div className="map_container" id="emission_map">
                      {/* 지도 들어갈 공간 */}
                    </div>
                  </div>

                  {/* 순위 영역 - 주요 지표 탭일 때만 표시 */}
                  {activeTab === "key" && (
                    <div className="ranking_area">
                      <div className="ranking_header">
                        <span className="dot"></span>
                        <h4>순위 ({selectedDong} <strong className="txt_blue">{dongs.length}</strong>순위)</h4>
                      </div>
                      <div className="ranking_list_wrapper">
                        <div className="ranking_list">
                          {[0, 1, 2, 3].map((colIndex) => (
                            <ul key={colIndex} className="ranking_column">
                              {dongs
                                .filter((_, idx) => Math.floor(idx / 5) === colIndex)
                                .map((dong, idx) => {
                                  const rank = colIndex * 5 + idx + 1;
                                  return (
                                    <li key={dong} className={`ranking_item ${rank <= 3 ? "highlight" : ""}`}>
                                      <span className="rank_num">{rank}.</span>
                                      <span className="rank_dong">{dong}</span>
                                    </li>
                                  );
                                })}
                            </ul>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
