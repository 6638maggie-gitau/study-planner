import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
const App = () => {
  return (
   <>
   <BrowserRouter>
   <div className="min-h-screen bg-gray-100">
    <Nav />

    <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    
   </div>
   </BrowserRouter>
   </>
  )
}

export default App