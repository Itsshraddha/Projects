let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#new-game");
let msgDeclare = document.querySelector(".msg-dec");
let msg = document.querySelector("#msg");
let chance0 = true;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
];

const resetGame = () =>{
    chance0 =true;
    count =0;
    enableBoxes();
    msgDeclare.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("CLicked");
        if (chance0) {
            box.innerText = "O";
            chance0 = false;
        } else {
            box.innerText = "X";
            chance0 = true;
        }
        box.disabled = true;
        count++ ;

        let isWinner = winnerCheck();
        if(count === 9 && !isWinner){
            drawGame();
        }
    });
});

const drawGame =() => {
    msg.innerText = 'Game is Draw .' ;
    msgDeclare.classList.remove("hide");
    disableBoxes();
} ;

const disableBoxes =() => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner} `;
    msgDeclare.classList.remove("hide");
    disableBoxes();
};


const winnerCheck = () => {
    for (let pattern of winPatterns) {
        let Valpos1 = boxes[pattern[0]].innerText;
        let Valpos2 = boxes[pattern[1]].innerText;
        let Valpos3 = boxes[pattern[2]].innerText;
       
        if(Valpos1 != "" && Valpos2 != "" && Valpos3 != ""){
            if(Valpos1 === Valpos2 && Valpos2 === Valpos3){
            showWinner(Valpos1);
            return true ;
            }
    }
}
};

newBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , () =>{
    resetGame();
});