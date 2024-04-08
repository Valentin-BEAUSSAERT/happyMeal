const images = [
    "../assets/1.jpeg",
    "../assets/2.jpeg",
    // Ajoutez plus de chemins d'images si nécessaire
  ];
  let currentImage = 0;

  function setImage(index) {
    currentImage = index;
    document.getElementById('mainImage').src = images[currentImage];
  }

  function changeImage(step) {
    currentImage += step;
    if (currentImage >= images.length) {
      currentImage = 0;
    } else if (currentImage < 0) {
      currentImage = images.length - 1;
    }
    document.getElementById('mainImage').src = images[currentImage];
  }