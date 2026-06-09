const reviews = document.querySelectorAll(".review");

let current = 0;

function rotateReviews(){

reviews[current].classList.remove("active");

current++;

if(current >= reviews.length){
current = 0;
}

reviews[current].classList.add("active");
}

setInterval(rotateReviews, 4000);

window.addEventListener("scroll", ()=>{

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

const position = card.getBoundingClientRect().top;

if(position < window.innerHeight - 100){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}

});

});