  // Fonction pour ouvrir la modal avec les détails de la recette
  function openModalWithRecipeDetails(imageIndex) {
    // Vous pouvez définir les détails de la recette ici ou les récupérer d'une source externe
    const recipeDetails = {
      title: "Ratatouille provençale",
      // ... autres détails de la recette
    };
    
    // Mettre à jour le contenu de la modal
    document.getElementById('modalTitle').textContent = recipeDetails.title;
    // ... mettre à jour les autres éléments de la modal avec les détails de la recette
    
    // Afficher la modal
    document.getElementById('recipeModal').classList.remove('hidden');
  }

  // Fonction pour fermer la modal
  function closeModal() {
    document.getElementById('recipeModal').classList.add('hidden');
  }

  // Ajouter des écouteurs d'événements à toutes les images pour ouvrir la modal
  document.querySelectorAll('.image-recipe').forEach((image, index) => {
    image.addEventListener('click', () => openModalWithRecipeDetails(index));
  });
