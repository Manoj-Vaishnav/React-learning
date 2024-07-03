import { useState } from 'react'

function Name_Change() {
  const [box1, setbox1] = useState("BOX1");
  const [box2,setbox2]=useState("BOX2");
  const [box3,setbox3]=useState("BOX3");
  setTimeout(()=>{setbox1("BOX1 Changed")},1000);
  setTimeout(()=>{setbox2("BOX2 Changed")},2000);
  setTimeout(()=>{setbox3("BOX3 Changed")},3000);
  return (
    <div>
     <div id="box1" style={{width:"100px",height:"100px",border:"1px solid black"}}>{box1}</div>
     <div id="box2" style={{width:"100px",height:"100px",border:"1px solid black"}}>{box2}</div>
     <div id="box3" style={{width:"100px",height:"100px",border:"1px solid black"}}>{box3}</div>
    </div>
  )
}

export default Name_Change