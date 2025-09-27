const textBox =     document.querySelector("#task");
const saveButton =  document.querySelector("#saveButton");
const output =      document.querySelector("#output");
saveButton.addEventListener("click", () => {
    const text = textBox.value;
    output.textContent = text;
})