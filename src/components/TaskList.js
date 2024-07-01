import React from 'react';
import { IoCloseCircle } from "react-icons/io5"; // Importing the Close Circle icon from react-icons
import { FaEdit } from "react-icons/fa"; // Importing the Edit icon from react-icons
import { deletetodo } from "../actions/index"; // Importing the delete action from actions
import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux

// Define the TaskList functional component
// Props: list (array of tasks), handleEditTodo (function to handle editing a task)
export default function TaskList({ list, handleEditTodo }) {

  const dispatch = useDispatch(); // Initialize dispatch to use later

  return (
    <div>
      {/* Map through the list of tasks and display each one */}
      {list.map((elem) => (
        <div key={elem.id} className="tasks">
          <p className="data">{elem.data}</p> {/* Display the task data */}
          <FaEdit
            className="icone" // CSS class for styling the edit icon
            onClick={() => handleEditTodo(elem.id, elem.data)} // Handle the click event to edit the task
          />
          <IoCloseCircle
            className="icond" // CSS class for styling the close icon
            onClick={() => dispatch(deletetodo(elem.id))} // Dispatch the delete action to remove the task
          />
        </div>
      ))}
    </div>
  );
}
