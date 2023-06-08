import Moment from "react-moment";
import { ItemTask } from "./ItemTask/ItemTask";
import { CreatTask } from "./ItemTask/CreatTask";
import "../App.css";
import { useState } from "react";
const data = [
  {
    _id: "123wdsf",
    title: "Delet errors TodoList",
    isComplited: false,
  },

];
console.log(data)
export const PageTodo = ({ ruDate }) => {
  const [todos, setTodos] = useState(data);
  console.log(todos)

  const defTask = (id) => {
    setTodos([...todos].filter((t) => t._id != id));

  };
  const compliteTask = (id)=>{
    console.log('fgfg')
    const copy = [...todos]
    const current = copy.find(t => t._id === id)
    current.isComplited = !current.isComplited
    setTodos(copy)
  }
  const clearlist = ()=>{
    setTodos([])
  }

  return (
    <div className="task_border">
        <CreatTask setTodos={setTodos} />
      <div>
        {todos.map((todo) => (
          <ItemTask key={todo._id} todo={todo} defTask={defTask} clearlist={clearlist} compliteTask={compliteTask}/>
        ))}
      </div>

    </div>
  );
};
