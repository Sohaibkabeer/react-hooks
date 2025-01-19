import { useEffect } from "react"
import React from 'react'

const Navbar = ({color}) => {

    // useEffect example
    useEffect(() => {
        alert("Color was changed") // every time color is changed this will run
    }, [color])
    
  return (
    <div>The color of the navbar is {color}</div>
  )
}

export default Navbar