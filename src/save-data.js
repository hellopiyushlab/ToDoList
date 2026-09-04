// save-data.js

let tasksArray = [];

export default function saveToArray(task) {
    task.id = crypto.randomUUID(); // give each task a new id
    tasksArray.push(task);
    return tasksArray;
}