import React from 'react'
import { prisma } from '../../../../prisma/db'
import WeaponDetail from './WeaponDetail'
interface Props {
  params: {id:string}
}

const ViewWeapons = async({params}:Props) => {

    const weapon = await prisma.weapon.findUnique({
        where: {    id: parseInt(params.id)}
    })
  if (!weapon) {
    return <div>Weapon not found</div>
  }
  return <div><WeaponDetail weapon={weapon} /></div>
  console.log(weapon)
}

export default ViewWeapons