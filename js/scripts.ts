function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const selectElement = (element): void => {
    element.style.backgroundColor = "rgba(194, 0, 0, 0.5)";
    element.style.color = "#fff";

    sleep(5000).then(() => { element.style.backgroundColor = ""; element.style.color = ""; });
}