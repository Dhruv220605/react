import React from 'react'

const User = (props) => {
    console.log(props)
  return (
    <div style={{color:'white'}}>
        {props.user}
    </div>
  )
}

export default User
