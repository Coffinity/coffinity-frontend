import AllCardProductHover from './AllCardProductHover'
import { FC } from 'react'
import CustomCarousel from './CustomCarousel'
import useProducts from '../hooks/useProducts'
import { IProductDTO } from '../types/dto'

interface Props {
  coffeeBeanRef: React.MutableRefObject<HTMLDivElement | null>
}

const CoffeeBeans: FC<Props> = ({ coffeeBeanRef }) => {
  const { products, filterProduct } = useProducts()
  const filteredProducts = convertArray(filterProduct(products, 'type', 'Coffee Beans'))

  function convertArray(oldArray: IProductDTO[]): IProductDTO[][] {
    const newArray: IProductDTO[][] = []
    for (let i = 0; i < oldArray.length; i += 4) {
      newArray.push(oldArray.slice(i, i + 4))
    }
    return newArray
  }

  return (
    <div ref={coffeeBeanRef} className=" bg-[#ededed]">
      <div className="flex justify-center bg-[#ededed]">
        <img src="assets/CoffeeBeans.png" className="w-1/2" />
      </div>
      <div className="w-4/5 mx-auto">
        <h1 className="font-bold text-[30px] text-[#585252]">HOUSE BLEND</h1>
        <CustomCarousel>
          {filteredProducts.map((items, index) => (
            <AllCardProductHover items={items} key={index} />
          ))}
        </CustomCarousel>
      </div>
      <div className="w-4/5 mx-auto">
        <h1 className="font-bold text-[30px] text-[#585252]">SINGLE ORIGIN</h1>
        <CustomCarousel>
          {filteredProducts.map((items, index) => (
            <AllCardProductHover items={items} key={index} />
          ))}
        </CustomCarousel>
      </div>
    </div>
  )
}

export default CoffeeBeans
