import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromDb = await fetchTasks();

      setTasks(tasksFromDb);
    };

    getTasks();
  }, []);

  // Fetch data
  const fetchTasks = async () => {
    const resp = await fetch("http://localhost:5001/tasks");
    const data = await resp.json();

    return data;
  };

  // Update the task status
  const fetchTask = async id => {
    const resp = await fetch(`http://localhost:5001/tasks/${id}`);
    const data = await resp.json();

    return data;
  };

  // addTask
  const addTask = async task => {
    const resp = await fetch("http://localhost:5001/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    });

    const data = await resp.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 1000) + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  };

  // Delete task
  const deleteTask = async id => {
    await fetch(`http://localhost:5001/tasks/${id}`, {
      method: "DELETE"
    });
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle Task Reminder
  const toggleReminder = async id => {
    const taskToToggle = await fetchTask(id);
    const updateTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    };

    const resp = await fetch(`http://localhost:5001/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updateTask)
    });

    const data = await resp.json();

    setTasks(
      tasks.map(
        task => (task.id === id ? { ...task, reminder: data.reminder } : task)
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0
          ? <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          : "No Day Task to Show"}
        <Routes path="/" exact render ={(props) => (
          <>
            
          </>
        )} />
        <Routes>

          <Route path="/about" component={About}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
