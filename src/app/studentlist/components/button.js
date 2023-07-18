"use client"
import React from 'react'


import {useRouter} from "next/navigation"

const Button = ({id}) => {
const router  = useRouter();



  return (
<button onClick={()=>{ router.push(`/studentlist/${id}`)}} className="bg-black text-white p-2 rounded-md">Here</button>
  )
}

export default Button