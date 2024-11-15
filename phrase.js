// Sélection des éléments existants
const container = document.getElementById("container2");
const carre = document.getElementById("carre");

// Création du conteneur de phrases
const phraseContainer = document.createElement("div");
phraseContainer.classList.add("phrase-container2");

// Création et ajout des liens
const liens = [
    { href: "mon_annonce.html", text: "• Page d'accueil" },
    { href: "la_piece_a_vivre.html", text: "• La pièce à vivre" },
    { href: "chambres.html", text: "• Les chambres" },
    { href: "le_dortoir.html", text: "• Le dortoir" },
    { href: "salles_d_eau.html", text: "• Les salles d'eau" },
    { href: "son_exterieur.html", text: "• Le jardin" },
    { href: "situation.html", text: "• Situation" },
    { href: "reglement_interieur.html", text: "• Le règlement intérieur" }
];

// Boucle de création de liens
liens.forEach(({ href, text }) => {
    const lien = document.createElement("a");
    lien.href = href;
    lien.classList.add("phrase");
    lien.textContent = text;
    phraseContainer.appendChild(lien);
});

// Ajout du conteneur de phrases au conteneur principal
container.appendChild(phraseContainer);

// Fonction pour afficher et fixer le conteneur
function showRectangle() {
    phraseContainer.classList.add("visible");
    phraseContainer.classList.add("fixed"); // Ajoute la classe fixed pour que le conteneur reste visible
}

// Fonction pour cacher le conteneur, sauf s’il est fixé
function hideRectangle() {
    if (!phraseContainer.classList.contains("fixed")) {
        phraseContainer.classList.remove("visible");
    }
}

// Affiche le conteneur quand le curseur est sur le carré
carre.addEventListener("mouseenter", () => {
    phraseContainer.classList.add("visible");
});

// Fixe le conteneur quand on clique sur le carré
carre.addEventListener("click", (e) => {
    e.stopPropagation(); // Empêche la propagation de l’événement de clic
    showRectangle(); // Affiche et fixe le conteneur
});

// Garde le conteneur visible quand on passe le curseur dessus
phraseContainer.addEventListener("mouseenter", () => {
    showRectangle();
});

// Enlève la classe "fixed" si on quitte le conteneur
phraseContainer.addEventListener("mouseleave", () => {
    phraseContainer.classList.remove("fixed");
    hideRectangle();
});

// Cacher le conteneur quand on clique ailleurs sur la page
document.addEventListener("click", () => {
    phraseContainer.classList.remove("fixed"); // Enlève la classe fixed
    hideRectangle(); // Cache le conteneur
});
