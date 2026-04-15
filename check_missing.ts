import fs from 'fs';

const carriersFile = fs.readFileSync('src/pages/Carriers.tsx', 'utf-8');
const appFile = fs.readFileSync('src/App.tsx', 'utf-8');

const carrierMatches = carriersFile.matchAll(/path: "([^"]+)"/g);
const carrierPaths = Array.from(carrierMatches, m => m[1]);

const missingFiles = [];
for (const path of carrierPaths) {
  const fileName = path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + '.tsx';
  if (!fs.existsSync(`src/pages/${fileName}`)) {
    missingFiles.push(fileName);
  }
}

console.log('Missing carrier page files:');
console.log(missingFiles);
