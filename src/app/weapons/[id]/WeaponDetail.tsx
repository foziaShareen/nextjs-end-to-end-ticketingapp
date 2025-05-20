import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import WeaponPriority from '@/components/WeaponPriority'
import WeaponStatusBadge from '@/components/weaponStatusBadge'
import { Weapon } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
import ReactMarkDown from 'react-markdown'
interface Props {
    weapon:Weapon
}

const WeaponDetail = ({weapon}:Props) => {
  return (
    <div className='lg:grid lg:grid-cols-4'>
      <Card className='mx-4 mb-4 lg:col-span-3'>
  <CardHeader>
    <div className='flex mb-3 justify-between'>
      
    <WeaponStatusBadge status={weapon.status} />
    <WeaponPriority priority={weapon.priority} />
    </div>
    <CardTitle>{weapon.title}</CardTitle>
    <CardDescription><p>{new Date(weapon.createAt.toLocaleDateString('en-PK',{
                        year: '2-digit',
                        month: '2-digit',
                        day: '2-digit',
                        
                        hour: 'numeric',
                        minute: '2-digit',

                    })).toLocaleDateString()}</p></CardDescription>
  </CardHeader>
  <CardContent className='prose'>
    
                    <ReactMarkDown>{weapon.description}</ReactMarkDown>
  </CardContent>
  <CardFooter>
    <p>{new Date(weapon.updateAt.toLocaleDateString('en-PK',{
                        year: '2-digit',
                        month: '2-digit',
                        day: '2-digit',
                        
                        hour: 'numeric',
                        minute: '2-digit',

                    })).toLocaleDateString()}</p>
  </CardFooter>
</Card>
<div className='mx-4 flex gap-2 lg:flex-col lg:mx-0'><Link href={`/weapons/edit/${weapon.id}`} className={buttonVariants({ variant: "default" })}>Edit Weapon</Link>
<Link href={`/weapons/delete/${weapon.id}`} className={buttonVariants({ variant: "default" })}>
Delete Weapon</Link></div>
   
    </div>
)
}

export default WeaponDetail