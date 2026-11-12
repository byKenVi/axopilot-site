// Génère la couverture de chaque article (1200x630, aux couleurs AxioPilot).
// Elle sert d'image en tête d'article et d'aperçu LinkedIn / Facebook (og:image).
// Usage : node scripts/cover.mjs            -> couvertures manquantes seulement
//         node scripts/cover.mjs --force    -> régénère tout
//         node scripts/cover.mjs <slug>     -> un seul article
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const blogDir = path.join(root, 'src/content/blog');
const outDir = path.join(root, 'public/blogue');
const font = (p) => fs.readFileSync(path.join(root, 'node_modules/@fontsource', p));
const fonts = [
  { name: 'Bricolage', data: font('bricolage-grotesque/files/bricolage-grotesque-latin-700-normal.woff'), weight: 700 },
  { name: 'Mono', data: font('geist-mono/files/geist-mono-latin-500-normal.woff'), weight: 500 },
];
const logo = 'data:image/png;base64,' + fs.readFileSync(path.join(root, 'public/logo-wordmark-white.png')).toString('base64');

function front(md) {
  const fm = md.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const get = (k) => fm.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, 'm'))?.[1];
  return { title: get('title') ?? '', category: get('category') ?? 'Guide' };
}

const h = (type, style, children) => ({ type, props: { style, children } });

async function cover({ title, category }) {
  const size = title.length > 70 ? 54 : title.length > 50 ? 62 : 70;
  const tree = h('div', {
    width: 1200, height: 630, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    padding: '64px 72px', color: '#fff', fontFamily: 'Bricolage',
    backgroundColor: '#0A1240',
    backgroundImage: 'radial-gradient(circle at 92% 8%, rgba(143,233,255,.55) 0%, rgba(107,59,255,.35) 28%, rgba(10,18,64,0) 58%), linear-gradient(135deg, #0B1E9C 0%, #0A1240 70%)',
  }, [
    h('div', { display: 'flex', fontFamily: 'Mono', fontSize: 24, letterSpacing: 3, color: '#8FE9FF', textTransform: 'uppercase' },
      `Blogue · ${category}`),
    h('div', { display: 'flex', fontSize: size, lineHeight: 1.06, letterSpacing: -1.5, maxWidth: 1000 }, title),
    h('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, [
      { type: 'img', props: { src: logo, width: 286, height: 40 } },
      h('div', { display: 'flex', fontFamily: 'Mono', fontSize: 22, color: 'rgba(255,255,255,.7)' }, 'axiopilot.com'),
    ]),
  ]);
  const svg = await satori(tree, { width: 1200, height: 630, fonts });
  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
}

const args = process.argv.slice(2);
const force = args.includes('--force');
const only = args.find((a) => !a.startsWith('--'));
fs.mkdirSync(outDir, { recursive: true });
for (const file of fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'))) {
  const slug = file.replace(/\.md$/, '');
  if (only && slug !== only) continue;
  const out = path.join(outDir, `${slug}.png`);
  if (fs.existsSync(out) && !force && !only) continue;
  fs.writeFileSync(out, await cover(front(fs.readFileSync(path.join(blogDir, file), 'utf8'))));
  console.log('couverture :', path.relative(root, out));
}
