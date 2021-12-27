// Preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function(){
    preloader.style.display = "none";
})






const btn = document.querySelector(".btn");
const video = document.querySelector(".video-container");

let playBtn = btn.querySelector("#play");
let pauseBtn = btn.querySelector("#pause");

playBtn.classList.add("active");


btn.addEventListener("click", function () {
    if(playBtn.classList.contains("active")){
        playBtn.classList.remove("active");
        pauseBtn.classList.add("active");

        video.pause();
    }
    // else pauseBtn contain active
    else{

        pauseBtn.classList.remove("active");
        playBtn.classList.add("active")

        video.play();
    }
});