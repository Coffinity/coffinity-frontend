import Navbar from './components/Navbar'
import { Checkout } from './pages/Checkout'
import { DemoCreateProduct } from './pages/DemoCreateProduct'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import { Cart } from './pages/Cart'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/create" element={<DemoCreateProduct />} />
      </Routes>
    </>
  )
}

export default App
