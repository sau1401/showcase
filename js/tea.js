//function used to expand and or contract the sticky notes
function expandPost(note) {
    //if already expanded, colapse it
    if (note.classList.contains('expanded')) {
        note.classList.remove('expanded');
    } else {
        //otherwise, collapse all of the notes
        const allNotes = document.querySelectorAll('.sticky-note');
        
        allNotes.forEach(function (item) {
            item.classList.remove('expanded');
        });
        //expand the sticky note
        note.classList.add('expanded');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const notes = document.querySelectorAll(".sticky-note");

    //expand and collapse the sticky notes as needed
    function expandPost(note) {
        if (note.classList.contains("expanded")) {
            note.classList.remove("expanded");
        } else {
            notes.forEach(item => item.classList.remove("expanded"));
            note.classList.add("expanded");
        }
    }

    //scroll reveal animation: for each note, change it accordingly 
    function revealOnScroll() {
        notes.forEach(note => {
            const rect = note.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
                note.style.opacity = 1;
                note.style.transform = "translateY(0)";
            } else {
                note.style.opacity = 0;
                note.style.transform = "translateY(20px)";
            }
        });
    }

    //re-apply the styles 
    notes.forEach(note => {
        note.style.opacity = 0;
        note.style.transform = "translateY(20px)";
        note.style.transition = "opacity 1.8s ease, transform 1.8s ease";
        
        //re-attach the click event
        note.addEventListener("click", function () {
            expandPost(this);
        });
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); //initial trigger
});