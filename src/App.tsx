import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <div className="bg-zinc-950">
      <div className=" flex items-center w-full justify-center">
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App