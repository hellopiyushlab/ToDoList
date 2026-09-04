// data.js

let arrayOfTasks = [];

function saveData(elements) {
    let latestTask = createTaskObject(elements.title.value);
    arrayOfTasks.push(latestTask);
    return latestTask;
}


// factory function for creating objects
function createTaskObject(title) {
    const taskTitle = title;
    const id = crypto.randomUUID(); 
    return {
        taskTitle,
        id,
    }
}

function getData() {
    return arrayOfTasks;
}

export {
    saveData,
    getData
}