document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");

    // Ouvrir/fermer le menu au clic sur l'icône
    menuIcon.addEventListener("click", function(event) {
        event.stopPropagation(); // Empêche la fermeture immédiate du menu
        menu.classList.toggle("open"); // Toggle pour garder ouvert/fermé
    });

    // Fermer le menu lorsqu'on clique en dehors de celui-ci
    document.addEventListener("click", function(event) {
        // Vérifie si le clic est en dehors du menu et de l'icône
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("open"); // Ferme le menu
        }
    });
});

