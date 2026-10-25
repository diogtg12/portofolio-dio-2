
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");

        const isOpen = navLinks.classList.contains("show");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });
}


const backToTop = document.getElementById("back-to-top");

if (backToTop) {
    // Tampilkan tombol ketika halaman digulir ke bawah
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    // Kembali ke bagian atas ketika tombol diklik
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


const revealElements = document.querySelectorAll(
    "section, article, .project-card, .graduation-gallery, .experience-gallery"
);

const revealObserver = new IntersectionObserver(
    function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


const languageToggle = document.getElementById("language-toggle");

let currentLanguage = "en";

if (languageToggle) {
    languageToggle.addEventListener("click", function () {
        currentLanguage = currentLanguage === "en" ? "id" : "en";

        const elementsToTranslate = document.querySelectorAll("[data-id][data-en]");

        elementsToTranslate.forEach(function (element) {
            element.textContent = element.getAttribute("data-" + currentLanguage);
        });

        document.documentElement.lang = currentLanguage;
    });
}
