
// Welcome message
window.onload = function() {
    alert("Welcome to my portfolio website!");
};

// Change header text when mouse hovers over it
const header = document.querySelector("header h1");

header.addEventListener("mouseenter", function() {
    header.textContent = "Thanks for visiting my Portfolio!";
});

// Project hover message
const projects = document.querySelectorAll("#projects li");

projects.forEach(function(project) {
    project.addEventListener("click", function() {
        alert("You selected: " + project.textContent);
    });
});

// Current year in footer
document.querySelector("footer p").textContent =
    "© " + new Date().getFullYear() + " My Portfolio";
