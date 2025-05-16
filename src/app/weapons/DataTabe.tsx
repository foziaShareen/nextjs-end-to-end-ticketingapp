import React from 'react'
import { Weapon } from '@prisma/client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
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
                    <TableCell>{weapon.title}</TableCell>
                    <TableCell>{weapon.description}</TableCell>
                    <TableCell>{weapon.status}</TableCell>
                    <TableCell>{weapon.priority}</TableCell>
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