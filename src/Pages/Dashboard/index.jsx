import { useContext, useEffect } from 'react';
import { MikrotikContext } from '../../Context';
import Layout from '../../Layout';
import Menu from '../../Components/NavBarDashboard';
import AsideMenu from '../../Components/AsideMenu';
import MainContent from '../../Components/MainContent';

const Dashboard = () => {
    const context = useContext(MikrotikContext)
    useEffect(() => {
        context.toggleNavBar(false); // Ocultar el NavBar cuando se esté en el Dashboard
    
        return () => {
          context.toggleNavBar(true); // Mostrar el NavBar cuando se salga del Dashboard
        };
      }, [context.toggleNavBar]);
    
    return(
      <Layout>
        <div className="bg-white w-full h-full flex flex-col">          
          <Menu/>
          <div className="flex h-full">
            <AsideMenu/>
            <MainContent/>
          </div>
        </div>
      </Layout>
    )
}

export default Dashboard