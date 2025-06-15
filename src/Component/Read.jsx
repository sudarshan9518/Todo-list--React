import React from "react";
import "./Read.css"
import { toast } from "react-toastify";

const read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const check = props.check;
  const setcheck = props.setcheck;

  const licss = {
    textTransform: "capitalize",
  };

    const deletehandler=(id)=>{
   

  const filtertodos =   todos.filter((todo)=> todo.id !==id);
    settodos(filtertodos)

    toast.error("todo deleted")
    
    
  }
   

  const renderelement = todos.map((todo) => {
    return (
      <li style={licss} key={todo.id}
      className="p-4  mb-2 flex justify-between items-center rounded  bg-gray-900 ">
        
       <span className="text-xl font-thin "> {todo.title}</span> | <button className=" text-sm  font-thin text-red-400" style={{cursor:"pointer"}} onClick={()=>deletehandler(todo.id)}>Delete</button>
      </li>
    );
  });





  return (
    <div className="w-[40%] p-10 ">
      <h1 className=" mb-10 text-5xl font-thin" ><span className="text-purple-300">Pending</span> Todos</h1>
      
      <ol>
        {renderelement}</ol>
    </div>
  );div
};

export default read;
