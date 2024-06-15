import React, { useState } from "react";
import "./todo.css";
import { IoAddCircle } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { addtodo, deletetodo, removetodo } from "../actions/index";
import { IoCloseCircle } from "react-icons/io5";
function Todo() {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);
  return (
    <div className="main">
      <div className="sub">
        <h3>Plan Your Day</h3>
        <p>enjoy your work by ticking of the tasks</p>
        <div>
          <input
            placeholder="enter your task"
            type="text"
            className="inpt"
            value={input}
            onChange={(event) => setinput(event.target.value)}
          />
          <IoAddCircle
            className="icon"
            onClick={() => dispatch(addtodo(input), setinput(""))}
          />
        </div>

        <div> 
          {list.map((elem) => {
            return (
              <div key={elem.id} className="tasks">
                <p className="data">{elem.data}</p>
                <IoCloseCircle
                className="icond"
                  onClick={() => dispatch(deletetodo(elem.id))}
                />
              </div>
            );
          })}
        </div>

        <div>
          <button 
          className="button"
          onClick={() => dispatch(removetodo())}>Remove all</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
