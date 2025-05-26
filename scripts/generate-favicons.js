const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
  const inputSvg = path.join(__dirname, '../public/favicon.svg');
  const publicDir = path.join(__dirname, '../public');

  // Read the SVG file
  const svgBuffer = await fs.readFile(inputSvg);

  // Generate different sizes
  const sizes = [16, 32, 48, 96, 128, 180, 192, 256];

  // Generate PNG files
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, `favicon-${size}x${size}.png`));
  }

  // Generate apple-touch-icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // Generate ICO file (including multiple sizes)
  const ico16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const ico32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const ico48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();

  // Use the 48x48 version as favicon.ico
  await fs.writeFile(path.join(publicDir, 'favicon.ico'), ico48);

  console.log('All favicons generated successfully!');
}

generateFavicons().catch(console.error);
