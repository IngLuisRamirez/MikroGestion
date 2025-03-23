import { useRoutes } from "react-router-dom"
import Home from "../Pages/Home"
import Dashboard from "../Pages/Dashboard"
const AppRouter = () => {
    const routes = useRoutes([
        {path: '/', element:<Home/>},
        {path: '/dashboard', element:<Dashboard/>},
    ])

    return routes
}

export default AppRouter