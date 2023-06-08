import Moment from "react-moment";
import "./App.css";

import { PageTodo } from "./components/PageTodo";

export const App = () => {
  const ruDate = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
    .format(new Date())
    .replace(/(\s?\г\.?)/, "");

  return (
    <div className="App ">
      <div className="glass">
        <h1 className="text-3xl pb-10 pt-10 text-white">Todo List</h1>
        <div className="tasklist">
          {/* часы и дата */}
          <div className="text-5xl text-white pb-2">
            {" "}
            <Moment format="HH:mm:ss" interval={1000} />{" "}
          </div>
          <div className="text-white pb-4">{ruDate}</div>
          <PageTodo className='glass_item' ruDate={ruDate} />
        </div>
        
      </div>
    </div>
  );
};
