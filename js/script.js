function setupMenuToggle() {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".header-buttons");

    if (!menuIcon || !menu) {
        console.error("❌ Menu icon or navigation menu not found!");
        return;
    }

    menuIcon.addEventListener("click", function () {
        menu.classList.toggle("active");
        console.log("✅ Menu toggled:", menu.classList.contains("active"));
    });
}

// Check if header is loaded dynamically and wait if necessary
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".menu-icon") && document.querySelector(".header-buttons")) {
        setupMenuToggle();
    } else {
        console.log("⏳ Waiting for header to load...");
        const checkHeaderLoaded = setInterval(() => {
            if (document.querySelector(".menu-icon") && document.querySelector(".header-buttons")) {
                clearInterval(checkHeaderLoaded);
                console.log("✅ Header loaded, setting up menu.");
                setupMenuToggle();
            }
        }, 100); // Check every 100ms
    }
});


fetch("footer.html")
    .then(response => response.text())
    .then(data => document.getElementById("footer").innerHTML = data);

fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
        })
    .catch(error => console.error("Error loading header:", error));
