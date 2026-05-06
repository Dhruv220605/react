import React from 'react'

const App = () => {

  const users ={
    username:'dhruv',
    age:21,
    city:'Mumbai'
  }

  localStorage.setItem('users',JSON.stringify(users)) //parse and clear too
  const use = localStorage.removeItem('use')
  const user = localStorage.getItem('user')
  console.log(users.city)

  return (
    <div>
      App
    </div>
  )
}

export default App