import Navbar from './components/Navbar'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
