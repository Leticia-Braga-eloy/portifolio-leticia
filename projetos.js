const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = images[0].clientWidth; // Captura a largura de uma única imagem

document.querySelector('.next-btn').addEventListener('click', () => {
  if (counter >= images.length - 1) return; // Evita passar do último item
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`; // Move para a próxima imagem
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  if (counter <= 0) return; // Evita voltar antes da primeira imagem
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`; // Move para a imagem anterior
});
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

const skillIcons = document.querySelectorAll('.skill-icon');

skillIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});
window.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(-100%)'; // Começa fora da tela
    setTimeout(() => {
        sidebar.style.transition = 'transform 0.4s ease-out';
        sidebar.style.transform = 'translateX(0)'; // Desliza para dentro
    }, 100);
});
