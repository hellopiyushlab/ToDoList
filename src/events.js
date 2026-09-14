import { 
    generateAddTaskWindow, 
    generateTaskInDOM, 
    expandDescription, 
    renderProjectInSidebar,
    toggleSideBar,
    blurTask,
    toggleTaskIcon,
    toggleArrowIcon,
    togglePriorityInDOM,
    showAllTasks,
    showActiveTasks,
    showCompletedTasks
} from "./dom-manipulation.js";

import { 
    saveData, 
    getProjects, 
    addProject,
    changeTaskStateInArray,
    getTaskStatus,
    getData
} from "./data.js";


// so what event listeners would go here? 

// checkbox container
// description
// description arrow

// it is better if each event listener is in a function
// so that it can be called anytime
// let's do it

function taskEL(latestTaskData, latestTaskElements) {


    // taskElement being selected using latestTaskData's UUID
    const taskElement = document.querySelector(`[data-id="${latestTaskData.id}"]`);


    if (latestTaskData.taskDescription !== "") {

        // on description
        taskElement.querySelector(".description").addEventListener("click", (event) => {
            expandDescription(event.currentTarget);
        });

        // on description icon
        taskElement.querySelector(".desc-empty-div").addEventListener("click", (event) => {
            expandDescription(taskElement.querySelector(".description"));
            toggleArrowIcon(taskElement.querySelector(".desc-empty-div"));
        });
    }

    taskElement.querySelector(".checkbox-container").addEventListener("click", (event) => {
        
        // visual task change
        blurTask(taskElement);
        toggleTaskIcon(event.currentTarget);

        // update data
        const taskId = taskElement.dataset.id;
        changeTaskStateInArray(taskId);

        // update priority in data
        // i have to make sure that this is happening only if there was a priority

        if (latestTaskData.taskPriority !== "none") {
            const priorityElement = taskElement.querySelector(".priority-div");
            togglePriorityInDOM(
                taskElement.querySelector(".priority-div"), 
                latestTaskData.completed
            );
        }

    })
}

function allTasksEL(allTasksData) {
    for (let taskObject of allTasksData) {
        // apply event listener on all tasks
    }
}

export {
    taskEL,
    allTasksEL
}