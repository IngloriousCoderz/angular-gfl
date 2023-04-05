import classes from "./list.module.css";

export default function List({ tasks, onSpanClick, onButtonClick }) {
  return (
    <ul>
      {tasks.map(({ id, text, completed }, index) => (
        <li key={id}>
          <span
            className={completed ? classes.completed : null}
            onClick={() => onSpanClick(id)}
          >
            {text}
          </span>
          &nbsp;
          <button onClick={() => onButtonClick(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}
