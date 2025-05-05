import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="mt-12">
        <Outlet />
      </div>
    </div>
  )
}

export default App