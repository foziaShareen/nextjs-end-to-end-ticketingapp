import React from 'react'
import { Status } from '@prisma/client'
import { Badge } from './ui/badge'
interface statusProps{
    status:Status
}
const statusColor :Record< Status, {label:string, color:"bg-red-400"|"bg-yellow-400"| "bg-green-400"}> = {
    "OPEN": {
        label: "Open",
        color: "bg-green-400"},
        "CLOSED": {
        label: "Closed",
        color: "bg-red-400"},
        "STARTED": {
        label: "Started",    
        color: "bg-yellow-400"}
            
        }



const weaponStatusBadge = ({status}:statusProps) => {
  return (
    <div>
        <Badge className={`${statusColor[status].color} text-background hover:${statusColor[status].color}`}>
            {statusColor[status].label}
        </Badge>
    </div>
  )
}

export default weaponStatusBadge