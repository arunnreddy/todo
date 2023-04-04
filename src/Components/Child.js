import React ,{useState}from 'react'

function Child() {
  const [meta,setMeta]=useState({

    name:"",
    age:""
  })

  const data=[{

    name:"arun",
    age:23
  },{
    name:"varun",
    age:37
  },{
    name:"hareesh",
    age:46
  }]
  const[raw,setRaw]=useState(data)


  const{name,age}=meta

  const changeHandler=(e)=>{
    setMeta({...meta,[e.target.name]:e.target.value})
  }
  const submitHandler=(e)=>{
e.preventDefault()

setRaw([...raw,meta])

  }
  const delet=()=>{
let met=raw.slice(0,-1)
setRaw(met)
  }
  return (
    <center>
    <div>
      <br/>
    <form onSubmit={submitHandler}>
      <input type="text" value={name} name="name" onChange={changeHandler}/><br/>
      <input type="text" value={age}  name="age" onChange={changeHandler}/><br/>
      
    </form>
    {raw.map((user)=><li key={user.name}>{user.name}</li>)}
    <button onClick={submitHandler}>add</button>
    <button onClick={delet}>delete</button>
    </div>
    </center>
  )
}

export default Child
