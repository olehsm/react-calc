import React from 'react'
import './Button.css'

function Button(props) {
    function handleClick(e) {
        e.preventDefault();
        
        console.log('The button was clicked.');
    }
    
    return (
        <button onClick={handleClick} className={props.name} type="button">{props.title}</button>
    )
}



export default Button