// index.js
import { generateAddTaskWindow } from "./dom-manipulation.js";
import "./style.css";
// import takeInput from "./take-input.js";
// import { generateTaskInDOM, loadBackground, loadBaseElements, removeElements, generateWindow } from "./dom-manipulation.js";
import { saveData, getData, getProjects } from "./data.js";



// put event listener on add-task-button
const addTaskButton = document.querySelector("#add-task-button");

// add event listener to display the window
addTaskButton.addEventListener("click", () => {
    generateAddTaskWindow(getProjects());

    // add the submit event listener on the form itself
    const addTaskForm = document.querySelector("#add-task-form");
    addTaskForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // show the form data
        const formData = new FormData(addTaskForm);
        console.log(formData.get("task-title"));
        console.log(formData.get("task-description"));
        console.log(formData.get("priority"));
        console.log(formData.get("project"));
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