import React from 'react'

const LikeImage = (props) => {
  return (
    <div>
         <button onClick={props.handlepostcount}>Like Post  {props.postcount}</button>
    </div>
  )
}

export default LikeImage