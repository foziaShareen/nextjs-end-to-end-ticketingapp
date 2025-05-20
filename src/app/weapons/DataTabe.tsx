import React from 'react'
import { Weapon } from '@prisma/client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import WeaponStatusBadge from '@/components/weaponStatusBadge'
import WeaponPriority from '@/components/WeaponPriority'
import Link from 'next/link'
interface DataTableProps {
    weapons: Weapon[]
}
const DataTable = ({ weapons }: DataTableProps) => {
     console.log("weapons", weapons)
  return (
    <div className='w-full mt-5'>
        <div className='rounded-md sm:border'>
        
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Updated At</TableHead>
                
            </TableRow>

        </TableHeader>
        <TableBody>
            {weapons?weapons.map((weapon) => (
                <TableRow key={weapon.id}>
                    <TableCell>
                        <Link href={`/weapons/${weapon.id}`}>{weapon.title}</Link></TableCell>
                    <TableCell>{weapon.description}</TableCell>
                    <TableCell>
                        <div className='flex items-center '>
                            <WeaponStatusBadge status={weapon.status} />
                            </div></TableCell>
                    <TableCell>
                        <div className='flex items-center '>
                            <WeaponPriority priority={weapon.priority}/>
                            </div></TableCell>
                    <TableCell>{new Date(weapon.createAt.toLocaleDateString('en-PK',{
                        year: '2-digit',
                        month: '2-digit',
                        day: '2-digit',
                        
                        hour: 'numeric',
                        minute: '2-digit',

                    })).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(weapon.updateAt).toLocaleDateString()}</TableCell>
                </TableRow>
            )):null}
    </TableBody>
    </Table>
    </div></div>
  )
}

export default DataTable