function setImage(imagePath) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imagePath;
  
    // Ajouter la classe pour l'effet de transition
    mainImage.classList.add('fade');
  
    // Supprimer la classe après que l'animation soit terminée pour permettre à l'effet de se rejouer
    setTimeout(() => {
      mainImage.classList.remove('fade');
    }, 1000); // Correspond à la durée de l'animation
  }
  
  let currentImageIndex = 0;
  const images = ['../assets/6.webp', "../assets/7.webp"];
  
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    setImage(images[currentImageIndex]);
  }
  
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    setImage(images[currentImageIndex]);
  }
  
  // Faire défiler automatiquement les images


  // setInterval(nextImage, 5000);
  