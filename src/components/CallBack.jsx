import React, { useCallback } from 'react'
import { useState,useMemo } from 'react';
import List from './List';
const Memo = () => {
    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false)
    const getItems=useCallback(()=>{
      return [number,number+1,number+2]
    },[number])
    const themeStyles={
        backgroundColor:dark ? 'black':'white',
        color:dark ? 'white' :'black'
    }
  return (
   <>
   <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
   <button onClick={()=>setDark(prevDark=>!prevDark)}>change theme</button>
   <List getItems={getItems}/>
   </>
  )
}



export default Memo