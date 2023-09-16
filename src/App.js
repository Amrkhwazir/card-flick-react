import './App.css';
import {useState} from 'react';

function App() {

  const initialData = [{
    mainTxt: "what language is react based on?",
    hvrTxt:  "JavaScript",
  },{
    mainTxt: "how to give components memory",
    hvrTxt:  "use Hooks",
  },{
    mainTxt: "how to pass data from parents to child components",
    hvrTxt:  "using props",
  },{
    mainTxt: "react js is a framework or library",
    hvrTxt:  "library",
  },{
    mainTxt: "which purpose react Js used?",
    hvrTxt:  "to build web, mobile, and desktop applications",
  },{
    mainTxt: "JSX stands for ",
    hvrTxt:  "JavaScript XML",
  },]

const [data, setData] = useState(initialData)

  function flickCardHover(index){

const updatedData = [...data];
updatedData[index].mainTxt = data[index].hvrTxt;
setData(updatedData);

}
 
function flickCardLeave(){

setData(initialData)

}




  return (
    <div className="App"style={{padding: "20px"}}>
     <Cards func={flickCardHover} value={data} cardLeave={flickCardLeave} />
    </div>
  );
}

function Cards({func, value, cardLeave}){
  
  return(
    <div className="cardBox">
     {
      value.map((val, indx)=>(

        <div className='cards' style={{width: "350px", height: "200px", marginTop: "20px", display: "flex", justifyContent: "center",alignItems: "center", cursor: "pointer", padding: "5px"}} onMouseOver={() => func(indx)} onMouseLeave={cardLeave} key={indx}><h3>{val.mainTxt}</h3></div>

      ))
     }

    </div>
  )
}

export default App;
