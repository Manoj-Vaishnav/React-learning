import { useEffect } from "react"

function Hook_useeffect({color}) {
  useEffect(()=>{
     alert("colour was changed")
  },[color])
  
  return (
    <div>
        I am navbar {color}
    </div>
  )
}

export default Hook_useeffect