import React, { useState } from 'react'

function useToggle() {

    const [open,setOpen]= useState<boolean>(true)
    const chnage =()=>{
        setOpen(!open)
    }
  return {
chnage, open
  }
}

export default useToggle
