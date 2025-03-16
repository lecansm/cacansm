document.addEventListener('scroll', function() {
    const menu = document.getElementById('compactMenu');
    const startSection = document.getElementById('start');
    const startSectionHeight = startSection.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > startSectionHeight) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

document.getElementById('compactMenu').style.display = 'none';
document.querySelectorAll('.imgHeader').forEach(el => {
    el.style.backgroundImage = "url('../img/fundo2.png')";
});


document.getElementById('modoDark').addEventListener('click', function() {
    document.querySelectorAll('.txtPre2, .txtPre2D').forEach(el => el.classList.toggle('txtPre2D'));
    document.querySelectorAll('.txtPre3, .txtPre3D').forEach(el => el.classList.toggle('txtPre3D'));
    document.querySelectorAll('.nav-link, .nav-link2').forEach(el => el.classList.toggle('nav-link2'));
    document.querySelectorAll('.txtCarac, .txtCaracD').forEach(el => el.classList.toggle('txtCaracD'));
    document.querySelectorAll('.aboutMe, .aboutMe2').forEach(el => el.classList.toggle('aboutMe2'));
    document.querySelectorAll('.projects, .projects2').forEach(el => el.classList.toggle('projects2'));
    document.querySelectorAll('.navbar-light, .navbar-dark').forEach(el => el.classList.toggle('navbar-dark'));
    document.querySelectorAll('.bg-body-tertiary, .bg-dark').forEach(el => el.classList.toggle('bg-dark'));
    document.querySelectorAll('.txtPre, .txtPreD').forEach(el => el.classList.toggle('txtPreD'));
    document.querySelectorAll('.ce, .ce2').forEach(el => el.classList.toggle('ce2'));
    document.querySelectorAll('.contact, .contact2').forEach(el => el.classList.toggle('contact2'));


    document.querySelectorAll('.imgHeader').forEach(el => {
        if (el.style.backgroundImage.includes('fundo2.png')) {
            el.style.backgroundImage = "url('../img/darkbg.jpg')";
        } else {
            el.style.backgroundImage = "url('../img/fundo2.png')";
        }
    });

    document.body.classList.toggle('dark-mode-bg');

    document.querySelectorAll('p').forEach(el => el.classList.toggle('dark-mode-text'));
});

const style = document.createElement('style');
style.innerHTML = `
    .dark-mode-bg {
        background-color: rgba(33,37,41) !important;
    }
    .dark-mode-text {
        color: #fff !important;
    }
`;
document.head.appendChild(style);

