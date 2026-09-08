// data.js

let arrayOfTasks = [
    {
        id: "1",
        taskTitle: "Learn JavaScript",
        Project: "Odin Project",
        status: false
    },
    {
        id: "2",
        taskTitle: "Draw for 30 minutes",
        Project: "Art",
        status: false
    },
    {
        id: "3",
        taskTitle: "Build Todo List",
        Project: "Odin Project",
        status: false
    },
    {
        id: "4",
        taskTitle: "Watch anime",
        Project: "none",
        status: true
    },
    {
        id: "5",
        taskTitle: "Read a book",
        Project: "Personal",
        status: false
    },
    {
        id: "6",
        taskTitle: "Practice CSS",
        Project: "Odin Project",
        status: false
    },
    {
        id: "7",
        taskTitle: "Go for a walk",
        Project: "Personal",
        status: true
    },
    {
        id: "8",
        taskTitle: "Clean room",
        Project: "none",
        status: false
    }
];

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

function getProjects() {
    const projects = [...new Set(
    arrayOfTasks
        .map(task => task.Project)
        .filter(project => project !== "none")
    )];
    return projects;
}



export {
    saveData,
    getData,
    getProjects
}