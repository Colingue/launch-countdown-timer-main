const countdown = document.querySelector(".chrono");
const daysSpan = document.querySelector('#days');
const hoursSpan = document.querySelector('#hours');
const minsSpan = document.querySelector('#mins');
const secondsSpan = document.querySelector('#seconds');




const lauchdate = new Date('Jun 1, 2021 13:00:00').getTime();

const interval = setInterval(() => {
    const now = new Date().getTime();
    
    const distance = lauchdate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.style.opacity = 1;
    daysSpan.innerHTML = days;
    hoursSpan.innerHTML = hours;
    minsSpan.innerHTML = mins;
    secondsSpan.innerHTML = seconds;

}, 1000);