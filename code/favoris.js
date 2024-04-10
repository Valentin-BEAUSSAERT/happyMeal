// Sélectionnez tous les boutons "like" en fonction de leur identifiant unique
const likeButtons = document.querySelectorAll(".like-button");

// Ajoutez un gestionnaire d'événements à chaque bouton "like"
likeButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    // Sélectionnez l'élément parent (div contenant la recette) du bouton cliqué
    const recipeDiv = this.closest(".w-full");

    // Supprimez l'élément parent de la recette
    recipeDiv.remove();
  });
});

// Récupérer les données de la recette depuis le stockage local
const recetteJSON = localStorage.getItem("favoris");
const favorisContainer = document.getElementById("favorisContainer");

// Afficher la recette dans le conteneur des favoris si elle existe
if (recetteJSON) {
  const recette = JSON.parse(recetteJSON);
  favorisContainer.innerHTML = recette.contenu;
  const likeButton = favorisContainer.querySelector(".like-button");
  likeButton.style.color = "red";
  // Utilisez l'index pour afficher l'image correspondante
  const index = recette.index;
  // Faites quelque chose avec l'index pour afficher l'image
} else {
  favorisContainer.innerHTML = "<p>Aucune recette likée pour le moment.</p>";
}
