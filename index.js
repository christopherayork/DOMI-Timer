let counter = 0.0;
let myTimer;

function startTimer() {
    let startBtn = document.querySelector('#timerButton');
    startBtn.disabled = true;
    counter = 0.0;
    let tens = document.querySelector('#secondTens');
    let ones = document.querySelector('#secondOnes');
    let tenths = document.querySelector('#msTens');
    let hundredths = document.querySelector('#msHundreds');
    let match;
    tens.textContent = '0';
    ones.textContent = '0';
    tenths.textContent = '0';
    hundredths.textContent = '0';
    myTimer = window.setInterval(function() {
        if((counter + 0.01).toFixed(2) >= 10) stopTimer();
        counter += 0.01;
        match = counter.toFixed(2).toString().match(/^(\d)?(\d)?.(\d)?(\d)?/);
        tens.textContent = match[2] === undefined ? '0' : match[1];
        ones.textContent = match[2] === undefined ? match[1] : match[2];
        tenths.textContent = match[3] === undefined ? '0' : match[3];
        hundredths.textContent = match[4] === undefined ? '0' : match[4];
    }, 10);
}

function stopTimer() {
    let startBtn = document.querySelector('#timerButton');
    startBtn.disabled = false;
    window.clearInterval(myTimer);
}

