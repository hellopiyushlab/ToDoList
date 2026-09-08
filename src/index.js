// index.js
import { generateAddTaskWindow } from "./dom-manipulation.js";
import "./style.css";
// import takeInput from "./take-input.js";
// import { generateTaskInDOM, loadBackground, loadBaseElements, removeElements, generateWindow } from "./dom-manipulation.js";
import { saveData, getData, getProjects } from "./data.js";



// put event listener on add-task-button
const addTaskButton = document.querySelector("#add-task-button");

addTaskButton.addEventListener("click", (event) => {
    generateAddTaskWindow(getProjects());
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