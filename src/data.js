let data = {
    projects: ["Miscellaneous"],
    options: ["All Tasks", "Active", "Completed"],
}

let currentPageState = {
    projects: [],
    option: "",
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

export {
    addProject,
    getProjects,
}