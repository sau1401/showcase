document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".about-section, .links-section, .profile-section");

     const revealOnScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            } else {
                section.style.opacity = 0;
                section.style.transform = "translateY(20px)";
            }
        });
    };

    //apply initial styles
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 1.4s ease, transform 1.4s ease";
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();  // run once on page load in case sections are already in view
});