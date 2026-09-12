import "./style.css";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

// this one is for anything relating dom

const body = document.querySelector("body");

function loadBackground() {
    body.setAttribute("id", "background");
}

function loadBaseElements() {

    // add the heading
    const heading = document.createElement("div");
    heading.textContent = "piyush's to do list";
    heading.setAttribute("id", "heading");
    body.appendChild(heading);

    // add the main content div
    const mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main-content");
    body.appendChild(mainContent);

    // add task button
    const addTaskButton = document.createElement("div");
    addTaskButton.setAttribute("id", "add-task-button");
    const plusIcon = icon(faPlus);
    addTaskButton.appendChild(plusIcon.node[0]);
    body.appendChild(addTaskButton);

    return {
        addTaskButton
    };
}

function generateAddTaskWindow(projects) {

    // select the body
    const body = document.querySelector("body");

    // make the main window
    const addTaskWindow = document.createElement("div"); 
    addTaskWindow.setAttribute("id", "add-task-window");
    
    // make the form inside the window
    const addTaskForm = document.createElement("form");
    addTaskForm.setAttribute("id", "add-task-form");
    addTaskWindow.appendChild(addTaskForm);

    const addTaskOptions = document.createElement("div");
    addTaskOptions.setAttribute("id", "add-task-options");
    addTaskForm.appendChild(addTaskOptions);

    // const dateInput = document.createElement("input");
    // dateInput.setAttribute("type", "date");
    // dateInput.setAttribute("id", "task-date");
    // dateInput.setAttribute("name", "date");
    // addTaskOptions.appendChild(dateInput);

    const taskPriority = document.createElement("select");
    taskPriority.setAttribute("id", "task-priority");
    taskPriority.setAttribute("name", "priority");
    addTaskOptions.appendChild(taskPriority);

    const noPriorityInput = document.createElement("option");
    noPriorityInput.selected =  true;
    noPriorityInput.setAttribute("value", "none");
    noPriorityInput.textContent = "No Priority";
    const lowPriorityInput = document.createElement("option");
    lowPriorityInput.setAttribute("value", "low");
    lowPriorityInput.textContent = "Low";
    const mediumPriorityInput = document.createElement("option");
    mediumPriorityInput.setAttribute("value", "medium");
    mediumPriorityInput.textContent = "Medium";
    const highPriorityInput = document.createElement("option");
    highPriorityInput.setAttribute("value", "high");
    highPriorityInput.textContent = "High";

    taskPriority.appendChild(noPriorityInput);
    taskPriority.appendChild(lowPriorityInput);
    taskPriority.appendChild(mediumPriorityInput);
    taskPriority.appendChild(highPriorityInput);

    const taskProject = document.createElement("select");
    taskProject.id = "task-project";
    taskProject.name = "project";

    const noProject = document.createElement("option");
    noProject.value = "Miscellaneous";
    noProject.selected = true;
    noProject.textContent = "No Project";
    taskProject.appendChild(noProject);

    for (const project of projects) {
        const option = document.createElement("option");
        option.value = project;
        option.textContent = project;
        taskProject.appendChild(option);
    }

    addTaskOptions.appendChild(taskProject);

    const taskTitleInput = document.createElement("input");
    taskTitleInput.type = "text";
    taskTitleInput.id = "task-title";
    taskTitleInput.name = "task-title";
    taskTitleInput.placeholder = "Title: Do Something, Anything";
    taskTitleInput.required = true;
    addTaskForm.appendChild(taskTitleInput);

    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = "task-description";
    descriptionInput.name = "task-description";
    descriptionInput.placeholder = "Details: You can even add sub-tasks here!";
    addTaskForm.appendChild(descriptionInput);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.id = "submit-button";
    submitButton.textContent = "Add Task";
    addTaskForm.appendChild(submitButton);

    body.appendChild(addTaskWindow);
}


// this function takes an object of elements and then remove them from the dom
function removeElements(elements) {
    for (const element of Object.values(elements)) {
        element.remove();
    }
}

// function to generate the tasks on DOM
function generateTaskInDOM(latestTask) {
    
    const tasks = document.querySelector("#tasks");

    const task = document.createElement("div");
    task.setAttribute("class", "task");
    task.setAttribute("data-id", latestTask.id);
    tasks.appendChild(task);

        const row1 = document.createElement("div");
        row1.setAttribute("class", "row1");
        task.appendChild(row1);

            const checkboxContainer = document.createElement("div");
            checkboxContainer.setAttribute("class", "checkbox-container");
            row1.appendChild(checkboxContainer);

                const uncheckedIcon = document.createElement("i");
                uncheckedIcon.classList.add("fa-regular", "fa-circle", "unchecked-icon");
                checkboxContainer.appendChild(uncheckedIcon);

                const checkedIcon = document.createElement("i");
                checkedIcon.classList.add("fa-regular", "fa-circle-check", "checked-icon");
                checkboxContainer.appendChild(checkedIcon);

            const title = document.createElement("div");
            title.setAttribute("class", "title");
            title.textContent = latestTask.taskTitle;
            row1.appendChild(title);

            const optionsContainer = document.createElement("div");
            optionsContainer.setAttribute("class", "options-container");
            row1.appendChild(optionsContainer);

                const optionsIcon = document.createElement("i");
                optionsIcon.classList.add("fa-solid", "fa-ellipsis");
                optionsContainer.appendChild(optionsIcon);

        // need some if else for the other rows

        // if there is a description, show it
        let description;
        let row2;
        let arrowDiv;
        if (latestTask.taskDescription != "") {

            // add row
            row2 = document.createElement("div");
            row2.setAttribute("class", "row2")
            task.appendChild(row2);

            arrowDiv = document.createElement("div");
            arrowDiv.setAttribute("class", "empty-div");
            arrowDiv.classList.add("desc-empty-div");
            row2.appendChild(arrowDiv);

                const arrowIconRight = document.createElement("i");
                arrowIconRight.classList.add("fa-solid");
                arrowIconRight.classList.add("fa-angle-right", "arrow-icon-right", "arrow-icon");
                arrowDiv.appendChild(arrowIconRight);

                const arrowIconDown = document.createElement("i");
                arrowIconDown.classList.add("fa-solid");
                arrowIconDown.classList.add("fa-angle-down", "arrow-icon-down", "arrow-icon", "arrow-icon-hidden");
                arrowDiv.appendChild(arrowIconDown);

            description = document.createElement("div");
            description.setAttribute("class", "description");
            description.textContent = latestTask.taskDescription;
            row2.appendChild(description);
        }

        let priorityColor;
        let priority;
        if (
            latestTask.taskPriority != "none" || latestTask.taskProject != "Miscellaneous"
        ) {
            const row3 = document.createElement("div");
            row3.setAttribute("class", "row3");
            task.appendChild(row3);

            const emptyDiv = document.createElement("div");
            emptyDiv.setAttribute("class", "empty-div");
            row3.appendChild(emptyDiv);

            const projectInfo = document.createElement("div");
            projectInfo.textContent = latestTask.taskProject;
            projectInfo.setAttribute("class", "project-info");
            row3.appendChild(projectInfo);

            const breakElement = document.createElement("div");
            breakElement.textContent = "|";
            breakElement.setAttribute("class", "break");
            row3.appendChild(breakElement);

            const date = document.createElement("div");
            // add date text content after converting here
            date.setAttribute("class", "date");
            row3.appendChild(date);

            priorityColor = document.createElement("div");
            priorityColor.setAttribute("class", "priority-color");
            row3.appendChild(priorityColor);

            priority = document.createElement("div");
            priority.textContent = latestTask.taskPriority.charAt(0).toUpperCase() + latestTask.taskPriority.slice(1) + " Priority";
            priority.dataset.originalText = priority.textContent;
            priority.setAttribute("class", "priority-div");
            row3.appendChild(priority);
        } 

        if (latestTask.taskPriority === "low") {
            priorityColor.classList.add("low-priority-color");
        } else if (latestTask.taskPriority === "medium") {
            priorityColor.classList.add("medium-priority-color");
        } else if (latestTask.taskPriority === "high") {
            priorityColor.classList.add("high-priority-color");
        }

        return {
            description,
            checkboxContainer,
            arrowDiv,
            priority
        }
}


function expandDescription(el) {
    const isExpanded = el.classList.contains('description-expanded');

    if (isExpanded) {
        // COLLAPSING
        // 1. Lock in the current rendered height first (can't animate from "auto")
        el.style.height = el.scrollHeight + 'px';
        el.offsetHeight; // force reflow so the browser registers the starting height

        // 2. Remove expanded class (this changes white-space back to nowrap)
        el.classList.remove('description-expanded');

        // 3. Now animate down to the collapsed height
        requestAnimationFrame(() => {
            el.style.height = '24px';
        });
    } else {
        // EXPANDING
        // 1. Add the class first so white-space becomes normal + line-height applies
        el.classList.add('description-expanded');

        // 2. NOW measure scrollHeight (must happen after white-space changes,
        //    otherwise you're measuring the single-line nowrap height)
        const targetHeight = el.scrollHeight + 'px';

        // 3. Reset height to the starting point and force reflow
        el.style.height = '24px';
        el.offsetHeight;

        // 4. Animate to the real target height
        requestAnimationFrame(() => {
            el.style.height = targetHeight;
        });

        el.addEventListener('transitionend', function handler(e) {
            if (e.propertyName !== 'height') return;
            el.style.height = 'auto'; // let it breathe if container resizes later
            el.removeEventListener('transitionend', handler);
        });
    }
}

function renderProjectInSidebar(projectFormData) {

    const projectsList = document.querySelector("#projects-list");

    const project = projectFormData.get("project-name");

    const projectElement = document.createElement("div");
    projectElement.setAttribute("class", "project");

    const projectName = document.createElement("span");
    projectName.textContent = project;

    const dotIcon = document.createElement("i");
    dotIcon.classList.add("fa-solid", "fa-ellipsis");

    projectElement.append(projectName, dotIcon);
    projectsList.appendChild(projectElement);
}

function toggleSideBar(sidebar) {
    const isHidden = sidebar.classList.contains("side-bar-hidden");
    if (isHidden) {
        sidebar.classList.remove("side-bar-hidden");
    } else {
        sidebar.classList.add("side-bar-hidden");
    }
}

function blurTask(task) {
    const isCompleted = task.classList.contains("completed-task");
    if (isCompleted) {
        task.classList.remove("completed-task");
    } else {
        task.classList.add("completed-task");
    }
}

function toggleTaskIcon(container) {
    container.classList.toggle("checked");
}

function toggleArrowIcon(element) {
    const rightArrow = element.querySelector(".arrow-icon-right");
    const downArrow = element.querySelector(".arrow-icon-down");

    rightArrow.classList.toggle("arrow-icon-hidden");
    downArrow.classList.toggle("arrow-icon-hidden");
} 

function togglePriorityInDOM(priority, element, status) {
    if (status === true) {
        priority.textContent = "Task Done!";
    } else if (status === false) {
        priority.textContent = priority.dataset.originalText;
    }
}

export {
    generateAddTaskWindow,
    generateTaskInDOM,
    expandDescription,
    renderProjectInSidebar,
    toggleSideBar,
    blurTask,
    toggleTaskIcon,
    toggleArrowIcon,
    togglePriorityInDOM
}