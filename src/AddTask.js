import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddTask = (props) => {
  const [value, updateValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      props.addTask(value);
      updateValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Type Your Routine..."
        onChange={(e) => updateValue(e.target.value)}
      ></input>
      <button type="submit">
        <i>
          <AiOutlinePlus />
        </i>
      </button>
    </form>
  );
};
export default AddTask;
