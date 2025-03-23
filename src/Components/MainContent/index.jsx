import { useContext } from "react"
import { MikrotikContext } from "../../Context"
import Facture from "../Facture"
import Usuario from "../Usuarios"
import MainDashboard from "../MainDashboard"

const MainContent = () => {
    const context = useContext(MikrotikContext)

    const renderView = () =>{

        if(context.selected === "dashboard") return <MainDashboard/>
        if(context.selected === "factura") return <Facture/>
        if(context.selected === "usuario") return <Usuario/>
    }
    return (
        <div className="w-full h-full  p-4 border border-black">
            {renderView()}
        </div>
    )
}

export default MainContent