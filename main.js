let bar = document.getElementById("bar"); 
let close = document.getElementById("close"); 
let navbar = document.getElementById("navbar");

if(bar){
    bar.addEventListener("click", ()=>{
        navbar.classList.add("active");
    })
}
if(close){
    close.addEventListener("click", ()=>{
        navbar.classList.remove("active");
    })
}
let main_img = document.getElementById('main_img');
let small_img = document.getElementsByClassName("small_img");

try{
    small_img[0].onclick = function change_img() {
        main_img.src = small_img[0].src;
    }
    small_img[1].onclick = function change_img() {
        main_img.src = small_img[1].src;
    }
    small_img[2].onclick = function change_img() {
        main_img.src = small_img[2].src;
    }
    small_img[3].onclick = function change_img() {
        main_img.src = small_img[3].src;
    }
}catch{
    
}