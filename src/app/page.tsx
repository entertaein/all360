import { careers, profile, projects } from '@/entities/portfolio/data';
import { PortfolioShell } from '@/shared/ui/portfolio-shell';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <PortfolioShell>
      <section aria-labelledby="hero-title" className="max-w-3xl space-y-6 py-10">
        <p className="font-mono text-sm tracking-widest text-cyan-300">NADIR 360</p>
        <h1 id="hero-title" className="text-4xl leading-tight font-bold sm:text-6xl">
          {profile.headline}
        </h1>
        <p className="text-lg leading-8 text-slate-300">{profile.description}</p>
        <Link
          href="#projects"
          className="inline-flex min-h-11 items-center rounded-lg bg-cyan-300 px-5 font-semibold text-slate-950"
        >
          프로젝트 살펴보기
        </Link>
        <p className="text-sm text-slate-300">360° 체험은 Phase 3에서 공개 예정입니다.</p>
      </section>
      <section id="projects" aria-labelledby="projects-title" className="scroll-mt-6 py-12">
        <h2 id="projects-title" className="mb-6 text-3xl font-semibold">
          프로젝트
        </h2>
        <p className="mb-6 text-slate-300">현재 사례 내용은 작성용 초안입니다.</p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col rounded-xl border border-slate-700 p-6"
            >
              <h3 className="text-xl font-semibold">
                <Link
                  href={'/projects/' + project.slug}
                  className="text-cyan-300 underline underline-offset-4"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="mt-4 flex-1 leading-7 text-slate-300">{project.summary}</p>
              <ul aria-label="기술 스택" className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded bg-slate-800 px-2 py-1 text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section id="career" aria-labelledby="career-title" className="scroll-mt-6 py-12">
        <h2 id="career-title" className="mb-6 text-3xl font-semibold">
          경력
        </h2>
        <ol className="space-y-6 border-l border-slate-600 pl-6">
          {careers.map((career) => (
            <li key={career.period + career.role}>
              <p className="text-sm text-cyan-300">{career.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{career.role}</h3>
              <p className="mt-2 leading-7 text-slate-300">{career.detail}</p>
            </li>
          ))}
        </ol>
      </section>
    </PortfolioShell>
  );
}
