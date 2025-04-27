const config = [
    { name: "nodeA", port: 8080 },
    { name: "nodeB", port: 80 },
    { name: "nodeC", port: 3001 }
];

const filtered = config.filter(config => config.port > 3000);
const secureConfigs = filtered.map(config => Object.assign({}, config, { status: 'secure' }));
const namesList = secureConfigs.map(config => config.name).join(",");

console.log(`Secure nodes: ${namesList}`);
console.log(filtered);

