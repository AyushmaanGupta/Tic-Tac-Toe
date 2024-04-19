let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn")
let newGamebtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
 
let turn0 = true;

const winPatterns = [
    //winning patterns is calculated during before hand
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame =() => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach ((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
            if(turn0)
            {
                box.innerText = "O";
                // box.style.backgroundColor = "lightgreen";
                turn0 = false;
                // box.classList.remove("color");
            }
            else
            {
                box.innerText = "X";
                // box.style.backgroundColor = "lightblue";
                turn0 = true;
                // box.classList.remove("color");
            }
            box.disabled = true;
            checkWinner();
    })
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
        // box.style.backgroundColor = "#ffffc7";
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        // box.classList.add("color");
    }
}

const showWinner =(winner) => {
    msg.innerText = `congo niga, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner =() => {
    for(let pattern of winPatterns)
    {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(pos1Val, pos2Val, pos3Val);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);



































