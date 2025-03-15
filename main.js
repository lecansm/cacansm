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
