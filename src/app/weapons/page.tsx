import React from 'react'
import {prisma} from '../../../prisma/db'
import DataTable from './DataTabe'
// import Link from 'next/link'
// Import buttonVariants from its module (update the path as needed)
// import { buttonVariants } from '@/components/ui/button'



const Weapons = async() => {
    const weapons = await prisma.weapon.findMany()
    // console.log(weapons)
  return (
    <div>
    {/* <Link href="/weapons/new" className={buttonVariants({ variant: "default" })}>Add New Weapon</Link>  */}
      
      <DataTable weapons={weapons} />
    </div>
  )
}

export default Weapons