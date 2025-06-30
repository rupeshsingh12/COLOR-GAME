let gameseq = [];
let userseq = [];
let btns = ["green", "red", "yellow", "purple"];
let started = false;
let level = 0; 
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {let gameseq = [];
    let userseq = [];
    let btns = ["green", "red", "yellow", "purple"];
    let started = false;
    let level = 0; 
    let h2 = document.querySelector("h2");
    
    document.addEventListener("keypress", function() {
        if (!started) {
            console.log("Game started");
            started = true;
            setTimeout(levelUp, 1000);
        }
    });
    
    function gameFlash(btn) {
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash");
        }, 250);
    }
    
    function userFlash(btn) {
        btn.classList.add("userflash");
        setTimeout(function(){
            btn.classList.remove("userflash");
        }, 250);
    }
    
    function levelUp() {
        userseq = [];
        level++;
        h2.innerText = `Level ${level}`;
        let randIdx = Math.floor(Math.random() * 4);
        let randColor = btns[randIdx];
        let randBtn = document.querySelector(`.${randColor}`);
        gameseq.push(randColor);
        console.log("Game sequence: ", gameseq);
        gameFlash(randBtn);
    }
    
    function checkAns(idx) {
        if (userseq[idx] === gameseq[idx]) {
            if (userseq.length === gameseq.length) {
                console.log("Correct sequence");
                setTimeout(levelUp, 1000);
            }
        } else {
            // Show score before resetting
            let finalScore = level - 1;
            h2.innerHTML = `Game Over! Your score was <b>${finalScore}</b> <br> Press Any Key to Restart`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function() {
                document.querySelector("body").style.backgroundColor = "white";
            }, 150);
            reset(); // only resets variables now, not the UI
        }
    }
    
    function btnPress() {
        let btn = this;
        userFlash(btn);
        let userColor = btn.getAttribute("id");
        userseq.push(userColor);
        checkAns(userseq.length - 1); 
    }
    
    let allBtns = document.querySelectorAll(".btn");
    for (let btn of allBtns) {
        btn.addEventListener("click", btnPress);
    }
    
    function reset() {
        gameseq = [];
        userseq = [];
        level = 0;
        started = false;
        // Do NOT change h2 here — let it show the score!
    }
    
    if (!started) {
        console.log("Game started");
        started = true;
        setTimeout(levelUp, 1000);
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log("Game sequence: ", gameseq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            console.log("Correct sequence");
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level-1}</b> <br> Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length - 1); 
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    gameseq = [];
    userseq = [];
    level = 0;
    started = false;
    h2.innerText = "Press Any Key to Start";
}