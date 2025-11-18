"use client";

import { useEffect, useMemo, useState } from "react";
import type React from "react";
import Image from "next/image";

type PromiseItem = {
  id: number;
  label: string;
  icon: string;
};

type PromiseCategory = {
  key: string;
  title: string;
  items: PromiseItem[];
};

const BASE_PEOPLE_COUNT =
  Number(process.env.NEXT_PUBLIC_PROMISE_BASE_COUNT ?? 34);
const STORAGE_KEY = "promise_people_count";

export default function PromisePage() {
  const categories: PromiseCategory[] = useMemo(
    () => [
      {
        key: "energy",
        title: "에너지 절약",
        items: [
          { id: 1, label: "대기전력 차단", icon: "/images/ic_promise01.svg" },
          { id: 2, label: "비사용 공간 소등", icon: "/images/ic_promise02.svg" },
          { id: 3, label: "4℃ 냉난방 온도 설정", icon: "/images/ic_promise03.svg" },
          { id: 4, label: "전기밥솥 보온 단축", icon: "/images/ic_promise04.svg" },
          { id: 5, label: "고효율 제품 사용", icon: "/images/ic_promise05.svg" },
        ],
      },
      {
        key: "cycle",
        title: "자원순환",
        items: [
          { id: 6, label: "텀블러 이용", icon: "/images/ic_promise06.svg" },
          { id: 7, label: "수리·사용연장 생활화", icon: "/images/ic_promise07.svg" },
          { id: 8, label: "일회용품 사용 줄이기", icon: "/images/ic_promise08.svg" },
          { id: 9, label: "쓰레기 분리 배출", icon: "/images/ic_promise09.svg" },
          { id: 10, label: "장바구니 사용", icon: "/images/ic_promise10.svg" },
        ],
      },
      {
        key: "transport",
        title: "친환경 교통",
        items: [
          { id: 11, label: "가까운 곳 걷기", icon: "/images/ic_promise11.svg" },
          { id: 12, label: "대중교통 이용", icon: "/images/ic_promise12.svg" },
          { id: 13, label: "자전거 이용", icon: "/images/ic_promise13.svg" },
          { id: 14, label: "공유차량 이용", icon: "/images/ic_promise14.svg" },
          { id: 15, label: "승용차 함께 타기", icon: "/images/ic_promise15.svg" },
        ],
      },
      {
        key: "green-consume",
        title: "녹색소비",
        items: [
          { id: 16, label: "제철·지역 먹거리", icon: "/images/ic_promise16.svg" },
          { id: 17, label: "채소·저탄소 식단", icon: "/images/ic_promise17.svg" },
          { id: 18, label: "필요한 만큼만 구입", icon: "/images/ic_promise18.svg" },
          { id: 19, label: "녹색제품 구입", icon: "/images/ic_promise19.svg" },
          { id: 20, label: "구매 전 환경성 고려", icon: "/images/ic_promise20.svg" },
        ],
      },
      {
        key: "sink",
        title: "흡수원 보호",
        items: [
          { id: 21, label: "가정 내 식재", icon: "/images/ic_promise21.svg" },
          { id: 22, label: "숲 지키기 참여", icon: "/images/ic_promise22.svg" },
          { id: 23, label: "나무 가꾸기", icon: "/images/ic_promise23.svg" },
          { id: 24, label: "함께하는 실천", icon: "/images/ic_promise24.svg" },
          { id: 25, label: "생태 보전 활동", icon: "/images/ic_promise25.svg" },
        ],
      },
    ],
    []
  );

  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [people, setPeople] = useState<number>(BASE_PEOPLE_COUNT);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = Number(saved);
      if (!Number.isNaN(parsed)) setPeople(parsed);
    } else {
      window.localStorage.setItem(STORAGE_KEY, String(BASE_PEOPLE_COUNT));
    }
  }, []);

  const toggleCheck = (id: number) => {
    setChecked(prev => {
      const draft = new Set(prev);
      if (draft.has(id)) draft.delete(id);
      else draft.add(id);
      return draft;
    });
  };

  const onPromise = () => {
    const next = people + 1;
    setPeople(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(next));
    } catch {}
  };

  const selectedCount = checked.size;
  const openPopup = () => {
    if (checked.size === 0) return;
    setIsOpen(true);
  };
  const closePopup = () => setIsOpen(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    onPromise();
    setIsOpen(false);
    form.reset();
    setIsFormValid(false);
  };
  const onFormChange = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    setIsFormValid(form.checkValidity());
  };

  // select 화살표 회전 토글(열기/닫기 시 복구)
  useEffect(() => {
    if (!isOpen) return;
    const wraps = Array.from(document.querySelectorAll<HTMLDivElement>(".select_wrap"));
    const cleanups: Array<() => void> = [];
    wraps.forEach(wrap => {
      const sel = wrap.querySelector("select");
      if (!sel) return;
      const open = () => wrap.classList.add("is-open");
      const close = () => wrap.classList.remove("is-open");
      sel.addEventListener("focus", open);
      sel.addEventListener("blur", close);
      sel.addEventListener("change", close);
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") close();
      };
      sel.addEventListener("keydown", onKeyDown);
      cleanups.push(() => {
        sel.removeEventListener("focus", open);
        sel.removeEventListener("blur", close);
        sel.removeEventListener("change", close);
        sel.removeEventListener("keydown", onKeyDown);
      });
    });
    return () => cleanups.forEach(fn => fn());
  }, [isOpen]);

  return (
    <main role="main" aria-label="약속하기 페이지">
      <div id="Content" className="Promise">
        <div id="nav_wrap" aria-label="내비게이션 영역">
          <div id="nav_inner">
            <div className="visual" aria-label="서브 비주얼 영역">
              <div className="visual_inner">
                <nav className="breadcrumb" aria-label="경로">
                  <ol>
                    <li>
                      <a href="/">
                        <Image src="/images/ic_home_white.svg" alt="홈" width={16} height={16} />
                      </a>
                    </li>
                    <li aria-hidden="true">›</li>
                    <li>시민실천</li>
                    <li aria-hidden="true">›</li>
                    <li aria-current="page">약속하기</li>
                  </ol>
                </nav>
                <div className="sub_title_wrap">
                  <h1 className="sub_title">약속하기</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="content_wrap" aria-label="콘텐츠 영역">
          <div id="cont_inner">
          <p className="promise_total">
                  지금까지 <strong><em>{people}</em></strong>명이 탄소중립 실천을
                  약속해주셨습니다.
                </p>
                <div className="guide_box" role="note">
                  <div className="in-box">
                    <p>
                      일상에서 에너지 절약, 자원순환, 친환경 교통 등 탄소중립
                      실천에 동참해주세요.<br />
                      여러분의 참여가 모여
                      <span className="txt_blue">
                        &nbsp;광주광역시 2045년 
                        탄소중립 달성과 기후위기 대응
                      </span>
                      에 큰 힘이 됩니다.
                    </p>
                  </div>
                </div>
            {categories.map(cat => (
              <section key={cat.key} className="promise_section">
                <header className="section_head">
                  <span className="dot" aria-hidden="true" />
                  <h2 className="section_title">{cat.title}</h2>
                </header>
                <ul className="tile_grid" role="group" aria-label={cat.title}>
                  {cat.items.map(item => {
                    const isChecked = checked.has(item.id);
                    const inputId = `promise_${item.id}`;
                    return (
                      <li key={item.id} className={isChecked ? "is-checked" : ""}>
                        <input
                          id={inputId}
                          type="checkbox"
                          className="visually-hidden"
                          aria-label={item.label}
                          checked={isChecked}
                          onChange={() => toggleCheck(item.id)}
                        />
                        <label htmlFor={inputId}>
                          <span className="icon_wrap" aria-hidden="true">
                            <Image src={item.icon} alt="" width={72} height={72} />
                          </span>
                          <span className="label_txt">{item.label}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}

            <button
              type="button"
              className="promise_bar"
              onClick={openPopup}
              aria-label="약속하기"
              disabled={selectedCount === 0}
              >
              <p className="summary">
                <strong>{selectedCount}</strong>개 의 탄소중립 실천을 약속합니다.
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* 개인정보 수집 팝업 */}
      <div
        id="popup_overlay"
        className={isOpen ? "is-open" : ""}
        onClick={closePopup}
        aria-hidden={isOpen ? "false" : "true"}
      >
        <div className="popup_modal" role="dialog" aria-modal="true" aria-labelledby="popup_title" onClick={(e) => e.stopPropagation()}>
          <div className="popup_header">
            <strong id="popup_title">개인정보 수집·이용 동의</strong>
            <button type="button" className="popup_close" aria-label="닫기" onClick={closePopup}>×</button>
          </div>
          <form className="popup_body" onSubmit={onSubmit} onChange={onFormChange} onInput={onFormChange}>
            <div className="form_grid">
              <div className="form_row">
                <label htmlFor="u_name"><span className="req" aria-hidden="true">*</span> 성명</label>
                <input id="u_name" name="name" type="text" required placeholder="홍길동" />
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
                <label htmlFor="u_age"><span className="req" aria-hidden="true">*</span> 연령대</label>
                <div className="select_wrap">
                  <select id="u_age" name="age" required>
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
                <label htmlFor="u_addr"><span className="req" aria-hidden="true">*</span> 거주지</label>
                <input id="u_addr" name="address" type="text" required placeholder="예시) 서구 유촌동" />
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
              <button type="submit" className="btn_primary btn_full" disabled={!isFormValid}>동의합니다</button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}


