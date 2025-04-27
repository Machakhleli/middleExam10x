const config = {
    mode: "active",
    maxLoad: 100,
    secure: true
}

function auditConfig(cfg) {
    const arr = [];
    for (let item in cfg) {
        arr.push(`${item}: ${cfg[item]}`);
    }
    return arr;
}
const report = auditConfig(config);
console.log(report);
console.log(`Audit report: ${report.join(',')}`);
