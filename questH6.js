const defaultConfig = {
    mode: "auto",
    speed: 100
}
const userConfig = {
    speed: 80,
    logging: true
}
const finalConfig = Object.assign({}, defaultConfig, userConfig);
console.log(finalConfig);

const finalEntries = Object.entries(finalConfig).map(([key, value]) => `${key}:${value}`).join(",");
console.log(`Final config: ${finalEntries}`);



