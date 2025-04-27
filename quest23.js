const processedUnits = 45;
const totalUnits = 50;
const efficiency = processedUnits / totalUnits;
const threshold = 0.85;

console.log(efficiency);

if (efficiency >= threshold) {
    console.log("Efficiency OK: true");
} else {
    console.log("Efficiency OK: false ");
}