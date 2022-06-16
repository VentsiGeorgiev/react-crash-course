import Header from "./components/Header";
import Tasks from "./components/Tasks";

import { useState } from "react"

function App() {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      text: 'Go to the Gym',
      day: 'Feb 5th at 9:00am',
      reminder: true
    },
    {
      id: '2',
      text: 'Go Shopping',
      day: 'Feb 5th at 10:00am',
      reminder: true
    },
    {
      id: '3',
      text: 'Cooking',
      day: 'Feb 5th at 11:00am',
      reminder: true
    },
  ])

  // delete task
  const deleteTask = (id) => {

    setTasks(tasks.filter((task) => task.id !== id))
  }


  return (
    <div className="container">
      <Header />
      {tasks.length > 0
        ? <Tasks tasks={tasks} onDelete={deleteTask} />
        : 'Please add task'
      }
    </div>
  );
}

export default App;
