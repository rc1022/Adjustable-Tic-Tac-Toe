# Adjustable-Tic-Tac-Toe
[Practice] 
- handling 2D array 
    different between two array initiation mehtods:
        Array(size).fill(Array(size).fill(null))
            -> same elements in each row
        Array(size).fill().map( () => Array(size).fill(null) )
            -> unique elements in each row

- state management
    useState, keep track of winner, board, player's turn
- win check
    horizontal, vertial, diagonal and anti-diagonal check
