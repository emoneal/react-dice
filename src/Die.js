import React from 'react'

export default function Die(props) {
    return (
        <div className="dice" onClick={props.handleClick}>
            <h3>{props.number}</h3>
        </div>
    )
}