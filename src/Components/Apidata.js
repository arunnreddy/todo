import React,{useEffect,useState} from 'react'

function Apidata() {
    const[item,setItem]=useState([])
    const[raw,setRaw]=useState("")
    console.log(item)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>setItem(data))
    },[])
  return (
    <center>
    <div>
        <input type="text" onChange={(e)=>setRaw(e.target.value)}/>
    {item.filter((user)=>user.name.includes(raw)).map((dat)=><li>{dat.name}</li>)}
    </div>
    </center>
  )
}

export default Apidata
