// import React, { useEffect, useState } from 'react'
// import ProgressTracker from './Components/ProgressTracker'
// import Taskform from './Components/Taskform'
// import Tasklist from './Components/Tasklist'

// export default function App() {
//   const[tasks, setTasks] = useState([]);

//   useEffect(()=>{
//     localStorage.setItem("tasks",JSON.stringify(tasks));
//   })

//   const addTask = (task) => {
//       setTasks([...tasks,task]);
//   }

//   const updateTask = (updatedTask, index)=> {
//     const newtask = [...tasks];
//     newtask[index] = updatedTask; 
//     setTasks(newTasks);

//   }

//   const deleteTask  = (index) => {
//      setTasks(tasks.filter((_ , i)=> i!=index))
//   }

//   return (
//     <div>
//       <h1>Task Budyy</h1>
//       <h4>the friendly task manager
//         <ProgressTracker/>
//         <Taskform addTask={addTask}/>
        
//         <Tasklist tasks ={tasks}
//         updateTask ={updateTask}
//         deleteTask={deleteTask}
//          />
//          <ProgressTracker tasks ={tasks}/>
//          {tasks.length>0 &&
//           (<button onClick={clearTasks}
//           className='clear-btn'>
//             clear All Tasks</button>)
//          }
         
      
//       </h4>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react'
import ProgressTracker from './Components/ProgressTracker'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // FIX 1: added [tasks] so it doesn't run on every render

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks]; // FIX 2: was "newtask" but setTasks used "newTasks" — name mismatch caused crash
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  const clearTasks = () => { // FIX 3: this function was missing but used in JSX — caused crash
    setTasks([]);
  }

  return (
    <div className="app-wrapper"> {/* FIX 4: removed <h4> wrapper — block elements can't go inside h4 */}
      <header className="app-header">
        <div className="header-badge">✦ Task Manager</div>
        <h1 className="app-title">TaskBuddy</h1> {/* FIX 5: typo "Task Budyy" fixed */}
        <p className="app-subtitle">the friendly task manager</p>
      </header>

      <ProgressTracker tasks={tasks} /> {/* FIX 6: was <ProgressTracker/> with no props — needs tasks */}

      <Taskform addTask={addTask} />

      <Tasklist
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />

      {tasks.length > 0 && (
        <button onClick={clearTasks} className="clear-btn">
          Clear All Tasks
        </button>
      )}
    </div>
  )
}