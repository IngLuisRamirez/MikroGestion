import { MdHome } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

import { CiCircleList } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MikrotikContext } from "../../Context";




const AsideMenu = () =>{
    const context = useContext(MikrotikContext)
       
    return (
      <aside className="bg-white  w-15 transition-all  duration-1000 md:w-50 md:transition-all md:duration-1000 md:ease-in-out h-full ">
        <ul className=" flex flex-col w-full my-5 md:justify-center space-y-4">
          <li>
            <NavLink
              onClick={() => context.setSelected("dashboard")}
              className={`${
                context.selected === "dashboard"
                  ? "bg-blue-600 md:w-40 py-2 text-white"
                  : "text-gray-700"
              } flex md:items-center max-md:rounded-s-lg md:space-x-3  cursor-pointer min-md:rounded-lg`}
            >
              <MdHome className="w-6 h-6 max-md:mx-auto md:ml-4 md:w-6 md:h-6" />
              <span className="hidden md:inline-block">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              
              onClick={() => context.setSelected("factura")}
              className={`${
                context.selected === "factura"
                  ? "bg-blue-600 md:w-40 py-2 text-white"
                  : "text-gray-700"
              } flex items-center  max-md:rounded-s-lg md:space-x-3 cursor-pointer min-md:rounded-lg`}
            >
              <RiBillLine className="w-6 h-6 max-md:mx-auto  md:ml-4 md:w-6 md:h-6" />
              <span className="hidden md:inline-block">Factura</span>
            </NavLink>
          </li>
          <li className=" ">
            <NavLink
              onClick={() => context.setSelected("usuario")}
              className={`${
                context.selected === "usuario"
                  ? "bg-blue-600  md:w-40 py-2 text-white"
                  : "text-gray-700"
              } flex items-center  max-md:rounded-s-lg md:space-x-3 cursor-pointer min-md:rounded-lg`}
            >
              <FaRegUser className="w-6 h-6 max-md:mx-auto md:ml-4  md:w-6 md:h-6" />
              <span className="hidden md:inline-block ">Usuario</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    );
}

export default AsideMenu