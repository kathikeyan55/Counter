import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display : grid;
    grid-template-columns :  repeat(4 , 1fr);
    grid-gap : 10px;
    margin-top : 15px;
`
function List({dispatch , obj}) {
    const {count , id } = obj
  return (
     
    <Div>
        <div className="Top_nab">
           <h1>{count}</h1>
        </div>
        <button
         type="button"
          onClick = {()=>{
              dispatch({type : "INC" , id : id })
          } }
          className="add"
         >+</button>
        <button 
        type="button" 
        onClick = {()=>{
            dispatch({type : "DEC" , id : id })
        } }
        className="minus"
         >-</button>
        <button 
        type="button"
        className="remove"
        onClick = {()=>{
            dispatch({type : "DEL" , palyLoard : {id : id} })
        }}
         >Delete</button>
    </Div>
  )
}

export default List