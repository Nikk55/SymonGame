let userSeq=[];
let gameSeq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let highestScr=0;
let p=document.querySelector('p');

let btns=["yellow","red","purple","green"];

document.addEventListener("keypress",function() {
    if(started==false) {
        console.log("Game Started!");
        started=true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}


function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    // Choose random Button
    let ranIdx=Math.floor(Math.random()*3);
    let ranCol=btns[ranIdx];
    let ranBtn=document.querySelector(`.${ranCol}`);
    //  console.log(ranIdx);
    //  console.log(ranCol);
    //  console.log(ranBtn);
    gameSeq.push(ranCol);
    console.log(gameSeq);

    gameFlash(ranBtn);
}

function checkAns(idx) {
//   console.log("Curr Level ",level);
// let idx=level-1;
if(gameSeq[idx]==userSeq[idx]) {
    if(userSeq.length==gameSeq.length) {
        setTimeout(levelUp,1000);
    }
}else{
    h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start!`;
    if(level>highestScr) {
        highestScr=level;
        p.innerText=`Highest Score is: ${highestScr}`;

    }
    document.querySelector('body').style.backgroundColor="red";
    setTimeout(function() {
        document.querySelector('body').style.backgroundColor="white";
    },150);
    reset();
}
}

function btnPress() {
    console.log(this);
    btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}



