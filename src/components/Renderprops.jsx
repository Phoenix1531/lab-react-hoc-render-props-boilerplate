import React,{ useState } from 'react'

const Renderprops = (props) => {
    const [count,setCount] = useState(0)
    const increase = ()=>{
        setCount(count+1)
    }
  return (
    <>
    {props.render(increase,count)}
    </>

    
  )
}

export default Renderprops