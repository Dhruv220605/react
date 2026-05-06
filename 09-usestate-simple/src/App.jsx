import React, { useState } from 'react';


const App = () => {

  const [num, setNum] = useState(0);

  function increaseNum(){
    setNum(num + 1);
  }

  function decreaseNum(){
    setNum(num - 1);
  }

  function jumpNum(){
    setNum(num +5);
  }

  return (
    <div>
      <h1 className="h1">{num}</h1>
      <button onClick={increaseNum} className="btn"><h1>increase</h1></button>
      <button onClick={decreaseNum} className="btn"><h1>decrease</h1></button>
      <button onClick={jumpNum} className="btn"><h1>increase by 5</h1></button> 
    </div>
  )
}

export default App
