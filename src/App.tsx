import Background from './pages/Background.tsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StartPage from './pages/StartPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/background" element={<Background />} />
    </Routes>
  )
}

export default App