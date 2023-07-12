
"use client"
import React from 'react'

import {useRouter} from "next/navigation"
const Button = ({path, name}) => {

    const router  = useRouter();

const navigation  = ()=>{
router.push(path)
}
    return (
    <button onClick={navigation}>{name}</button>
  )
}

export default Button