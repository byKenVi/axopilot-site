import { getCollection } from 'astro:content';

export async function getPosts() {
  // Un article daté dans le futur reste caché jusqu'à sa date : le rebuild
  // quotidien de Netlify le fait apparaître le bon jour (publication planifiée).
  const now = Date.now();
  const posts = await getCollection(
    'blog',
    ({ data }) => import.meta.env.DEV || (!data.draft && data.date.valueOf() <= now),
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('fr-CA', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
