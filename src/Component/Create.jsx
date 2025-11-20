import React, { useContext } from "react";
import { nanoid } from "nanoid"; 
import { useState } from "react";
import { toast } from "react-toastify";
import { todoContext } from "../Wrapper";
const Create = () => {
  
  const[todos, settodos] = useContext(todoContext)

  const [title, settitle] = useState("");

  const submithandler = (e) => {
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      title: title,
      iscompleted: false,
    };

    let copytodos = [...todos];
    copytodos.push(newtodo);
    settodos(copytodos);

    toast.success("todo created")

    settitle("");
  };

 

  return (
    <div className=" w-[60%] p-10 " >
      {" "}
      <h1 className="mb-10 text-5xl font-thin ">Set <span className="text-red-400 ">Reminder</span>  For <br />Tasks </h1>
      <form onSubmit={submithandler}>
        <input
        className="border-b w-full text-2xl font-thin p-2 outline-0 "
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Title"
          
        />
        <br />
        <br />
        <button className="mt-5 text-xl px-10 py-2 border rounded">  Create todo</button>
      </form>
    </div>
  );
};

export default Create;
