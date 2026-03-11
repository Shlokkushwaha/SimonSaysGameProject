let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let highestScore = 0;

document.addEventListener("keypress", function(){ //document mm event listener lgaya hai
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function (){
        btn.classList.remove("flash");


    }, 300);
}

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function (){
        btn.classList.remove("userflash");


    }, 300);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() *4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}

function checkAns(idx){
    
    if(userSeq[idx] == gameSeq[idx]){

        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }

        console.log("same value");
    }
    else{

        h2.innerHTML = `Game over! your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        
        //highest score tracker
        let highScoreDisplay = document.querySelector("h3");
        if(level > highestScore){
            highestScore = level;
            highScoreDisplay.innerText = `Highest score : ${highestScore}`;
        }

        reset();
    }
}

function btnPress(){
    
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}