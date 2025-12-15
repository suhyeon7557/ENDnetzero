'use client';

import { useEffect, useRef, useState } from 'react';
import '@/layout/main.scss';

export default function MainPage() {
  const [clockTime, setClockTime] = useState({ years: 0, days: 0, time: '00:00:00' });
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [noticeIndex, setNoticeIndex] = useState(0);
  const [noticeIsPlaying, setNoticeIsPlaying] = useState(true);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [bannerIsPlaying, setBannerIsPlaying] = useState(true);
  const [partnerIsPlaying, setPartnerIsPlaying] = useState(true);
  const noticeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const bannerTimerRef = useRef<NodeJS.Timeout | null>(null);
  const partnerRef = useRef<HTMLDivElement>(null);
  const partnerAnimationRef = useRef<number | null>(null);
  const partnerPositionRef = useRef(0);

  useEffect(() => {
    const targetDate = new Date('2029-07-22T00:00:00Z');
    const updateClock = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff > 0) {
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setClockTime({ years, days, time: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}` });
      }
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (noticeIsPlaying) {
      noticeTimerRef.current = setInterval(() => setNoticeIndex((prev) => (prev + 1) % 3), 4000);
    }
    return () => { if (noticeTimerRef.current) clearInterval(noticeTimerRef.current); };
  }, [noticeIsPlaying]);

  useEffect(() => {
    if (bannerIsPlaying) {
      bannerTimerRef.current = setInterval(() => setBannerIndex((prev) => (prev + 1) % 3), 5000);
    }
    return () => { if (bannerTimerRef.current) clearInterval(bannerTimerRef.current); };
  }, [bannerIsPlaying]);

  useEffect(() => {
    const container = partnerRef.current;
    if (!container) return;
    const animate = () => {
      partnerPositionRef.current -= 0.5;
      const firstItem = container.firstElementChild as HTMLElement;
      if (firstItem && Math.abs(partnerPositionRef.current) >= firstItem.offsetWidth + 20) {
        partnerPositionRef.current += firstItem.offsetWidth + 20;
        container.appendChild(firstItem);
      }
      container.style.transform = `translateX(${partnerPositionRef.current}px)`;
      partnerAnimationRef.current = requestAnimationFrame(animate);
    };
    if (partnerIsPlaying) {
      partnerAnimationRef.current = requestAnimationFrame(animate);
    }
    return () => { if (partnerAnimationRef.current) cancelAnimationFrame(partnerAnimationRef.current); };
  }, [partnerIsPlaying]);

  const handlePartnerPrev = () => {
    const container = partnerRef.current;
    if (!container) return;
    const lastItem = container.lastElementChild as HTMLElement;
    if (lastItem) {
      const itemWidth = lastItem.offsetWidth + 20;
      container.insertBefore(lastItem, container.firstElementChild);
      partnerPositionRef.current -= itemWidth;
      container.style.transition = 'none';
      container.style.transform = `translateX(${partnerPositionRef.current}px)`;
      requestAnimationFrame(() => {
        container.style.transition = 'transform 0.3s ease';
        partnerPositionRef.current += itemWidth;
        container.style.transform = `translateX(${partnerPositionRef.current}px)`;
        setTimeout(() => {
          container.style.transition = '';
          partnerPositionRef.current -= itemWidth;
        }, 300);
      });
    }
  };

  const handlePartnerNext = () => {
    const container = partnerRef.current;
    if (!container) return;
    const firstItem = container.firstElementChild as HTMLElement;
    if (firstItem) {
      const itemWidth = firstItem.offsetWidth + 20;
      container.style.transition = 'transform 0.3s ease';
      partnerPositionRef.current -= itemWidth;
      container.style.transform = `translateX(${partnerPositionRef.current}px)`;
      setTimeout(() => {
        container.style.transition = '';
        container.appendChild(firstItem);
        partnerPositionRef.current += itemWidth;
        container.style.transform = `translateX(${partnerPositionRef.current}px)`;
      }, 300);
    }
  };

  // 약속하기 탭 & 팝업 스크립트
  useEffect(() => {
    // 탭 전환
    const tabBtns = document.querySelectorAll('.promise_tab_btn[data-tab]');
    const panels = document.querySelectorAll('.promise_items[data-panel]');
    
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        const isActive = btn.classList.contains('active');
        
        // 모든 탭 active 해제
        tabBtns.forEach(b => b.classList.remove('active'));
        // 모든 패널 숨김
        panels.forEach(p => p.classList.remove('active'));
        
        // 이미 active였으면 해제만, 아니면 활성화
        if (!isActive) {
          btn.classList.add('active');
          panels.forEach(p => {
            if (p.getAttribute('data-panel') === tab) {
              p.classList.add('active');
            }
          });
        }
      });
    });

    // 팝업 열기
    const popup = document.getElementById('promise_popup_overlay');
    const popupIcon = document.getElementById('promise_popup_icon') as HTMLImageElement;
    const popupLabel = document.getElementById('promise_popup_label');
    const popupClose = document.querySelector('#promise_popup_overlay .popup_close');
    const promiseForm = document.getElementById('promise_form') as HTMLFormElement;
    const submitBtn = document.getElementById('promise_submit_btn') as HTMLButtonElement;
    const itemBtns = document.querySelectorAll('.promise_item_btn');

    itemBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const label = btn.getAttribute('data-promise') || '';
        const icon = btn.getAttribute('data-icon') || '';
        if (popupIcon) popupIcon.src = icon;
        if (popupLabel) popupLabel.textContent = label;
        popup?.classList.add('is-open');
        popup?.setAttribute('aria-hidden', 'false');
      });
    });

    // 팝업 닫기
    const closePopup = () => {
      popup?.classList.remove('is-open');
      popup?.setAttribute('aria-hidden', 'true');
      promiseForm?.reset();
      if (submitBtn) submitBtn.disabled = true;
    };
    popupClose?.addEventListener('click', closePopup);
    popup?.addEventListener('click', (e) => {
      if (e.target === popup) closePopup();
    });

    // 폼 유효성 검사
    const checkFormValidity = () => {
      if (submitBtn && promiseForm) {
        submitBtn.disabled = !promiseForm.checkValidity();
      }
    };
    promiseForm?.addEventListener('input', checkFormValidity);
    promiseForm?.addEventListener('change', checkFormValidity);

    // 폼 제출
    promiseForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      closePopup();
    });

    return () => {
      // cleanup (React strict mode 대비)
    };
  }, []);

  return (
    <main id="main" className="main_page">
      {/* Hero Section */}
      <section className="hero_section">
        <div className="hero_bg">
          <div className="hero_inner">
            <div className="climate_clock">
              <p className="clock_desc">전 세계 이산화탄소 배출량을 기반으로 지구의 평균 온도가 1.5°C 상승하기까지 남은 시간을 표시합니다.</p>
              <div className="clock_display">
                <div className="clock_item">
                  <span className="clock_number">{String(clockTime.years).padStart(2, '0')}</span>
                  <span className="clock_label">년</span>
                </div>
                <div className="clock_item">
                  <span className="clock_number">{String(clockTime.days).padStart(3, '0')}</span>
                  <span className="clock_label">일</span>
                </div>
                <div className="clock_item">
                  <span className="clock_number">{clockTime.time}</span>
                </div>
              </div>
            </div>
            <div className="hero_text">
              <h1 className="hero_title">탄소를 줄이고,<br />미래를 더하는 탄소중립도시 광주</h1>
              <p className="hero_subtitle">작은 실천 하나하나가 모여 더 깨끗한<br />"탄소 중립 사회"를 만듭니다. 지금 바로 동참해주세요!</p>
              <a href="/promise" className="hero_btn"><img src="/images/ic_promise_finger.svg" alt="" /><span>약속하러가기</span></a>
            </div>
          </div>
          <img src="/images/image_main_top.png" alt="탄소중립도시 광주" className="hero_image" />
        </div>
      </section>

      <div className="main_content">
        {/* Notice Banner */}
        <section className="notice_banner">
          <div className="notice_inner">
            <h2 className="notice_title">공지사항</h2>
            <div className="notice_controls">
              <button className="btn_prev" onClick={() => setNoticeIndex((prev) => (prev - 1 + 3) % 3)} aria-label="이전"><img src="/images/ic_prev_btn.svg" alt="" /></button>
              <button className="btn_toggle" onClick={() => setNoticeIsPlaying((prev) => !prev)} aria-label="정지"><img src={noticeIsPlaying ? '/images/ic_stop_btn.svg' : '/images/ic_play_btn.svg'} alt="" /></button>
              <button className="btn_next" onClick={() => setNoticeIndex((prev) => (prev + 1) % 3)} aria-label="다음"><img src="/images/ic_next_btn.svg" alt="" /></button>
            </div>
            <div className="notice_slide">
              <div className={`notice_item ${noticeIndex === 0 ? 'active' : ''}`}><span className="notice_date">2025-11-13</span><a href="/notice/1" className="notice_link">빛고을 기후위기 대응 시민총회 참여자 모집</a></div>
              <div className={`notice_item ${noticeIndex === 1 ? 'active' : ''}`}><span className="notice_date">2025-11-10</span><a href="/notice/2" className="notice_link">2025년 탄소중립 실천 캠페인 안내</a></div>
              <div className={`notice_item ${noticeIndex === 2 ? 'active' : ''}`}><span className="notice_date">2025-11-05</span><a href="/notice/3" className="notice_link">광주시 온실가스 감축 우수사례 공모전</a></div>
            </div>
          </div>
        </section>

        {/* Promise Section - 약속하기 */}
        <section className="promise_section_main">
          <div className="section_inner">
            <h2 className="section_title">약속하기</h2>
            <div className="promise_tabs">
              <a href="/promise" className="promise_tab_btn all"><img src="/images/ic_menu.svg" alt="" /><span>전체</span></a>
              <button type="button" className="promise_tab_btn active" data-tab="energy"><img src="/images/ic_main_promise01.svg" alt="" /><span>에너지 절약</span></button>
              <button type="button" className="promise_tab_btn" data-tab="cycle"><img src="/images/ic_main_promise02.svg" alt="" /><span>자원순환</span></button>
              <button type="button" className="promise_tab_btn" data-tab="transport"><img src="/images/ic_main_promise03.svg" alt="" /><span>친환경 교통</span></button>
              <button type="button" className="promise_tab_btn" data-tab="green"><img src="/images/ic_main_promise04.svg" alt="" /><span>녹색소비</span></button>
              <button type="button" className="promise_tab_btn" data-tab="sink"><img src="/images/ic_main_promise05.svg" alt="" /><span>흡수원 보호</span></button>
            </div>
            <div className="promise_items_wrap">
              {/* 에너지 절약 */}
              <ul className="promise_items active" data-panel="energy">
                <li><button type="button" className="promise_item_btn" data-promise="대기전력 차단" data-icon="/images/ic_promise01.svg"><span className="item_icon"><img src="/images/ic_promise01.svg" alt="" /></span><span className="item_label">대기전력 차단</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="비사용 공간 소등" data-icon="/images/ic_promise02.svg"><span className="item_icon"><img src="/images/ic_promise02.svg" alt="" /></span><span className="item_label">비사용 공간 소등</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="4℃ 냉난방 온도 설정" data-icon="/images/ic_promise03.svg"><span className="item_icon"><img src="/images/ic_promise03.svg" alt="" /></span><span className="item_label">4℃ 냉난방 온도 설정</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="전기밥솥 보온 단축" data-icon="/images/ic_promise04.svg"><span className="item_icon"><img src="/images/ic_promise04.svg" alt="" /></span><span className="item_label">전기밥솥 보온 단축</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="고효율 제품 사용" data-icon="/images/ic_promise05.svg"><span className="item_icon"><img src="/images/ic_promise05.svg" alt="" /></span><span className="item_label">고효율 제품 사용</span></button></li>
              </ul>
              {/* 자원순환 */}
              <ul className="promise_items" data-panel="cycle">
                <li><button type="button" className="promise_item_btn" data-promise="텀블러 이용" data-icon="/images/ic_promise06.svg"><span className="item_icon"><img src="/images/ic_promise06.svg" alt="" /></span><span className="item_label">텀블러 이용</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="수리·사용연장 생활화" data-icon="/images/ic_promise07.svg"><span className="item_icon"><img src="/images/ic_promise07.svg" alt="" /></span><span className="item_label">수리·사용연장 생활화</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="일회용품 사용 줄이기" data-icon="/images/ic_promise08.svg"><span className="item_icon"><img src="/images/ic_promise08.svg" alt="" /></span><span className="item_label">일회용품 사용 줄이기</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="쓰레기 분리 배출" data-icon="/images/ic_promise09.svg"><span className="item_icon"><img src="/images/ic_promise09.svg" alt="" /></span><span className="item_label">쓰레기 분리 배출</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="장바구니 사용" data-icon="/images/ic_promise10.svg"><span className="item_icon"><img src="/images/ic_promise10.svg" alt="" /></span><span className="item_label">장바구니 사용</span></button></li>
              </ul>
              {/* 친환경 교통 */}
              <ul className="promise_items" data-panel="transport">
                <li><button type="button" className="promise_item_btn" data-promise="가까운 곳 걷기" data-icon="/images/ic_promise11.svg"><span className="item_icon"><img src="/images/ic_promise11.svg" alt="" /></span><span className="item_label">가까운 곳 걷기</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="대중교통 이용" data-icon="/images/ic_promise12.svg"><span className="item_icon"><img src="/images/ic_promise12.svg" alt="" /></span><span className="item_label">대중교통 이용</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="자전거 이용" data-icon="/images/ic_promise13.svg"><span className="item_icon"><img src="/images/ic_promise13.svg" alt="" /></span><span className="item_label">자전거 이용</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="공유차량 이용" data-icon="/images/ic_promise14.svg"><span className="item_icon"><img src="/images/ic_promise14.svg" alt="" /></span><span className="item_label">공유차량 이용</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="승용차 함께 타기" data-icon="/images/ic_promise15.svg"><span className="item_icon"><img src="/images/ic_promise15.svg" alt="" /></span><span className="item_label">승용차 함께 타기</span></button></li>
              </ul>
              {/* 녹색소비 */}
              <ul className="promise_items" data-panel="green">
                <li><button type="button" className="promise_item_btn" data-promise="제철·지역 먹거리" data-icon="/images/ic_promise16.svg"><span className="item_icon"><img src="/images/ic_promise16.svg" alt="" /></span><span className="item_label">제철·지역 먹거리</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="채소·저탄소 식단" data-icon="/images/ic_promise17.svg"><span className="item_icon"><img src="/images/ic_promise17.svg" alt="" /></span><span className="item_label">채소·저탄소 식단</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="필요한 만큼만 구입" data-icon="/images/ic_promise18.svg"><span className="item_icon"><img src="/images/ic_promise18.svg" alt="" /></span><span className="item_label">필요한 만큼만 구입</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="녹색제품 구입" data-icon="/images/ic_promise19.svg"><span className="item_icon"><img src="/images/ic_promise19.svg" alt="" /></span><span className="item_label">녹색제품 구입</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="구매 전 환경성 고려" data-icon="/images/ic_promise20.svg"><span className="item_icon"><img src="/images/ic_promise20.svg" alt="" /></span><span className="item_label">구매 전 환경성 고려</span></button></li>
              </ul>
              {/* 흡수원 보호 */}
              <ul className="promise_items" data-panel="sink">
                <li><button type="button" className="promise_item_btn" data-promise="가정 내 식재" data-icon="/images/ic_promise21.svg"><span className="item_icon"><img src="/images/ic_promise21.svg" alt="" /></span><span className="item_label">가정 내 식재</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="숲 지키기 참여" data-icon="/images/ic_promise22.svg"><span className="item_icon"><img src="/images/ic_promise22.svg" alt="" /></span><span className="item_label">숲 지키기 참여</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="나무 가꾸기" data-icon="/images/ic_promise23.svg"><span className="item_icon"><img src="/images/ic_promise23.svg" alt="" /></span><span className="item_label">나무 가꾸기</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="함께하는 실천" data-icon="/images/ic_promise24.svg"><span className="item_icon"><img src="/images/ic_promise24.svg" alt="" /></span><span className="item_label">함께하는 실천</span></button></li>
                <li><button type="button" className="promise_item_btn" data-promise="생태 보전 활동" data-icon="/images/ic_promise25.svg"><span className="item_icon"><img src="/images/ic_promise25.svg" alt="" /></span><span className="item_label">생태 보전 활동</span></button></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Indicator Section */}
        <section className="indicator_section">
          <div className="section_inner">
            <h2 className="section_title">부문별 지표보기</h2>
            <div className="indicator_wrap">
              <div className="indicator_left">
                <ul className="indicator_list">
                  <li><button className={`indicator_btn ${selectedCategory === 1 ? 'active' : ''}`} onClick={() => setSelectedCategory(selectedCategory === 1 ? null : 1)}><img src="/images/ic_indicator01.svg" alt="" /><span>전환</span></button></li>
                  <li><button className={`indicator_btn ${selectedCategory === 2 ? 'active' : ''}`} onClick={() => setSelectedCategory(selectedCategory === 2 ? null : 2)}><img src="/images/ic_indicator02.svg" alt="" /><span>건물</span></button></li>
                  <li><button className={`indicator_btn ${selectedCategory === 3 ? 'active' : ''}`} onClick={() => setSelectedCategory(selectedCategory === 3 ? null : 3)}><img src="/images/ic_indicator03.svg" alt="" /><span>수송</span></button></li>
                  <li><button className={`indicator_btn ${selectedCategory === 4 ? 'active' : ''}`} onClick={() => setSelectedCategory(selectedCategory === 4 ? null : 4)}><img src="/images/ic_indicator04.svg" alt="" /><span>농·축산</span></button></li>
                  <li><button className={`indicator_btn ${selectedCategory === 5 ? 'active' : ''}`} onClick={() => setSelectedCategory(selectedCategory === 5 ? null : 5)}><img src="/images/ic_indicator05.svg" alt="" /><span>폐기물</span></button></li>
                  <li><button className={`indicator_btn ${selectedCategory === 6 ? 'active' : ''}`} onClick={() => setSelectedCategory(selectedCategory === 6 ? null : 6)}><img src="/images/ic_indicator06.svg" alt="" /><span>산업</span></button></li>
                  <li><button className={`indicator_btn ${selectedCategory === 7 ? 'active' : ''}`} onClick={() => setSelectedCategory(selectedCategory === 7 ? null : 7)}><img src="/images/ic_indicator07.svg" alt="" /><span>흡수원</span></button></li>
                  <li><a href="#" className="indicator_btn"><img src="/images/ic_indicator08.svg" alt="" /><span>정책지표 신호등</span></a></li>
                </ul>
              </div>
              <div className="indicator_right">
                {/* 기본 상태 */}
                <div className={`indicator_default ${!selectedCategory ? 'active' : ''}`}>
                  <img src="/images/image_indicator.png" alt="" />
                  <div className="default_text">
                    <p><strong>광주 넷제로</strong>는 탄소중립 실현을 위해</p>
                    <p><strong>주요 부문별 지표</strong>를 제공하며,</p>
                    <p><strong>정책 수립 · 점검 및 성과관리</strong>의</p>
                    <p><strong>기반 정보</strong>를 제공합니다.</p>
                  </div>
                </div>
                {/* 전환 */}
                <div className={`indicator_detail ${selectedCategory === 1 ? 'active' : ''}`}>
                  <div className="detail_header"><span className="category_name">전환</span></div>
                  <ul className="detail_list">
                    <li><a href="/indicator/1"><span className="badge">년</span><span className="item_name">재생(태양광)에너지 비중</span><span className="item_year">2023</span><span className="item_value">4.46</span></a></li>
                    <li><a href="/indicator/2"><span className="badge">년</span><span className="item_name">태양광 자가발전 비율</span><span className="item_year">2023</span><span className="item_value">23.46</span></a></li>
                    <li><a href="/indicator/3"><span className="badge">년</span><span className="item_name">1차 에너지 공급량 중 신재생에너지 비중</span><span className="item_year">2023</span><span className="item_value">9.14</span></a></li>
                    <li><a href="/indicator/4"><span className="badge">년</span><span className="item_name">전력자립도</span><span className="item_year">2023</span><span className="item_value">9.26</span></a></li>
                    <li><a href="/indicator/5"><span className="badge">년</span><span className="item_name">에너지집약도(GRDP당 최종에너지소비량)</span><span className="item_year">2023</span><span className="item_value">0.05</span></a></li>
                    <li><a href="/indicator/6"><span className="badge">년</span><span className="item_name">전력소비량 증가율</span><span className="item_year">2023</span><span className="item_value">-0.37</span></a></li>
                    <li><a href="/indicator/7"><span className="badge">년</span><span className="item_name">전력 탄소집약도</span><span className="item_year">2022</span><span className="item_value">41.65</span></a></li>
                    <li><a href="/indicator/8"><span className="badge">년</span><span className="item_name">에너지효율 개선율</span><span className="item_year">2022</span><span className="item_value">-10.71</span></a></li>
                    <li><a href="/indicator/9"><span className="badge">년</span><span className="item_name">탄소중립 생활 실천도 (에너지)</span><span className="item_year">2024</span><span className="item_value">65.57</span></a></li>
                  </ul>
                </div>
                {/* 건물 */}
                <div className={`indicator_detail ${selectedCategory === 2 ? 'active' : ''}`}>
                  <div className="detail_header"><span className="category_name">건물</span></div>
                  <ul className="detail_list">
                    <li><a href="/indicator/10"><span className="badge">년</span><span className="item_name">30년 이상 노후 건축물 비율</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/11"><span className="badge">년</span><span className="item_name">그린리모델링 건축물 비율</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/12"><span className="badge">년</span><span className="item_name">건물 부문 탄소집약도</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/13"><span className="badge">년</span><span className="item_name">단위 면적당 에너지소비량</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/14"><span className="badge">년</span><span className="item_name">제로에너지건축물 인증 비율</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/15"><span className="badge">년</span><span className="item_name">가구당 한달 전력소비량</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/16"><span className="badge">년</span><span className="item_name">공공부문 대상 기관 온실가스 감축률</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/17"><span className="badge">년</span><span className="item_name">1인당 하루 물 사용량</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/18"><span className="badge">년</span><span className="item_name">탄소중립 생활 실천도(건물)</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                  </ul>
                </div>
                {/* 수송 */}
                <div className={`indicator_detail ${selectedCategory === 3 ? 'active' : ''}`}>
                  <div className="detail_header"><span className="category_name">수송</span></div>
                  <ul className="detail_list">
                    <li><a href="/indicator/19"><span className="badge">년</span><span className="item_name">전기수소차(승용) 보급률</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/20"><span className="badge">년</span><span className="item_name">공공 부문 전기수소차 비율</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/21"><span className="badge">년</span><span className="item_name">대중교통 수송분담률</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/22"><span className="badge">년</span><span className="item_name">승용차 일간 평균 주행거리</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/23"><span className="badge">년</span><span className="item_name">등록 대수 대비 온실가스 배출량</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/24"><span className="badge">년</span><span className="item_name">수송 부문 탄소집약도</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/25"><span className="badge">년</span><span className="item_name">자전거 수단 분담률</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/26"><span className="badge">년</span><span className="item_name">탄소중립 생활 실천도(수송)</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                  </ul>
                </div>
                {/* 농·축산 */}
                <div className={`indicator_detail ${selectedCategory === 4 ? 'active' : ''}`}>
                  <div className="detail_header"><span className="category_name">농·축산</span></div>
                  <ul className="detail_list">
                    <li><a href="/indicator/27"><span className="badge">년</span><span className="item_name">논벼 재배면적</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/28"><span className="badge">년</span><span className="item_name">친환경 농산물 인증면적</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/29"><span className="badge">년</span><span className="item_name">가축 사육두수 변화율</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/30"><span className="badge">년</span><span className="item_name">경지 면적당 화학비료 사용량</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/31"><span className="badge">년</span><span className="item_name">농업 부문 석유 소비량 비중</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/32"><span className="badge">년</span><span className="item_name">총인구 대비 농업인 비율</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/33"><span className="badge">년</span><span className="item_name">도시농업 경지면적</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/34"><span className="badge">년</span><span className="item_name">로컬푸드 매출액</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/35"><span className="badge">년</span><span className="item_name">1인당 하루 음식물류 폐기물 발생량</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/36"><span className="badge">년</span><span className="item_name">식생활교육 참여자수(누적)</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/37"><span className="badge">년</span><span className="item_name">탄소중립 생활 실천도(소비)</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                  </ul>
                </div>
                {/* 폐기물 */}
                <div className={`indicator_detail ${selectedCategory === 5 ? 'active' : ''}`}>
                  <div className="detail_header"><span className="category_name">폐기물</span></div>
                  <ul className="detail_list">
                    <li><a href="/indicator/38"><span className="badge">년</span><span className="item_name">생활폐기물 감량률</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/39"><span className="badge">년</span><span className="item_name">1인당 하루 생활폐기물 발생량</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/40"><span className="badge">년</span><span className="item_name">공공기관 녹색제품 구매 비율</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/41"><span className="badge">년</span><span className="item_name">생활폐기물 매립 비율</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/42"><span className="badge">년</span><span className="item_name">공공 소각시설 에너지 발생률(직전년도대비)</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/43"><span className="badge">년</span><span className="item_name">생활폐기물 재활용률</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/44"><span className="badge">년</span><span className="item_name">순환이용률</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/45"><span className="badge">년</span><span className="item_name">탄소중립 생활 실천도(자원순환)</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                  </ul>
                </div>
                {/* 산업 */}
                <div className={`indicator_detail ${selectedCategory === 6 ? 'active' : ''}`}>
                  <div className="detail_header"><span className="category_name">산업</span></div>
                  <ul className="detail_list">
                    <li><a href="/indicator/46"><span className="badge">년</span><span className="item_name">산업 부문 탄소집약도</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/47"><span className="badge">년</span><span className="item_name">산업 부문 전력 소비량</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/48"><span className="badge">년</span><span className="item_name">지역 제조업 탄소생산성</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/49"><span className="badge">년</span><span className="item_name">에너지다소비사업장 에너지 소비량</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/50"><span className="badge">년</span><span className="item_name">제조업・건설업 온실가스 배출량</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/51"><span className="badge">년</span><span className="item_name">산업 부문 전력 소비량 증가율</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                  </ul>
                </div>
                {/* 흡수원 */}
                <div className={`indicator_detail ${selectedCategory === 7 ? 'active' : ''}`}>
                  <div className="detail_header"><span className="category_name">흡수원</span></div>
                  <ul className="detail_list">
                    <li><a href="/indicator/52"><span className="badge">년</span><span className="item_name">1인당 도시공원 면적</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/53"><span className="badge">년</span><span className="item_name">불투수 면적 비율</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/54"><span className="badge">년</span><span className="item_name">1인당 생활권 도시림 면적</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/55"><span className="badge">년</span><span className="item_name">가로수 증가율</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/56"><span className="badge">년</span><span className="item_name">녹지율</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/57"><span className="badge">년</span><span className="item_name">산림 면적 비율</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/58"><span className="badge">년</span><span className="item_name">평균 임목축적</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                    <li><a href="/indicator/59"><span className="badge">년</span><span className="item_name">시설녹지 온실가스 흡수량</span><span className="item_year">-</span><span className="item_value">-</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="search_section">
          <div className="section_inner">
            <div className="search_wrap">
              <h2 className="search_title">통합검색</h2>
              <p className="search_desc">광주의 다양한 탄소중립 정보를<br/>한곳에서 검색해보세요.</p>
            </div>
            <div className="search_box">
              <div className="input_wrap">
                <input type="text" placeholder="검색어를 입력해주세요" />
                <button className="btn_search" aria-label="검색"><img src="/images/ic_search_blue.svg" alt="" /></button>
              </div>
              <div className="tag_list">
                <button className="tag_btn">#탄소중립</button>
                <button className="tag_btn">#생활실천</button>
                <button className="tag_btn">#에너지 절약</button>
                <button className="tag_btn">#기후위기</button>
                <button className="tag_btn">#재생에너지 비중</button>
                <button className="tag_btn">#부문별 정책지표</button>
                <button className="tag_btn">#탄소발자국</button>
                <button className="tag_btn">#기후변화</button>
                <button className="tag_btn">#시민참여</button>
              </div>
            </div>
          </div>
        </section>

        {/* Banner & Archive Section */}
        <section className="banner_archive_section">
          <div className="section_inner">
            <div className="banner_wrap">
              <div className="banner_header">
                <h2 className="section_title">알림창</h2>
                <div className="banner_controls">
                  <button className="btn_prev" onClick={() => setBannerIndex((prev) => (prev - 1 + 3) % 3)} aria-label="이전"><img src="/images/ic_prev_btn.svg" alt="" /></button>
                  <button className="btn_toggle" onClick={() => setBannerIsPlaying((prev) => !prev)} aria-label="정지"><img src={bannerIsPlaying ? '/images/ic_stop_btn.svg' : '/images/ic_play_btn.svg'} alt="" /></button>
                  <button className="btn_next" onClick={() => setBannerIndex((prev) => (prev + 1) % 3)} aria-label="다음"><img src="/images/ic_next_btn.svg" alt="" /></button>
                </div>
              </div>
              <div className="banner_slide">
                <a href="/event/1" className={`banner_item ${bannerIndex === 0 ? 'active' : ''}`}><img src="/images/image_banner01.png" alt="빛고을 기후위기 대응 시민총회" /></a>
                <a href="/event/2" className={`banner_item ${bannerIndex === 1 ? 'active' : ''}`}><img src="/images/image_banner02.png" alt="탄소중립 실천 캠페인" /></a>
                <a href="/event/3" className={`banner_item ${bannerIndex === 2 ? 'active' : ''}`}><img src="/images/image_banner03.png" alt="기후환경 교육 프로그램" /></a>
              </div>
            </div>
            <div className="archive_wrap">
              <div className="archive_header">
                <h2 className="section_title">정책 아카이브</h2>
                <a href="/archive" className="btn_more_link">+</a>
              </div>
              {/* 클릭시 보고서 상세페이지로 이동 */}
              <ul className="archive_list">
                <li><a href="/report/1" className="archive_item"><div className="archive_thumb"><img src="/images/image_report01.png" alt="" /></div></a></li>
                <li><a href="/report/2" className="archive_item"><div className="archive_thumb"><img src="/images/image_report02.png" alt="" /></div></a></li>
                <li><a href="/report/3" className="archive_item"><div className="archive_thumb"><img src="/images/image_report03.png" alt="" /></div></a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners_section">
          <div className="partners_container">
            <div className="partners_inner">
              <h2 className="partners_title">함께하는 기관</h2>
              <div className="partners_controls">
                <button className="btn_prev" onClick={handlePartnerPrev} aria-label="이전">&lt;</button>
                <button className="btn_toggle" onClick={() => setPartnerIsPlaying((prev) => !prev)} aria-label={partnerIsPlaying ? '정지' : '재생'}>{partnerIsPlaying ? 'II' : '▶'}</button>
                <button className="btn_next" onClick={handlePartnerNext} aria-label="다음">&gt;</button>
              </div>
            </div>
            <div className="partners_slider">
              {/* 클릭시 외부 사이트로 이동 */}
              <div className="partners_track" ref={partnerRef}>
                <div className="partner_item"><a href="https://www.kcen.kr/" target="_blank" rel="noopener noreferrer">기후환경네트워크</a></div>
                <div className="partner_item"><a href="https://www.energy.or.kr/" target="_blank" rel="noopener noreferrer">에너지관리공단 광주전남지역본부</a></div>
                <div className="partner_item"><a href="https://www.hometax.go.kr/" target="_blank" rel="noopener noreferrer">홈텍스</a></div>
                <div className="partner_item"><a href="https://www.gwangju.go.kr/" target="_blank" rel="noopener noreferrer">광주광역시</a></div>
                <div className="partner_item"><a href="https://www.keiti.re.kr/" target="_blank" rel="noopener noreferrer">한국환경산업기술원</a></div>
                <div className="partner_item"><a href="https://www.gen.go.kr/" target="_blank" rel="noopener noreferrer">광주광역시 교육청</a></div>
                <div className="partner_item"><a href="https://www.me.go.kr/ysgme/" target="_blank" rel="noopener noreferrer">영산강유역환경청</a></div>
                <div className="partner_item"><a href="https://www.gwangju.go.kr/welfare/" target="_blank" rel="noopener noreferrer">광주복지플랫폼</a></div>
                <div className="partner_item"><a href="https://energyvillage.kr/" target="_blank" rel="noopener noreferrer">에너지전환마을 지원 플랫폼</a></div>
                <div className="partner_item"><a href="https://www.greenteacher.kr/" target="_blank" rel="noopener noreferrer">광주광역시 환경교육통합시스템</a></div>
                <div className="partner_item"><a href="https://www.kcen.kr/" target="_blank" rel="noopener noreferrer">기후환경네트워크</a></div>
                <div className="partner_item"><a href="https://gcea.or.kr/" target="_blank" rel="noopener noreferrer">광주기후에너지진흥원</a></div>
                <div className="partner_item"><a href="https://www.kcen.kr/" target="_blank" rel="noopener noreferrer">기후환경네트워크</a></div>
                <div className="partner_item"><a href="https://www.energy.or.kr/" target="_blank" rel="noopener noreferrer">에너지관리공단 광주전남지역본부</a></div>
                <div className="partner_item"><a href="https://www.hometax.go.kr/" target="_blank" rel="noopener noreferrer">홈텍스</a></div>
                <div className="partner_item"><a href="https://www.gwangju.go.kr/" target="_blank" rel="noopener noreferrer">광주광역시</a></div>
                <div className="partner_item"><a href="https://www.keiti.re.kr/" target="_blank" rel="noopener noreferrer">한국환경산업기술원</a></div>
                <div className="partner_item"><a href="https://www.gen.go.kr/" target="_blank" rel="noopener noreferrer">광주광역시 교육청</a></div>
                <div className="partner_item"><a href="https://www.me.go.kr/ysgme/" target="_blank" rel="noopener noreferrer">영산강유역환경청</a></div>
                <div className="partner_item"><a href="https://www.gwangju.go.kr/welfare/" target="_blank" rel="noopener noreferrer">광주복지플랫폼</a></div>
                <div className="partner_item"><a href="https://energyvillage.kr/" target="_blank" rel="noopener noreferrer">에너지전환마을 지원 플랫폼</a></div>
                <div className="partner_item"><a href="https://www.greenteacher.kr/" target="_blank" rel="noopener noreferrer">광주광역시 환경교육통합시스템</a></div>
                <div className="partner_item"><a href="https://www.kcen.kr/" target="_blank" rel="noopener noreferrer">기후환경네트워크</a></div>
                <div className="partner_item"><a href="https://gcea.or.kr/" target="_blank" rel="noopener noreferrer">광주기후에너지진흥원</a></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 약속하기 개인정보 수집 팝업 */}
      <div id="promise_popup_overlay" aria-hidden="true">
        <div className="popup_modal" role="dialog" aria-modal="true" aria-labelledby="promise_popup_title">
          <div className="popup_header">
            <strong id="promise_popup_title">개인정보 수집·이용 동의</strong>
            <button type="button" className="popup_close" aria-label="닫기">×</button>
          </div>
          <form className="popup_body" id="promise_form">
            <div className="selected_promise_info">
              <img src="" alt="" id="promise_popup_icon" />
              <span id="promise_popup_label"></span>
            </div>
            <div className="form_grid">
              <div className="form_row">
                <label htmlFor="promise_name"><span className="req" aria-hidden="true">*</span> 성명</label>
                <input id="promise_name" name="name" type="text" required placeholder="홍길동" />
              </div>
              <div className="form_row">
                <span className="form_label"><span className="req" aria-hidden="true">*</span> 성별</span>
                <div className="radio_group segmented" role="radiogroup" aria-label="성별">
                  <label className="seg_item">
                    <input type="radio" name="gender" value="여성" required />
                    <span>여</span>
                  </label>
                  <label className="seg_item">
                    <input type="radio" name="gender" value="남성" />
                    <span>남</span>
                  </label>
                </div>
              </div>
              <div className="form_row">
                <label htmlFor="promise_age"><span className="req" aria-hidden="true">*</span> 연령대</label>
                <div className="select_wrap">
                  <select id="promise_age" name="age" required>
                    <option value="">선택</option>
                    <option>10대</option>
                    <option>20대</option>
                    <option>30대</option>
                    <option>40대</option>
                    <option>50대</option>
                    <option>60대 이상</option>
                  </select>
                </div>
              </div>
              <div className="form_row">
                <label htmlFor="promise_addr"><span className="req" aria-hidden="true">*</span> 거주지</label>
                <input id="promise_addr" name="address" type="text" required placeholder="예시) 서구 유촌동" />
              </div>
            </div>

            <div className="form_row agree_full">
              <div className="agree_box">
                <p className="agree_desc">
                  (수집자) 광주광역시 기후에너지진흥원은 문의 처리 및 서비스 제공을 위해 귀하의 이름, 연락처, 주소를 수집·이용합니다.
                  자세한 사항은 개인정보처리방침을 확인하세요.{" "}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer">개인정보처리방침</a>
                </p>
              </div>
            </div>

            <div className="form_actions full">
              <button type="submit" className="btn_primary btn_full" id="promise_submit_btn" disabled>동의합니다</button>
            </div>
          </form>
        </div>
      </div>

      {/* 퀵메뉴 - gcea.or.kr 스타일 (반응형에서 숨김, 메인에서만 표시) */}
      <aside className="quick_menu" aria-label="퀵메뉴">
        <a href="#" className="quick_item">
          <img src="/images/ic_floating01.svg" alt="" className="quick_icon" />
          <span className="quick_text">광주도시탄소<br/> 관리 시스템<br/>(UCMS)</span>
        </a>
        <a href="#" className="quick_item">
          <img src="/images/ic_floating02.svg" alt="" className="quick_icon" />
          <span className="quick_text">도시평가모델<br/>(UAMS)</span>
        </a>
        <a href="#" className="quick_item">
          <img src="/images/ic_floating03.svg" alt="" className="quick_icon" />
          <span className="quick_text">기후·환경·에너지<br/> 빅데이터<br/> 플랫폼 </span>
        </a>
        <a href="#" className="quick_item">
          <img src="/images/ic_floating04.svg" alt="" className="quick_icon" />
          <span className="quick_text">기후환경<br/>교육 온라인<br/>플랫폼</span>
        </a>
        <a href="#" className="quick_item">
          <img src="/images/ic_floating05.svg" alt="" className="quick_icon" />
          <span className="quick_text">광주광역시<br/>환경교육<br/>통합시스템</span>
        </a>
      </aside>
    </main>
  );
}
