import React from 'react'

function Raw({changeHandler}) {
  return (
    <div>
     <input type="text" onChange={changeHandler}/>
    </div>
  )
}

export default Raw
