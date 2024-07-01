import React, { useState } from "react";
import "./todo.css";
import TaskList from "./TaskList"; // Import the TaskList component
import TaskInput from "./TaskInput"; // Import the TaskInput component
import { useSelector, useDispatch } from "react-redux";
import { addtodo, removetodo, edittodo } from "../actions/index"; // Import Redux actions

function Todo() {
  // Local state to manage the input field value, editing status, and the id of the task being edited
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  
  // Access Redux dispatch function to send actions
  const dispatch = useDispatch();
  // Access the list of tasks from the Redux state
  const list = useSelector((state) => state.todoReducer.list);

  // Function to handle adding or editing a todo
  const handleAddTodo = () => {
    if (isEditing) {
      // If in editing mode, dispatch the edit action
      dispatch(edittodo(editId, input));
      setIsEditing(false); // Reset editing status
      setEditId(null); // Reset the edit id
    } else {
      // If not in editing mode, dispatch the add action
      dispatch(addtodo(input));
    }
    setInput(""); // Clear the input field
  };

  // Function to handle initiating the editing of a todo
  const handleEditTodo = (id, data) => {
    setInput(data); // Set the input field with the current data of the todo
    setIsEditing(true); // Set editing status to true
    setEditId(id); // Set the edit id to the current todo's id
  };

  return (
    <div className="main">
      <div className="sub">
        <h3>Plan Your Day</h3>
        <p>Enjoy your work by ticking off the tasks</p>
        <div>
          {/* TaskInput component for entering new tasks or editing existing ones */}
          <TaskInput input={input} setInput={setInput} handleAddTodo={handleAddTodo} />
        </div>

        <div>
          {/* TaskList component to display the list of tasks */}
          <TaskList list={list} handleEditTodo={handleEditTodo} />
        </div>

        <div>
          {/* Button to remove all tasks */}
          <button className="button" onClick={() => dispatch(removetodo())}>
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
