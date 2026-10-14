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

document.addEventListener("DOMContentLoaded", function () {
    // Ensure that the document has both <head> and <body> tags for Live Reload compatibility
    if (!document.head) {
        console.warn('Document head not found. Creating a head element.');
        const headElement = document.createElement('head');
        document.documentElement.insertBefore(headElement, document.documentElement.firstChild);
    }
    if (!document.body) {
        console.warn('Document body not found. Creating a body element.');
        const bodyElement = document.createElement('body');
        document.documentElement.appendChild(bodyElement);
    }
    // Fetch header
    fetch('header.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        let headerPlaceholder = document.getElementById('header-placeholder');
        if (!headerPlaceholder) {
          console.warn('header-placeholder element not found. Creating one automatically.');
          headerPlaceholder = document.createElement('header');
          headerPlaceholder.id = 'header-placeholder';
          document.body.insertAdjacentElement('afterbegin', headerPlaceholder);
        }
        headerPlaceholder.innerHTML = data;
      })
      .catch(error => console.error('Error loading header:', error));

    // Fetch footer
    fetch('footer.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        let footerPlaceholder = document.getElementById('footer-placeholder');
        if (!footerPlaceholder) {
          console.warn('footer-placeholder element not found. Creating one automatically.');
          footerPlaceholder = document.createElement('footer');
          footerPlaceholder.id = 'footer-placeholder';
          document.body.insertAdjacentElement('beforeend', footerPlaceholder);
        }
        footerPlaceholder.innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));

    // Setup menu toggle
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