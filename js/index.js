/* Remove "Add Definition" button */

function rmvButton(element){
    button.remove();
}

let button = document.querySelector('.addDefinition');

button.addEventListener("click", rmvButton);



/* Create alert */


function ninjaLiked (){
    alert("Ninja was liked!");
}

let likeButton = document.querySelectorAll('.likes');

for( let i = 0; i < likeButton.length; i++){
    likeButton[i].addEventListener("click", ninjaLiked);
}


/* Logout <=> Login */

function logStatusChange(){
    if(logStatus.innerHTML == "Login"){
        logStatus.innerHTML = "Logout";
    } else {
        logStatus.innerHTML = "Login";
    }
}

let logStatus =  document.querySelector('.login');

logStatus.addEventListener("click", logStatusChange);