import './App.css'
import Navbar from './component/navbar'
import { useSelector, useDispatch } from 'react-redux'
import {increment,decrement} from './store/counter/Counter'
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
     <Navbar/>
     <button type="button" onClick={()=>dispatch(decrement())}>-</button>
     <h1>HEllo world {count}</h1>
     <button type="button" onClick={()=>dispatch(increment())}>+</button>
    </>
  )
}

export default App

