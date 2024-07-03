
import {useState,useEffect} from 'react';

function Display_the_cards() {
    const[data,setdata]=useState([]);
    // async function fetchdata(){
    //     const response= await fetch("https://jsonplaceholder.typicode.com/posts");
    //     const value=await response.json();
    //     setdata(value);
    // }
    // fetchdata();
    //second method using useEffect is it not necessary to use useEffect but it optimize the code
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{return res.json();}).then((response)=>{setdata(response);}).catch((error)=>console.log(error))    
    },[])
  return (
    <div>
        {
            data.map((value)=>{
                return (<div key={value.id}>
                           <div>{value.userId}</div>
                           <div>{value.id}</div>
                           <div>{value.title}</div>
                           <div>{value.body}</div>
                       </div>)
            })
        }
        hello
    </div>
  )
}

export default Display_the_cards