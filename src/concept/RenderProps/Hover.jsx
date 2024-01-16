import React, { useState } from 'react'

const Hover = (props) => {
    const [count,setCount] = useState(0)
    return (
      <div> 
        <h1>{props.count}</h1>
          <button onMouseOver={props.increase}>Hover</button>
      </div>
    )
}

export default Hover