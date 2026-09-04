// take-input.js

// later, this code will put event listeners on the dom

export default function takeInput() {
    const title = prompt("What is the task?:  ");
    const category = prompt("what project will it belong to?:  ");
    const completed = prompt("what is the status of this?:  ");
    return {
        title,
        category,
        completed: completed === "true", 
    }
};