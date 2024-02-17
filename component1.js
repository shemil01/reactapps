
import React, { useEffect, useState } from 'react'
import useCustum from './custum'

const Component1 = () => {
    const [name,setName] = useState(0)
   
  useCustum(name)
  return (
    <div>
        <button onClick={()=>setName(name + 1)}>Count:{name}</button>
    </div>
  )
}

export default Component1