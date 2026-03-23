import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PAGE = path.join(__dirname, '..', 'app', 'impressionen', 'page.js');

function shouldRemoveSrc(src) {
  return (
    src.startsWith('/Gemuenden/') ||
    src.startsWith('/Albstadt/') ||
    src.startsWith('/Alsbach/')
  );
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
const bad = new Set();
for (let i = 0; i < entries.length; i++) {
  if (shouldRemoveSrc(entries[i].src)) {
    oldToNew[i] = null;
    bad.add(i);
  } else {
    oldToNew[i] = ni++;
  }
}

const kept = entries
  .filter((e) => !shouldRemoveSrc(e.src))
  .map((e) => '  ' + e.block.replace(/,\s*$/, '').trim());

const newBody = '\n' + kept.join(',\n') + ',\n';

let out = s.slice(0, open + 1) + newBody + s.slice(arrayEnd);
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

tail = tail.replace(/\[(\d+)\s*,\s*(\d+)\]\.map\(\(index\)/g, (_, a, b) => {
  const nums = [+a, +b].map((n) => oldToNew[n]).filter((x) => x != null);
  if (nums.length === 0) return '[].map((index)';
  if (nums.length === 1) return `[${nums[0]}].map((index)`;
  return `[${nums[0]}, ${nums[1]}].map((index)`;
});

out = head + tail;

fs.writeFileSync(PAGE, out);
console.log('Removed', bad.size, 'entries; kept', ni);
console.log('Wrote', PAGE);
