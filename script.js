const boutonOuvrir = document.getElementById("ouvrir-modale");
const modale = document.getElementById("modale-recette");
const boutonAnnuler = document.getElementById("annuler-recette");
const boutonFermer = document.getElementById("fermer-modale");
const formulaire = document.getElementById("form-recette");

const champNom = document.getElementById("nom-recette");
const champCategorie = document.getElementById("categorie-recette");
const champPrix = document.getElementById("prix-recette");
const champBadge = document.getElementById("badge-recette");

boutonOuvrir.addEventListener("click", function () {
    modale.hidden = false;
});

boutonAnnuler.addEventListener("click", function () {
    modale.hidden = true;
});

boutonFermer.addEventListener("click", function () {
    modale.hidden = true;
});

modale.addEventListener("click", function () {
    modale.hidden = true;
});

formulaire.addEventListener("click", function (event) {
    event.stopPropagation();
});
const recettes = [];
let prochainId = 1;
formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    const nom = champNom.value.trim();
    const categorie = champCategorie.value;
    const prix = Number(champPrix.value);
    const badge = champBadge.value;

    const recette = {
        id: prochainId,
        nom: nom,
        categorie: categorie,
        prix: prix,
        badge: badge
    };

    recettes.push(recette);
    prochainId++;

    const carteCategorie = document.getElementById("reserve-" + categorie);

    const ligne = document.createElement("p");
    ligne.dataset.id = recette.id;
    ligne.textContent = nom + " - " + prix + " DH";
    const etiquette = document.createElement("span");
    etiquette.className = "badge bg-success ms-2";
    etiquette.textContent = champBadge.options[champBadge.selectedIndex].text;

    ligne.appendChild(etiquette);
    carteCategorie.appendChild(ligne);
    formulaire.reset();
    modale.hidden = true;
    console.log(recettes);
});