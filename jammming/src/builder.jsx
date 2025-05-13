import React, { useState } from "react";

function Songs(props){
    const array = [];
document.getElementById('search').onclick(
    array.push(<div id='song' key='001'>
        <h2>{object.song}</h2>
        <h3>{object.artist}</h3>
        <h4><a onClick={props.function}>+</a></h4>
    </div>))
    return array.toString();
}



export default Songs;
