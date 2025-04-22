
const blueGreen = document.getElementById('blueGreen');
const pinkOrange = document.getElementById("pinkOrange");
const purpleYellow = document.getElementById("purpYell");
const oliveLantern = document.getElementById("oliveLant");
const body = document.querySelector('body');
const head= document.querySelector("header");

blueGreen.addEventListener('click', () => {
    body.style.backgroundColor= '#1e424d';
    head.style.backgroundColor = '#687d31';
})

pinkOrange.addEventListener('click', () => {
    body.style.backgroundColor= '#f39048';
    head.style.backgroundColor = '#d86487';
})

purpleYellow.addEventListener('click', () => {
    body.style.backgroundColor= '#f9ce75';
    head.style.background = '#814881';
})

oliveLantern.addEventListener('click', () => {
    body.style.backgroundColor= '#eec170';
    head.style.backgroundColor = '#585123';
})










