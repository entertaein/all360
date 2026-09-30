import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/entities/portfolio/data';
import { PortfolioShell } from '@/shared/ui/portfolio-shell';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: '프로젝트를 찾을 수 없습니다' };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: '/projects/' + project.slug },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: '/projects/' + project.slug,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sections = [
    { title: '문제', body: project.problem },
    { title: '선택지', body: project.alternatives },
    { title: '설계', body: project.decision },
    { title: '구현', body: project.implementation },
    { title: '검증', body: project.validation },
    { title: '결과', body: project.result },
  ];

  return (
    <PortfolioShell>
      <article className="mx-auto max-w-3xl">
        <Link href="/#projects" className="text-cyan-300 underline">
          프로젝트 목록으로
        </Link>
        <h1 className="mt-8 text-4xl font-bold">{project.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-300">{project.summary}</p>
        <p className="mt-4 text-sm text-cyan-300">
          작성용 초안 · 실제 이력과 검증 결과로 교체 예정
        </p>
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="mt-3 leading-8 text-slate-300">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </PortfolioShell>
  );
}
