import "./style.css";


export default function loadBackground() {
    const body = document.querySelector("body");
    const background = document.createElement("div");
    background.setAttribute("id", "background");
    body.appendChild(background);
}