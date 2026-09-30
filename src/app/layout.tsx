import type { Metadata } from 'next';
import { env } from '@/env';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: { default: 'Nadir 360', template: '%s | Nadir 360' },
  description: '지도와 360° 경험을 만드는 프론트엔드 개발자의 포트폴리오',
  openGraph: {
    title: 'Nadir 360',
    description: '지도 기반 360° 가상투어 포트폴리오',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
