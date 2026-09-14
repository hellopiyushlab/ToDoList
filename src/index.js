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
    toggleArrowIcon,
    togglePriorityInDOM,
    showAllTasks,
    showActiveTasks,
    showCompletedTasks
} from "./dom-manipulation.js";

import { 
    saveData, 
    getProjects, 
    addProject,
    changeTaskStateInArray,
    getTaskStatus,
    getData
} from "./data.js";

import {
    taskEL,
    allTasksEL
} from "./events.js"

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
        // latestTask is an object
        const latestTask = saveData(
            formData.get("task-title"),
            formData.get("task-description"),
            formData.get("priority"),
            formData.get("project")
        );

        // after the form is submitted, no need for the add task window
        document.querySelector("#add-task-window").remove();

        // latestTaskElements is also an object, but with the Dom Elements
        const latestTaskElements = generateTaskInDOM(latestTask);

        taskEL(latestTask, latestTaskElements);

        // // check if const latestTaskElements' description has any content
        // if (latestTaskElements.description) {
        //     // yes it has content, put event listener on it
        //     // we cannot put event listener on something undefined or null
        //     latestTaskElements.description.addEventListener("click", (event)=> {
        //         console.log(latestTaskElements);
        //         expandDescription(event.target);
        //     });
        //     // putting the event listener on the arrow icon as well
        //     latestTaskElements.arrowDiv.addEventListener("click", () => {
        //         expandDescription(latestTaskElements.description);
        //         toggleArrowIcon(latestTaskElements.arrowDiv);
        //     })
        // }
        // task state switch logic
        // latestTaskElements.checkboxContainer.addEventListener("click", (event) => {

        //     // visual task change
        //     blurTask(event.target.closest(".task"));
        //     toggleTaskIcon(event.currentTarget);

        //     // update data
        //     const taskElement = event.target.closest(".task");
        //     if (!taskElement) return;
        //     const taskId = taskElement.dataset.id;
        //     changeTaskStateInArray(taskId);

        //     // update priority in data
        //     // i have to make sure that this is happening, only if there was a priority
        //     if (latestTaskElements.priority != undefined) {
        //         const priorityElement = taskElement.querySelector(".priority-div");
        //         togglePriorityInDOM(latestTaskElements.priority, priorityElement, getTaskStatus(taskId));
        //     }
        // })
    })
})

// event listeners on the categories
const showAll = document.querySelector(".all-tasks-category");
const showActive = document.querySelector(".active-category");
const showCompleted = document.querySelector(".completed-category");

showAll.addEventListener("click", () => {
    showAllTasks(getData());
    allTaskEL(getData());
})

showActive.addEventListener("click", () => {
    showActiveTasks(getData());
    allTaskEL(getData());
})

showCompleted.addEventListener("click", () => {
    showCompletedTasks(getData());
    allTasksEL(getData());
})