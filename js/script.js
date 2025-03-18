document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.querySelector(".menu-icon");
    var menu = document.querySelector(".header-buttons");

    menuIcon.addEventListener("click", function (event) {
        menu.classList.toggle("active");
        event.stopPropagation();
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});