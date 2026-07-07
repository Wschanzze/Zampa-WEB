import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = './public/assets/Quesos Zampa';

// Specific carousel images that need to be resized to 800px
const carouselImages = [
  'IMG_0773.jpg',
  'IMG_0853.jpg',
  'IMG_1034.jpg',
  'IMG_1134.jpg',
  'IMG_1221.jpg',
  'IMG_1900.jpg',
  'IMG_2809.jpg',
  'IMG_4715.jpg',
  'IMG_8715.jpg'
];

// Hero / background images that need full-HD resolution (1920px)
const heroImages = [
  'IMG_9816.JPG',
  '68C50477-1C39-48B6-86FE-640DEDCA65B1.jpg',
  'BAB4C1FD-5368-4434-ADE4-498A3AE4D8C6.jpg',
  'IMG_9858.JPG'
];

async function optimizeImage(filename) {
  const imgPath = path.join(dir, filename);
  if (!fs.existsSync(imgPath)) {
    console.log(`[Skip] File not found: ${filename}`);
    return;
  }

  const stat = fs.statSync(imgPath);
  const sizeMB = stat.size / 1024 / 1024;

  // Only optimize if it's in our explicit lists or if it's larger than 300KB
  const isCarousel = carouselImages.includes(filename);
  const isHero = heroImages.includes(filename);
  const isLarge = stat.size > 300 * 1024; // 300KB

  if (!isCarousel && !isHero && !isLarge) {
    console.log(`[Skip] ${filename} is already small (${(stat.size / 1024).toFixed(1)} KB)`);
    return;
  }

  console.log(`\nOptimizing ${filename}...`);
  console.log(`Original size: ${sizeMB.toFixed(2)} MB`);

  let targetWidth = 1000; // Default width
  if (isCarousel) {
    targetWidth = 800;
  } else if (isHero) {
    targetWidth = 1920;
  }

  const tempPath = path.join(dir, `temp_${filename}`);

  try {
    const pipeline = sharp(imgPath);
    const metadata = await pipeline.metadata();

    // Only resize if the image is actually wider than our target width
    if (metadata.width && metadata.width > targetWidth) {
      pipeline.resize({ width: targetWidth });
      console.log(`Resizing from ${metadata.width}px to ${targetWidth}px`);
    } else {
      console.log(`Keeping original resolution: ${metadata.width}px`);
    }

    // Compress with high quality progressive JPEG (smaller files, loads progressively)
    await pipeline
      .jpeg({ quality: 80, progressive: true, mozjpeg: true })
      .toFile(tempPath);

    fs.unlinkSync(imgPath);
    fs.renameSync(tempPath, imgPath);

    const newStat = fs.statSync(imgPath);
    const newSizeKB = newStat.size / 1024;
    const reduction = ((1 - newStat.size / stat.size) * 100).toFixed(1);
    console.log(`New size: ${newSizeKB.toFixed(1)} KB (Reduced by ${reduction}%)`);
  } catch (err) {
    console.error(`Error optimizing ${filename}:`, err);
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

async function run() {
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return;
  }

  // Get all files in the directory
  const files = fs.readdirSync(dir);
  const imageExtensions = ['.jpg', '.jpeg'];

  const imagesToProcess = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    const isImage = imageExtensions.includes(ext);
    // Ignore temp files if any got left over
    return isImage && !file.startsWith('temp_');
  });

  console.log(`Found ${imagesToProcess.length} images in main folder. Starting optimization...`);

  for (const filename of imagesToProcess) {
    await optimizeImage(filename);
  }

  // Now process the Recetas folder
  const recetasDir = path.join(dir, 'Recetas');
  if (fs.existsSync(recetasDir)) {
    console.log('\n--- Optimizing Recetas Folder ---');
    const recetasFiles = fs.readdirSync(recetasDir);
    for (const file of recetasFiles) {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.png' && !file.startsWith('temp_')) {
        const fullPath = path.join(recetasDir, file);
        const baseName = path.basename(file, ext);
        const targetJpgPath = path.join(recetasDir, `${baseName}.jpg`);
        const tempPath = path.join(recetasDir, `temp_${file}`);

        console.log(`\nConverting and optimizing recipe: ${file}...`);
        const stat = fs.statSync(fullPath);
        console.log(`Original PNG size: ${(stat.size / 1024).toFixed(1)} KB`);

        try {
          await sharp(fullPath)
            .resize({ width: 800 }) // 800px is perfect for the recipe grid
            .jpeg({ quality: 80, progressive: true, mozjpeg: true })
            .toFile(targetJpgPath);

          // Delete the original PNG file
          fs.unlinkSync(fullPath);
          const newStat = fs.statSync(targetJpgPath);
          const reduction = ((1 - newStat.size / stat.size) * 100).toFixed(1);
          console.log(`Saved as JPG. New size: ${(newStat.size / 1024).toFixed(1)} KB (Reduced by ${reduction}%)`);
        } catch (err) {
          console.error(`Error optimizing recipe ${file}:`, err);
        }
      }
    }
  }

  console.log('\nOptimization finished!');
}

run().catch(err => console.error(err));
