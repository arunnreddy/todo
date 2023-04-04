import React from 'react'
import Child from './Child'

function Parent() {
let a=10
  return (
    <div>
   
     <Child  data={a}  />
     {a}
    </div>
    
  )
}

export default Parent
