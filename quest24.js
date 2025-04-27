function rebootNode(nodeName) {
    console.log(`Rebooted: ${nodeName}`);
}
const nodes = ["nodeAlpha", "nodeBeta", "nodeGamma"];
for (const element of nodes) {
    console.log("Rebooted: " + element);
}

rebootNode(nodes[0]);