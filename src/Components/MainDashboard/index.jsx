import { useContext } from "react"
import CircleProgress from "../CircleProgress"
import { MikrotikContext } from "../../Context"

const MainDashboard = () =>{
    const context = useContext(MikrotikContext)
    return (
        <div className="flex pl-30 space-x-10 w-full h-full">
            <div className="flex flex-col items-center bg-gray-50 w-80 h-80  shadow rounded-lg">
                <h3 className="text-3xl mb-10">CPU Usage</h3>
                <CircleProgress progress={context.progress}/>
            </div>
            <div className="flex flex-col items-center bg-gray-50 w-80 h-80  shadow rounded-lg">
                <h3 className="text-3xl mb-10">Memory</h3>
                <CircleProgress progress={context.progress}/>
            </div>
            <div className="flex flex-col items-center bg-gray-50 w-80 h-80  shadow rounded-lg">
                <h3 className="text-3xl mb-10">User Active</h3>
                <span className="text-9xl">{context.users.length}</span>
            </div>
        </div>
    )
}
export default MainDashboard