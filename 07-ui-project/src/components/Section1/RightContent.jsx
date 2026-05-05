import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-130 w-230  px-15 py-5 flex flex-nowrap gap-5 items-center overflow-x-auto'>
      {props.users.map((elem, idx) => {
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} intro={elem.intro} /> 
      })}
    </div>
  )
}

export default RightContent
