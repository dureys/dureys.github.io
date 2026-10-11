import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/systems/', '/workflows/task-intake/'].map(path => ({ url: `https://dureys.github.io${path || '/'}` }));
}
