const gallery = document.getElementById('image-gallery');

// Lista de nomes de imagens
// (Coloque aqui os nomes das suas imagens, ex: 'foto1.jpg')
const images = [
  // Adicione os nomes das suas imagens aqui
  'foto1.jpg',
  'foto2.png',
  'meu-projeto.jpeg'
];

images.forEach(imageName => {
  const img = document.createElement('img');
  img.src = `images/${imageName}`;
  img.alt = imageName;
  gallery.appendChild(img);
});
