let board = ["o", 1, 2, "x", "x", 5, "o", 7, "x"];

function winning(board, player) {
    if (
        (board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)
    ) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

function availSqrs() {
    let avail = [];
    for (let i = 0; i < board.length; i++) {
        const index = board[i];
        if (index !== "x" && index !== "o") {
            avail.push(index);
        }
    }
    return avail;
}

function miniMax(board, availSqrs, availIndex, boardCount, outcome) {
    if (outcome === 10) {
        console.log(availIndex);
        console.log("winning outcome");
        return outcome;
    }
    if (outcome === -10) {
        console.log("loosing outcome");
        return outcome;
    }
    if (outcome === 0) {
        console.log("no definitive outcome");
        return outcome;
    }

    let newBoard = Array.from(board);
    newBoard[availSqrs[availIndex]] = "x";
    console.log(newBoard);
    console.log(board);

    let didWin = winning(newBoard, "x");
    if (didWin) {
        miniMax(board, availSqrs, availIndex, boardCount, 10);
    } else if (boardCount <= availSqrs.length) {
        availIndex++;
        boardCount++;
        board;
        miniMax(board, availSqrs, availIndex, boardCount, null);
    } else {
        miniMax(board, availSqrs, availIndex, boardCound, 0);
    }
}

const findAvailSqrs = availSqrs();
miniMax(board, findAvailSqrs, 0, 0, null);
