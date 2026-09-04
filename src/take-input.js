// take-input.js

export default function takeInput() {
    const title = prompt("What is the task?:  ");
    const project = prompt("what project will it belong to?:  ");
    const status = prompt("what is the status of this?:  ");
    return {
        title,
        project,
        status
    }
};