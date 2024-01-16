import React, { useState } from 'react'

const HOC = (OriginalComponents) => {

    const newComponent=()=>{
        
        const [count, setCount] = useState(0);
        
        const increaseCount = ()=>{
            setCount(count+1);
        }
        return (
            <div>
      <OriginalComponents count={count} increaseCount={increaseCount}/>
    </div>
  )
}
return newComponent
}

export default HOC