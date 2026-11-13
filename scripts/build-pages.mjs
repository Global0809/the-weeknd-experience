import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';

// Keep the authored source and the existing Sites deployment unchanged. Only
// this separate static artifact is adapted for a GitHub project-page prefix.
await import('./build.mjs');

const root = path.resolve(import.meta.dirname, '..');
const target = path.join(root, 'pages-out');
const marker = path.join(target, '.weeknd-pages-generated');
const base = process.env.PAGES_BASE_PATH ?? '/the-weeknd-experience/';
const origin = (process.env.PAGES_ORIGIN ?? 'https://global0809.github.io').replace(/\/$/, '');
if (!/^\/(?:[A-Za-z0-9_-]+\/)+$/.test(base)) throw Error('PAGES_BASE_PATH must be a slash-delimited project path');
if (new URL(origin).origin !== origin || !origin.startsWith('https://')) throw Error('PAGES_ORIGIN must be an HTTPS origin');
if (target !== path.resolve(root, 'pages-out') || !target.startsWith(root + path.sep)) throw Error('Unsafe Pages output path');
if (fs.existsSync(target)) {
  if (!fs.existsSync(marker)) throw Error('Refusing to overwrite a non-generated pages-out directory');
  fs.rmSync(target, {recursive:true, force:true});
}
fs.cpSync(path.join(root, 'out'), target, {recursive:true});
fs.writeFileSync(marker, 'Generated GitHub Pages artifact. Edit source/ and scripts/build-pages.mjs.\n');
fs.writeFileSync(path.join(target, '.nojekyll'), '');

