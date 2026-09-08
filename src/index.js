// index.js
import { generateAddTaskWindow, generateTaskInDOM } from "./dom-manipulation.js";
import "./style.css";
// import takeInput from "./take-input.js";
// import { generateTaskInDOM, loadBackground, loadBaseElements, removeElements, generateWindow } from "./dom-manipulation.js";
import { saveData, getData, getProjects } from "./data.js";



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

        generateTaskInDOM(latestTask);
    })

})

// addTaskButton.addEventListener("click", (e) => {

//     // when the button is clicked, the window appears
//     let generatedElements = generateWindow();

//     // when i submit, the elements go to saveData
//     generatedElements.submitButton.addEventListener("click", () => {

//         // save the data, and get latest task
//         let latestTask = saveData(generatedElements);

//         // generate the task on dom
//         console.log(latestTask);
//         generateTaskInDOM(latestTask);

//         // remove the window after submission
//         removeElements(generatedElements);
//     });

//     // remove the window if clicked outside
//     generatedElements.blurBackground.addEventListener("click", () => {
//         removeElements(generatedElements);
//     })



// });