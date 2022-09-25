function minimax(isMaximising) 
{
    let gameState = checkGameState();
    switch (gameState)
    {
        case 'h':
            return -1;
        case 'c':
            return 1;
        case 't':
            return 0;
    }

    let bestScore = isMaximising ? -Infinity : +Infinity;
    let score;
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            if (board[i][j] === '')
            {
                board[i][j] = isMaximising ? computer : player; 
                score = minimax(!isMaximising);
                board[i][j] = '';

                if (isMaximising && score > bestScore)
                {
                    bestScore = score;
                }
                else if (!isMaximising && score < bestScore)
                {
                    bestScore = score;
                }
            }
        }
    }

    return bestScore;
}

function computerTurn() 
{
    let bestScore = -Infinity;
    let bestI;
    let bestJ;
    let score;
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            if (board[i][j] === '')
            {
                board[i][j] = computer;
                score = minimax(false);
                board[i][j] = '';

                if (score > bestScore)
                {
                    bestScore = score;
                    bestI = i;
                    bestJ = j;
                }
            }
        }
    }

    board[bestI][bestJ] = computer;
    updateBoard();
}