import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-22  shadow-md'>
      <div className='h-full  mx-25 flex justify-between items-center  ' >
        <div className='mx-8 text-[25px] font-semibold tracking-widest '>LOGO</div>
        <nav className=' mx-20 flex gap-5 '>
          <Link to='/'  className='text-[16px] font-medium'>Home</Link>
          <Link to='/shop'  className='text-[16px] font-medium'>Shop</Link>
          <Link to='/cart'  className='text-[16px] font-medium'>Cart</Link>
          <Link to='/dashboard'  className='text-[16px] font-medium'>DashBoard</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header