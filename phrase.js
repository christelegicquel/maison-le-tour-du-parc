
// Sélection du conteneur où le carré sera ajouté
const container = document.getElementById("container2");
const phraseContainer = document.createElement("div");
phraseContainer.classList.add("phrase-container2");

// Création du lien
const lien1 = document.createElement("a");
lien1.href = "mon_annonce.html"; // Lien vers la page "mon_annoce.html"
lien1.classList.add("phrase");
lien1.textContent = "• Page d'accueil"; // Texte du lien
// Création du lien2
const lien2 = document.createElement("a");
lien2.href = "la_piece_a_vivre.html"; // Lien vers la page "mon_annoce.html"
lien2.classList.add("phrase");
lien2.textContent = "• La pièce à vivre"; // Texte du lien
// Création du lien3
const lien3 = document.createElement("a");
lien3.href = "chambres.html"; // Lien vers la page "mon_annoce.html"
lien3.classList.add("phrase");
lien3.textContent = "• Les chambres"; // Texte du lien
// Création du lien4
const lien4 = document.createElement("a");
lien4.href = "le_dortoir.html"; // Lien vers la page "mon_annoce.html"
lien4.classList.add("phrase");
lien4.textContent = "• Le dortoir"; // Texte du lien
// Création du lien4
const lien5 = document.createElement("a");
lien5.href = "salles_d_eau.html"; // Lien vers la page "mon_annoce.html"
lien5.classList.add("phrase");
lien5.textContent = "• Les salles d'eau"; // Texte du lien
// Création du lien5
const lien6 = document.createElement("a");
lien6.href = "son_exterieur.html"; // Lien vers la page "mon_annoce.html"
lien6.classList.add("phrase");
lien6.textContent = "• Le jardin"; // Texte du lien
// Création du lien6
const lien7 = document.createElement("a");
lien7.href = "situation.html"; // Lien vers la page "mon_annoce.html"
lien7.classList.add("phrase");
lien7.textContent = "• Situation"; // Texte du lien
// Création du lien7
const lien8 = document.createElement("a");
lien8.href = "reglement_interieur.html"; // Lien vers la page "mon_annoce.html"
lien8.classList.add("phrase");
lien8.textContent = "• Le règlement intérieur"; // Texte du lien

// Ajout du lien à l'intérieur du container de la phrase
phraseContainer.appendChild(lien1);
phraseContainer.appendChild(document.createTextNode(" ")); // Ajoute un espace entre les liens
phraseContainer.appendChild(lien2);
phraseContainer.appendChild(document.createTextNode(" ")); // Ajoute un espace entre les liens
phraseContainer.appendChild(lien3);
phraseContainer.appendChild(document.createTextNode(" ")); // Ajoute un espace entre les liens
phraseContainer.appendChild(lien4);
phraseContainer.appendChild(document.createTextNode(" ")); // Ajoute un espace entre les liens
phraseContainer.appendChild(lien5);
phraseContainer.appendChild(document.createTextNode(" ")); // Ajoute un espace entre les liens
phraseContainer.appendChild(lien6);
phraseContainer.appendChild(document.createTextNode(" ")); // Ajoute un espace entre les liens
phraseContainer.appendChild(lien7);
phraseContainer.appendChild(document.createTextNode(" ")); // Ajoute un espace entre les liens
phraseContainer.appendChild(lien8);






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

