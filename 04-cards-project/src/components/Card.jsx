import React from 'react'
import Bookmark from 'lucide-react/dist/esm/icons/bookmark'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
        <img src={props.brandLogo} alt="" className='logo' />
        <button className='btn'>Save <Bookmark size={14} color="rgb(120, 120, 120)" className='Bookmark' /></button>
        </div>
        <div className="center">
          <h3 className='heading'>{props.companyName} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div className="tags">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
            <button>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Card
