import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const Taskcard = ({ task }) => {
  const { deleteTask, toggleComplete } = useContext(TaskContext)

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition p-5">
      
      <div className="flex items-start justify-between gap-4">

        {/* Task information */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2
              className={`text-lg font-semibold ${
                task.completed
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              }`}
            >
              {task.title}
            </h2>

            {task.completed && (
              <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Completed
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
              📚 {task.subject}
            </span>

            <span className="text-gray-500">
              📅 Due: {task.date}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => toggleComplete(task.id)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
              task.completed
                ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="px-3 py-2 rounded-lg text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100 transition"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  )
}

export default Taskcard