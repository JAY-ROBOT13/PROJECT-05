// Alert on page load
window.onload = function () {
    alert("Welcome to the Paris Travel Destination Showcase!");
};

// Highlight places on hover
const items = document.querySelectorAll("li");
items.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.color = "#f1220bff";
    });
    item.addEventListener("mouseleave", () => {
        item.style.color = "#333";
    });
});
