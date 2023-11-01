import React from 'react'
import { createContext,useState } from 'react'
import ContextTutorial from './ContextTutorial'

 export const DataContext=createContext()
const ContextApi = () => {
    const [theme, setTheme] = useState({
        hi:1,
        hello:"hi vinay its ok"
    });
    const [theme1, setTheme1] = useState({
        hi:2,
        hello:"hi vinay its ok"
    });
    const [theme2, setTheme2] = useState({
        hi:3,
        hello:"hi vinay its ok"
    });
   
    
  return (
<DataContext.Provider value={{theme ,theme1 ,theme2}}>
       <ContextTutorial/>

    </DataContext.Provider>
  )
}

export default ContextApi