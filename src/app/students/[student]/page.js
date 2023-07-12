
"use client"
import React from 'react'
import { students } from '../layout'



const Student = ({params}) => {
    console.log(students)

    const data = students.filter((item, index)=>{
        console.log(item)
        return item.id  == params.student;
    })
    console.log(data)
  return (
    <div>

        {data.length > 0 && <p>{data[0].name}</p> }
    </div>
  )
}

export default Student