import type { ReactNode } from 'react';
import Link from 'next/link';

export function PortfolioShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <a href="#main-content" className="skip-link">
        본문 바로가기
      </a>
      <header className="border-b border-slate-700">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="font-mono font-bold text-cyan-300">
            NADIR 360
          </Link>
          <nav aria-label="주요 메뉴" className="flex flex-wrap gap-5">
            <Link href="/#projects">프로젝트</Link>
            <Link href="/#career">경력</Link>
          </nav>
        </div>
      </header>
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-6 py-12">
        {children}
      </main>
      <footer className="border-t border-slate-700 px-6 py-8 text-center text-sm text-slate-300">
        Nadir 360 · 지도 기반 360° 포트폴리오
      </footer>
    </div>
  );
}
