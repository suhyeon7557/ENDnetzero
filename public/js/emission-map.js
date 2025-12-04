/**
 * 행정동별 배출지도 JavaScript
 * - 탭/지표 관리 + 지도/그래프 연동 통합
 */

document.addEventListener("DOMContentLoaded", function() {
  initEmissionMap();
});

// 일반 현황 지표
var generalIndicators = [
  { id: "1", name: "인구수", statType: "change", unit: "명" },
  { id: "2", name: "가구수", statType: "change", unit: "가구" },
  { id: "3", name: "자동차 등록대수", statType: "change", unit: "대" },
  { id: "4", name: "공원 수", statType: "hidden", unit: "개소" },
  { id: "5", name: "생활폐기물 발생량", statType: "change", unit: "톤" },
  { id: "6", name: "신재생 에너지 발전량", statType: "change", unit: "kw" },
  { id: "7", name: "전력 소비량", statType: "change", unit: "MW" },
  { id: "8", name: "음식물류 폐기물 발생량", statType: "hidden", unit: "톤" },
  { id: "9", name: "사업체 수", statType: "hidden", unit: "개" }
];

// 주요 지표
var keyIndicators = [
  { id: "1", name: "건물부문 1인당 연간 온실가스 배출량", statType: "none", unit: "tCO2eq" },
  { id: "2", name: "아파트 비율", statType: "change", unit: "%" },
  { id: "3", name: "30년 이상 노후건축물 비율", statType: "change", unit: "%" },
  { id: "4", name: "수송부문 1인당 연간 온실가스 배출량", statType: "hidden", unit: "tCO2eq" },
  { id: "5", name: "1인당 자동차 등록대수", statType: "change", unit: "%" },
  { id: "6", name: "친환경차 보급률", statType: "change", unit: "%" },
  { id: "7", name: "전력소비량 대비 재생에너지 발전 비율", statType: "none", unit: "%" },
  { id: "8", name: "1인당 생활폐기물 발생량", statType: "change", unit: "톤" },
  { id: "9", name: "1인당 공원면적", statType: "none", unit: "㎡" }
];

// 구 목록
var zones = ["광주", "광산구", "남구", "동구", "북구", "서구"];

// 현재 상태
var currentTab = "general";
var currentZone = "광주";
var currentDong = "전체";
var currentIndicatorId = "1";

// 동 데이터 (API에서 가져옴)
var dongs = {};
var idxse = [];

// DOM 요소
var tabBtns;
var indicatorSelect;
var indicatorTitle;
var statBoxArea;
var zoneSelect;
var dongSelect;
var rankingArea;
var rankingList;
var selectedDongText;
var rankCount;

// 메인 초기화 함수
async function initEmissionMap() {
  // DOM 요소 가져오기
  tabBtns = document.querySelectorAll(".tab_btn");
  indicatorSelect = document.getElementById("indicatorSelect");
  indicatorTitle = document.getElementById("indicatorTitle");
  statBoxArea = document.getElementById("statBoxArea");
  zoneSelect = document.getElementById("districtSelect");
  dongSelect = document.getElementById("dongSelect");
  rankingArea = document.getElementById("rankingArea");
  rankingList = document.getElementById("rankingList");
  selectedDongText = document.getElementById("selectedDongText");
  rankCount = document.getElementById("rankCount");

  // 필수 요소 확인
  if (!zoneSelect || !dongSelect) {
    console.error("필수 DOM 요소를 찾을 수 없습니다.");
    return;
  }

  // 이벤트 바인딩
  bindEvents();

  // 구 옵션 렌더링
  renderZoneOptions();

  // 지표 옵션 렌더링
  if (indicatorSelect) {
    updateIndicatorOptions();
  }

  // API에서 동 데이터 가져오기
  try {
    dongs = await getMainidxList("zone");
    idxse = await getMainidxList("idxse");
    
    if (dongs) {
      renderDongOptions(zoneSelect.value);
    }
    
    // 지도 렌더링
    renderMapClickGraph();
  } catch (e) {
    console.error("[initEmissionMap] 초기화 실패:", e);
  }

  // UI 업데이트
  updateUI();
}

// 이벤트 바인딩
function bindEvents() {
  // 탭 버튼 클릭
  if (tabBtns) {
    for (var i = 0; i < tabBtns.length; i++) {
      tabBtns[i].addEventListener("click", function() {
        var tab = this.getAttribute("data-tab");
        changeTab(tab);
      });
    }
  }

  // 지표 선택 변경
  if (indicatorSelect) {
    indicatorSelect.addEventListener("change", function() {
      currentIndicatorId = this.value;
      updateUI();
    });
  }

  // 구 선택 변경
  zoneSelect.addEventListener("change", function() {
    var name = this.value;
    currentZone = name;
    renderDongOptions(name);
    updateUI();
    
    // 지도 업데이트
    if (typeof window._mymap_updatePolygon === "function") {
      window._mymap_updatePolygon(name);
    }
  });

  // 동 선택 변경
  dongSelect.addEventListener("change", function() {
    var name = this.value;
    currentDong = name;
    updateUI();
    
    // 지도 하이라이트
    if (name !== "전체") {
      if (typeof window._mymap_setHighlightPolygon === "function") {
        window._mymap_setHighlightPolygon(name);
      }
    } else {
      if (typeof window._mymap_resetHighlightPolygon === "function") {
        window._mymap_resetHighlightPolygon();
      }
    }
  });
}

// 구 옵션 렌더링
function renderZoneOptions() {
  zoneSelect.innerHTML = "";
  for (var i = 0; i < zones.length; i++) {
    var zone = zones[i];
    var option = document.createElement("option");
    option.value = zone;
    option.textContent = zone === "광주" ? "광주 전체" : zone;
    zoneSelect.appendChild(option);
  }
}

