import WeaponForm from '@/components/WeaponForm'
import React from 'react'
// const WeaponForm = dynamic(() => import('@/components/WeaponForm'), {
//   ssr: false})

const NewWeapon = () => {
  return (
    <WeaponForm />
  )
}

export default NewWeapon