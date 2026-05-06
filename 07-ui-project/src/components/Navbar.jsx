import React from 'react'

const Navbar = () => {
  return (
    <div className= 'flex items-center justify-between py-10 px-18'>
      <h4 className='bg-black text-white uppercase py-2 px-4 rounded-full '>Target audience</h4>
      <button className='bg-neutral-200 text-black uppercase cursor-pointer hover:bg-neutral-300 rounded-full py-2 px-4 tracking-wider text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar
