import { MdHome } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

import { CiCircleList } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MikrotikContext } from "../../Context";


const Menu = () =>{
    const context = useContext(MikrotikContext)
    return (
      <div>
        <nav className="flex justify-between w-full bg-white">
          <figure className="flex space-x-3">
            <img src="" alt="logo"/>
            <span className="hidden md:inline-block">MikroGestión</span>
          </figure>
          <button  className="min-md:hidden">
            <CiMenuBurger className="w-7 h-7"/>
          </button>
        </nav>
      </div>
    );
}

export default Menu