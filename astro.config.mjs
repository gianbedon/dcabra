// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

// Automate image copying from brain cache to project assets
const filesToCopy = [
  { src: "C:\\Users\\GIAN\\.gemini\\antigravity-ide\\brain\\b3c222bf-a544-4fa8-a258-10a9375c6fbe\\leche_cabra_1780628184098.png", dest: "src/assets/leche_cabra.png" },
  { src: "C:\\Users\\GIAN\\.gemini\\antigravity-ide\\brain\\b3c222bf-a544-4fa8-a258-10a9375c6fbe\\yogurt_griego_1780628198558.png", dest: "src/assets/yogurt_griego.png" },
  { src: "C:\\Users\\GIAN\\.gemini\\antigravity-ide\\brain\\b3c222bf-a544-4fa8-a258-10a9375c6fbe\\yogurt_jalea_1780628212700.png", dest: "src/assets/yogurt_jalea.png" },
  { src: "C:\\Users\\GIAN\\.gemini\\antigravity-ide\\brain\\b3c222bf-a544-4fa8-a258-10a9375c6fbe\\yogurt_fruta_1780628227348.png", dest: "src/assets/yogurt_fruta.png" }
];

for (const file of filesToCopy) {
  try {
    const absoluteDest = path.resolve(file.dest);
    const destDir = path.dirname(absoluteDest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    if (fs.existsSync(file.src)) {
      fs.copyFileSync(file.src, absoluteDest);
      console.log(`[Asset Setup] Copied ${file.src} to ${absoluteDest}`);
    }
  } catch (err) {
    console.error(`[Asset Setup] Error copying image:`, err);
  }
}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});