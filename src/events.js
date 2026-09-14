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
    if (latestTaskElements.description) {
        latestTaskElements.description.addEventListener("click", (event)=> {
            console.log(latestTaskElements);
            expandDescription(event.target);
        });
        // putting the event listener on the arrow icon as well
        latestTaskElements.arrowDiv.addEventListener("click", () => {
            expandDescription(latestTaskElements.description);
            toggleArrowIcon(latestTaskElements.arrowDiv);
        })
    }
    latestTaskElements.checkboxContainer.addEventListener("click", (event) => {

        // visual task change
        blurTask(event.target.closest(".task"));
        toggleTaskIcon(event.currentTarget);

        // update data
        const taskElement = event.target.closest(".task");
        if (!taskElement) return;
        const taskId = taskElement.dataset.id;
        changeTaskStateInArray(taskId);

        // update priority in data
        // i have to make sure that this is happening, only if there was a priority
        if (latestTaskElements.priority != undefined) {
            const priorityElement = taskElement.querySelector(".priority-div");
            togglePriorityInDOM(latestTaskElements.priority, priorityElement, getTaskStatus(taskId));
        }
    })
}

export {
    taskEL,
}