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
ligne.textContent = nom + " ";

const etiquettePrix = document.createElement("span");
etiquettePrix.className = "badge bg-success";
etiquettePrix.textContent = prix + " DH";

ligne.appendChild(etiquettePrix);    const etiquette = document.createElement("span");
    etiquette.className = "badge bg-success ms-2";
    etiquette.textContent = champBadge.options[champBadge.selectedIndex].text;

    ligne.appendChild(etiquette);
    carteCategorie.appendChild(ligne);
    const listes = document.querySelectorAll(".menu-jour select." + categorie);

listes.forEach(function (liste) {
    const option = document.createElement("option");

    option.value = prix;
    option.dataset.id = recette.id;
    option.textContent = nom + " - " + prix + " DH";

    liste.appendChild(option);
});
    formulaire.reset();
    modale.hidden = true;
    console.log(recettes);
});
const erreurNom = document.getElementById("erreur-nom");

const erreurPrix = document.getElementById("erreur-prix");
const boutonValider = document.getElementById("valider-recette");
const erreurCategorie = document.getElementById("erreur-categorie");
function verifierFormulaire() {
    const nom = champNom.value.trim();
    const categorie = champCategorie.value;
    const prixTexte = champPrix.value;
    const prix = Number(prixTexte);
      const nomValide = /^.{3,30}$/.test(nom);
    const categorieValide = /^(entree|plat|dessert)$/.test(categorie);
const prixValide = /^\d+(\.\d+)?$/.test(prixTexte)    && Number.isFinite(prix)
    && prix > 0
    && champPrix.validity.valid;
          erreurNom.textContent = "";
    erreurCategorie.textContent = "";
    erreurPrix.textContent = "";

    if (!nomValide) {
        erreurNom.textContent = "Le nom doit contenir entre 3 et 30 caractères.";
    }

    if (!categorieValide) {
        erreurCategorie.textContent = "Choisis une catégorie.";
    }

    if (!prixValide) {
        erreurPrix.textContent = "Saisis un prix positif avec au maximum deux décimales.";
    }

    const formulaireValide = nomValide && categorieValide && prixValide;

    boutonValider.disabled = !formulaireValide;

    return formulaireValide;
}

formulaire.addEventListener("input", verifierFormulaire);
formulaire.addEventListener("change", verifierFormulaire);

formulaire.addEventListener("reset", function () {
    boutonValider.disabled = true;
    erreurNom.textContent = "";
    erreurCategorie.textContent = "";
    erreurPrix.textContent = "";
});