import React from 'react'
import {prisma} from '../../../prisma/db'
import DataTable from './DataTabe'

const Weapons = async() => {
    const weapons = await prisma.weapon.findMany()
    // console.log(weapons)
  return (
    <div><DataTable weapons={weapons} /></div>
  )
}

export default Weapons