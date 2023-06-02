const gameResult=document.getElementById("gameResult");
const allBoxes = document.getElementsByClassName("boxes");

for (let i = 0; i < 9; i++) {
    document.getElementById("gameBord").innerHTML += `<div class="boxes"></div>`

}
let step = 0;
document.getElementById("gameBord").onclick = function (event) {
    // console.log(event);
    if (event.target.className === "boxes" && event.target.innerHTML === "") {
        if (step % 2 == 0) {
            event.target.innerHTML = "X";
        } else {
            event.target.innerHTML = "O";
        }
        step++;
        winner();
    }
}
document.getElementById("newGame").onclick = function () {
    resetGame()
}
function resetGame() {

    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].innerHTML = "";
        gameResult.innerHTML="";
    }
    step = 0;
     
}

function winner() {
    let xWon = false;
    let oWon = false;


    let winPosition = [
        { one: 0, two: 1, three: 2 },
        { one: 3, two: 4, three: 5 },
        { one: 6, two: 7, three: 8 },
        { one: 0, two: 3, three: 6 },
        { one: 1, two: 4, three: 7 },
        { one: 2, two: 5, three: 8 },
        { one: 0, two: 4, three: 8 },
        { one: 2, two: 4, three: 6 },
    ];

    for (let i of winPosition) {
        if (allBoxes[i.one].innerHTML === 'X' && allBoxes[i.two].innerHTML === 'X' && allBoxes[i.three].innerHTML === 'X') {
            gameResult.innerHTML="X WON";
            xWon = true;
        }
        else if (allBoxes[i.one].innerHTML === 'O' && allBoxes[i.two].innerHTML === 'O' && allBoxes[i.three].innerHTML === 'O') {
            gameResult.innerHTML="O  WON";
            oWon = true;
        }
        if (xWon || oWon) {
          setTimeout( resetGame,1000)
        }


        if (!xWon && !oWon) {
            let allFilled = true;
            for (let i = 0; i < allBoxes.length; i++) {
                if (allBoxes[i].innerHTML !== "X" && allBoxes[i].innerHTML !== "O") {
                    allFilled = false;
                    break;
                }
            }
            if (allFilled) {
                gameResult.innerHTML="It's a tie!";
                break;
            }
        }
    }
}



