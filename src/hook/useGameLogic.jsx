import { useState } from "react";

const useGameLogic = () => {
    
    const [ board, setBoard ] = useState([]);
    const [ isXNext, setIsXNext ] = useState(true);
    const [ winner, setWinner ] = useState(null)


    const start = (gridSize) => {
        if (gridSize < 3) { return alert('min size is 3!')};

        const newBoard = (Array(gridSize).fill().map(() => 
            Array(gridSize).fill(null)))
        setBoard(newBoard)
        document.querySelector(".gameBoard").style.setProperty("--board-size", gridSize);
    }

    const reset = () => {
        setBoard([]);
        setIsXNext(true);
        setWinner(null);


    }

    const winCheck = (board, rowIndex, colIndex) => {
        const player = board[rowIndex][colIndex];
        const size = board.length;
    
        let rowWin = true;
        let colWin = true;
        let diaWin = true;
        let antiDiaWin = true;
    
        for (let i = 0; i < size; i++) {
            if (board[rowIndex][i] !== player) rowWin = false;
            if (board[i][colIndex] !== player) colWin = false;
            if (board[i][i] !== player) diaWin = false;
            if (board[i][size - 1 - i] !== player) antiDiaWin = false;
        }
    
        if (rowWin || colWin || diaWin || antiDiaWin) {
            return player;
        }
    
        return null;
    };
    

    const handleClick = (rowIndex, colIndex) => {
        if (board[rowIndex][colIndex] || winner) return;
    
        const newBoard = board.map(row => [...row]);
        newBoard[rowIndex][colIndex] = isXNext ? "X" : "O";
    
        const gameWinner = winCheck(newBoard, rowIndex, colIndex);
    
        setBoard(newBoard);
    
        if (gameWinner) {
            setWinner(gameWinner);
        } else {
            setIsXNext(!isXNext);
        }
    };

    const getStatus = () => {
        if (winner) {
            return `Player ${winner} wins!`
        }

        return `Player ${isXNext ? "X" : "O"} turn`
    }
    

    return {winner, board, start, reset, handleClick, getStatus};
}

export default useGameLogic;