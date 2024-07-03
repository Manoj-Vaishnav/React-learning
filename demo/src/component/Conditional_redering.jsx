import {useState} from 'react';
import pexels from '../assets/pexels.jpg'

function Conditional_redering() {
    const [show,setshow]=useState(false);
    const [todo,settodo]=useState([
      {
        id:1,
        title:"name1",
        desc:"desc1"
     },
     {
        id:2,
        title:"name2",
        desc:"desc2"
     },
     {
        id:3,
        title:"name3",
        desc:"desc3"
     }
    ])
  return (
    <div>
        {show && <div><img src={pexels} style={{width:"50vw", hight:"50vh"}}/></div> } 
        <button onClick={()=>{setshow(!show)}}>Show image</button>
        {
          todo.map((todo)=>{
            return (<div key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.desc}</div>
                    </div>)
              
          })
        }
    </div>
  )
}

export default Conditional_redering