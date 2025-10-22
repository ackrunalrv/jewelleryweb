// Page switching
const links = document.querySelectorAll('.nav-links a');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.dataset.page;

        pages.forEach(page => {
            if(page.id === target) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });

        // Close menu on mobile
        document.querySelector('.nav-links').classList.remove('show');
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});
