// Code Keypad Component Here
import React from 'react';

function passwordSubmit() {
    return (
        console.log('Entering password...')
    );
}

function Keypad () {
    return (
    <div>
        <input type="password" onChange={passwordSubmit} ></input>
    </div>
    )
}

export default Keypad;