import React, { useState } from 'react'
import "./box.css"
const Box = (props) => {
    const [value, setValue] = useState("")  
    const changeValue=()=>{
        if(value ===""){
            setValue(props.turn)
            props.changeTurn(props.row,props.column)
        }
    }

  return (
    <div className="box-container" onClick={changeValue}>
       
       <div className="value" >{value}</div> 
    </div>
  )
}

export default Box