// 동 옵션 렌더링
function renderDongOptions(zone) {
  dongSelect.innerHTML = "";
  
  if (!dongs) return;
  
  var list = dongs[zone === "광주" ? "전체" : zone];
  if (!list) return;
  
  // "전체"를 맨 앞에 추가
  var sortedList = ["전체"];
  for (var i = 0; i < list.length; i++) {
    if (list[i] !== "전체") {
      sortedList.push(list[i]);
    }
  }
  
  for (var j = 0; j < sortedList.length; j++) {
    var option = document.createElement("option");
    option.value = sortedList[j];
    option.textContent = sortedList[j];
    dongSelect.appendChild(option);
  }
  
  currentDong = sortedList[0] || "전체";
}

// API 호출 - 데이터 가져오기
async function getMainidxList(params) {
  try {
    var res = await fetch("/api/vill/mainidx/" + params);
    if (!res.ok) throw new Error("HTTP error: " + res.status);
    var json = await res.json();
    return json;
  } catch (e) {
    console.error("[getMainidxList] 데이터 조회 실패:", e);
    return null;
  }
}

// 지도 클릭 그래프 렌더링
function renderMapClickGraph() {
  var container = document.querySelector(".map_container");
  if (!container) return;
  
  var interactionHandler = {
    onClickZone: function(name) {
      if (zones.indexOf(name) !== -1) {
        currentZone = name;
        zoneSelect.value = name;
        renderDongOptions(currentZone);
        updateUI();
      } else {
        currentDong = name;
        dongSelect.value = name;
        updateUI();
      }
    }
  };
  
  if (typeof window.renderPolygon === "function") {
    window.renderPolygon(container, interactionHandler);
  }
}

// 탭 변경
function changeTab(tab) {
  currentTab = tab;
  currentIndicatorId = "1";

  // 탭 버튼 활성화 상태 변경
  for (var i = 0; i < tabBtns.length; i++) {
    if (tabBtns[i].getAttribute("data-tab") === tab) {
      tabBtns[i].classList.add("is-active");
    } else {
      tabBtns[i].classList.remove("is-active");
    }
  }

  // 지표 옵션 업데이트
  updateIndicatorOptions();
  updateUI();
}

// 지표 옵션 업데이트
function updateIndicatorOptions() {
  if (!indicatorSelect) return;
  
  var indicators = currentTab === "general" ? generalIndicators : keyIndicators;
  var html = "";

  for (var i = 0; i < indicators.length; i++) {
    var ind = indicators[i];
    html += '<option value="' + ind.id + '">' + ind.name + '</option>';
  }

  indicatorSelect.innerHTML = html;
  indicatorSelect.value = currentIndicatorId;
}

// UI 업데이트
function updateUI() {
  var indicators = currentTab === "general" ? generalIndicators : keyIndicators;
  var currentIndicator = null;

  for (var i = 0; i < indicators.length; i++) {
    if (indicators[i].id === currentIndicatorId) {
      currentIndicator = indicators[i];
      break;
    }
  }

  if (!currentIndicator) {
    currentIndicator = indicators[0];
  }

  // 지표 제목 업데이트
  if (indicatorTitle) {
    indicatorTitle.textContent = currentIndicator.name;
  }

  // 통계 박스 업데이트
  if (statBoxArea) {
    updateStatBox(currentIndicator);
  }

  // 순위 영역 표시/숨김
  if (rankingArea) {
    if (currentTab === "key") {
      rankingArea.style.display = "block";
      updateRankingList();
    } else {
      rankingArea.style.display = "none";
    }
  }

  // 선택된 동 텍스트 업데이트
  if (selectedDongText) {
    selectedDongText.textContent = currentDong;
  }
}

// 통계 박스 업데이트
function updateStatBox(indicator) {
  var html = "";

  if (indicator.statType === "change") {
    html = '<div class="stat_box">' +
      '<div class="stat_item">' +
      '<span class="stat_label">전년대비 증감률</span>' +
      '<span class="stat_value">' +
      '<strong class="txt_blue">523,056</strong>' +
      '<span class="unit">' + indicator.unit + '</span>' +
      '<div class="change_rate">' +
      '<span class="triangle_up"></span>' +
      '<span class="txt_red">(1.2%)</span>' +
      '</div>' +
      '</span>' +
      '</div>' +
      '</div>';
  } else if (indicator.statType === "none") {
    html = '<div class="stat_box">' +
      '<div class="stat_item">' +
      '<span class="stat_label">현재 값</span>' +
      '<span class="stat_value">' +
      '<strong class="txt_blue">523,056</strong>' +
      '<span class="unit">' + indicator.unit + '</span>' +
      '</span>' +
      '</div>' +
      '</div>';
  }

  statBoxArea.innerHTML = html;
}

// 순위 목록 업데이트
function updateRankingList() {
  if (!rankingList || !dongs) return;
  
  var list = dongs[currentZone === "광주" ? "전체" : currentZone];
  if (!list) return;
  
  var html = "";

  // 4개 컬럼으로 나누기
  for (var col = 0; col < 4; col++) {
    html += '<ul class="ranking_column">';
    
    for (var idx = 0; idx < list.length; idx++) {
      if (Math.floor(idx / 5) === col) {
        var rank = idx + 1;
        var highlightClass = rank <= 3 ? " highlight" : "";
        html += '<li class="ranking_item' + highlightClass + '">' +
          '<span class="rank_num">' + rank + '.</span>' +
          '<span class="rank_dong">' + list[idx] + '</span>' +
          '</li>';
      }
    }
    
    html += '</ul>';
  }

  rankingList.innerHTML = html;
  
  if (rankCount) {
    rankCount.textContent = list.length;
  }
}
