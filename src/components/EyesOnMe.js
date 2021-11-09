// Code EyesOnMe Component Here
import React from "react";


// function focus () {
//     return (
//         console.log('Good!')
//     );
// }
// function blur () {
//     return (
//         console.log('Hey! Eyes On Me!')
//     );
// }

function EyesOnMe () {
    function focus () {
        return (
            console.log('Good!')
        );
    }
    function blur () {
        return (
            console.log('Hey! Eyes On Me!')
        );
    }
return (
    <div> 
        <button onFocus={focus} onBlur={blur}>Eyes on Me</button>
    </div>
    );
}

export default EyesOnMe;