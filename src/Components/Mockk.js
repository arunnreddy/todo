import React,{useState} from 'react'
import Raw from './Raw'

function Mockk() {
    const[data,setData]=useState("")
    

    const changeHandler=(e)=>{
        setData(e.target.value)
    }
  return (
    <center>
    <div>
        data:{data}
        <form>

            <Raw changeHandler={changeHandler}/>
        </form>
     
    </div>
    </center>
  )
}

export default Mockk
