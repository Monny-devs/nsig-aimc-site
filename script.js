document.addEventListener("DOMContentLoaded", function() { const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your application has been submitted successfully!");
    form.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    });
});

});
