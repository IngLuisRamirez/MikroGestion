import { BrowserRouter } from 'react-router-dom'
import AppRouter from '../../Routes'
import './App.css'
import NavBar from '../../Components/NavBar'
import { MikrotikProvider } from '../../Context'

function App() {
  
  return (
    <>
      <MikrotikProvider>
        <BrowserRouter>
          <NavBar/>
          <AppRouter/>
        </BrowserRouter>
      </MikrotikProvider>
    </>
  )
}

export default App
