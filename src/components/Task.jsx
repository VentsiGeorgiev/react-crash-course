function Task({ task, onDelete, onToggle }) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}>
      <div>{task.text}</div>
      <p>{task.day}</p>
      <button onClick={() => onDelete(task.id)} className="del">del</button>
    </div>
  )
}

export default Task