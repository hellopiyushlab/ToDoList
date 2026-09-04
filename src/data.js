// data.js



let arrayOfTasks = [];

function saveData(elements) {
    arrayOfTasks.push(createTaskObject(elements.title.value));
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

export {
    saveData
}