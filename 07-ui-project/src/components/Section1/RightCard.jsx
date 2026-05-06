import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='min-w-[34%] aspect-1/4 h-full overflow-hidden relative rounded-4xl shrink-0' >
        <img className='h-full w-full object-cover object-center' src={props.img} alt="Image" />
        <RightCardContent img={props.img} color={props.color} id={props.id} intro={props.intro} tag={props.tag} />
    </div>
  ) 
}

export default RightCard
