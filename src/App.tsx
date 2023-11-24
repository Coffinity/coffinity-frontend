import { useRef } from 'react'

import Navbar from './components/Navbar'
import { Home } from './pages/Home'

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

  return (
    <>
      <Navbar onCoffeeBeanCick={onCoffeeBeanClick} onEquipmentClick={onEquipmentClick} onFooterClick={onFooterClick} />
      <Home coffeeBeanRef={coffeeBeanRef} equipmentRef={equipmentRef} footerRef={footerRef} />
    </>
  )
}

export default App
