document.addEventListener("DOMContentLoaded", function() {
    // Define an array of projects
    const projects = [
        { title: "Mathematical Research Paper", description: "A deep dive into algebraic topology." },
        { title: "Calculus Course", description: "An interactive online course for learning calculus." },
        { title: "Number Theory Seminar", description: "A collection of talks on advanced number theory." }
    ];

    // Function to dynamically create project elements
    function loadProjects() {
        const projectContainer = document.getElementById("projects");

        // Ensure projectContainer exists
        if (!projectContainer) {
            console.error("Error: Project container not found!");
            return;
        }

        projectContainer.innerHTML = ""; // Clear any existing content

        projects.forEach(project => {
            let div = document.createElement("div");
            div.className = "project";
            div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
            projectContainer.appendChild(div);
        });
        alert("Projects loaded successfully!");
    }

    // Run the function when the page loads
    loadProjects();
});
