import { generateWindow, removeElements } from "./dom-manipulation.js"
import { saveData } from "./data.js";

/// this puts all the event listeners

function addTaskEventListener(addTaskButton) {
    addTaskButton.addEventListener("click", (e) => {
        let generatedElements = generateWindow();
        generatedElements.submitButton.addEventListener("click", () => {
            saveData(generatedElements);
        })
    });
}


export {
    addTaskEventListener,
}