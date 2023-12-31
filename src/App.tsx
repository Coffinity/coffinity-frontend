import { CreateProduct } from './pages/CreateProduct'
import { useEffect, useRef } from 'react'
import { Home } from './pages/Home'
import GuardedRoute from './guard/GuardedRoute'
import { useAuth } from './providers/AuthProvider'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import { Profile } from './pages/Profile'
import { Cart } from './pages/Cart'
import { Checkout } from './pages/Checkout'
import Navbar from './components/Navbar'
import TrackingHistory from './pages/TrackingHistory'
import Success from './pages/Success'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollTop from './components/ScrollTop'

function App() {
  const coffeeBeanRef = useRef<HTMLDivElement | null>(null)
  const equipmentRef = useRef<HTMLDivElement | null>(null)
  const footerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    AOS.init()
  }, [])

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
      <ScrollTop />
      <Routes>
        <Route
          path="/"
          element={<Home coffeeBeanRef={coffeeBeanRef} equipmentRef={equipmentRef} footerRef={footerRef} />}
        />
        <Route path="/cart" element={<Cart />} />

        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/tracking" element={<TrackingHistory />} />
          <Route path="/success" element={<Success />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
