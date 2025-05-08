// Simple test function
function checkCounterInitialValue() {
    // Check if counter starts at 0
    const counterValue = document.getElementById("counter").innerText;
    if (counterValue !== "0") {
        console.error("Test failed: Counter should initialize at 0");
        return false;
    }
    console.log("Test passed: Counter initializes at 0");
    return true;
}

// This would be run by the test command
function runTests() {
    let allTestsPassed = true;
    
    // Setup mock DOM
    document.body.innerHTML = `
        <div id="counter">0</div>
        <button id="incrementBtn">Click Me!</button>
    `;
    
    // Run tests
    allTestsPassed = checkCounterInitialValue() && allTestsPassed;
    
    // Report results
    if (allTestsPassed) {
        console.log("All tests passed!");
        return 0; // Success exit code
    } else {
        console.error("Some tests failed!");
        return 1; // Error exit code
    }
}

// For real tests, you would use a framework like Jest
// This is just a simulation for our simple example
