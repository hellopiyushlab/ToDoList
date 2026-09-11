// data.js

let arrayOfTasks = [
    // dummy data :
    // {
    //     id: "1",
    //     taskTitle: "Learn JavaScript",
    //     Project: "Odin Project",
    //     status: false
    // },
    // {
    //     id: "2",
    //     taskTitle: "Draw for 30 minutes",
    //     Project: "Art",
    //     status: false
    // },
    // {
    //     id: "3",
    //     taskTitle: "Build Todo List",
    //     Project: "Odin Project",
    //     status: false
    // },
    // {
    //     id: "4",
    //     taskTitle: "Watch anime",
    //     Project: "none",
    //     status: true
    // },
    // {
    //     id: "5",
    //     taskTitle: "Read a book",
    //     Project: "Personal",
    //     status: false
    // },
    // {
    //     id: "6",
    //     taskTitle: "Practice CSS",
    //     Project: "Odin Project",
    //     status: false
    // },
    // {
    //     id: "7",
    //     taskTitle: "Go for a walk",
    //     Project: "Personal",
    //     status: true
    // },
    // {
    //     id: "8",
    //     taskTitle: "Clean room",
    //     Project: "none",
    //     status: false
    // }
];

let projects = [];

function saveData(title, description, priority, project) {
    let latestTask = createTaskObject(title, description, priority, project);
    latestTask.completed = false;
    arrayOfTasks.push(latestTask);
    return latestTask;
}


// factory function for creating objects
function createTaskObject(title, description, priority, project) {
    const taskTitle = title;
    const taskDescription = description;
    const taskPriority = priority;
    const taskProject = project;
    const id = crypto.randomUUID(); 
    return {
        taskTitle,
        taskDescription,
        taskPriority,
        taskProject,
        id,
    }
}

function getData() {
    return arrayOfTasks;
}



function getProjects() {
    // i, personally, have no idea what is going on here
    const taskProjects = arrayOfTasks
        .map(task => task.taskProject)     
        .filter(p => p && p !== "Miscellaneous");
    return [...new Set([...projects, ...taskProjects])];
}

function addProject(projectFormData) {
    const project = projectFormData.get("project-name");

    if (!projects.includes(project)) {
        projects.push(project);
    }
}

export {
    saveData,
    getData,
    getProjects,
    addProject
}