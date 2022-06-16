function Task({ task, onDelete }) {
  return (
    <div className="task">
      <div>{task.text}</div>
      <p>{task.day}</p>
      <button onClick={() => onDelete(task.id)} className="del">del</button>
    </div>
  )
}

export default Task