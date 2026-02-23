document.addEventListener("DOMContentLoaded", function() {

    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".menu");

    if (!hamburger || !menu) return;

    hamburger.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("active");
    });

    /* Klick på länk stänger menyn */
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function() {
            menu.classList.remove("active");
        });
    });

    /* Klick utanför stänger menyn */
    document.addEventListener("click", function(e) {
        if (!menu.contains(e.target) && e.target !== hamburger) {
            menu.classList.remove("active");
        }
    });

});