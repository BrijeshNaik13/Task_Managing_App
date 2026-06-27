// import React from 'react'

// export default function ProgressTracker(tasks) {
//   const totalTasks = tasks.length;
//   const completedTasks = task.filter((task) => task.completed).length;
//   const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
//   return (
//     <div className="progress-tracker">
//       <p>
//         {completedTasks} of {totalTasks} task completed
//       </p>
//       <div className="progress-bar">
//         <div className="progress"
//           style={{ width: `${progress}%` }}
//         >

//         </div>
//       </div>


//     </div>
//   )
// }






import React from 'react'

export default function ProgressTracker({ tasks = [] }) {
  // FIX 1: was ProgressTracker(tasks) — missing { } so tasks was an object not an array
  // FIX 2: was task.filter — wrong name, should be tasks.filter

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="progress-card">
      <div className="progress-stats">
        <div className="stat">
          <span className="stat-number">{totalTasks}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat">
          <span className="stat-number" style={{ color: 'var(--green)' }}>{completedTasks}</span>
          <span className="stat-label">Done</span>
        </div>
        <div className="stat">
          <span className="stat-number" style={{ color: 'var(--amber)' }}>{totalTasks - completedTasks}</span>
          <span className="stat-label">Pending</span>
        </div>
        <div className="stat">
          <span className="stat-number">{Math.round(progress)}%</span>
          <span className="stat-label">Complete</span>
        </div>
      </div>
      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}