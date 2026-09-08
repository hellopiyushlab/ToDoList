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

function generateAddTaskWindow(projects) {


    // select the body
    const body = document.querySelector("body");

    // make the main window
    const addTaskWindow = document.createElement("div"); 
    addTaskWindow.setAttribute("id", "add-task-window");
    
    // make the form inside the window
    const addTaskForm = document.createElement("form");
    addTaskForm.setAttribute("id", "add-task-form");
    addTaskWindow.appendChild(addTaskForm);

    const addTaskOptions = document.createElement("div");
    addTaskOptions.setAttribute("id", "add-task-options");
    addTaskForm.appendChild(addTaskOptions);

    // const dateInput = document.createElement("input");
    // dateInput.setAttribute("type", "date");
    // dateInput.setAttribute("id", "task-date");
    // dateInput.setAttribute("name", "date");
    // addTaskOptions.appendChild(dateInput);

    const taskPriority = document.createElement("select");
    taskPriority.setAttribute("id", "task-priority");
    taskPriority.setAttribute("name", "priority");
    addTaskOptions.appendChild(taskPriority);

    const noPriorityInput = document.createElement("option");
    noPriorityInput.selected =  true;
    noPriorityInput.setAttribute("value", "none");
    noPriorityInput.textContent = "No Priority";
    const lowPriorityInput = document.createElement("option");
    lowPriorityInput.setAttribute("value", "low");
    lowPriorityInput.textContent = "Low";
    const mediumPriorityInput = document.createElement("option");
    mediumPriorityInput.setAttribute("value", "medium");
    mediumPriorityInput.textContent = "Medium";
    const highPriorityInput = document.createElement("option");
    highPriorityInput.setAttribute("value", "high");
    highPriorityInput.textContent = "High";

    taskPriority.appendChild(noPriorityInput);
    taskPriority.appendChild(lowPriorityInput);
    taskPriority.appendChild(mediumPriorityInput);
    taskPriority.appendChild(highPriorityInput);

    const taskProject = document.createElement("select");
    taskProject.id = "task-project";
    taskProject.name = "project";

    const noProject = document.createElement("option");
    noProject.value = "none";
    noProject.selected = true;
    noProject.textContent = "No Project";
    taskProject.appendChild(noProject);

    for (const project of projects) {
        const option = document.createElement("option");
        option.value = project;
        option.textContent = project;
        taskProject.appendChild(option);
    }

    addTaskOptions.appendChild(taskProject);

    const taskTitleInput = document.createElement("input");
    taskTitleInput.type = "text";
    taskTitleInput.id = "task-title";
    taskTitleInput.name = "task-title";
    taskTitleInput.placeholder = "Title: Do Something, Anything";
    taskTitleInput.required = true;
    addTaskForm.appendChild(taskTitleInput);

    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = "task-description";
    descriptionInput.name = "task-description";
    descriptionInput.placeholder = "Details: You can even add sub-tasks here!";
    addTaskForm.appendChild(descriptionInput);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.id = "submit-button";
    submitButton.textContent = "Add Task";
    addTaskForm.appendChild(submitButton);

    body.appendChild(addTaskWindow);
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
    generateAddTaskWindow,
    removeElements,
    generateTaskInDOM
}