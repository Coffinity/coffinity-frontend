import { FC } from 'react'
import CardProduct from './CardProduct'

interface Props {
  equipmentRef: React.MutableRefObject<HTMLDivElement | null>
}

const Equipment: FC<Props> = ({ equipmentRef }) => {
  return (
    <div ref={equipmentRef} className=" bg-[#D5D5D5]">
      <div className="flex justify-center bg-[#D5D5D5]">
        <img src="../src/assets/equipmentsBanner.png" className="w-1/2" />
      </div>
      <div className="flex w-4/5 mx-auto">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  )
}

export default Equipment
