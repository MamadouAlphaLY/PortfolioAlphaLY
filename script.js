document.addEventListener('DOMContentLoaded', () => {
    // Enregistrer GSAP et ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animation d'entrée pour le header (sans ScrollTrigger)
    gsap.from("header", {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: "power2.out"
    });

    // Animation pour les sections au scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.fromTo(section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
});
