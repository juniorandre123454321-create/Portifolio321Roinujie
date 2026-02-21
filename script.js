const gallery = document.getElementById('image-gallery');
const projectsGrid = document.getElementById('projects-grid');
const currentYear = document.getElementById('current-year');

const images = ['RacesBoost.PNG', 'Capturar.PNG'];

const projects = [
  {
    title: 'Sistema de Corridas Competitivas',
    description: 'Implementação de lógica de corrida com checkpoints, ranking em tempo real e recompensa progressiva.',
    stack: 'Luau • Server/Client • Roblox Studio'
  },
  {
    title: 'Sistema de Economia Persistente',
    description: 'Criação de economia com moedas, compras e persistência de dados para manter progresso entre sessões.',
    stack: 'DataStore • Segurança • Escalabilidade'
  },
  {
    title: 'Framework de Progressão',
    description: 'Estrutura modular para níveis, missões e recompensas com fácil expansão para novos conteúdos.',
    stack: 'Arquitetura Roblox • Modularização'
  }
];

images.forEach((imageName) => {
  const img = document.createElement('img');
  img.src = `images/${imageName}`;
  img.alt = `Projeto Roblox ${imageName}`;
  gallery.appendChild(img);
});

projects.forEach((project) => {
  const article = document.createElement('article');
  article.className = 'card fade-in';
  article.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <small>${project.stack}</small>
  `;
  projectsGrid.appendChild(article);
});

currentYear.textContent = new Date().getFullYear();
