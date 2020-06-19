import React from 'react';

function Item(props) {
    return (
        <div style={{backgroundColor: props.backgroundColor}}>
            <h2>Animal: {props.title}</h2>
            <h3>Speed: {props.subtitle}</h3>
            <p>{props.information}</p>
        </div>
    )
}
export default Item