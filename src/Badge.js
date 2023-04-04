import React from 'react';
import {connect} from "react-redux"

function Badge({product}) {
  return (
    <center>
    <div style={{marginTop:"40px"}}>
    <button className="btn btn-primary">total products<span className="badge badge-pill badge-danger" style={{backgroundColor:"white",color:"black",float:"right",padding:"2px"}}>{product}</span></button>
    </div>
    </center>
  )
}


const mapStateToProps=(state)=>{
  return {
    product:state.length
  }
}
export default connect(mapStateToProps)(Badge)
