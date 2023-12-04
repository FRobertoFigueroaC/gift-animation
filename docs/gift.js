let container = document.getElementsByClassName("container");
let card = document.getElementsByClassName("card");
let valentines = document.getElementById("valentines");
let box = document.getElementById("box");
let boxI = document.getElementById("box-instructions");
let cardI = document.getElementById("card-instructions");
let typing = document.getElementById("typing");

valentines.style.display = 'none';
cardI.style.display = 'none';
typing.style.display = 'none';

box.addEventListener("click", (e) => {
    box.style.display = 'none';
    box.style.animationDelay = '0.5s';
    boxI.style.display = 'none';

    valentines.style.display = 'block';
    cardI.style.display = 'block';
    typing.style.display = 'block';
});

container[0].addEventListener("mouseenter", (e) => {
    card[0].style.top = '-90px';
    card[0].style.animationDelay = '0.5s';
});
container[0].addEventListener("mouseleave", (e) => {
    card[0].style.top = '0';
    card[0].style.animationDelay = '0.5s';
});