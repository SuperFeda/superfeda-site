const border_input = document.getElementById("border-input");
const border_radius_input = document.getElementById("border-radius-input");
const background_input = document.getElementById("background-input");

const square = document.getElementById("square");

border_input.addEventListener("input", () => {
    square.style.border = border_input.value;
});

border_radius_input.addEventListener("input", () => {
    square.style.borderRadius = border_radius_input.value;
});

background_input.addEventListener("input", () => {
    square.style.background = background_input.value;
});
