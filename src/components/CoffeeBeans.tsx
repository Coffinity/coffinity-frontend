import AllCardProductHover from './AllCardProductHover'
import { FC } from 'react'
import CustomCarousel from './CustomCarousel'

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
        <CustomCarousel>
          <AllCardProductHover />
          <AllCardProductHover />
          <AllCardProductHover />
          <AllCardProductHover />
        </CustomCarousel>
      </div>
      <div className="w-4/5 mx-auto">
        <h1 className="font-bold text-[30px] text-[#585252]">SINGLE ORIGIN</h1>
        <CustomCarousel>
          <AllCardProductHover />
          <AllCardProductHover />
          <AllCardProductHover />
          <AllCardProductHover />
        </CustomCarousel>
      </div>
    </div>
  )
}

export default CoffeeBeans
