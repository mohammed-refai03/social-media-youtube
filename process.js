const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');

const MAX_SIZE = 90 * 1024;
const ROOT_DIR = __dirname;
const IMAGES_DIR = path.join(ROOT_DIR, 'images');

if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

const getHash = (str) => crypto.createHash('md5').update(str).digest('hex').slice(0, 10);

async function downloadAndProcessImage(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    let buffer = Buffer.from(arrayBuffer);

    let quality = 80;
    let width = null;
    let currentBuffer = await sharp(buffer).webp({ quality }).toBuffer();

    // If too big, compress/resize
    while (currentBuffer.length > MAX_SIZE) {
      if (quality > 20) {
        quality -= 20;
      } else {
        const metadata = await sharp(currentBuffer).metadata();
        width = Math.floor(metadata.width * 0.8);
        quality = 60; // reset quality after resize
      }
      let processor = sharp(buffer);
      if (width) processor = processor.resize({ width });
      currentBuffer = await processor.webp({ quality }).toBuffer();
    }

    const filename = `unsplash-${getHash(url)}.webp`;
    const filepath = path.join(IMAGES_DIR, filename);
    fs.writeFileSync(filepath, currentBuffer);
    console.log(`Saved: ${filename} (${Math.round(currentBuffer.length / 1024)}KB)`);
    return `images/${filename}`;
  } catch (err) {
    console.error(`Error processing ${url}:`, err.message);
    return null;
  }
}

async function main() {
  const fileExts = ['.html', '.js'];
  
  function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    for (let file of list) {
      file = path.join(dir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.git') && !file.includes('images')) {
        results = results.concat(getFiles(file));
      } else {
        if (fileExts.includes(path.extname(file))) {
          results.push(file);
        }
      }
    }
    return results;
  }

  const files = getFiles(ROOT_DIR);
  const urlRegex = /https:\/\/(images|source)\.unsplash\.com\/[^"'\s\)]+/g;
  const urlMap = new Map();

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    const matches = content.match(urlRegex);
    if (matches) {
      let modified = false;
      for (const url of matches) {
        // Unsplash URLs in HTML can be encoded or have `&amp;`
        const cleanUrl = url.replace(/&amp;/g, '&');
        if (!urlMap.has(cleanUrl)) {
          console.log(`Processing URL: ${cleanUrl}`);
          const newPath = await downloadAndProcessImage(cleanUrl);
          if (newPath) urlMap.set(cleanUrl, newPath);
        }
        
        const localPath = urlMap.get(cleanUrl);
        if (localPath) {
          content = content.replace(url, localPath);
          modified = true;
        }
      }
      if (modified) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
      }
    }
  }
}

main().catch(console.error);
