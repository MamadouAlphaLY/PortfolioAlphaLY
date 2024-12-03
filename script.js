document.addEventListener("DOMContentLoaded", () => {
    // Animation pour le défilement fluide
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Ajuster pour la hauteur de l'en-tête
                    behavior: "smooth"
                });
            }
        });
    });

    // Animation au survol
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.transform = "scale(1.02)";
            section.style.transition = "transform 0.3s ease-in-out";
        });

        section.addEventListener("mouseout", () => {
            section.style.transform = "scale(1)";
        });
    });

    // Bouton "Retour en haut"
    const backToTop = document.createElement("button");
    backToTop.textContent = "↑";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.background = "#0073e6";
    backToTop.style.color = "white";
    backToTop.style.border = "none";
    backToTop.style.padding = "10px 15px";
    backToTop.style.borderRadius = "50%";
    backToTop.style.cursor = "pointer";
    backToTop.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
    backToTop.style.display = "none";
    backToTop.style.zIndex = "1000";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
