"use client";

import { useEffect, useMemo, useState } from "react";

type TaskItem = {
  id: number;
  img: string;
  title: string;
  desc: string;
  category: "에너지절약" | "자원순환" | "친환경 교통" | "녹색소비" | "흡수원 보호";
};

const CATEGORIES = ["전체", "에너지절약", "자원순환", "친환경 교통", "녹색소비", "흡수원 보호"] as const;

export default function PracticeTasksPage() {
  // 데이터 생성: 이미지 image_pp01.png ~ image_pp25.png 매핑
  const items: TaskItem[] = useMemo(() => {
    const titles = [
      // 에너지절약(1~5)
      "창틀·문틈 바람막이 설치", "전기밥솥 보온 단축", "실내 적정온도 설정", "비사용 공간 소등", "대기전력 차단",
      // 자원순환(6~10)
      "장바구니 사용", "텀블러 이용", "쓰레기 줄이기", "일회용품 사용 절감", "수리·수선하여 사용",
      // 친환경 교통(11~15)
      "공유차량 이용", "가까운 거리 걷기", "정속주행 실천", "자전거 이용", "대중교통 이용",
      // 녹색소비(16~20)
      "구매 전 재활용 고려", "녹색제품 구매", "필요한 만큼만 구입", "채소 자급 소비", "제철과일 소비",
      // 흡수원 보호(21~25)
      "숲 지키기 봉사활동 참여", "숲, 생태계 보전 활동", "숲 가꾸기 모임 참여", "내 나무 갖기 운동", "가정 내 식물 재배"
    ];
    const descs = [
      "창틀∙문틈에 바람막이를 붙이고, 커튼과 블라인드로 냉난방 손실 줄이기",
      "밥은 소분해 냉장∙냉동 보관하고 필요할 때 데워 먹기",
      " 적정 실내온도(여름철 25~28℃, 겨울철 18~20℃) 유지, 에어컨 온도 2℃ 높이고 보일러 온도 2℃ 낮추기",
      "사용하지 않는 공간의 조명 끄기", "사용하지 않는 공간의 조명 끄기",
      "마트나 편의점 등에서 일회용 봉투 대신 재사용 가능한 장바구니 사용하기", "카페나 사무실에서 음료를 마실 때 텀블러 이용하기", "필요하지 않은 물건은 버리기 전에 중고거래나 나눔장터에서 쓰임새 찾기", "배달음식 주문할 때 일회용 수저, 포크를 받지 않도록 옵션 확인하기 음식 포장할 때 다회용 용기를 들고 가서 포장하기", "의류나 가전제품 등 수리 및 수선하여 사용하기",
      "공유 차량 및 자전거, 전기 스쿠터 이용하기", "가까운 거리를 이동할 때는 걷기", "제한속도 이하로 부드럽게 운전하고, 불필요한 공회전 줄이기", "가까운 거리를 이동할 때는 승용차 대신 자전거 적극 이용하기", "버스, 지하철, 기차 등 적극 이용하기",
      "멸균팩, 코팅용기 등 복합재질 제품보다 단일재질(종이, 유리, 금속 등) 제품 선택하기 / 포장재가 적고 분리배출 간단한 제품 고르기", "제품을 구매할 때 ‘환경표지‘, ‘저탄소‘, ‘우수재활용‘ 표시가 있는 제품 선택하기", "장보기 전 필요한 양 미리 계획하고 구입하기, 남은 식재료는 올바르게 보관하거나 재활용 요리로 활용하기", "베란다, 마당, 공동 텃밭 등에서 채소를 직접 길러 자급 소비하기", "계절에 맞는 제철 과일과 채소 우선 선택하기",
      "지역에서 개최되는 나무심기 행사 참여하기", "산불 발견 즉시 신고하기, 등산 시 인화물질 소지하지 않기", "정부, 지자체, 기업, 단체 등에서 추진하는 나무심기 운동 참여하기", "출생, 입학, 졸업, 결혼, 승진, 창업 등 기념일에 나무를 심어 뜻깊은 기념일 만들기", "집 안에 식물 키우기, 가까운 텃밭이나 옥상정원 가꾸기"
    ];
    const categoryForIndex = (i: number): TaskItem["category"] => {
      if (i <= 5) return "에너지절약";
      if (i <= 10) return "자원순환";
      if (i <= 15) return "친환경 교통";
      if (i <= 20) return "녹색소비";
      return "흡수원 보호";
    };
    const list: TaskItem[] = [];
    for (let i = 1; i <= 25; i += 1) {
      const idx = i - 1;
      list.push({
        id: i,
        img: `/images/image_pp${String(i).padStart(2, "0")}.png`,
        title: titles[idx] || `실천과제 ${i}`,
        desc: descs[idx] || "지속가능한 생활을 위한 시민 실천과제입니다.",
        category: categoryForIndex(i)
      });
    }
    return list;
  }, []);

  const [topTab, setTopTab] = useState<"실천과제" | "이달의 실천과제">("실천과제");
  const [subTab, setSubTab] = useState<(typeof CATEGORIES)[number]>("전체");

  useEffect(() => {
    // 간단 탭 스크립트 (JSP 변환 용이)
    const onTopClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      e.preventDefault();
      const name = (a.textContent || "").trim() as "실천과제" | "이달의 실천과제";
      setTopTab(name);
    };
    const onSubClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      e.preventDefault();
      const name = (a.textContent || "").trim() as (typeof CATEGORIES)[number];
      setSubTab(name);
    };
    const topLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".sub_tabs a[role='tab']"));
    const subLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".inner_tabs a"));
    topLinks.forEach(a => a.addEventListener("click", onTopClick));
    subLinks.forEach(a => a.addEventListener("click", onSubClick));
    return () => {
      topLinks.forEach(a => a.removeEventListener("click", onTopClick));
      subLinks.forEach(a => a.removeEventListener("click", onSubClick));
    };
  }, []);

  const filtered = useMemo(() => {
    if (subTab === "전체") return items;
    return items.filter(i => i.category === subTab);
  }, [items, subTab]);

  return (
    <main role="main" aria-label="시민실천과제">
      <div id="Content" className="PracticeTasks">
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
                    <li>시민실천과제</li>
                  </ol>
                </nav>
                <div className="sub_title_wrap">
                  <h1 className="sub_title">시민실천과제</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="content_wrap">
          <div id="cont_inner">
            {/* 1뎁스 탭 */}
            <ul className="sub_tabs" role="tablist" aria-label="1뎁스 탭">
              <li className={topTab === "실천과제" ? "is-active" : ""}><a href="#" role="tab" aria-selected={topTab === "실천과제"}>실천과제</a></li>
              <li className={topTab === "이달의 실천과제" ? "is-active" : ""}><a href="#" role="tab" aria-selected={topTab === "이달의 실천과제"}>이달의 실천과제</a></li>
            </ul>

            {/* 2뎁스 탭 */}
            <div className="inner_tabs" aria-label="2뎁스 탭">
              <ul>
                {CATEGORIES.map(name => (
                  <li key={name} className={subTab === name ? "is-active" : ""}><a href="#">{name}</a></li>
                ))}
              </ul>
            </div>

            {/* 타이틀 */}
            <h2 className="cont_title">{topTab}</h2>

            {/* 과제 리스트 */}
            <section className="task_grid" aria-label={`${subTab} 과제 목록`}>
              {filtered.map((task, idx) => (
                <article key={task.id} className="task">
                  <div className="task_link" aria-label={`${task.title}`}>
                    <figure className="thumb">
                      <img src={task.img} alt="" />
                    </figure>
                    <div className="meta">
                      <div className="title_row">
                        <span className="num">{String(idx + 1).padStart(2, "0")}</span>
                        <h3 className="title">{task.title}</h3>
                      </div>
                      <p className="desc">· {task.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}


