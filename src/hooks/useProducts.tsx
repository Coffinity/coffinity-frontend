import { useEffect, useState } from 'react'
import { ICreateProductDTO, IProductDTO } from '../types/dto'
import axios from 'axios'
import { API_HOST } from '../const'

const useProducts = () => {
  const [products, setProducts] = useState<IProductDTO[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<IProductDTO[]>(`${API_HOST}/products`)

        setProducts(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const createProduct = async (body: ICreateProductDTO) => {
    const token = localStorage.getItem('token')

    try {
      const res = await axios.post<ICreateProductDTO>(`${API_HOST}/products`, body, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })
      console.log(res.data)
    } catch (err) {
      throw new Error('Cannot create content')
    }
  }

  function filterProduct<T extends IProductDTO>(
    items: T[] | null,
    filterKey: keyof T,
    filterValue: T[typeof filterKey],
  ): T[] {
    return items ? items.filter((item) => item[filterKey] === filterValue) : []
  }

  return { products, isLoading, createProduct, filterProduct }
}

export default useProducts
