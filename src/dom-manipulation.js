import "./style.css";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// this one is for anything relating dom

const body = document.querySelector("body");

function loadBackground() {
    body.setAttribute("id", "background");
}

function loadBaseElements() {

    // add the heading
    const heading = document.createElement("div");
    heading.textContent = "piyush's to do list";
    heading.setAttribute("id", "heading");
    body.appendChild(heading);

    // add the main content div
    const mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main-content");
    body.appendChild(mainContent);

    // add task button
    const addTaskButton = document.createElement("div");
    addTaskButton.setAttribute("id", "add-task-button");
    const plusIcon = icon(faPlus);
    addTaskButton.appendChild(plusIcon.node[0]);
    body.appendChild(addTaskButton);

    return addTaskButton;
}

function addTaskWindow() {
    const blurBackground = document.createElement("div");
    blurBackground.setAttribute("id", "blur-background");
    
    const addTaskWindow = document.createElement("div");
    addTaskWindow.setAttribute("id", "add-task-window");

    
    
    body.appendChild(blurBackground);
    body.appendChild(addTaskWindow);

    return {
        blurBackground,
        addTaskWindow
    };
}


// this function takes an object of elements and then remove them from the dom
function removeElements(elements) {
    for (const element of Object.values(elements)) {
        element.remove();
    }
}

export {
    loadBackground,
    loadBaseElements,
    addTaskWindow,
    removeElements,
}