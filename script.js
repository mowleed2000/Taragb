// Reveal animations on scroll
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    const handleReveal = () => {
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Lower threshold (revealPoint = 80 instead of 150) for smoother scroll triggers
            if (rect.top < window.innerHeight - 80) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', handleReveal);
    
    // Initial triggers to load above-the-fold content immediately
    setTimeout(handleReveal, 100);
    handleReveal();

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked (mobile)
    const links = navLinks ? navLinks.querySelectorAll('a:not(.dropdown-trigger)') : [];
    links.forEach(l => {
        l.addEventListener('click', () => {
            if (navLinks) navLinks.classList.remove('active');
        });
    });

    // Mobile dropdown toggle click action
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    if (dropdownTrigger) {
        dropdownTrigger.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                const dropdownMenu = dropdownTrigger.nextElementSibling;
                if (dropdownMenu) {
                    dropdownMenu.classList.toggle('active');
                }
            }
        });
    }
});

// Lightbox Modal Functions
function openLightbox(imgSrc, captionText) {
    const lightbox = document.getElementById("lightboxModal");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    
    if (lightbox && lightboxImg && lightboxCaption) {
        lightbox.classList.add("active");
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = captionText;
        document.body.style.overflow = "hidden"; // Prevent scroll behind
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("lightboxModal");
    if (lightbox) {
        lightbox.classList.remove("active");
        document.body.style.overflow = ""; // Restore scroll
    }
}

// Close lightbox on clicking dark overlay background
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById("lightboxModal");
    if (lightbox) {
        lightbox.addEventListener("click", function(e) {
            if (e.target === this || e.target.classList.contains("lightbox-close")) {
                closeLightbox();
            }
        });
    }
});
