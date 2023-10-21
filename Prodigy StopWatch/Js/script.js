
const startStopBtn= document.querySelector('#startStopBtn')
const resetBtn = document.querySelector('#resetBtn')
const lapBtn = document.querySelector('#lapBtn');
const lapTimesContainer = document.querySelector('#lap-times');

// Variables for Time

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zeros

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


// Variables for setInterval & timerstatus

let timerInterval = null;
let timerStatus = "stopped";
let lapCounter = 1;

// // StopWatch function

function stopWatch(){


    seconds++ 

    if(seconds / 60===1){
        seconds = 0;
        minutes++

            if(minutes / 60===1){
                minutes=0
                hours++
            }
    }

    // The toString() method returns a string as a string.

    // The toString() method does not change the original string.

    // The toString() method can be used to convert a string object into a string.

    //     Every JavaScript object has a toString() method.

    // The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string.
    


    if(seconds<10){
        leadingSeconds = "0" + seconds.toString();
    }
    else{
        leadingSeconds = seconds;
    }

    if(minutes<10){
        leadingMinutes = "0" + minutes.toString();
    }
    else{
        leadingMinutes = minutes;
    }
    if(hours<10){
        leadingHours = "0" + hours.toString();
    }
    else{
        leadingHours = hours;
    }
    

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// window.setInterval(stopWatch, 1000)

// The setInterval() method calls a function at specified intervals (in milliseconds).

// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

// 1 second = 1000 milliseconds.

startStopBtn.addEventListener('click',function(){
    if(timerStatus=== "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerText = `Pause`;
        document.getElementById('startStopBtn').style.backgroundColor = 'rgb(116, 17, 116)'
        timerStatus = 'started'
    }
    else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerText = `Play`;
        document.getElementById('startStopBtn').style.backgroundColor = 'blueviolet'
        timerStatus= "stopped"
    }
})

// Lap Time 

lapBtn.addEventListener('click', function () {
    if (timerStatus === 'started') {
        const lapTime = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
        lapTimesContainer.innerHTML += `Lap ${lapCounter}: ${lapTime}<br>`;
        lapCounter++;
    }
});

resetBtn.addEventListener('click', function(){

    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerText = "00:00:00"
    document.getElementById('startStopBtn').innerText = `Start`;
    document.getElementById('startStopBtn').style.backgroundColor = 'blueviolet'

        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerText = `Start`;
        document.getElementById('startStopBtn').style.backgroundColor = 'blueviolet'
        lapTimesContainer.innerHTML = '';
        lapCounter = 1;
        timerStatus= "stopped"
    
})

