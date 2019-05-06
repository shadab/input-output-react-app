import React from 'react';

const userInput = (props) => {

    const style = {
        border: '2px solid red'
    };

    return(
        <div>
            <input type="text" onChange={props.changed} value={props.username} style={style}></input>
        </div>
    );
}

export default userInput;