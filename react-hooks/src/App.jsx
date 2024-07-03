import {useState, useCallback} from 'react'
import './App.css'
import Usememo from './components/Usememo'
import Usecallback from './components/Usecallback'


function App() {
  const [number,setnumber]=useState(0);
  const getfunction=useCallback(function(){return "bad"},[])
  
  return (<>
  <Usememo/>
   <button onClick={()=>setnumber(number+1)}>{number}</button>
  <Usecallback content={"good"} getfunction={getfunction}/>
  </>  
  )
}

export default App
