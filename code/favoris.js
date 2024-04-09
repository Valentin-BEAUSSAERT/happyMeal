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
