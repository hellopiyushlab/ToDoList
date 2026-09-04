// index.js

import takeInput from "./take-input.js";
import loadBackground from "./initial-dom.js";
import saveToArray from "./save-data.js";

// loading a background
loadBackground(); 

let tasks;

while (true) {
    // take input and then save it in an array (inside save-data.js)
    tasks = saveToArray(takeInput());
    console.log(tasks);
}  