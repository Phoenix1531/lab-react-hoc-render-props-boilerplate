import React from 'react'

const LikeImage = (props) => {
  return (
    <div>
         <button onClick={props.handleimgcount}>Like Image {props.imagecount}</button>
    </div>
  )
}

export default LikeImage