import { useContext, useEffect, useState } from "react";
import { MikrotikContext } from "../../Context";

export default function Formulario() {
  const context = useContext(MikrotikContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cedula: 0,
    ip: "",
    tel: "",
    estado: true,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    context.addUser(formData)
    alert(formData);
    context.setSelected("usuario")
  }

  useEffect(() => {
    console.log(formData);
  },[formData] )
  return (
    <div className="flex items-center justify-center h-full bg-white">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">Formulario</h2>
        
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name} 
              onChange={handleChange}             
              placeholder="Juan"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email} 
              onChange={handleChange}             
              placeholder="example@example.com"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            />
          </div>
          
          <div>
            <label className="block font-medium">Cedula</label>
            <input
              type="number"
              name="cedula"
              value={formData.cedula} 
              onChange={handleChange}             
              placeholder="985135436"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block font-medium">Dirección IP</label>
            <input
              type="text"
              name="ip"
              value={formData.ip}  
              onChange={handleChange}           
              placeholder="192.168.185.1"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block font-medium">Teléfono</label>
            <input
              type="text"
              name="tel"
              value={formData.tel}   
              onChange={handleChange}           
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block font-medium">Estado</label>
            <select
              name="estado"
              value={formData.estado ? true : false}   
              onChange={handleChange}           
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            >
              <option value="true">Activo</option>
              <option value="false">Inactivo</option>
            </select>
          </div>

          <button
            
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            
            
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
