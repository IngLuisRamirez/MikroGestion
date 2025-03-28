import React, { useContext, useEffect, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { MikrotikContext } from "../../Context";

const LOGO_URL = "https://via.placeholder.com/150"; // Cambia esto por tu logo o base64

const FacturaCliente = () => {
  const context = useContext(MikrotikContext)
  const [clientes, setClientes] = useState(context.users);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(context.users[0]);

  useEffect(() => {
    const today = new Date();
    if (today.getDate() === 27) {
      generarNuevaFactura();
    }
  }, []);

  const generarNuevaFactura = () => {
    setClientes(clientes.map(cliente => {
      if (cliente.estado === "Pendiente") {
        return { ...cliente, deuda: cliente.deuda + 50 };
      }
      return cliente;
    }));
  };

  const factura = {
    id: clienteSeleccionado.id,
    fecha: "2025-03-25",
    cliente: clienteSeleccionado.name,
    email: clienteSeleccionado.email,
    estado: clienteSeleccionado.estado,
    items: [
      { descripcion: "Servicio de Internet", cantidad: 1, precio: 50.00 }
    ],
    total: 50.00 + clienteSeleccionado.deuda
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.addImage(LOGO_URL, "JPEG", 20, 10, 50, 30);
    doc.text(`Factura #${factura.id}`, 20, 50);
    doc.text(`Fecha: ${factura.fecha}`, 20, 60);
    doc.text(`Cliente: ${factura.cliente}`, 20, 70);
    
    autoTable(doc, {
      startY: 80,
      head: [["Descripción", "Cantidad", "Precio"]],
      body: factura.items.map(item => [item.descripcion, item.cantidad, `$${item.precio.toFixed(2)}`])
    });
    
    doc.text(`Total: $${factura.total.toFixed(2)}`, 20, doc.lastAutoTable.finalY + 10);
    
    if (factura.estado === "Pagado") {
      doc.text("ESTADO: PAGADO", 20, doc.lastAutoTable.finalY + 20);
    }
    
    doc.save(`Factura_${factura.id}.pdf`);
  };

  const handlePago = () => {
    setClientes(clientes.map(cliente => 
      cliente.id === clienteSeleccionado.id 
        ? { ...cliente, estado: "Pagado", deuda: 0 } 
        : cliente
    ));
    setClienteSeleccionado(prev => ({ ...prev, estado: "Pagado", deuda: 0 }));
  };

  return (
    <div className="max-w-lg mx-auto shadow-lg rounded-2xl p-4 bg-white">
      <div>
        <select
          onChange={(e) => setClienteSeleccionado(clientes.find(u => u.id === parseInt(e.target.value)))}
          className="mb-4 p-2 border rounded w-full"
        >
          {clientes.map(usuario => (
            <option key={usuario.id} value={usuario.id}>{usuario.name}</option>
          ))}
        </select>

        <span className={`mt-2 inline-block px-3 py-1 rounded-full text-white ${factura.estado === "Pagado" ? "bg-green-500" : "bg-red-500"}`}>
          {factura.estado}
        </span>

        <table className="mt-4 w-full border rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Descripción</th>
              <th className="p-2">Cantidad</th>
              <th className="p-2">Precio</th>
            </tr>
          </thead>
          <tbody>
            {factura.items.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{item.descripcion}</td>
                <td className="p-2 text-center">{item.cantidad}</td>
                <td className="p-2 text-right">${item.precio.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="mt-4 text-right font-semibold text-lg">
          Total: ${factura.total.toFixed(2)}
        </div>
        
        <div className="mt-4 flex justify-end space-x-2">
          {factura.estado === "Pagado" && (
            <button onClick={generatePDF} className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600">
              Descargar PDF Pagado
            </button>
          )}
          {factura.estado === "Pendiente" && (
            <>
              <button onClick={handlePago} className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600">
                Pagar
              </button>
              <button onClick={() => alert("Redirigiendo a Nequi para el pago...")} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
                Pagar con Nequi
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacturaCliente;
