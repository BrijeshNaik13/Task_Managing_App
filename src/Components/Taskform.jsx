// import { useState } from "react";

// export default function Taskform({addTask}) {

//   const [task, setTask] = useState('');
//   const [priority, setPriority] = useState("Medium");
//   const [category, setCategory] = useState("General");
  
//   const handlesubmit = (e) => {
//        e.preventDefault(); 
//        addTask({text: task, priority, category, completed: false})

//        //resset
//        setTask("");
//        setPriority('Medium');
//        setCategory('Genearal')
//   }

//   return ( 
//     <form className="task-form" onSubmit={handlesubmit}>
//     <div>
//       <div id="inp">
//         <input
//           type="text"
//           placeholder="Enter your task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)} value ={task}
//         />

//         <span>
//           <button type="submit">Add Task</button>
//         </span>
//         <h1>{task} {priority} {category}</h1>
//       </div>

//       <div>
//         <select
//           value={priority}
//           onChange={(e) => setPriority(e.target.value)} value ={priority}
//         >
//           <option value="High">High</option>
//           <option value="Medium">Medium</option>
//           <option value="Low">Low</option>
//         </select>

//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="General">General</option>
//           <option value="Work">Work</option>
//           <option value="Personal">Personal</option>
//         </select>
//       </div>
//     </div>
//     </form> 
//   );
// }


import { useState } from "react";

export default function Taskform({ addTask }) {

  const [task, setTask] = useState('');
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return; // FIX 1: prevent adding empty tasks
    addTask({ text: task, priority, category, completed: false });

    setTask("");
    setPriority('Medium');
    setCategory('General'); // FIX 2: was "Genearal" — typo
  }

  return (
    <form className="task-form" onSubmit={handlesubmit}>
      <div>
        <div id="inp">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            // FIX 3: removed duplicate value={task} attribute
          />
          <span>
            <button type="submit">+ Add Task</button>
          </span>
          {/* FIX 4: removed <h1>{task} {priority} {category}</h1> debug line showing on screen */}
        </div>

        <div>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            // FIX 5: removed duplicate value={priority} attribute
          >
            <option value="High">🔴 High</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Low">🟢 Low</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="General">📌 General</option>
            <option value="Work">💼 Work</option>
            <option value="Personal">🏠 Personal</option>
          </select>
        </div>
      </div>
    </form>
  );
}