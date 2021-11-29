//BACK TO TOP BUTTON//
function goToTop () {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", function name(){
    const top_btn = this.document.getElementById("top-btn");
    if (top_btn !== null){
        top_btn.classList.toggle("show-top-btn", window.scrollY > 200)
    }
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//MESSAGE ON PAGE// -need to add css styling to appear over everything
/*
var msg = '<div class=\"hear\"> <a id=\"close\" href = "#">close x </a></div>';
msg += '<div class=\"hear\">><h2>COVID NOTE</h2>';
msg += 'This is a web-page representing resume of:';
msg += '<h3><em>Veldin Salčinović</em></h3></div>';

var Note = document.createElement('div');
Note.setAttribute('id', 'note');
Note.innerHTML = msg;
document.body.appendChild(Note);

function dismissNote(){
    document.body.removeChild(Note);
}

var NoteClose = document.getElementById('close');

NoteClose.addEventListener('click', dismissNote, false);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

