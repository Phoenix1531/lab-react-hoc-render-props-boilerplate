import React, { useState } from 'react'
// import { useState } from 'react'
const Click = (props) => {
  return (
    <div>
        <h1>{props.count}</h1>
        <button onClick={props.increase}>Click</button>
    </div>
  )
}

export default Click