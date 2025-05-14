import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StartPage from './pages/StartPage'
import Question1 from './pages/Question1.tsx'
import GalleryPage from './pages/GalleryPage.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/question1" element={<Question1 />} />
      <Route path="/gallery" element={<GalleryPage />} />
      {/* Add more routes as needed */}
    </Routes>
  )
}

export default App