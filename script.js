//BACK TO TOP BUTTON//
function goToTop () {           
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
}


/***for project 3 ***/
const date = new Date();            //1. Object 
const hour = date.getHours();       //and accessing object

$(document).ready(function (){        //2. Function
    
    if(hour >= 6 && hour <= 12){        //7. if-else statement
        $(".morning").addClass('goodMorning');
    }
    else if(hour >= 13 && hour <= 20){
        $(".afternoon").addClass('goodAfternoon');
    }
    else if(hour >= 21 && hour <= 5){
        $(".evening").addClass('goodEvening');
    }
    })

var morningGreet = document.createElement("span");   //4. Variables
morningGreet.innerHTML = "<h3>Have a nice day!</h3>";

var afternoonGreet = document.createElement("span");
afternoonGreet.innerHTML = "<h3>Have a nice rest of the day!</h3>";

var eveningGreet = document.createElement("span");
eveningGreet.innerHTML = "<h3>Have a nice rest of the day!</h3>";

var x;

if(hour >= 6 && hour <= 12){        
    x = 1;
}
else if(hour >= 13 && hour <= 20){
    x = 2;
}
else if(hour >= 21 && hour <= 5){
    x = 3;
}

function insertElement(targetElement, newElement) {
    targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
}

switch (x){         //8. Switch
    case 1:
        insertElement(this.document.getElementById("morning"), morningGreet);
        break;
    case 2:
        insertElement(this.document.getElementById("afternoon"), afternoonGreet);
        break;
    case 3:
        insertElement(this.document.getElementById("evening"), eveningGreet);
}

//ARRAY EXAMPLE CANNOT BE USED ON PAGE
//CONTENT PANEL WITH TEXT ONLY BECAUSE PANELS ON MY PAGE ARE ALREADY SET
const coll = document.getElementsByClassName("contentPanel");       //10. Content Panel
let i;

for (i = 0; i < coll.length; i++) {                             //8. For Loop
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

//HIDE TOP BUTTON AFTER SCROLL//
window.addEventListener("scroll", function name(){        //5. Event
    const top_btn = this.document.getElementById("top-btn");
    if (top_btn !== null){
        top_btn.classList.toggle("show-top-btn", window.scrollY > 200)
    }
})

//BIO SECTION ANIMATION ON SCROLL//
$(document).ready(function (){
    $(".biopart").waypoint(function(direction){                         //6. Adding animation
        $(".animation1").addClass('animate__animated animate__fadeIn');
    },{
        offset:'50%'
    });
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

