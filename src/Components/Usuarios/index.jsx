import { useContext } from "react"
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MdOutlineAdd } from "react-icons/md";
import { MikrotikContext } from "../../Context"


const Usuario = () =>{
    const context = useContext(MikrotikContext)    
    const state = (state) =>{
      return state ? "Activo" : "Inactivo"
    }
    return(
      <div>
      <h1>Usuarios</h1>

      <button className=" flex justify-center items-center bg-blue-500 rounded-full w-30 h-10 " onClick={() => context.setSelected("addusuario")}><MdOutlineAdd className="w-8 h-8 text-white"/><span>add User</span></button>
      <table className="min-md:w-full top-10 text-left ">
        <thead className="h-5">
          <tr className="bg-gray-100 h-10 ">
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Cedula</th>
            <th>IP</th>
            <th>Telefono</th>
            <th>Activo/Inactivo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {context.users.map(user => (
            <tr key={user.cedula}>
              <td>{user.cedula}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.cedula}</td>
              <td>{user.ip}</td>
              <td>{user.tel}</td>
              <td>{state(user.state)}</td>
              <td className="flex gap-3">
                <FiEdit className="w-7 h-7 text-green-500" />
                <MdDelete 
                  onClick={() => context.deleteUser(user.id )}            
                  className="w-7 h-7 text-red-600"
                />
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}
export default Usuario