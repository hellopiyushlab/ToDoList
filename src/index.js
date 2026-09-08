// index.js
import { generateAddTaskWindow, generateTaskInDOM, expandDescription } from "./dom-manipulation.js";
import "./style.css";
// import takeInput from "./take-input.js";
// import { generateTaskInDOM, loadBackground, loadBaseElements, removeElements, generateWindow } from "./dom-manipulation.js";
import { saveData, getData, getProjects, addProject } from "./data.js";

// event listener for adding projects

const addProjectBox = document.querySelector("#add-project-box");
addProjectBox.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectFormData = new FormData(addProjectBox);
    console.log(projectFormData);
    addProject(projectFormData);
})

// put event listener on add-task-button
const addTaskButton = document.querySelector("#add-task-button");

// add event listener to display the window
addTaskButton.addEventListener("click", () => {
    generateAddTaskWindow(getProjects());

    // if clicked outside, remove the window
    const mainContent = document.querySelector("#main-content");
    mainContent.addEventListener("click", () => {
        const addTaskWindow = document.querySelector("#add-task-window");

        if (addTaskWindow) {
            addTaskWindow.remove();
        }
    })

    // add the submit event listener on the form itself
    const addTaskForm = document.querySelector("#add-task-form");
    addTaskForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // show the form data
        const formData = new FormData(addTaskForm);

        // save the data and then get the latest task
        const latestTask = saveData(
            formData.get("task-title"),
            formData.get("task-description"),
            formData.get("priority"),
            formData.get("project")
        );
        console.log(latestTask);

        const addTaskWindow = document.querySelector("#add-task-window");
        addTaskWindow.remove();

        const latestTaskElements = generateTaskInDOM(latestTask);
        console.log(latestTaskElements);

        // event listener to expact the description
        if (latestTask.taskDescription != "") {
            latestTaskElements.description.addEventListener("click", (event)=> {
                // ffunction deal with description lmao
                expandDescription(event.target);
            });
        }
        
    })
})

