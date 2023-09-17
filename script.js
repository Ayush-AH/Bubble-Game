var time = 60;
var score = 0;
var hitVal = 0;


function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
function getNewHit() {
    hitVal = Math.floor(Math.random()*10);
    document.querySelector("#val").textContent = hitVal;
}
function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 85; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div id="gola">${rn}</div>`;
    }

    document.getElementById("pbottom").innerHTML = clutter;
}
function runTimer() {
    var timer =setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timerVal").textContent = time;  
        }
        else{
            clearInterval(timer);
            document.querySelector("#pbottom").innerHTML= "<h1>Game over🤪</h1>";
        }
       
    }, 1000);  
}
document.querySelector("#pbottom").addEventListener("click",function (dets) {
   var clickednum = Number(dets.target.textContent);
    if (clickednum === hitVal) {
        increaseScore()
        getNewHit();
        makeBubble();
    }
})



runTimer();
makeBubble();
getNewHit();
