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