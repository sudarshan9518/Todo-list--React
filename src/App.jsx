import React, { useState } from "react";
import Create from "./Component/Create";
import Read from "./component/read";
import { Fragment } from "react";

const App = () => {
  const [todos, settodos] = useState([]);
  
   const[check , setcheck]= useState();
  return (
    <div className=" flex p-10 text-white w-screen  h-screen bg-gray-800 " >
      <Create todos={todos} settodos={settodos} check ={check} setcheck={setcheck}/>

      <br />
      <hr />

      <Read todos={todos} settodos={settodos}check ={check} setcheck={setcheck}/>
    </div >
  );
};

export default App;
