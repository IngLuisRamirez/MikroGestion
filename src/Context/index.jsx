import { createContext, useEffect, useState } from "react"

export const MikrotikContext = createContext()
export const MikrotikProvider = ({children}) => {

    const [isNavBarVisible, setIsNavBarVisible] = useState(true)
    // Función para actualizar el estado de visibilidad
    const toggleNavBar = (visible) => {
        setIsNavBarVisible(visible);
    }

    // Definimos un estado `selected` que almacenará el nombre del item seleccionado.
  // Inicialmente, la opción seleccionada será "dashboard".
    
    const [selected, setSelected] = useState('dashboard');

    const [progress, setProgress] = useState(50);
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 100) + 1;
      };

    useEffect(() => {
    const interval = setInterval(() => {
        setProgress(getRandomNumber());
    }, 1000);

  return () => clearInterval(interval);
}, []);

    
    return(
        <MikrotikContext.Provider
            value={{
                isNavBarVisible,
                toggleNavBar,
                selected,
                setSelected,
                progress
            }}
        >
            {children}
        </MikrotikContext.Provider>
    )
}