import React, { createContext } from 'react' 
import App from './App'

import { useState } from 'react';

export const todoContext = createContext(null)


function Wrapper(props) {

   const [todos, settodos] = useState([]);
    
  return (

   < todoContext.Provider value={[todos , settodos]}>

   { props.children}

   </ todoContext.Provider>
      
  )
  
}

export default Wrapper
