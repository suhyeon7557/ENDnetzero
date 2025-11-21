"use client";

import Image from "next/image";
import Link from "next/link";

export default function CarbonNeutralPage() {
  return (
    <main role="main" aria-label="탄소중립 소개">
      <div id="Content" className="CarbonNeutral">
        <div id="nav_wrap" aria-label="내비게이션 영역">
          <div id="nav_inner">
            <div className="visual" aria-label="서브 비주얼 영역">
              <div className="visual_inner">
                <nav className="breadcrumb" aria-label="경로">
                  <ol>
                    <li><a href="/"><img src="/images/ic_home_white.svg" alt="홈" /></a></li>
                    <li aria-hidden="true">›</li>
                    <li>탄소중립</li>
                  </ol>
                </nav>
                <div className="sub_title_wrap">
                  <h1 className="sub_title">탄소중립</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="content_wrap" aria-label="콘텐츠 영역">
          <div id="cont_inner">
            {/* Intro */}
            <div className="section intro" aria-labelledby="intro_title">
              <h2 id="intro_title" className="cont_title">탄소중립의 정의</h2>
              <p>
                <span className="dot"></span>
                우리나라의 2018년 온실가스 총배출량(LULUCF 제외)은 1990년도에 비해 <span className="txt_red">149.0% 증가</span>했고 2017년보다는 <span className="txt_red">2.5% 증가</span>했습니다.<br/>
                1990년대는 경제성장에 따라 온실가스 배출량도 크게 늘었고 1998년 외환위기의 영향으로 온실가스 총배출량은 <span className="txt_blue">14.1% 감소</span>한 이후로 2000년대는 경기가 회복되면서 온실가스 배출량이
                꾸준히 증가했습니다.
              </p>
              <br/>
              <p>탄소중립은 이렇게 인간활동에 의해 배출된 온실가스가 전 지구적 이산화탄소 흡수량과 균형을 이뤄 대기 중 <span className="txt_blue">이산화탄소 농도가 더 이상 높아지지 않게 하는 것</span>
              을 의미합니다.</p>
            </div>
 
            <div className="carbon_img">
                <img src="/images/image_carbon.svg" alt="탄소중립 이미지" />
            </div>
        
          </div>
        </div>
      </div>
    </main>
  );
}


