"use client"
import React, { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { z } from 'zod'
import { weaponScehma } from '../../validationSchemas/weapon'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './ui/input'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import axios from 'axios'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'
import { Weapon } from '@prisma/client'

type WeaponFormData = z.infer<typeof weaponScehma>

// Extend WeaponFormData to include 'id' for editing existing weapons


interface Props {
  weapon?: Weapon
}
    

const WeaponForm = ({weapon}:Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [iserror, setError] = useState("")
  const form = useForm<WeaponFormData>({
    resolver: zodResolver(weaponScehma),
  })
  async function onSubmit(data: WeaponFormData) {
    console.log(data)

    try {
      setIsSubmitting(true)
      setError("")
      if (weapon) {
        await axios.patch(`/api/weapons/`+weapon.id, data)
      } else {
        await axios.post('/api/weapons', data)
      }
    } catch (error) {
      console.log(iserror, error)
      setError("Something went wrong")
    } 
}
  return (
    <div className='w-full rounded-md border p-4'>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-full'>
          <FormField
            control={form.control}
          
            name="title"
            defaultValue={weapon?.title}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weapon Title</FormLabel>
                <FormControl>
                  <Input placeholder="Weapon Title..." {...field} />
                </FormControl>
                
              </FormItem>
              
            )}
          />
          <Controller
            name="description"
            control={form.control}
            defaultValue={weapon?.description}
            render={({ field }) => (
             <SimpleMDE placeholder="Weapon Description..." {...field} />
            )}
          />
        <div className='flex w-full space-x-4'>
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" defaultValue={weapon?.status}/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Open">Open</SelectItem>
                    <SelectItem value="Started">Started</SelectItem>
                    <SelectItem value="Closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        
          
           
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Priority" defaultValue={weapon?.priority}/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="HIGH">High</SelectItem>
                    <SelectItem value="MEDIUM">Medium</SelectItem>               
                    <SelectItem value="LOW">Low</SelectItem>               
                     </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>
          <Button type="submit" disabled={isSubmitting}>{weapon ? "Update weapon" : "Create weapon"}</Button>

        </form>
      </Form>
    </div>
  )
}

export default WeaponForm