import React from 'react'
import Arrow from './Arrow.jsx'
import HeroText from './HeroText.jsx'

const LeftContent = () => {
  return (
    <div className='h-3/4 w-110 flex flex-col justify-between '>
        <HeroText />
        <Arrow />
    </div>
  )
}

export default LeftContent
