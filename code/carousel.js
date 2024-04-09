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
  const images = ["../assets/30.webp", "../assets/31.webp", "../assets/32.webp", "../assets/33.webp", "../assets/34.webp", "../assets/35.webp", "../assets/36.webp", "../assets/37.webp", "../assets/38.webp", "../assets/39.webp", "../assets/40.webp" ];
  
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
  