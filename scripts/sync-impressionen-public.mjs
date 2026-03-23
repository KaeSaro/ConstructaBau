/**
 * Sync app/impressionen/page.js images[] with files under public/.
 * - Drops entries whose file is missing (e.g. renamed to raus*).
 * - Never uses raus* as src.
 * - Removes JSX lines that referenced dropped indices, then remaps images[n].
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PAGE = path.join(ROOT, 'app', 'impressionen', 'page.js');
const PUBLIC = path.join(ROOT, 'public');

function fileExistsRel(src) {
  const rel = src.replace(/^\//, '');
  const full = path.join(PUBLIC, rel);
  if (fs.existsSync(full)) return true;
  const dir = path.dirname(full);
  const base = path.basename(full);
  if (!fs.existsSync(dir)) return false;
  const lower = base.toLowerCase();
  try {
    const names = fs.readdirSync(dir);
    return names.some((n) => n.toLowerCase() === lower);
  } catch {
    return false;
  }
}

function parseBlocks(inner) {
  const entries = [];
  let k = 0;
  while (k < inner.length) {
    while (k < inner.length && /\s/.test(inner[k])) k++;
    if (k >= inner.length) break;
    if (inner[k] !== '{') throw new Error(`Expected { at ${k}`);
    let d = 0;
    let m = k;
    for (; m < inner.length; m++) {
      if (inner[m] === '{') d++;
      if (inner[m] === '}') {
        d--;
        if (d === 0) {
          m++;
          break;
        }
      }
    }
    const block = inner.slice(k, m);
    const sm = block.match(/src:\s*'([^']+)'/);
    if (!sm) throw new Error('no src');
    let end = m;
    while (end < inner.length && /[,\s]/.test(inner[end])) end++;
    entries.push({ src: sm[1], block: inner.slice(k, end) });
    k = end;
  }
  return entries;
}

const s = fs.readFileSync(PAGE, 'utf8');
const open = s.indexOf('[', s.indexOf('const images = ['));
let depth = 0;
let j = open;
for (; j < s.length; j++) {
  if (s[j] === '[') depth++;
  if (s[j] === ']') {
    depth--;
    if (depth === 0) break;
  }
}
const arrayEnd = j;
const inner = s.slice(open + 1, arrayEnd);
const entries = parseBlocks(inner);

const oldToNew = [];
let ni = 0;
const removed = [];
for (let i = 0; i < entries.length; i++) {
  const { src, block } = entries[i];
  const base = path.basename(src);
  if (base.startsWith('raus')) {
    oldToNew[i] = null;
    removed.push({ i, src, reason: 'raus*' });
    continue;
  }
  if (!fileExistsRel(src)) {
    oldToNew[i] = null;
    removed.push({ i, src, reason: 'missing' });
    continue;
  }
  oldToNew[i] = ni++;
}

const bad = new Set(removed.map((r) => r.i));

const kept = entries
  .filter((_, i) => oldToNew[i] != null)
  .map((e) => e.block.replace(/,\s*$/, '').trim())
  .map((b) => '  ' + b);

const newBody = '\n' + kept.join(',\n') + ',\n';

let out =
  s.slice(0, open + 1) +
  newBody +
  s.slice(arrayEnd);

const jsxStart = out.indexOf('export default');
const head = out.slice(0, jsxStart);
let tail = out.slice(jsxStart);

for (const b of bad) {
  const re = new RegExp(`^\\s*<ImageCard \\{\\.{3}images\\[${b}\\][^\\n]*\\n`, 'gm');
  tail = tail.replace(re, '');
}

tail = tail.replace(/images\[(\d+)\]/g, (_, d) => {
  const n = +d;
  const nn = oldToNew[n];
  if (nn == null) throw new Error(`Still references removed index ${n}`);
  return `images[${nn}]`;
});

tail = tail.replace(/\[(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\]\.map\(\(index\)/g, (_, a, b, c) => {
  const nums = [+a, +b, +c].map((n) => oldToNew[n]).filter((x) => x != null);
  if (nums.length === 0) return '[].map((index)';
  if (nums.length === 1) return `[${nums[0]}].map((index)`;
  if (nums.length === 2) return `[${nums[0]}, ${nums[1]}].map((index)`;
  return `[${nums[0]}, ${nums[1]}, ${nums[2]}].map((index)`;
});

out = head + tail;

fs.writeFileSync(PAGE, out);

console.log('Kept', ni, '/', entries.length);
console.log('Removed', removed.length);
for (const r of removed) {
  console.log('  -', r.src, '(' + r.reason + ')');
}
console.log('Wrote', PAGE);
