// Clothes.js
import React from 'react';

function Clothes(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.type}</td>
            <td>{props.color}</td>
            <td>{props.size}</td>
            <td>{props.children}</td>
        </tr>
    );
}

export default Clothes;
