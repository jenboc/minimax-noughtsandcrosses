let playerScore = 0;
let computerScore = 0;

function setupGrid()
{
    let grid = document.getElementById("grid");

    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            let name = `${i}${j}`;

            let spot = document.createElement("div")
            spot.setAttribute("id", name);
            spot.setAttribute("class", "spot");
            spot.addEventListener("click", () => {
                spotClicked(name)
            })

            grid.appendChild(spot);
        }
    }

    ready = true;
}

function updateScores()
{
    let scoreDiv = document.getElementById("score");
    scoreDiv.innerText = `${playerScore} - ${computerScore}`;
}

function checkWinner() 
{
    let state = checkGameState();

    switch (state) 
    {
        case 'h':
            playerScore++;
            updateScores();
            break;
        case 'c':
            computerScore++;
            updateScores();
            break;
    }

    if (state !== 'n')
    {
        setTimeout(resetBoard, 1000);
    }
}

function spotClicked(name) 
{
    if (checkGameState() !== 'n') return;
    let i = parseInt(name[0]);
    let j = parseInt(name[1]);

    if (board[i][j] === '')
    {
        board[i][j] = player;
        updateBoard();
        if (checkGameState() === 'n') computerTurn();
        checkWinner(); 
    }
}


function updateBoard() 
{
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            let name = `${i}${j}`;
            let spot = document.getElementById(name);
            spot.innerText = board[i][j];
        }
    }
}

setupGrid();
updateScores();
resetBoard();
computerTurn();