const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
        hamIcon.style.display = "inline-block";
        crossIcon.style.display = "none";
    } else {
        menu.style.display = "block";
        hamIcon.style.display = "none";
        crossIcon.style.display = "inline-block";
    }
});

/* Ensure menu resets when screen size increases */
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        menu.style.display = "flex"; // Show menu normally on larger screens
    } else {
        menu.style.display = "none"; // Hide menu again if resized to small screen
    }
});



