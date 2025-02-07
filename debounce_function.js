// 3. Make a debounce function in JavaScript that limits the occurrence of a function’s execution

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
// Example usage:
function handleInputChange(event) {
    console.log(event.target.value);
}
// Debounce with a 500ms delay
const debouncedHandleInputChange = debounce(handleInputChange, 500);
// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("myInput");
    if (inputElement) {
        inputElement.addEventListener("input", debouncedHandleInputChange);
    } else {
        console.error("Element with ID 'myInput' not found.");
    }
});
