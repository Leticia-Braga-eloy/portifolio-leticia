
const skillIcons = document.querySelectorAll('.icon');


skillIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)'; 
        icon.style.transition = 'transform 0.3s ease'; 
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)'; 
    });
});

const sections = document.querySelectorAll('.intro-text, .skills-icons');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1 
});


sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 1s ease, transform 0.6s ease';
    observer.observe(section);
});
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 1s ease';
});




