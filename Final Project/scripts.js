const stopRace = "stop.png";
const startRace = "go.png";

var finishLine = (window.innerWidth - (window.innerWidth * 0.20));
var declareWinner = false;

function ChangeLightColor() {
    var raceLight = document.getElementById("raceLight");
    var raceLightSrc = raceLight.getAttribute("src");
    if (raceLightSrc === startRace) {
        raceLight.src = stopRace;
        StartRace();
    } else if (raceLightSrc === stopRace) {
        raceLight.src = startRace;
        ResetRace();
    }
}

/*Race Starts*/
function StartRace() {
    declareWinner = false;
    ZoomZoom("nyan");
    ZoomZoom("pusheen");
}

function ZoomZoom(racerId) {
    var racer = document.getElementById(racerId);
    var position = parseInt(racer.style.left, 10);
    if (isNaN(position)) {
        position = 0;
    }

    if (position < finishLine) {
        position += randomNumber(1, 10);
        racer.style.left = position + "px";
        setTimeout('ZoomZoom("'+ racerId +'")', randomNumber(1, 10));
    }
     else {
        if (position >= finishLine && !declareWinner) {
            declareWinner = true;
            var winnerImg = document.getElementById(racerId);
            winnerImg.addEventListener("click", ChangeLightColor);
        }
    }}

    /*    Reset race */
    function ResetRace() {
        ResetRacer("nyan");
        ResetRacer("pusheen");
    }

    function ResetRacer(racerId) {
        var racer = document.getElementById(racerId);
        racer.style.left = 0 + "px";
        racer.removeEventListener("click",  ChangeLightColor);
    }


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
