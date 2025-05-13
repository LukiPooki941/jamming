//import logo from './logo.svg';
import './App.css';

function App() {
    const newArray=[];
    function clickHandle(element){
        newArray.push(element);
    }
    
return (
    <div> 
    <link href='./app.css' rel='stylesheet' />
    <form action='' method='get'>
    <label for='searchbar'>Search Songs</label>
    <input name='searchbar' type='search' id='searchbar'></input>
    <br/>
    <input type='submit' value='search' id='search'></input>
    </form>
    <div className='builder'>
     {/*(songsLoaded === false){
     <h1>type in a song</h1>} else{
     <song function ={clickHandle}/>}*/}
    </div>
    <form action='' method='post'>
    <div className='results'>
     {/*if(array === 0){
     <h1>add a song</h1>} else {<addedSongs array={array}
     }*/}
    </div>
    <br/>
    <input type='submit' value='add to amazon music' id='amazon' ></input>
    </form>
    </div>
)
}

export default App;
