// Very simple test runner
const fs = require("fs");

// Read test.js and app.js
const testCode = fs.readFileSync("./test.js", "utf8");
const appCode = fs.readFileSync("./app.js", "utf8");

// Create a minimal DOM environment
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><html><body>
    <div id="counter">0</div>
    <button id="incrementBtn">Click Me!</button>
</body></html>`);

global.document = dom.window.document;
global.window = dom.window;

// Execute app code
eval(appCode);

// Execute test code (simplified for demonstration)
eval(testCode);

// Run tests and exit with appropriate code
process.exit(runTests() ? 0 : 1);
