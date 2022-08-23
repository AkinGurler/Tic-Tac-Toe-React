import React, { useState } from 'react'
import Box from './box/Box'
import './board.css'

const table = [[], [], []];
console.log(table)
const Board = () => {
    const [turn, setTurn] = useState("X")
    const [winner, setWinner] = useState("")


    const changeTurn = (row, column) => {
        table[row][column] = turn

        const winner = checkWin();
        if (!winner) {
            //nothing
        } else {
            setWinner(winner)
            console.log("winner")
        }
        turn === "X" ? setTurn("O") : setTurn("X")
        console.log(table)
        console.log(table.length)
        


    }
    const checkWin = () => {
             //----------ROW WINS------------
        for (let i = 0; i < table.length; i++) {
            const row1 = table[i][0];
            const row2 = table[i][1];
            const row3 = table[i][2];
            if (row1 === row2 && row2 === row3 && row1) {
                console.log("row check")
                return row1;
            }
            //----------COLUMN WINS------------
            for (let j = 0; j < table.length; j++) {
                const column1 = table[0][j];
                const column2 = table[1][j];
                const column3 = table[2][j];
                if (column1 === column2 && column2 === column3 && column1) {
                    return column1;
                }

            }
            //----------CROSS WINS------------
            const crossRight1 = table[0][0]
            const crossRight2 = table[1][1]
            const crossRight3 = table[2][2]
            if (crossRight1 === crossRight2 && crossRight2 === crossRight3 && crossRight1) {
                return crossRight1;
            }
            //02,11,30
            const crossLeft1 = table[0][2]
            const crossLeft2 = table[1][1]
            const crossLeft3 = table[2][0]
            if (crossLeft1 === crossLeft2 && crossLeft2 === crossLeft3 && crossLeft1) {
                return crossLeft1;
            }
        }
        

    }
    const restart=()=>{
        window.location.reload();
    }



    return (
        <div className="board-container">
            <h2>{turn} TURN</h2>
            <div className="board-row">
                <Box row={0} column={0} turn={turn} changeTurn={changeTurn} />
                <Box row={0} column={1} turn={turn} changeTurn={changeTurn} />
                <Box row={0} column={2} turn={turn} changeTurn={changeTurn} />
            </div>
            <div className="board-row">
                <Box row={1} column={0} turn={turn} changeTurn={changeTurn} />
                <Box row={1} column={1} turn={turn} changeTurn={changeTurn} />
                <Box row={1} column={2} turn={turn} changeTurn={changeTurn} />
            </div>
            <div className="board-row">
                <Box row={2} column={0} turn={turn} changeTurn={changeTurn} />
                <Box row={2} column={1} turn={turn} changeTurn={changeTurn} />
                <Box row={2} column={2} turn={turn} changeTurn={changeTurn} />
            </div>
            <button className='button' onClick={() => restart()}>Play Again</button>
            {winner && (
                
				<>
					<h2>{winner} is the winner</h2>
				</>
			)}
        </div>
    )
}

export default Board