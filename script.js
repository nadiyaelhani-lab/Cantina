const boutonOuvrir = document.getElementById("ouvrir-modale");
const modale = document.getElementById("modale-recette");

boutonOuvrir.addEventListener("click", function () {
    modale.hidden = false;
});
const boutonAnnuler = document.getElementById("annuler-recette");

boutonAnnuler.addEventListener("click", function () {
    modale.hidden = true;
});
const boutonFermer = document.getElementById("fermer-modale");

boutonFermer.addEventListener("click", function () {
    modale.hidden = true;
});
modale.addEventListener("click", function () {
    modale.hidden = true;
});
const formulaire = document.getElementById("form-recette");

formulaire.addEventListener("click", function (event) {
    event.stopPropagation();
});
const champCategorie = document.getElementById("categorie-recette");