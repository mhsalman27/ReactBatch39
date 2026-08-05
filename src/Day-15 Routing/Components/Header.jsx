import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-25  shadow-md'>
      <div className='h-full  mx-25 flex justify-between items-center  ' >
        <div className='mx-8 text-[25px] font-semibold tracking-widest '>LOGO</div>
        <nav className=' mx-20 flex gap-5 '>
          <Link to='/'  className='text-[16px] font-medium'>Home</Link>
          <Link to='/shop'  className='text-[16px] font-medium'>Shop</Link>
          <Link to='/cart'  className='text-[16px] font-medium'>Cart</Link>
          <Link to='/dashboard'  className='text-[16px] font-medium'>DashBoard</Link>
          <Link to='/signup' className='text-[23px] font-medium mt-0.5 ml-5'><CgProfile/></Link>
        </nav>
      </div>
    </div>
  )
}

export default Header