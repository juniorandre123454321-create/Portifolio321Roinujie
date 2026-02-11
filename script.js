const gallery = document.getElementById('image-gallery');

const images = [
  "RacesBoost.png",
  "outra-imagem.jpg"
];

images.forEach(imageName => {
  const img = document.createElement('img');
  img.src = `images/${imageName}`;
  img.alt = imageName;
  gallery.appendChild(img);
});
