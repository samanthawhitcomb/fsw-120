import React from 'react'

function Spots(props) {
    function sign(amount) {
        if(amount >= 1000) {
            return "$$$"
        } else if (amount > 500 && amount < 1000) {
            return "$$"
        } else {
            return "$"
        }
    }

    function TimeOfYear(season) {
        if (season === "Spring") {
            return "Yellow"
        } else if(season === "Winter") {
            return "Teal"
        } else if (season === "Summer") {
            return "Orange"
        } else if (season === "Fall") {
            return "Brown"
        } else {
            return "White"
        }
    }
    return (
        <div style={{backgroundColor: TimeOfYear(props.timeToGo)}}>
            <h2>{props.place} {sign(props.price)}</h2>
        </div>
    )
}

export default Spots