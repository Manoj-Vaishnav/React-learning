import {useState} from 'react'
import {memo} from 'react'

function Usecallback({content,getfunction}) {
    const [value,setvalue]=useState(content);
  console.log("useCallback is rendering")
  return (
    <div>{content}
    <button onClick={()=>setvalue(getfunction())} style={{width:"50px",height:"50px"}}>{value}</button>
    </div>
  )
}

export default memo(Usecallback)