const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const baseDir = path.resolve(__dirname, '..');
  
  // 1. Create backups directory
  const backupDir = path.join(baseDir, 'src', 'assets', 'originals');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  // Backup original portrait and project files
  const portraitOrig = path.join(baseDir, 'public', 'anoop-portrait.png');
  if (fs.existsSync(portraitOrig)) {
    fs.copyFileSync(portraitOrig, path.join(backupDir, 'anoop-portrait.png'));
  }
  
  const projects = ['agentily', 'dentflare', 'ms-islamic-store', 'saffron-and-ember', 'velora'];
  for (const p of projects) {
    const srcPng = path.join(baseDir, 'public', 'projects', `${p}.png`);
    if (fs.existsSync(srcPng)) {
      fs.copyFileSync(srcPng, path.join(backupDir, `${p}.png`));
    }
  }

  console.log('Originals safely backed up to src/assets/originals/');

  // 2. Optimize Hero Portrait
  // Original is 926x1024, 992 KB
  // Displayed at max ~500px in hero. Resize to 650 width preserving aspect ratio with alpha transparency
  const portraitWebpDestPub = path.join(baseDir, 'public', 'anoop-portrait.webp');
  const portraitWebpDestSrc = path.join(baseDir, 'src', 'assets', 'anoop-portrait.webp');
  
  await sharp(portraitOrig)
    .resize(650, null, { withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: 85, effort: 6 })
    .toFile(portraitWebpDestPub);
  
  fs.copyFileSync(portraitWebpDestPub, portraitWebpDestSrc);

  const portraitMeta = await sharp(portraitWebpDestPub).metadata();
  const portraitStat = fs.statSync(portraitWebpDestPub);
  console.log(`Optimized Portrait: ${portraitMeta.width}x${portraitMeta.height}, ${(portraitStat.size / 1024).toFixed(2)} KB`);

  // 3. Optimize Project Screenshots
  for (const p of projects) {
    const srcPng = path.join(baseDir, 'public', 'projects', `${p}.png`);
    const destWebpPub = path.join(baseDir, 'public', 'projects', `${p}.webp`);
    const destWebpSrc = path.join(baseDir, 'src', 'assets', 'projects', `${p}.webp`);

    if (fs.existsSync(srcPng)) {
      await sharp(srcPng)
        .resize(800, null, { withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(destWebpPub);
      
      fs.copyFileSync(destWebpPub, destWebpSrc);

      const meta = await sharp(destWebpPub).metadata();
      const stat = fs.statSync(destWebpPub);
      console.log(`Optimized ${p}: ${meta.width}x${meta.height}, ${(stat.size / 1024).toFixed(2)} KB`);
    }
  }
}

optimizeImages()
  .then(() => console.log('All images optimized successfully!'))
  .catch(console.error);
