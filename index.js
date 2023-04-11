// initializing aos  

AOS.init({
    delay:400,
    duration:1000
})

// burger menu

let burgerMenu = document.querySelector("#burger-menu");
let overlay = document.querySelector("#menu");

burgerMenu.addEventListener("click", function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});


// text animation

gsap.to(".quote-text", {
    text: "“The secret of success in life is to eat what you like and let the food fight it out inside.” – Mark Twain",
    duration: 5,
    repeat: -1,
    repeatDelay: 3,
    ease: "power1.in",
    yoyo: true
})


// gallery script

document.querySelectorAll(".image-container img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = image.getAttribute("src");
    }
});

document.querySelector(".popup-image span").onclick = () =>{
    document.querySelector(".popup-image").style.display = "none";
}





