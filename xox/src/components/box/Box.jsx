import React, { useState } from 'react'
import "./box.css"
const Box = (props) => {
   
    const changeValue=()=>{
        if(props.value==null){
            props.changeTurn(props.row,props.column)
        }
            
    }
    
    
  return (
    <div className="box-container" onClick={changeValue}>
       
       <div className="value" >{props.value}</div> 
    </div>
  )
}

export default Box