let data = {
    projects: ["Miscellaneous"],
    options: ["All Tasks", "Active", "Completed"],
}

let currentPageState = {
    projects: [],
    option: "",
}

let tasks = [];

function saveTask(formData) {
    let latestTask = {};

    latestTask.id = crypto.randomUUID();
    latestTask.title = formData.get("task-title");
    latestTask.priority = formData.get("priority");
    latestTask.project = formData.get("project");
    latestTask.desc = formData.get("task-description");
    latestTask.completed = false;

    tasks.push(latestTask);

    console.log(tasks);
    return latestTask;
}

function getProjects() {
    return data.projects;
}

function addProject(projectName) {
    // takes the name of the project
    // and adds it to the data

    // check for empty string and pre-existing project name
    if (projectName.trim() !== "" && !data.projects.includes(projectName)) {
        data.projects.push(projectName);
        console.log(data.projects);
    }
}

function completeTask(id) {
    tasks.find(item => item.id === id).completed = true;
    console.log(tasks.find(item => item.id === id));
}

function incompleteTask(id) {
    tasks.find(item => item.id === id).completed = false;
    console.log(tasks.find(item => item.id === id));
}

export {
    addProject,
    getProjects,
    saveTask,
    completeTask,
    incompleteTask
}