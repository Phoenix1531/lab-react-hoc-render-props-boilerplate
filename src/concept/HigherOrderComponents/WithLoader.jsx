import React, { useState } from 'react'
import { Audio } from 'react-loader-spinner'

const WithLoader = (User) => {
    return () => {
        const [loading, setloading] = useState(true)

        setTimeout(() => {
            setloading(false)
        },3000)
        return (
            <>
                {loading ? <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/> : <User />}
            </>
        )
    }
}

export default WithLoader