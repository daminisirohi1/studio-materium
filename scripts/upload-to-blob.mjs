#!/usr/bin/env node
/**
 * One-time script: uploads public/kc/ to Vercel Blob.
 *
 * Usage:
 *   BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxx node scripts/upload-to-blob.mjs
 *
 * After it finishes, copy the printed VITE_KC_BASE_URL value into:
 *   - Vercel project → Settings → Environment Variables
 *   - (optional) a local .env.local file for testing
 */

import { put } from '@vercel/blob';
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = fileURLToPath(new URL('.', import.meta.url));
const KC_DIR = join(__dir, '..', 'public', 'kc');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('Set BLOB_READ_WRITE_TOKEN before running this script.');
    process.exit(1);
  }

  const files = await walk(KC_DIR);
  console.log(`Uploading ${files.length} files…\n`);

  let baseUrl = '';
  let done = 0;

  for (const file of files) {
    const rel = relative(join(KC_DIR, '..'), file); // e.g. kc/golf/...
    const data = await readFile(file);
    const { url } = await put(rel, data, { access: 'public', addRandomSuffix: false });

    if (!baseUrl) {
      // Derive base from first URL: strip the pathname portion
      const u = new URL(url);
      baseUrl = u.origin;
    }

    done++;
    if (done % 20 === 0 || done === files.length) {
      process.stdout.write(`\r${done}/${files.length}`);
    }
  }

  console.log('\n\nDone! Add this to Vercel environment variables:\n');
  console.log(`VITE_KC_BASE_URL=${baseUrl}\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
