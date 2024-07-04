import { useState } from 'react'
import './App.css'
import {context} from './Usecontext/context'
import Navbar from './component/Navbar';

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <context.Provider value={{count,setCount}}>
      <Navbar/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </context.Provider>
  )
}

export default App
