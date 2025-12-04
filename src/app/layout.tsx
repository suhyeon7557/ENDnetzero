import type { Metadata } from "next";
import "../../styles/font.scss";
import "./globals.scss";
import "../layout/header.scss";
import "../layout/footer.scss";
import "../layout/common.scss";
import "../layout/search.scss";
import "../layout/promise.scss";
import "../layout/history.scss";
import "../layout/climate.scss";
import "../layout/carbon.scss";
import "../layout/practice.scss";
import "../layout/emission-map.scss";
import "../layout/direction.scss";
import "../layout/main.scss";
import "../layout/practice-guide.scss";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "NetZero",
  description: "NetZero 홈페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        <Header />
        {children}
        <Footer />
        
        {/* 대시보드 플로팅 버튼 - 모든 페이지에서 표시 */}
        <a href="#" className="floating_dashboard" aria-label="대시보드">
          <img src="/images/ic_dashboard_btn.svg" alt="" className="floating_icon" />
          <span className="floating_text">대시보드</span>
        </a>
      </body>
    </html>
  );
}


