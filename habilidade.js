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


    const toggleButton = document.getElementById('theme-toggle'); // Seleciona o botão
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode'); // Alterna o modo escuro no corpo
        document.querySelector('.sidebar').classList.toggle('dark-mode'); // Alterna o modo escuro na sidebar
        
        const links = document.querySelectorAll('.menu ul li a');
        links.forEach(link => {
            link.classList.toggle('dark-mode'); // Alterna o modo escuro nos links
        });

      
    });



