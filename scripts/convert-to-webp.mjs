import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');

/** File extensions we will convert to WebP */
const rasterExts = new Set(['.jpg', '.jpeg', '.png']);
/** File extensions to always skip */
const skipExts = new Set(['.svg', '.gif', '.webp', '.pdf', '.ico']);

/**
 * Recursively walk a directory and return absolute file paths.
 */
function* walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else {
      yield fullPath;
    }
  }
}

async function convertFile(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  if (skipExts.has(ext)) return { skipped: true };
  if (!rasterExts.has(ext)) return { skipped: true };

  const outputPath = inputPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
  // If output exists and is newer, skip
  try {
    const inStat = fs.statSync(inputPath);
    const outStat = fs.existsSync(outputPath) ? fs.statSync(outputPath) : null;
    if (outStat && outStat.mtimeMs >= inStat.mtimeMs) {
      return { skipped: true };
    }
  } catch {}

  // High-quality WebP settings; near-lossless for PNGs, high quality for JPEGs
  const quality = 90; // user requested to keep quality high
  const nearLossless = ext === '.png';

  try {
    const image = sharp(inputPath, { failOn: 'none' });
    await image.webp({ quality, nearLossless }).toFile(outputPath);
    return { converted: true, outputPath };
  } catch (err) {
    console.error('Failed to convert', inputPath, err.message || err);
    return { error: true };
  }
}

async function main() {
  if (!fs.existsSync(publicDir)) {
    console.error('public directory not found at', publicDir);
    process.exit(1);
  }

  const files = Array.from(walk(publicDir));
  const toProcess = files.filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return rasterExts.has(ext) && !skipExts.has(ext);
  });

  console.log(`Found ${toProcess.length} images to process.`);

  let converted = 0;
  let skipped = 0;
  let failed = 0;

  // Limit concurrency to avoid overload on Windows
  const concurrency = 4;
  let index = 0;

  async function worker() {
    while (index < toProcess.length) {
      const i = index++;
      const input = toProcess[i];
      const res = await convertFile(input);
      if (res?.converted) converted++;
      else if (res?.skipped) skipped++;
      else if (res?.error) failed++;
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, toProcess.length) }, () => worker());
  await Promise.all(workers);

  console.log(`Done. Converted: ${converted}, Skipped: ${skipped}, Failed: ${failed}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


