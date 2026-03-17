// Detta körs när hela sidan har laddat
document.addEventListener("DOMContentLoaded", function() {

    // Hamburger-ikon och meny hämtas
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".menu");

    if (!hamburger || !menu) return;

    // Toggle-funktion som öppnar och stänger menyn vid klick på hamburgermenyn
    hamburger.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("active");
    });

    // Klicka på länk i menyn -> Då stängs menyfönstret och går till vald sida
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function() {
            menu.classList.remove("active");
        });
    });

    // Klicka utanför menyn för att stänga menyn (om man inte vill klicka vidare någonstans)
    document.addEventListener("click", function(e) {
        if (!menu.contains(e.target) && e.target !== hamburger) {
            menu.classList.remove("active");
        }
    });

});