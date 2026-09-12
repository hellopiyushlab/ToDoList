// index.js
import "./style.css";

import { 
    generateAddTaskWindow, 
    generateTaskInDOM, 
    expandDescription, 
    renderProjectInSidebar,
    toggleSideBar,
    blurTask,
    toggleTaskIcon,
    toggleArrowIcon
} from "./dom-manipulation.js";

import { 
    saveData, 
    getProjects, 
    addProject
} from "./data.js";

// event listener to show and clear the sidebar
const burger = document.querySelector("#burger");
burger.addEventListener("click", () => {  
    // function for handling the sidebar
    toggleSideBar(document.querySelector("#side-bar"));
})

// add event listener on the add project form, and then render the projects on screen
const addProjectBox = document.querySelector("#add-project-box");
addProjectBox.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectFormData = new FormData(addProjectBox);
    addProject(projectFormData);
    renderProjectInSidebar(projectFormData);
})

// add event listener to display the window
const addTaskButton = document.querySelector("#add-task-button");
addTaskButton.addEventListener("click", () => {

    // get all projects from data.js and then generate add task window
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
        console.log("latest task: ");
        console.log(latestTask);

        const addTaskWindow = document.querySelector("#add-task-window");
        addTaskWindow.remove();

        const latestTaskElements = generateTaskInDOM(latestTask);
        console.log("latest task html elements: ");
        console.log(latestTaskElements);

        // check if const latestTaskElements = generateTaskInDOM(latestTask);'s returned description has any content
        if (latestTaskElements.description) {
            // yes it has content, put event listener on it
            // we cannot put event listener on something undefined or null
            latestTaskElements.description.addEventListener("click", (event)=> {
                console.log(latestTaskElements);
                expandDescription(event.target);
            });
            // putting the event listener on the arrow icon as well
            latestTaskElements.arrowDiv.addEventListener("click", () => {
                expandDescription(latestTaskElements.description);
                toggleArrowIcon(latestTaskElements.arrowDiv);
            })
        }

        // task state switch logic
        latestTaskElements.checkboxContainer.addEventListener("click", (event) => {
            blurTask(event.target.closest(".task"));
            toggleTaskIcon(event.currentTarget);
        })
    })
})