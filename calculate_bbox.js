
const fs = require('fs');
const path = require('path');

const svgPath = path.join(process.cwd(), 'src/utils/calculate_svg_bbox.js'); // Not used, just dummy
const targetFile = 'c:\\Users\\pixel\\Desktop\\websites\\websites-algarve\\public\\logo2.svg';

const svgContent = fs.readFileSync(targetFile, 'utf-8');

// Regex to capture path data and transform
const pathRegex = /<path[^>]*d="([^"]+)"[^>]*transform="translate\(([^,]+),([^)]+)\)"[^>]*\/>/g;
// Fallback for paths without transform or with different quote styles
const pathRegexGeneral = /<path[^>]*d=["']([^"']+)["'][^>]*>/g;

let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

// Helper to parse transform
function getTransform(str) {
    const match = /translate\(\s*([0-9.-]+)\s*[,\s]\s*([0-9.-]+)\s*\)/.exec(str);
    if (match) return { x: parseFloat(match[1]), y: parseFloat(match[2]) };
    return { x: 0, y: 0 };
}

// Simple path point extractor (heuristic: extracts all coordinate-like pairs)
// This assumes commands are mostly M, L, C, Z and coordinates are pairs.
// It effectively treats the path as a cloud of points. 
// It ignores relative/absolute command distinction for finding "extent" of absolute paths,
// BUT if there are lowercase (relative) commands, this "point cloud" approach on raw numbers is WRONG.
// However, looking at the file snippet: "M0 0 C0.66 0 ..." - these are absolute.
// Let's assume standard absolute coordinates for safety, but check for relative commands.

function updateBounds(d, tx, ty) {
    // Check for relative commands (lower case letters)
    if (/[a-z]/.test(d.replace(/,/g, ''))) {
        console.log("Warning: Relative commands detected. BBox might be inaccurate.");
    }

    // Replace commands with spaces to just get numbers
    const cleanD = d.replace(/[a-zA-Z]/g, ' ').replace(/,/g, ' ');
    const numbers = cleanD.trim().split(/\s+/).map(parseFloat);

    for (let i = 0; i < numbers.length; i += 2) {
        if (isNaN(numbers[i]) || isNaN(numbers[i + 1])) continue;
        const x = numbers[i] + tx;
        const y = numbers[i + 1] + ty;

        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
    }
}

let match;
// match all paths
const allPathsRegex = /<path([\s\S]*?)\/>/g;

while ((match = allPathsRegex.exec(svgContent)) !== null) {
    const pathTag = match[1];
    const dMatch = /d=["']([^"']+)["']/.exec(pathTag);
    const transformMatch = /transform=["']([^"']+)["']/.exec(pathTag);

    if (dMatch) {
        const d = dMatch[1];
        let tx = 0, ty = 0;
        if (transformMatch) {
            const t = getTransform(transformMatch[1]);
            tx = t.x;
            ty = t.y;
        }
        updateBounds(d, tx, ty);
    }
}


const output = { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY };
fs.writeFileSync('bbox.json', JSON.stringify(output, null, 2));
console.log('Done');

