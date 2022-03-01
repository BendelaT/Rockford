let startPlaying1 = document.getElementById("startPlaying1")
let startPlaying2 = document.getElementById("startPlaying2")

startPlaying1.addEventListener("click", goToRegister)
startPlaying2.addEventListener("click", goToRegister)

function goToRegister(){
    location.href = "register.html";
}