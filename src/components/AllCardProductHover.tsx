import { CardProductHover } from './CardProductHover'
import useProducts from '../hooks/useProducts'

const AllCardProductHover = () => {
  const { products } = useProducts()

  return (
    <div className="flex w-full mx-auto">
      {products &&
        products.map((product) => {
          return <CardProductHover key={product.id} cardProductHover={product} />
        })}
    </div>
  )
}

export default AllCardProductHover
