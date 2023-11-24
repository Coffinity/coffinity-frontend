import { CreateProduct } from './pages/CreateProduct'
import { useRef } from 'react'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import GuardedRoute from './guard/GuardedRoute'
import { useAuth } from './providers/AuthProvider'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import { Profile } from './pages/Profile'
import { Cart } from './pages/Cart'
import { Checkout } from './pages/Checkout'

function App() {
  const coffeeBeanRef = useRef<HTMLDivElement | null>(null)
  const equipmentRef = useRef<HTMLDivElement | null>(null)
  const footerRef = useRef<HTMLDivElement | null>(null)

  const onCoffeeBeanClick = () => {
    scrollToElement(coffeeBeanRef.current)
  }

  const onEquipmentClick = () => {
    scrollToElement(equipmentRef.current)
  }

  const onFooterClick = () => {
    scrollToElement(footerRef.current)
  }

  const scrollToElement = (element: HTMLElement | null) => {
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  const { isLoggedIn } = useAuth()

  return (
    <>
      <Navbar onCoffeeBeanCick={onCoffeeBeanClick} onEquipmentClick={onEquipmentClick} onFooterClick={onFooterClick} />
      <Routes>
        <Route
          path="/"
          element={<Home coffeeBeanRef={coffeeBeanRef} equipmentRef={equipmentRef} footerRef={footerRef} />}
        />
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}></Route>
      </Routes>
    </>
  )
}

export default App
