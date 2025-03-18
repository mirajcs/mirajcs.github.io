document.addEventListener("DOMContentLoaded", function () {
    // Load About Me section
    const aboutMe = document.getElementById("about-me");
    aboutMe.innerHTML = `
        <h2>About Me</h2>
        <p>Hello! I'm Miraj Samarakkody, a passionate developer and tech enthusiast. 
        I love coding, problem-solving, and building innovative projects.</p>
    `;

    // Load Projects dynamically
    const projects = [
        { title: "Project 1", description: "An amazing project using JavaScript.", link: "#" },
        { title: "Project 2", description: "A machine learning experiment.", link: "#" },
        { title: "Project 3", description: "A web app with React and Node.js.", link: "#" }
    ];

    const projectsContainer = document.getElementById("projects");
    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("container");
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsContainer.appendChild(projectElement);
    });
});