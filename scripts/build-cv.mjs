// Compile cv-src/*.tex into public/cv/ so the CV download links work in `npm run dev`.
// CI does the same thing with Tectonic (see .github/workflows/deploy.yml); the PDFs are
// generated artifacts and are gitignored.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const src = join(root, 'cv-src');
const out = join(root, 'public', 'cv');

// Tectonic first (what CI uses), then XeLaTeX, including MiKTeX's default Windows location.
const candidates = [
  { cmd: 'tectonic', args: (f) => ['-X', 'compile', '--outdir', out, f], runs: 1 },
  { cmd: 'xelatex', args: (f) => ['-interaction=batchmode', `-output-directory=${out}`, f], runs: 2 },
  {
    cmd: join(process.env.LOCALAPPDATA ?? '', 'Programs/MiKTeX/miktex/bin/x64/xelatex.exe'),
    args: (f) => ['-interaction=batchmode', `-output-directory=${out}`, f],
    runs: 2,
  },
];

const engine = candidates.find((c) => {
  try {
    execFileSync(c.cmd, ['--version'], { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
});

if (!engine) {
  console.error(
    'No LaTeX engine found. Install one of:\n' +
      '  tectonic  https://tectonic-typesetting.github.io/\n' +
      '  MiKTeX    winget install MiKTeX.MiKTeX\n' +
      'Or skip it - CI builds the PDFs on push.'
  );
  process.exit(1);
}

mkdirSync(out, { recursive: true });
const files = readdirSync(src).filter((f) => f.endsWith('.tex'));

for (const f of files) {
  process.stdout.write(`${f} ... `);
  for (let i = 0; i < engine.runs; i++) {
    execFileSync(engine.cmd, engine.args(join(src, f)), { cwd: src, stdio: 'ignore' });
  }
  console.log('ok');
}

// Drop the aux files XeLaTeX leaves next to the PDFs.
for (const f of readdirSync(out)) {
  if (!f.endsWith('.pdf')) rmSync(join(out, f));
}

console.log(`\n${files.length} PDFs written to public/cv/`);
if (!existsSync(join(out, 'Valter-Nunez-CV.pdf'))) {
  console.error('Expected Valter-Nunez-CV.pdf - the site links to it.');
  process.exit(1);
}
