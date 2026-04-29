import './App.css'
import { BrowserRouter, Routes } from 'react-router'
import SurgeryInfoPage from './pages/SurgeryInfoPage'
import { Route } from 'react-router'


function App() {
  return (
    <BrowserRouter>



        <Routes>
          <Route path="/" element={<SurgeryInfoPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
