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

    return {
        addTaskButton
    };
}

function generateWindow() {
    const blurBackground = document.createElement("div");
    blurBackground.setAttribute("id", "blur-background");
    
    const window = document.createElement("div");
    window.setAttribute("id", "window");

    const title = document.createElement("input");
    title.type = "text";
    title.id = "title";
    title.placeholder = "What's the task?";
    window.appendChild(title);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "add task";
    window.appendChild(submitButton);

    body.appendChild(blurBackground);
    body.appendChild(window);

    // return the elements
    return {
        blurBackground,
        window,
        submitButton,
        title,
    };
}


// this function takes an object of elements and then remove them from the dom
function removeElements(elements) {
    for (const element of Object.values(elements)) {
        element.remove();
    }
}

// function to generate the tasks on DOM
function generateTaskInDOM(latestTask) {
    const mainContent = document.querySelector("#main-content");
    const taskBox = document.createElement("div");
    taskBox.setAttribute("class", "task-box");
    mainContent.appendChild(taskBox);

    const titleDiv = document.createElement("div");
    titleDiv.textContent = latestTask.taskTitle;
    titleDiv.classList.add("task-title");
    taskBox.appendChild(titleDiv);
}

export {
    loadBackground,
    loadBaseElements,
    generateWindow,
    removeElements,
    generateTaskInDOM
}