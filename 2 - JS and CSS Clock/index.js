//getting the DOM elements
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

//Define the funtion that will run every seconds
function theTime() {
    //get the actual time
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();

    //get the corresponding degrees
    let secondsDeg = ((seconds / 60) * 360) + 90;
    let minutesDeg = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    let hoursDeg = ((hour / 12) * 360) + ((minutes/60)*30) + 90;

    //appling the degrres to the hands
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}


//make it run every second
setInterval(theTime, 1000);

theTime();