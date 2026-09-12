import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const Taskform = () => {
  const { addTask } = useContext(TaskContext)

  const [title, setTitle] = useState("")
  const [subject, setSubject] = useState("")
  const [date, setDate] = useState("")

  const submit = (e) => {
    e.preventDefault()

    if (!title || !subject || !date) {
      return
    }

    addTask({
      title,
      subject,
      date
    })

    setTitle("")
    setSubject("")
    setDate("")
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8"
    >
      {/* Heading */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-800">
          Add a new task
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Keep track of your study goals and upcoming work.
        </p>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Task name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Task name
          </label>

          <input
            type="text"
            placeholder="e.g. Study Python"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="">Choose a subject</option>
            <option value="Programming">Programming</option>
            <option value="Data Communication">
              Data Communication
            </option>
            <option value="Computer Engineering">
              Computer Engineering
            </option>
            <option value="System Analysis">
              System Analysis
            </option>
            <option value="Linear Algebra">
              Linear Algebra
            </option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Due date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

      </div>

      {/* Button */}
      <button
        type="submit"
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-lg transition shadow-sm"
      >
        + Add Task
      </button>
    </form>
  )
}

export default Taskform