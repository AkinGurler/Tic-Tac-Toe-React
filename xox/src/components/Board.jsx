import React, { useState } from 'react'
import Box from './box/Box'
import './board.css'

/* const  = [["","",""], ["","",""], []]; */

const Board = () => {
    const [turn, setTurn] = useState("X")
    const [winner, setWinner] = useState("")
    const [draw, setDraw] = useState("")
    const [table, setTable] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    );
    
    
    const changeTurn = (row, column) => {
        table[row][column] = turn
       

        const winner = checkWin();
        if (!winner) {
            if(table.some(row => row.includes(null))){
            //Game Not Finished
            }
            //DRAW
            else{
                setDraw("Draw")
            }

        } else {
            setWinner(winner)
            let newArr = Array(3).fill(0).map(row => new Array(3).fill(winner))
            setTable(newArr)
        }
        turn === "X" ? setTurn("O") : setTurn("X")





    }
    const checkWin = () => {
             //----------ROW WINS------------
        for (let i = 0; i < table.length; i++) {
            const row1 = table[i][0];
            const row2 = table[i][1];
            const row3 = table[i][2];
            if (row1 === row2 && row2 === row3 && row1) {
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
    const restart = () => {
        let newArr = Array(3).fill(null).map(row => new Array(3).fill(null))
        setTable(newArr)
        setTurn("X")
        setWinner("")
        setDraw("")
    }



    return (
        <div className="board-container">
            <h2>{turn} TURN</h2>
            <div className="board-row">
                <Box value={table[0][0]} row={0} column={0} turn={turn} changeTurn={changeTurn} />
                <Box value={table[0][1]} row={0} column={1} turn={turn} changeTurn={changeTurn} />
                <Box value={table[0][2]} row={0} column={2} turn={turn} changeTurn={changeTurn} />
            </div>
            <div className="board-row">
                <Box value={table[1][0]} row={1} column={0} turn={turn} changeTurn={changeTurn} />
                <Box value={table[1][1]} row={1} column={1} turn={turn} changeTurn={changeTurn} />
                <Box value={table[1][2]} row={1} column={2} turn={turn} changeTurn={changeTurn} />
            </div>
            <div className="board-row">
                <Box value={table[2][0]} row={2} column={0} turn={turn} changeTurn={changeTurn} />
                <Box value={table[2][1]} row={2} column={1} turn={turn} changeTurn={changeTurn} />
                <Box value={table[2][2]} row={2} column={2} turn={turn} changeTurn={changeTurn} />
            </div>
            <button className='button' onClick={() => restart()}>Play Again</button>
            {winner && (

                <>
                    <h2>{winner} is the winner</h2>
                </>
            )}
            {draw && (

                <>
                    <h2>DRAW PLAY AGAIN</h2>
                </>
            )}
        </div>
    )
}

export default Board