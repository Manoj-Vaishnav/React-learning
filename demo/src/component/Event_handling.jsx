import {useRef,useState} from 'react';
function Event_handling() {
    const btnref=useRef();
    const handleover=()=>{
          btnref.current.style.backgroundColor="blue";
    }

    const [form,setform]=useState({email:"",phone:""})
    const handlechange=(e)=>{
        setform({...form,[e.target.name]:e.target.value});
        console.log(form);
    }
  return (
    <div>
        <div ref={btnref} style={{width:"500px",height:"500px",backgroundColor:"red"}} onMouseMove={handleover}></div>
        <input type="text" name="email" id="" value={form.email} onChange={handlechange}/>
        <input type="phone" name="phone" id="" value={form.phone} onChange={handlechange} />
        
    </div>
  )
}

export default Event_handling