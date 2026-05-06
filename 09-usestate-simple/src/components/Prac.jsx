import React, { useState } from 'react'

const Prac = () => {

  const [num, setNum] = useState(10); 
  const [user, setUser] = useState('djrbv');
  const [users, setUsers] = useState([10,20,30]);

  function change() {
    setNum(21);
    setUser('Dhruv');
    setUsers([100,200,300]);
  }

  return (
    <div>
      <h1>Username is {user}</h1>
      <h2>Age is {num} and users {users.join(', ')}</h2>
      <button onClick={change}>fix</button>
    </div>
  )
}

export default Prac