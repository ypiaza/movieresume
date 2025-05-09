import { Link } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

const NavBar = () => {
    return (
        <nav id="navbar" className="flex items-center justify-between px-8 py-2 fixed w-[50%] top-2 border border-white/10 bg-white/10 backdrop-blur-md text-white z-50 rounded-2xl">
            <h2>
                <Link to={'/'} className="flex items-center gap-2 text-md font-bold "><BiCameraMovie /> MovieResume</Link>
            </h2>
            <form className="flex items-center justify-between gap-2 relative">
                <input className="border border-white px-2 rounded" type="text" placeholder="Busque um filme" />
                <button className="absolute right-2 " type="submit"><BiSearchAlt2 /></button>
            </form>
        </nav>
    )
}

export default NavBar