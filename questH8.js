const defaults = {
    retry: 3,
    timeout: 1000
}
const overrides = {
    timeout: 500
}

const settings = Object.assign({}, defaults, overrides);
console.log(settings);

function displaySettings({ retry = 1, timeout = 0 }) {
    console.log(`Settings - retry: ${retry}, timeout: ${timeout}`)
}

displaySettings(settings);