import { useState } from "react";
import List from "./list/list";
import Form from "./form/form";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function App({ name }) {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  // return React.createElement("form", {
  //   children: [
  //     React.createElement("input", {
  //       placeholder: "What next?",
  //       autoFocus: true,
  //     }),
  //     React.createElement("button", { children: "Add" }),
  //   ],
  // });

  const handleSubmit = (text) => {
    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      return [...tasks, { id: maxId + 1, text }];
    });
  };

  const handleSpanClick = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleButtonClick = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>{name}'s Todo List</h1>
      <Form onSubmit={handleSubmit} />
      <List
        tasks={tasks}
        onSpanClick={handleSpanClick}
        onButtonClick={handleButtonClick}
      />
    </>
  );
}

export default App;
