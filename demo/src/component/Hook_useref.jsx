
import {useRef,useEffect} from 'react';

function Hook_useref({content,color}) {
    const a=useRef(0);
    const divref=useRef();
    useEffect(()=>{
        alert("Hook userref started")
        a.current=a.current+1;
        divref.current.style.backgroundColor=color;
    })
  return (
    <div ref={divref}>{content} {a.current}</div>
  )
}

export default Hook_useref