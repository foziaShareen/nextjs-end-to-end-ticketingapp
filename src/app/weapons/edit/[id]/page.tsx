import React from 'react'
import { prisma } from '../../../../../prisma/db'
import WeaponForm from '@/components/WeaponForm'

// import dynamic from 'next/dynamic'
interface Props {
  params: { id: string }}
//   const WeaponForm = dynamic(() => import('@/components/weaponForm'), {
//     ssr: false,
//   })
const EditWeapon = async({params}:Props) => {
    const weapon = await prisma.weapon.findUnique({
        where: {
            id: parseInt(params.id),//params.id
        }
    })
    if(!weapon) {
        return <div className='text-destructive'>Weapon not found</div>
    }
    return <WeaponForm weapon={weapon} />
}


export default EditWeapon