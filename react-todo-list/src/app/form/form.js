import { useState } from "react";

export default function Form({ onSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="What next?"
        autoFocus
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
