import { useEffect, useState } from 'react'
import { ICreateProductDTO, IProductDTO } from '../types/dto'
import axios from 'axios'

const useProducts = () => {
  const [products, setProducts] = useState<IProductDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<IProductDTO>('http://localhost:8080/products')

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

    setIsSubmitting(true)

    try {
      const res = await axios.post<ICreateProductDTO>('http://localhost:8080/products', body, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })

      console.log(res.data)
    } catch (err) {
      throw new Error('Cannot create content')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { products, isLoading, isSubmitting, createProduct }
}

export default useProducts
