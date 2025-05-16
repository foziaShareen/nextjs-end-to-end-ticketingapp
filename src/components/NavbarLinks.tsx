"use client"
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import React from 'react'



const NavbarLinks = () => {
    const links =[
    {href: '/', label: 'Dashboard'},
    {href: '/tickets', label: 'Tickets'},
    {href: '/users', label: 'Users'}
   
]
    const currentPath = usePathname()



  return (
    <div className='flex items-center gap-4'>
        {links.map((link) => (
            <Link key={link.href} href={link.href} className={`navbar-link ${currentPath === link.href ? 'text-primary-foreground' : 'text-primary-main'}`}>
            {link.label}
            </Link>
        ))}
    </div>
  )
}

export default NavbarLinks