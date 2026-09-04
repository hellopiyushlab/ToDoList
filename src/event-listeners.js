import { addTaskWindow, removeElements } from "./dom-manipulation.js"

function addTaskEventListener(addTaskButton) {
    addTaskButton.addEventListener("click", (e) => {
        const blurBackground = addTaskWindow();
        blurBackground.addEventListener("click", () => {
            removeElements([blurBackground]);
        })
    })
}

export {
    addTaskEventListener,
}