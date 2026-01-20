import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, '..', 'public');
const dst = path.join(__dirname, '..', 'dist');

function copyDir(srcPath, dstPath) {
  if (!fs.existsSync(dstPath)) {
    fs.mkdirSync(dstPath, { recursive: true });
  }

  fs.readdirSync(srcPath).forEach(file => {
    const srcFile = path.join(srcPath, file);
    const dstFile = path.join(dstPath, file);
    const stat = fs.statSync(srcFile);

    if (stat.isDirectory()) {
      copyDir(srcFile, dstFile);
    } else {
      fs.copyFileSync(srcFile, dstFile);
    }
  });
}

if (fs.existsSync(src)) {
  copyDir(src, dst);
  console.log('✓ Carpeta public/ copiada a dist/');
}
