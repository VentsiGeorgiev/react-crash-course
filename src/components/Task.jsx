function Task({ task }) {
  return (
    <>
      <div>{task.text}</div>
      <p>{task.day}</p>
    </>
  )
}

export default Task