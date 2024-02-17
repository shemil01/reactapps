import React, { useEffect } from 'react'

const useCustum = (count) => {
  useEffect(()=>{
    document.title=`Count${count}`
  })
}

export default useCustum
