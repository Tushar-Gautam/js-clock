const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


setTime(); //as soon as projects loads need to give an initial time and position otherwise for 1sec will be at intial position
function setTime() {
    let now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secDegrees = ((seconds / 60) * 360) + 90; //+90 coz intial position is 90(12 clock position)
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const minDegrees = ((minutes / 60) * 360) + 90 + (seconds / 60) * 6;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    // minHand.style.width = 40 %

    const hourDegrees = ((hours / 12) * 360) + 90 + (minutes / 60) * 30;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

}
setInterval(setTime, 1000); //to update the time so that projects keep on running for every second 

