// index.js

import takeInput from "./take-input.js";
import { loadBackground, loadBaseElements } from "./dom-manipulation.js";
import { addTaskEventListener } from "./event-listeners.js";
import saveToArray from "./save-data.js";

// loading a background
loadBackground(); 
// make the base elements, heading and buttons
const addTaskButton = loadBaseElements();
// now put event listner on the button
addTaskEventListener(addTaskButton);    

// let tasks;

// while (true) {
//     // take input and then save it in an array (inside save-data.js)
//     tasks = saveToArray(takeInput());
//     console.log(tasks);
// }  

