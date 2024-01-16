import React from 'react'

const LikePostHoc = (props) => {
  return (
    <div>
         <button onClick={props.increaseCount}>Like Post {props.count}</button>
    </div>
  )
}

export default LikePostHoc