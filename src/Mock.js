import React,{useState,useEffect} from 'react'

function Mock() {
    const[mock,setMock]=useState([])
    console.log("mock",mock)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typiode.com/users").then(res=>res.json()).then(data=>setMock(data))
        .catch((e)=>console.log(e))
    },[])
  return (
    <center>
    <div>
     {mock.length>0? mock.map((user)=><li key={user.id}>{user.name}</li>):<h1>data is empty</h1>}
    </div>
    </center>
  )
}

export default Mock
