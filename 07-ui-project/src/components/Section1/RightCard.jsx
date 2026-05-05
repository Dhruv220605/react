import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='min-w-[280px] h-full overflow-hidden relative rounded-4xl flex-shrink-0'>
        <img className='h-full w-full object-cover' src={props.img} alt="Image" />
        <RightCardContent img={props.img} id={props.id} intro={props.intro} />
    </div>
  )
}

export default RightCard
