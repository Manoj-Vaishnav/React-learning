
import { useContext } from 'react'
import {context} from '../Usecontext/context'
function Button() {
    const value=useContext(context);
  return (
    <button onClick={()=>value.setCount(value.count+1)}>{value.count}</button>
  )
}

export default Button