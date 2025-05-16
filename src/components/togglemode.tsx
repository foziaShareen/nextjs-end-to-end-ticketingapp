"use client"
// This is a client component
import React from 'react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import {Moon, Sun} from 'lucide-react'
import { Button } from './ui/button'

const ToggleMode = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
     const dark = theme === 'dark'
    if(!mounted) {
        <Button variant = "outline" size="icon" disabled>
        {dark?(<Moon  className='hover:cursor-pointer hover:text-primary' />):(<Sun className='hover:cursor-pointer hover:text-primary'/>)}

    </Button>
    }
   
  return (
    <Button variant = "outline" size="icon" onClick={()=> setTheme(`${dark ? 'light' : 'dark'}`)}>
        {dark?(<Moon  className='hover:cursor-pointer hover:text-primary' />):(<Sun className='hover:cursor-pointer hover:text-primary'/>)}

    </Button>
  )
}

export default ToggleMode