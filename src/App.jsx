import React, { useState } from "react";
import Create from "./Component/Create";
import Read from "./component/read";
import { Fragment } from "react";

const App = () => {

  return (
    <div className=" flex p-10 text-white w-screen  h-screen bg-gray-800 " >
      <Create/>

      <br />
      <hr />

      <Read />
    </div >
  );
};

export default App;
