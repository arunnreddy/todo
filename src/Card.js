import React,{useState} from 'react';
import {Add} from "./Action";
import {connect} from "react-redux";
import {Remove} from "./Action" 


function Card({products}) {

    const[item,setItem]=useState("")
  
    const submit = async e =>{
      
        e.preventDefault();
        if(item !== ""){
          
            setItem("");
        }
        setItem("");
    }
   
  return (
    <center>
    <div>
      <div className="card" style={{"width": "18rem",marginTop:"10px"}}>
        <div className="card-body">
            <div className="card-title">
                <form onSubmit={submit}>
                    <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
                    <input type="submit" className="btn btn-danger"/>
                </form>
               {products.map((user)=><div style={{textAlign:"left",border:"2px solid pink",padding:"3px",margin:"5px"}}>{user.name}<span onClick={()=>(Remove(user.name))}class="badge square-pill bg-danger" style={{float:"right"}}>delete</span></div>)}
            </div>
        </div>
      </div>
    </div>
    </center>
  )

  
}

const mapStateToProps=(state)=>{
    return{
        products:state
    }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    dispatch:dispatch(Add({name:" ssarun"})),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Card)
