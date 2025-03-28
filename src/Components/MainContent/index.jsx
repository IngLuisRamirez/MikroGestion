import { useContext } from "react"
import { MikrotikContext } from "../../Context"
import Usuario from "../Usuarios"
import MainDashboard from "../MainDashboard"
import Formulario from "../AddUser"
import Invoice from "../Facture"

const MainContent = () => {
    const context = useContext(MikrotikContext)

    const renderView = () =>{

        if(context.selected === "dashboard") return <MainDashboard/>
        if(context.selected === "factura") return <Invoice/>
        if(context.selected === "usuario") return <Usuario/>
        if(context.selected === "addusuario") return <Formulario/>
    }
    return (
        <div className="relative w-full h-full  p-4 border border-black">
            {renderView()}
        </div>
    )
}

export default MainContent