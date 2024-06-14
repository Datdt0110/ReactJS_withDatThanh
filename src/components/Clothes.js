// Clothes.js
import React from 'react';

function Clothes(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Type: {props.type}</p>
            <p>Color: {props.color}</p>
            <p>Size: {props.size}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default Clothes;
