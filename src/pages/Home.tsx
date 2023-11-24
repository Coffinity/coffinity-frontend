import { FC } from 'react'
import CoffeeBeans from '../components/CoffeeBeans'
import Detail from '../components/Detail'
import Equipment from '../components/Equipment'
import Footer from '../components/Footer'
import Header from '../components/Header'

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
