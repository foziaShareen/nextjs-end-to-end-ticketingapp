import Link from 'next/link'
import React from 'react'
import ToggleMode from './togglemode'
import NavbarLinks from './NavbarLinks'

const MainNav = () => {
  return (
    <div className='flex justify-between'>
       
     <NavbarLinks />
    
    <div className='flex items-center gap-4'>
      <Link href="/login">Login</Link>
      
      <ToggleMode />
    </div>

    </div>
   
  )
}

export default MainNav