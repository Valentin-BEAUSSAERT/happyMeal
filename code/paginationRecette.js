
  let currentPage = 1;
  const itemsPerPage = 9; // Nombre d'images par page
  const totalItems = document.querySelectorAll('.grid img').length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function showItems(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    document.querySelectorAll('.grid img').forEach((img, index) => {
      if (index >= start && index < end) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  }

  function changePage(direction) {
    currentPage += direction;
    // Empêcher la pagination de sortir des limites
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    
    showItems(currentPage);
  }

  // Initialisez la vue avec les premiers éléments
  document.addEventListener('DOMContentLoaded', () => showItems(currentPage));

