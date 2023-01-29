import "./styles.css";
import {Card} from "./Card";
import Data fom "./Data.json";

export default function App() {
  return (
    <div className="App">
    {
      Data.map((curElem,index)=>{
          return(
            <Card/>
          )
      })
    }
    </div>
  );
}