const projectRoot = base.slice(0, -1);
const publicBase = origin + projectRoot;
const oldOrigin = 'https://the-weeknd-enter-the-night.globalgupta14.chatgpt.site';
const localUrl = value => value.startsWith('/') && !value.startsWith('//') && value !== projectRoot && !value.startsWith(base) ? base + value.slice(1) : value;
const walk = directory => fs.readdirSync(directory, {withFileTypes:true}).flatMap(entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);
const relativeName = file => path.relative(target, file).replaceAll('\\', '/');
let semanticEdits = 0;
function exact(text, before, after, file, expected=1) {
  const count = text.split(before).length - 1;
  if (count !== expected) throw Error(`${file}: expected ${expected} occurrences of ${JSON.stringify(before)}, found ${count}`);
  semanticEdits += count;
  return text.split(before).join(after);
}
function rootLiteral(text, value, file) {
  return exact(text, '`' + value + '`', '`' + localUrl(value) + '`', file);
}
const stripBaseInput = `e=e===${JSON.stringify(projectRoot)}?"/":e.startsWith(${JSON.stringify(base)})?e.slice(${projectRoot.length}):e;`;
const normalizers = {
  '_astro/techo-por-pagina.MXLEveRw.js':'function i(e){',
  '_astro/vigia-carga.bIwpCRzI.js':'function p(e){',
  '_astro/component.8gGfRnKL.js':'function D(e){',
};
const navigation = {
  '_astro/component.B8hU0nJt.js':['/galeria','/eventos','/contacto'],
  '_astro/component.BPGvV70V.js':['/cookies'],
  '_astro/component.C9nxhpZU.js':['/aviso-legal','/cookies','/privacidad'],
  '_astro/component.CWSBIz51.js':['/'],
  '_astro/index.astro_astro_type_script_index_0_lang.CK_zLeer.js':['/galeria','/contacto'],
  '_astro/galeria.astro_astro_type_script_index_0_lang.CDg8FcZK.js':['/galeria/${encodeURIComponent(e.id)}'],
};
const jsonValues = value => Array.isArray(value) ? value.map(jsonValues) : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([key,item]) => [key,jsonValues(item)])) : typeof value === 'string' ? localUrl(value.replaceAll(oldOrigin, publicBase)) : value;
const cssUrls = text => text.replace(/url\((\s*)(["']?)(\/(?!\/)[^"')\s]+)\2(\s*)\)/g, (_,before,quote,url,after) => `url(${before}${quote}${localUrl(url)}${quote}${after})`);

for (const file of walk(target)) {
  if (!/\.(?:html|js|css|json|webmanifest|xml|txt)$/.test(file)) continue;
  const relative = relativeName(file);
  let text = fs.readFileSync(file, 'utf8').replaceAll(oldOrigin, publicBase);
  if (/\.(?:json|webmanifest)$/.test(file)) {
    text = JSON.stringify(jsonValues(JSON.parse(text)), null, 2) + '\n';
  } else {
    if (file.endsWith('.html')) {
      text = text.replace(/\b(href|src|poster|component-url|renderer-url|before-hydration-url|action)\s*=\s*(["'])(\/(?!\/)[^"']*)\2/g, (_,attribute,quote,url) => `${attribute}=${quote}${localUrl(url)}${quote}`);
    }
    text = cssUrls(text);
    // Asset paths are URLs everywhere they appear; bare '/' literals are not.
    // For example, Instagram handle parsing and Three.js use '/' delimiters.
    text = text.replace(/(["'`])\/(?=(?:_astro|assets|api|draco)\/)/g, (_,quote) => quote + base);
    if (normalizers[relative]) text = exact(text, normalizers[relative], normalizers[relative] + stripBaseInput, relative);
    for (const value of navigation[relative] ?? []) text = rootLiteral(text, value, relative);
    if (relative === '_astro/component.8gGfRnKL.js') {
      text = exact(text, 'e.options.infinite=location.pathname===`/`', 'e.options.infinite=location.pathname===' + JSON.stringify(base), relative);
    }
    if (relative === '_astro/index.astro_astro_type_script_index_0_lang.CK_zLeer.js') {
      text = exact(text, 'location.pathname !== `/`', 'location.pathname !== ' + JSON.stringify(base), relative);
    }
    if (relative === 'experience-accessibility.js') {
      text = exact(text, "location.pathname !== '/'", 'location.pathname !== ' + JSON.stringify(base), relative);
      text = exact(text, "link.href = '/discover.html'", 'link.href = ' + JSON.stringify(base + 'discover.html'), relative);
      text = exact(text, 'href="/discover.html"', 'href="' + base + 'discover.html"', relative);
    }
    if (relative === '_astro/hover-pixel.Cearw6G-.js') {
      text = exact(text, 'n=function(e){return`/`+e}', 'n=function(e){return' + JSON.stringify(base) + '+e}', relative);
    }
  }
  fs.writeFileSync(file, text);
}

// Resolve all statically declared local HTML resources and navigation targets.
// Directory routes use real index.html entries, so deep links work directly.
const errors = [];
let pages = 0, checkedReferences = 0, scripts = 0;
function checkUrl(url, file) {
  if (!url.startsWith('/') || url.startsWith('//')) return;
  if (!url.startsWith(base)) { errors.push(`${file}: unrebased URL ${url}`); return; }
  const localPath = decodeURIComponent(new URL(url, origin).pathname.slice(base.length));
  let destination = path.resolve(target, localPath || '.');
  if (destination !== target && !destination.startsWith(target + path.sep)) {errors.push(`${file}: escaped URL ${url}`);return;}
  if (fs.existsSync(destination) && fs.statSync(destination).isDirectory()) destination = path.join(destination, 'index.html');
  if (!fs.existsSync(destination)) errors.push(`${file}: missing local target ${url}`);
  checkedReferences += 1;
}
for (const file of walk(target)) {
  const relative = relativeName(file);
  if (file.endsWith('.html')) {
    pages += 1;
    const text = fs.readFileSync(file, 'utf8');
    for (const match of text.matchAll(/\b(?:href|src|poster|component-url|renderer-url|before-hydration-url|action)\s*=\s*(["'])(.*?)\1/g)) checkUrl(match[2], relative);
  }
  if (file.endsWith('.css')) {
    const text = fs.readFileSync(file, 'utf8');
    for (const match of text.matchAll(/url\(["']?(\/[^"')\s]+)["']?\)/g)) checkUrl(match[1], relative);
  }
  if (file.endsWith('.js')) {
    scripts += 1;
    const result = spawnSync(process.execPath, ['--check',file], {encoding:'utf8'});
    if (result.status) errors.push(`${relative}: ${result.stderr}`);
    const text = fs.readFileSync(file, 'utf8');
    if (/(["'`])\/(?=(?:_astro|assets|api|draco)\/)/.test(text)) errors.push(`${relative}: unrebased asset URL`);
  }
}
if (errors.length) throw Error(errors.join('\n'));
console.log(`GitHub Pages ready: ${origin}${base}`);
console.log(`Validated ${pages} pages, ${scripts} JavaScript modules, ${checkedReferences} local references, and ${semanticEdits} guarded runtime path edits.`);
