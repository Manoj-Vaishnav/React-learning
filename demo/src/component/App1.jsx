
import Hook_useeffect from './Hook_useeffect'
import Hook_useref from './Hook_useref';
import Name_change from './Name_Change'
import {useState,useEffect,useRef} from 'react'

function App1() {
  const [count,setCount]=useState(0);
  const [color,setColor]=useState(0);
  const btnref=useRef();

  //case 1: Run on every render and if any state change so page was renderd
  useEffect(()=>{
    alert("run every time when page is rendered")
  })
  //case 2: Run only once 
  useEffect(()=>{
    alert("Run only once");
    btnref.current.style.backgroundColor="red";
  },[]);
  //Run everytime when given dependency change
  useEffect(()=>{
      alert("count button in clicked");
      setColor(color+1);
  },[count]);
  return (
    <>
         <Name_change/>
         <button ref={btnref} onClick={()=>{
            setCount(count+1);
        }} style={{width:"100px"}}>
            {count}
        </button>
         <Hook_useeffect color={color}/>
         <Hook_useref content="Hook_useref" color="grey"/>
    </>
  )
}

export default App1