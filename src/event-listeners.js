import { addTaskWindow, removeElements } from "./dom-manipulation.js"


/// this puts all the event listeners

function addTaskEventListener(addTaskButton) {
    addTaskButton.addEventListener("click", (e) => {
        const generatedElements = addTaskWindow();
        generatedElements.blurBackground.addEventListener("click", () => {
            removeElements(generatedElements);
        });
    });
}

export {
    addTaskEventListener,
}