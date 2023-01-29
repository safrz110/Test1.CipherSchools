import "./styles.css";
import {Card} from "./Card";

const Data = [{"discount":"33%"},{"discount":"39%"},{"discount":"24%"},{"discount":"83%"}]

export default function App() {
  return (
    <div className="flex">
    {
      Data.map((curElem,index)=>{
          return(
            <Card curElem = {curElem}/>
          )
      })
    }
    </div>
  );
}
