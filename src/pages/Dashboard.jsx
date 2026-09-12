import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const Dashboard = () => {
  const {tasks} =useContext(TaskContext)
  const total =tasks.length
  const completed=tasks.filter((task)=> task.completed).length
  const pending =total-completed
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold">Total Tasks</h2>
          <p className="text-2xl mt-2">{total}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold">Completed</h2>
          <p className="text-2xl mt-2 text-green-600">{completed}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold">Pending</h2>
          <p className="text-2xl mt-2 text-red-600">{pending}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;