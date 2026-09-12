import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"
import Taskform from "../Components/Taskform"
import Taskcard from "../Components/Taskcard"
import Filter from "../Components/Filter"

const Home = () => {
  const { tasks } = useContext(TaskContext)

  const [search, setSearch] = useState("")
  const [subject, setSubject] = useState("All")

  const filteredTasks = tasks.filter((task) => {
    const searchMatch = task.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const subjectMatch =
      subject === "All" ? true : task.subject === subject

    return searchMatch && subjectMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

        {/* Page heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to your Study Planner 📚
          </h1>

          <p className="text-gray-500 mt-2">
            Organize your tasks, stay focused, and keep up with your studies.
          </p>
        </div>

        {/* Add task */}
        <Taskform />

        {/* Tasks section */}
        <section className="mt-10">

          {/* Heading + filters */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-6">

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                My Tasks
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {filteredTasks.length} task
                {filteredTasks.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {/* Search + subject */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

              <div className="w-full sm:w-72">
                <Filter
                  search={search}
                  setSearch={setSearch}
                />
              </div>

              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full sm:w-auto border border-gray-200 bg-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-700"
              >
                <option value="All">All subjects</option>
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
          </div>

          {/* Task cards */}
          <div className="space-y-4">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <Taskcard
                  key={task.id}
                  task={task}
                />
              ))
            ) : (
              <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
                <div className="text-4xl mb-3">
                  📚
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                  No tasks found
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Try adding a new task or changing your search.
                </p>
              </div>
            )}
          </div>

        </section>

      </main>
    </div>
  )
}

export default Home