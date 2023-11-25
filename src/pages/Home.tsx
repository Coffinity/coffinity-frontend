import { FC } from 'react'
import TrackingHistory from './TrackingHistory'

interface Props {
  coffeeBeanRef: React.MutableRefObject<HTMLDivElement | null>
  equipmentRef: React.MutableRefObject<HTMLDivElement | null>
  footerRef: React.MutableRefObject<HTMLDivElement | null>
}

export const Home: FC<Props> = ({ coffeeBeanRef, equipmentRef, footerRef }) => {
  return (
    <div>
      {/* <Header />
      <Detail />
      <CoffeeBeans coffeeBeanRef={coffeeBeanRef} />
      <Equipment equipmentRef={equipmentRef} />
      <Footer footerRef={footerRef} /> */}
      <TrackingHistory />
    </div>
  )
}
