import "./style.css";

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

    // category header in mainContent
    // const categories = document.createElement("div");
    // categories.setAttribute("id", "categories");
    // mainContent.appendChild(categories);

    // const categoriesSubHeading = document.createElement("div");
    // categoriesSubHeading.textContent = "categories";
    // categoriesSubHeading.setAttribute("class", "subheading");
    // categories.appendChild(categoriesSubHeading);

    // add task button
    const addTaskButton = document.createElement("div");
    addTaskButton.setAttribute("id", "add-task-button");
    const plusIcon = document.createElement("i");
    plusIcon.setAttribute("class", "fa-solid fa-plus");
    addTaskButton.appendChild(plusIcon);
    body.appendChild(addTaskButton);
}

export {
    loadBackground,
    loadBaseElements,
}