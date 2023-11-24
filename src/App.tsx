import Navbar from './components/Navbar'
import { Checkout } from './pages/Checkout'
import { DemoCreateProduct } from './pages/DemoCreateProduct'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import { Cart } from './pages/Cart'

import GuardedRoute from './guard/GuardedRoute'
import { useAuth } from './providers/AuthProvider'


function App() {
  const { isLoggedIn } = useAuth()

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/create" element={<DemoCreateProduct />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
