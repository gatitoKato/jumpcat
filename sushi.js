function start() {
    let username = document.getElementById("username");
    alert(username.value);
    
    localStorage.setItem("username", username.value);
    location.href = "nyancat.html";
}

let dawgsound = new Audio ("funny.mp3");

function funny() {
dawgsound.play();
}



let scare = new Audio ("jumpscare.mp3");

function jumpscare() {
scare.play();
}

