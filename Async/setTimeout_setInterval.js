const target = document.getElementById('Title');

const triggerStart = document.getElementById('Start');
const triggerStop = document.getElementById('Stop');

let intervalId;

function randHexcode() {

    let picker = "0123456789ABCDEF";

    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
        hexCode += picker[Math.floor(Math.random() * 16)];
    }

    return hexCode;
}

triggerStart.addEventListener('click', function () {

    intervalId = setInterval(() => {

        target.style.color = randHexcode();

    }, 1000);
});

triggerStop.addEventListener('click', function () {

    clearInterval(intervalId);
});