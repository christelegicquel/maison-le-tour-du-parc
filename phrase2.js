// Sélection du conteneur où le carré sera ajouté
const container = document.getElementById("container");

// Création du carré et de l'espace où le lien sera affiché
const carre = document.createElement("div");
carre.classList.add("carre");

const phraseContainer = document.createElement("div");
phraseContainer.classList.add("phrase-container");

// Création du lien
const lien1 = document.createElement("a");
lien1.href = "mon_annonce.html"; // Lien vers la page "mon_annoce.html"
lien1.classList.add("phrase");
lien1.textContent = "Annonce"; // Texte du lien
const lien2 = document.createElement("a");
lien2.href = "la_piece_a_vivre.html"; // Lien vers la page "mon_annoce.html"
lien2.classList.add("phrase");
lien2.textContent = "La pièce à vivre"; // Texte du lien

// Ajout du lien à l'intérieur du container de la phrase
phraseContainer.appendChild(lien1);
phraseContainer.appendChild(document.createElement("br")); // Saut de ligne
phraseContainer.appendChild(document.createTextNode(" ")); // Ajoute un espace entre les liens
phraseContainer.appendChild(lien2);



// Ajout du carré et du container dans le conteneur principal
container.appendChild(carre);
container.appendChild(phraseContainer);

// Fonction pour afficher ou masquer le rectangle noir
function showRectangle() {
    phraseContainer.classList.add("visible"); // Afficher le rectangle
    phraseContainer.classList.add("fixed"); // Marquer comme "fixé" pour qu'il ne disparaisse pas
}

// Fonction pour cacher le rectangle noir
function hideRectangle() {
    phraseContainer.classList.remove("visible"); // Masquer le rectangle
    phraseContainer.classList.remove("fixed"); // Enlever la classe "fixé"
}

// Affiche l'espace avec le lien quand le curseur passe sur le carré
carre.addEventListener("mouseenter", () => {
    phraseContainer.classList.add("visible"); // Ajoute la classe visible
});

// Cache l'espace avec le lien quand le curseur quitte le carré, sauf si déjà cliqué
carre.addEventListener("mouseleave", () => {
    if (!phraseContainer.classList.contains("fixed")) {
        phraseContainer.classList.remove("visible"); // Enlève la classe visible si non fixé
    }
});

// Événement de clic sur le carré rouge
carre.addEventListener("click", (e) => {
    e.stopPropagation(); // Empêche le clic de se propager à l'événement de document
    showRectangle(); // Afficher le rectangle noir et le fixer
});

// Événement de clic sur le rectangle noir
phraseContainer.addEventListener("click", (e) => {
    e.stopPropagation(); // Empêche le clic d'être propagé au document
    showRectangle(); // Afficher le rectangle noir et le fixer si déjà cliqué
});

// Lorsque le curseur est sur le rectangle noir, il ne disparaît pas
phraseContainer.addEventListener("mouseenter", () => {
    phraseContainer.classList.add("visible"); // Assurer que le rectangle reste visible
    phraseContainer.classList.add("fixed"); // Marquer comme "fixé" quand survolé
});

// Événement de clic ailleurs sur la page pour cacher le rectangle noir
document.addEventListener("click", () => {
    hideRectangle(); // Cacher le rectangle lorsque l'on clique ailleurs
});
