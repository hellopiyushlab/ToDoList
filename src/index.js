// index.js

import takeInput from "./take-input.js";
import { loadBackground, loadBaseElements } from "./dom-manipulation.js";
import { addTaskEventListener } from "./event-listeners.js";
import {saveData} from "./data.js";

// loading a background
loadBackground(); 

/// load the base elements, 
/// and then take the add task button from it
const baseElements = loadBaseElements();
const addTaskButton = baseElements.addTaskButton;

// now put event listner on the button
addTaskEventListener(addTaskButton); 

