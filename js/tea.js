document.addEventListener("DOMContentLoaded", function () {
    const notes = document.querySelectorAll(".sticky-note");
    const dividers = document.querySelectorAll(".month-divider"); //select month dividers

    //expand and collapse sticky notes...
    function expandPost(note) {
        if (note.classList.contains("expanded")) {
            note.classList.remove("expanded");
        } else {
            notes.forEach(item => item.classList.remove("expanded"));
            note.classList.add("expanded");
        }
    }

    //scroll reveal animation
    function revealOnScroll() {
        [...notes, ...dividers].forEach(element => { //loop through both sets to apply the reveal animation
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
                element.style.opacity = 1;
                element.style.transform = "translateY(0)";
            } else {
                element.style.opacity = 0;
                element.style.transform = "translateY(20px)";
            }
        });
    }

    //re-apply styles to the notes and dividers; add the click event again to the sticky notes
    notes.forEach(note => {
        note.style.opacity = 0;
        note.style.transform = "translateY(20px)";
        note.style.transition = "opacity 1.8s ease, transform 1.8s ease";

        note.addEventListener("click", function () {
            expandPost(this);
        });
    });

    dividers.forEach(divider => {
        divider.style.opacity = 0;
        divider.style.transform = "translateY(20px)";
        divider.style.transition = "opacity 1.8s ease, transform 1.8s ease";
    });

    //check for scrolling; listener
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); //run the script as an initial trigger
});
