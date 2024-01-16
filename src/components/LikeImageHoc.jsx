import React from 'react'

const LikeImageHoc = (props) => {
  return (
    <div>
        <button onClick={props.increaseCount}>Like Image {props.count}</button>
    </div>
  )
}

export default LikeImageHoc