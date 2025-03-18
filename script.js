document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        { title: "Mathematical Research Paper", description: "A deep dive into algebraic topology." },
        { title: "Calculus Course", description: "An interactive online course for learning calculus." },
        { title: "Number Theory Seminar", description: "A collection of talks on advanced number theory." }
    ];

    function loadProjects() {
        const projectContainer = document.getElementById("projects");

        // Check if the container exists
        if (!projectContainer) {
            console.warn("Error: Project container not found.");
            return;
        }

        projectContainer.innerHTML = ""; // Clear existing content

        projects.forEach(project => {
            const div = document.createElement("div");
            div.className = "project";
            div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
            projectContainer.appendChild(div);
        });
    }

    loadProjects();
});