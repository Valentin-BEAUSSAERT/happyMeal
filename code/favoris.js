function toggleFavorite(heartIcon) {
    // Vérifier l'état actuel des favoris.
    const isFavorite = heartIcon.getAttribute('data-favorite') === 'true';
    
    // Basculer l'état des favoris.
    const newFavoriteStatus = !isFavorite;
    heartIcon.setAttribute('data-favorite', newFavoriteStatus);
    heartIcon.classList.toggle('favorite-active', newFavoriteStatus); // Ajoute ou supprime la classe en fonction de newFavoriteStatus
    
    // Sauvegardez l'état des favoris dans localStorage.
    const recipeId = heartIcon.getAttribute('data-recipe-id'); // Assurez-vous que chaque cœur a cet attribut dans le HTML
    localStorage.setItem('favorite_' + recipeId, newFavoriteStatus);
    
    // Changez l'icône ou la couleur du cœur en fonction de l'état
    // Cela est déjà géré par la classe CSS 'favorite-active'
  }
  
  // Au chargement de la page, vérifiez l'état des favoris pour chaque cœur et mettez à jour l'interface utilisateur en conséquence.
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.favorite').forEach(heartIcon => {
      const recipeId = heartIcon.getAttribute('data-recipe-id');
      const isFavorite = localStorage.getItem('favorite_' + recipeId) === 'true';
      heartIcon.setAttribute('data-favorite', isFavorite);
      heartIcon.classList.toggle('favorite-active', isFavorite);
    });
  });
  