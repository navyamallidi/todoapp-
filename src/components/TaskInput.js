import React from 'react';
import { IoAddCircle } from "react-icons/io5"; // Importing the Add Circle icon from react-icons

// Define the TaskInput functional component
// Props: input (current input value), setInput (function to update the input value), handleAddTodo (function to handle adding a new todo)
export default function TaskInput({ input, setInput, handleAddTodo }) {
  return (
    <div>
      {/* Input field for entering a task */}
      <input
        placeholder="Enter your task" // Placeholder text for the input field
        type="text" // Input field type
        className="inpt" // CSS class for styling the input field
        value={input} // Bind the input value to the state
        onChange={(event) => setInput(event.target.value)} // Update the input state on every change
      />
      {/* Add Circle icon to trigger adding a new task */}
      <IoAddCircle
        className="icon" // CSS class for styling the icon
        onClick={handleAddTodo} // Handle the click event to add a new task
      />
    </div>
  );
}
