// index.js
import "./style.css";

import {
    addProject,
    getProjects,
} from "./data.js";

import { 
    toggleSideBar,
    renderProjects,
    generateAddTaskWindow,
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
document.querySelector("#add-task-button").addEventListener("click", (event) => {
    generateAddTaskWindow(getProjects());
})