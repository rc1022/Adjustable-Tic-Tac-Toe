import React, { useState } from 'react'
import useGameLogic from '../hook/useGameLogic'

function Game() {
    const {board,winner, start, reset, handleClick, getStatus} = useGameLogic();
    const [ gridSize, setGridSize ] = useState(0);
  return (
    <div className='game'>
        <div className='title'>
            <h1> Advanced TicTacToe </h1>
        </div>

        <div className='inputGirdSize'>
            <h4>Input your grid size (min:3)</h4>
            <input id='gridSize' 
            type='number' 
            style={{margin:"10px"}} 
            value={gridSize}
            onChange={(e) => setGridSize(Number(e.target.value))} />

            <button style={{margin:"10px"}} 
            onClick={() => start(gridSize)} >
                start</button>
        </div>

        <div className='status-container'>
            {/* display the status / result */}
            <h3>{getStatus()}</h3>
            <button onClick={() => {
                reset();
                setGridSize(0);
                }}>reset</button>
        </div>

        <div className='gameBoard'>
            { Array.isArray(board) && board.length > 0 && Array.isArray(board[0]) && 
            board.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <button className='cell 'key={`${rowIndex}-${colIndex}`}
                        onClick={() => handleClick(rowIndex, colIndex)}
                        disabled={cell!==null || winner }>
                            {cell}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Game