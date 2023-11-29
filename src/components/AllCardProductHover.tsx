import { CardProductHover } from './CardProductHover'
import { IProductDTO } from '../types/dto'
import { FC } from 'react'

interface Props {
  items: IProductDTO[]
}

const AllCardProductHover: FC<Props> = ({ items }) => {
  return (
    <div className="flex w-full mx-auto justify-center">
      {items &&
        items.map((item) => {
          return <CardProductHover key={item.id} cardProductHover={item} />
        })}
    </div>
  )
}

export default AllCardProductHover
