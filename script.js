window.addEventListener("load", initEvents);

let toggle = true;
let div;
let movies;



function initEvents(){
    const ham = document.querySelector(".ham");
    ham.addEventListener("click", toggleNav);
    div = document.querySelector(".div");
    movies = document.querySelector(".movies")
    
}

function toggleNav(){
    if (toggle){
        div.style.display = "flex";
        div.classList.add("mob-nav");
    }else{
        div.style.display = "none";
        div.classList.removel("mob-nav");
    }
    toggle = !toggle;
}










