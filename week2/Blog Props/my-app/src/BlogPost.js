import React from 'react'

function Spots(props) {

    return (
        <div style={{backgroundColor:"white", width: "50%"}}>
            <h2 style= {{fontSize: "18px"}}>{props.place}</h2>
            <h3 style= {{fontSize: "13px"}}>{props.price}</h3>
            <h4 style= {{fontStyle:"italic", fontSize: "10px"}}>Posted by Start Bootstrap on {props.timeToGo}</h4>
        </div>
    )
}

export default Spots