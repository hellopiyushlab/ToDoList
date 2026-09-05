// index.js
import "./style.css";
// import takeInput from "./take-input.js";
// import { generateTaskInDOM, loadBackground, loadBaseElements, removeElements, generateWindow } from "./dom-manipulation.js";
// import { saveData, getData } from "./data.js";

// // loading a background
// loadBackground(); 

// /// load the base elements, 
// /// and then take the add task button from it
// const baseElements = loadBaseElements();
// const addTaskButton = baseElements.addTaskButton;

// // now put event listner on the button
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