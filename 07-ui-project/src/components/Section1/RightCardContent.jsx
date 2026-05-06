import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-6'>
        <h2 className='bg-white rounded-full h-10 w-10 text-black font-bold flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-white leading-normal '>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                <div className='flex items-center justify-between mt-5'>
                    <button style={{ backgroundColor: props.color }} className='text-white font-bold py-3 px-7 rounded-full'>{props.intro}</button>
                    <button style={{ backgroundColor: props.color }} className='text-white font-bold py-3 px-3 rounded-full '><ArrowRight /></button>
                </div>
            </div>
    </div>
  )
}

export default RightCardContent
