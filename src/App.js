import './App.css';
import {useState} from 'react';

function App() {

const [data, setData] = useState(["a","b","c","d","e","f"])
const cardElm = document.querySelector(".cardBox")
console.log(cardElm)
  function flickCardHover(){
    data.map((val)=>(
      cardElm.innerHTML = val
      ))
  }
  return (
    <div className="App">
     <Cards func={flickCardHover} />
    </div>
  );
}

function Cards({func,}){
  return(
    <div className="cardBox">
     {
      Array.from(["what language is react based on?","what are the building block of react apps?","how to give components memory","how to pass data from parents to child components","react js is a framework or library","JSX stands for "],(x)=>(

        <div className="cards" style={{width: "390px", height: "250px", marginTop: "10px", display: "flex", justifyContent: "center",alignItems: "center", cursor: "pointer", padding: "5px"}} onMouseOver={func}><h3>{x}</h3></div>

      ))
     }

    </div>
  )
}

export default App;
