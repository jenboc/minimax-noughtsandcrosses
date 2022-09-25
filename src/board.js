let board = [[],[],[]];

let player = 'O';
let computer = 'X';

// c => comp win 
// h => human win
// t => tie 
// n => none 
function checkGameState()
{
    let allTaken = true;
    for (let i = 0; i < 3; i++)
    {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] !== '')
        {
            return board[i][2] === computer ? 'c' : 'h';
        }
        
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[2][i] !== '')
        {
            return board[2][i] === computer ? 'c' : 'h';
        }

        for (let j = 0; j < 3; j++)
        {
            if (board[i][j] == '') allTaken = false;
        }
    }

    if (((board[0][0] === board[1][1] && board[1][1] === board[2][2]) || (board[0][2] === board[1][1] && board[1][1] === board[2][0])) && board[1][1] !== '')
    {
        return board[1][1] === computer ? 'c' : 'h';
    }

    if (allTaken) return 't';

    return 'n';
}

function resetBoard()
{
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            board[i][j] = '';
        }
    }

    updateBoard();
}