import type { APIRoute } from 'astro';
import { getPosts } from '../lib';
import { SITE } from '../consts';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const items = posts.map((p) => {
    const link = `${SITE.url}/blogue/${p.id}/`;
    return `<item><title>${esc(p.data.title)}</title><link>${link}</link><guid>${link}</guid><pubDate>${p.data.date.toUTCString()}</pubDate><description>${esc(p.data.description)}</description></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Blogue AxioPilot</title><link>${SITE.url}/blogue/</link><description>Automatisation pour agences du Québec</description><language>fr-ca</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
