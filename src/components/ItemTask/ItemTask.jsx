import "../../App.css";
import { VscTrash } from "react-icons/vsc";
import { Check } from "./Check";

export const ItemTask = ({ todo, defTask, compliteTask }) => {
  return (
    <div className="glass_item">
      <div onClick={() => {compliteTask(todo._id);}}className="dfaic">
        <Check isComplited={todo.isComplited} />
      </div>

      <div>{todo.title}</div>
      
      <button onClick={() => {defTask(todo._id);}}>
        <VscTrash />
      </button>
    </div>
  );
};
