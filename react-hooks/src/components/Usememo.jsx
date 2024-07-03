
import { useState ,useMemo} from 'react'
let num=new Array(30_000_000).fill(0).map((_,i)=>{
    return (
     {
       index:i,
       isTrue:i===29_999_000
     }
    )
   })
function Usememo() {
  const [count, setCount] = useState(0)
  const [number,setnumber]=useState(num);
  const find=useMemo(()=>number.find((item)=>item.isTrue===true),[number])
  return (
    <>
      <div className="button">
        <button type="button"onClick={()=>{
          setCount(count+1);
          // if(count===10){
          //   setnumber(new Array(30000000).fill(0).map((_,i)=>{
          //     return (
          //      {
          //        index:i,
          //        isTrue:i===9_000_000
          //      }
          //     )
          //    }))
          // }
        }} >{count}</button>
      </div>
      <div className="content">
        <h3>The searching True value is {find.index}</h3>
      </div>

    </>
  )
}

export default Usememo