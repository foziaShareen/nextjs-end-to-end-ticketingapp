import { Priority } from '@prisma/client'
import { Flame } from 'lucide-react'
import React from 'react'
interface WeaponPriorityProps {
    priority:Priority
}
const WeaponPriority:Record<Priority, {label:string, level:1|2| 3}> = {
    LOW: { label: 'Low', level: 1 },
    MEDIUM: { label: 'Medium', level: 2 },
    HIGH: { label: 'High', level: 3 },
}

const weaponPriority = ({priority}:WeaponPriorityProps) => {
  return (
    <div className='flex items-center gap-2'>
        <Flame className={`${WeaponPriority[priority].level>=1?'text-green-400':'text-muted'}`}/>
        <Flame className={`${WeaponPriority[priority].level>=2?'text-green-400':'text-muted'}`}/>
        <Flame className={`${WeaponPriority[priority].level>=3?'text-green-400':'text-muted'}`}/>
        
        </div>
  )
}

export default weaponPriority