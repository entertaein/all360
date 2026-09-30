import type { MetadataRoute } from 'next';
import { env } from '@/env';
import { projects } from '@/entities/portfolio/data';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', ...projects.map((project) => '/projects/' + project.slug)].map((path) => ({
    url: new URL(path, env.NEXT_PUBLIC_APP_URL).href,
  }));
}
