import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePosition = e => {
      console.log('Mouse EVen');
      setX(e.clientX)
      setY(e.clientY)
      
    }

    useEffect(() =>{
      console.log("UseEffect Called");
      window.addEventListener('mousemove', logMousePosition)
    }, [])

  return (
    <div>
        Hooks Postion  X - {x}  Y - {y}
    </div>
  )
}

export default HookMouse