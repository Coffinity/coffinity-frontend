import { FC } from 'react'
import { IProductDTO } from '../types/dto'
import useProducts from '../hooks/useProducts'
import CustomCarousel from './CustomCarousel'
import AllCardProductHover from './AllCardProductHover'

interface Props {
  equipmentRef: React.MutableRefObject<HTMLDivElement | null>
}

const Equipment: FC<Props> = ({ equipmentRef }) => {
  const { products, filterProduct } = useProducts()
  const equipmentProducts = convertArray(filterProduct(products, 'type', 'Equipments'))

  function convertArray(oldArray: IProductDTO[]): IProductDTO[][] {
    const newArray: IProductDTO[][] = []
    for (let i = 0; i < oldArray.length; i += 4) {
      newArray.push(oldArray.slice(i, i + 4))
    }
    return newArray
  }

  return (
    <div ref={equipmentRef} className=" bg-[#D5D5D5]">
      <div className="flex justify-center bg-[#D5D5D5]">
        <img
          src="assets/equipmentsBanner.png"
          data-aos="fade-up"
          data-aos-delay={100}
          data-aos-offset={1500}
          data-aos-duration="1000"
          className="w-1/2"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-offset={1500}
        data-aos-duration="1000"
        className="flex w-4/5 mx-auto"
      >
        <CustomCarousel>
          {equipmentProducts.map((items, index) => (
            <AllCardProductHover items={items} key={index} />
          ))}
        </CustomCarousel>
      </div>
    </div>
  )
}

export default Equipment
