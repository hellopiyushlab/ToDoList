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

function taskEL(latestTaskData) {


    // taskElement being selected using latestTaskData's UUID
    const taskElement = document.querySelector(`[data-id="${latestTaskData.id}"]`);
    if (!taskElement) return;


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

        // put the event listeners on each task
        taskEL(taskObject);

        // the followinng logic is for
        // making sure that
        // the tasks' visual state (only) 
        // returns back to the original

        // select the current iteration of task element
        let taskElement = document.querySelector(`[data-id="${taskObject.id}"]`);
        if (!taskElement) continue;

        // if the status for this iteration is completed
        // this will not do anything when I click on show active
        if (taskObject.completed === true) {
            // visual task change
            blurTask(taskElement); // here, it will always blur it
            toggleTaskIcon(taskElement.querySelector(".checkbox-container")); // and always put check on it
            
        }

        // changing the priority text
        console.log(taskObject.taskPriority);
        if (taskObject.taskPriority !== "none" && taskObject.completed === true) {
            taskElement.querySelector(".priority-div").textContent = "Task Done!";
        }
    }
}

export {
    taskEL,
    allTasksEL
}