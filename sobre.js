document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(-100%)'; // Começa fora da tela
    setTimeout(() => {
        sidebar.style.transition = 'transform 0.5s ease-in-out';
        sidebar.style.transform = 'translateX(0)'; // Desliza para dentro
    }, 300);
});
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}


