import { FC } from 'react'
import Header from '../components/Header'
import Detail from '../components/Detail'
import CoffeeBeans from '../components/CoffeeBeans'
import Equipment from '../components/Equipment'
import Footer from '../components/Footer'

interface Props {
  coffeeBeanRef: React.MutableRefObject<HTMLDivElement | null>
  equipmentRef: React.MutableRefObject<HTMLDivElement | null>
  footerRef: React.MutableRefObject<HTMLDivElement | null>
}

export const Home: FC<Props> = ({ coffeeBeanRef, equipmentRef, footerRef }) => {
  return (
    <div>
      <Header />
      <Detail />
      <CoffeeBeans coffeeBeanRef={coffeeBeanRef} />
      <Equipment equipmentRef={equipmentRef} />
      <Footer footerRef={footerRef} />
    </div>
  )
}
