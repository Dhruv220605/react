import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="profile" /> 
        <h1>{props.user}</h1>
        <p>Age: {props.age}</p>
        <p>{props.user} is a software engineer with a passion for building scalable web applications. He has experience in both frontend and backend development, and enjoys working with modern technologies.</p>
        <button> view profile </button>
      </div>
    </div>
  )
}

export default Card
