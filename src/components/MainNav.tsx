import Link from 'next/link'
import React from 'react'

const MainNav = () => {
  return (
    <div className='flex justify-between'>
       <div>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/users">Users</Link>
    </div>
    <div>
      <Link href="/login">Login</Link>
      
      <Link href="/logout">Dark</Link>
    </div>

    </div>
   
  )
}

export default MainNav