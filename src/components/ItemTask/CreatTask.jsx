import { useState } from "react";
import "../../App.css";

export const CreatTask = ({ setTodos, clearlist }) => {
  const [title, setTitle] = useState("");

  const newTask = (title) => {
    setTodos((prev) => [
      {
        _id: new Date(),
        title,
        isComplited: false,
      },
      ...prev,
    ]);
    if (title == "clear") {
      setTodos((prev) => [
          {title:''}
      ]);
    }

    setTitle("");
  };

  return (
    <div className="glass_item">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) => e.key === "Enter" && newTask(title)}
        placeholder="Введите задачу"
      />
    </div>
  );
};
