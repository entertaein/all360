import Link from 'next/link';
import { PortfolioShell } from '@/shared/ui/portfolio-shell';

export default function ProjectNotFound() {
  return (
    <PortfolioShell>
      <h1 className="text-3xl font-bold">프로젝트를 찾을 수 없습니다</h1>
      <p className="mt-4 text-slate-300">주소를 확인하거나 홈에서 프로젝트를 선택해 주세요.</p>
      <Link href="/" className="mt-6 inline-block text-cyan-300 underline">
        홈으로 돌아가기
      </Link>
    </PortfolioShell>
  );
}
