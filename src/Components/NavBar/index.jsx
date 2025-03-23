import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { MikrotikContext } from "../../Context"

const NavBar = () =>{
    const context = useContext(MikrotikContext)
    // No mostrar el NavBar si está oculto
    if(!context.isNavBarVisible) return null
    return(
        <nav className=" flex w-full h-10 items-center">
            <ul className="flex gap-2">
                <li>
                    <NavLink to={'/'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/dashboard'}>
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar