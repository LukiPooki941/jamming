//import logo from './logo.svg';
import './App.css';
import getSongs from './practiceAPI.js';
//import realURL from './practiceAPI.js';
import React, {useState} from 'react';

function App() {
    /*const newArray=[];
    function clickHandle(element){
        newArray.push(element);
    }*/
   const [search, setSearch] = useState('Search For Songs');
    
return (
    <div> 
    <link href='./app.css' rel='stylesheet' />
    <label for='searchbar'>Search Songs</label>
    <input name='searchbar' type='search' id='searchbar' ></input>
    <br/>
    <button value = 'Search' onclick = {getSongs}/>
    
    <div className='builder'> 
     {/*<h1>type in a song</h1> 
     <song info = {getSongs} function ={clickHandle}/>*/}
    </div>
    <div className='results'>
     {/*if(array === 0){
     <h1>add a song</h1>} else {<addedSongs array={array}
     }*/}
    </div>
    <br/>
    <input type='submit' value='add to amazon music' id='amazon' ></input>
    </div>
)
}

export default App;
