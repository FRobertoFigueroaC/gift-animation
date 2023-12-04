let container = document.getElementById("container");
let card = document.getElementsByClassName("card");
let valentines = document.getElementById("valentines");
let box = document.getElementById("box");
let typing = document.getElementById("typing");

valentines.style.display = 'none';
typing.style.display = 'none';

box.addEventListener("click", (e) => {
    box.style.display = 'none';
    box.style.animationDelay = '0.5s';

    valentines.style.display = 'block';
    typing.style.display = 'block';
});

container.addEventListener("mouseenter", (e) => {
    card[0].style.top = '-90px';
    card[0].style.animationDelay = '1s';
});
container.addEventListener("mouseleave", (e) => {
    card[0].style.top = '0';
    card[0].style.animationDelay = '1s';
});