let countdown;
let serviceInSession;
const clock = document.getElementById('clock');
const daysUnit = document.querySelector('.days');
const hoursUnit = document.querySelector('.hours');
const minutesUnit = document.querySelector('.minutes');
const secondsUnit = document.querySelector('.seconds');
const msg = document.querySelector('.nymsg');

const startDate = new Date(2020, 0, 1, 00, 00, 00).getTime();
startDate > Date.now() ? timer(startDate) : calculateFutureDate(startDate);

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function timer(date) {

    countdown = setInterval(()=>{
        const now = Date.now();
        const differenceInTime = date - now;

        if (differenceInTime < 0) {
            clearInterval(countdown);
            clock.classList.add("hide")
            msg.classList.remove("hide")
            console.log("new year")
            location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ?t=43")
            serviceInSession = setTimeout(()=>{
                calculateFutureDate(date);
                clock.classList.remove("hide")
            }, 7200000);
            return;
        }
        timeLeft(differenceInTime);
    }, 1000)
}

function timeLeft(time){
    const days = Math.floor(time /(1000 * 60 * 60 * 24));// milliseconds into days
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));// milliseconds into hours
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));// milliseconds into minutes
    const seconds = Math.floor((time % (1000 * 60)) / 1000);// milliseconds into seconds
    // conditional added to each portion of the time that will be displayed adds a zero to the front of numbers < 10
    const displayDays = `${days < 10 ? '0' : '' }${days}`;// days string that will be displayed 
    const displayHours = `${hours < 10 ? '0' : ''}${hours}`;// hours string that will be displayed
    const displayMinutes = `${minutes < 10 ? '0' : ''}${minutes}`;// minutes string that will be displayed
    const displaySeconds = `${seconds < 10 ? '0' : ''}${seconds}`;// seconds string that will be displayed
    //displays the time strings on the page individually
    daysUnit.textContent = displayDays;
    hoursUnit.textContent = displayHours;
    minutesUnit.textContent = displayMinutes;
    secondsUnit.textContent = displaySeconds;
    // next line is for testing purposes
    // console.log(displayDays+" : " +displayHours+" : "+displayMinutes+" : "+displaySeconds);
}
// calculateFutureDate takes a number in milliseconds as a parameter 
function calculateFutureDate (dateTochange){	
    const newDate = new Date(dateTochange);// converts it to date format
    const weeklyDate  = newDate.setDate(newDate.getDate() +07);// adds 7 days to that date
    timer(weeklyDate);// sends it to the timer function
    //console.log("new: "+dateTochange);		
}