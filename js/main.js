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

document.getElementById('modoDark').addEventListener('click', function() {
    document.querySelectorAll('.txtPre2, .txtPre2D').forEach(el => el.classList.toggle('txtPre2D'));
    document.querySelectorAll('.txtPre3, .txtPre3D').forEach(el => el.classList.toggle('txtPre3D'));
    document.querySelectorAll('.nav-link, .nav-link2').forEach(el => el.classList.toggle('nav-link2'));
    document.querySelectorAll('.txtCarac, .txtCaracD').forEach(el => el.classList.toggle('txtCaracD'));
    document.querySelectorAll('.aboutMe, .aboutMe2').forEach(el => el.classList.toggle('aboutMe2'));
    document.querySelectorAll('.navbar-light, .navbar-dark').forEach(el => el.classList.toggle('navbar-dark'));
    document.querySelectorAll('.bg-body-tertiary, .bg-dark').forEach(el => el.classList.toggle('bg-dark'));
    document.querySelectorAll('.txtPre, .txtPreD').forEach(el => el.classList.toggle('txtPreD'));
    document.querySelectorAll('.ce, .ce2').forEach(el => el.classList.toggle('ce2'));
    document.querySelectorAll('.contact, .contact2').forEach(el => el.classList.toggle('contact2'));


   // Alternar exibição dos elementos
   const start = document.getElementById('start');
   const start2 = document.getElementById('start2');
   const projects = document.getElementById('projects');
   const projects2 = document.getElementById('projects2');

   if (start.style.display === 'none') {
       start.style.display = ' inline-block';
       start2.style.display = 'none';
   } else {
       start.style.display = 'none';
       start2.style.display = 'inline-block';
   }

   if (projects.style.display === 'none') {
       projects.style.display = ' inline-block';
       projects2.style.display = 'none';
   } else {
       projects.style.display = 'none';
       projects2.style.display = ' inline-block';
   }

   const icon = this.querySelector('i');
   if (icon.classList.contains('fa-moon')) {
       icon.classList.remove('fa-moon');
       icon.classList.add('fa-sun');
   } else {
       icon.classList.remove('fa-sun');
       icon.classList.add('fa-moon');
   }


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

