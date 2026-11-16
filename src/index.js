// index.js
import "./style.css";

import {
    addProject,
    getProjects,
    saveTask,
    incompleteTask,
    completeTask,
} from "./data.js";

import { 
    toggleSideBar,
    renderProjects,
    generateAddTaskWindow,
    generateTaskInDOM,
} from "./dom-manipulation.js";


// event listener to show and clear the sidebar
const burger = document.querySelector("#burger");
burger.addEventListener("click", () => {  
    toggleSideBar(document.querySelector("#side-bar"));
})

// render the initial project options
renderProjects(getProjects());

// the single element form for adding new projects
const addProjectBox = document.querySelector("#add-project-box");
console.log(addProjectBox);
addProjectBox.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectName = new FormData(addProjectBox).get("project-name");
    console.log(projectName);
    addProject(projectName);
    renderProjects(getProjects());
})


// event listener on add task button
document.querySelector("#add-task-button").addEventListener("click", () => {
    if (!document.querySelector("#add-task-window")) {
        // only generate if there is no window there already
        generateAddTaskWindow(getProjects());
        const addTaskForm = document.querySelector("#add-task-form");
        console.log(addTaskForm);
        // event listener for the form itself
        addTaskForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(addTaskForm);
            console.log(formData);
            document.querySelector("#add-task-window").remove();
            let latestTask = saveTask(formData);
            generateTaskInDOM(latestTask);
            
        })
    }
})

// if clicked outside, remove the add task window
document.querySelector("#main-content").addEventListener("click", () => {
    const addTaskWindow = document.querySelector("#add-task-window");
    if (addTaskWindow) {
        addTaskWindow.remove();
    }
})