import './App.css'
import { BrowserRouter, Routes } from 'react-router'
import SurgeryInfoPage from './pages/SurgeryInfoPage'
import { Route } from 'react-router'
import HomePage from './pages/HomePage'
import StudyPage from './pages/StudyPage'
import NotesPage from './pages/NotesPage'


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/info" element={<SurgeryInfoPage />}/>
          <Route path="/study" element={<StudyPage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
