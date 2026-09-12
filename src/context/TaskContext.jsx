import { createContext, useState, useEffect } from "react"
export const TaskContext = createContext();
const TaskContextProvider =({children}) =>{
  const [tasks, setTasks]=useState(()=>{
    const saved =localStorage.getItem("tasks");
    return saved ? JSON.parse(saved):[];
  });

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks]);

  const addTask=(task)=>{
    setTasks([...tasks,{id:Date.now(),...task,completed:false,}])
  }

  const deleteTask=(id)=>{
    setTasks(tasks.filter(task=>task.id!==id))
  }


  const toggleComplete=(id)=>{
    setTasks(tasks.map((task)=>task.id===id? {...task, completed:!task.completed}:task))
  }



  return (
  <>
  <TaskContext.Provider
  value={{tasks,
    addTask,
    deleteTask,
    toggleComplete
  }}>
    {children}
  </TaskContext.Provider>
  </>
  )
}

export default TaskContextProvider;