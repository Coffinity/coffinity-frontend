import { Carousel } from 'flowbite-react'
import AllCardProductHover from './AllCardProductHover'
import { FC } from 'react'

interface Props {
  coffeeBeanRef: React.MutableRefObject<HTMLDivElement | null>
}

const CoffeeBeans: FC<Props> = ({ coffeeBeanRef }) => {
  return (
    <div ref={coffeeBeanRef} className=" bg-[#ededed]">
      <div className="flex justify-center bg-[#ededed]">
        <img src="../src/assets/CoffeeBeans.png" className="w-1/2" />
      </div>
      <div className="w-4/5 mx-auto">
        <h1 className="font-bold text-[30px] text-[#585252]">HOUSE BLEND</h1>
        <Carousel slide={false}>
          <AllCardProductHover />
          <AllCardProductHover />
          <AllCardProductHover />
          <AllCardProductHover />
        </Carousel>
      </div>
      <div className="w-4/5 mx-auto">
        <h1 className="font-bold text-[30px] text-[#585252]">SINGLE ORIGIN</h1>
        <Carousel slide={false}>
          <AllCardProductHover />
          <AllCardProductHover />
          <AllCardProductHover />
          <AllCardProductHover />
        </Carousel>
      </div>
    </div>
  )
}

export default CoffeeBeans
