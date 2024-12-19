console.log("Script chargé !");
document.addEventListener("DOMContentLoaded", () => {
    // Animation pour le défilement fluide
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            const targetId = link.getAttribute("href").substring(1); // Retirer le '#' du lien
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Défilement fluide vers l'élément
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Ajuste pour la hauteur de l'en-tête
                    behavior: "smooth"
                });
            }
        });
    });

    // Animation au survol des sections
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
    backToTop.style.display = "none"; // Cache le bouton par défaut
    backToTop.style.zIndex = "1000"; // S'assurer qu'il reste au-dessus des autres éléments
    document.body.appendChild(backToTop);

    // Afficher le bouton "Retour en haut" lorsque l'utilisateur défile
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block"; // Affiche le bouton
        } else {
            backToTop.style.display = "none"; // Cache le bouton
        }
    });

    // Action pour le bouton "Retour en haut"
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section) => {
        section.addEventListener("mouseover"), () => {
            section.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
    }}});
