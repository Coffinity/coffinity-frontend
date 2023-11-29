import { useState } from 'react'
import { ICreateCheckoutDTO } from '../types/dto'
import axios from 'axios'
import { API_HOST } from '../const'

const useCheckout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const createCheckout = async (body: ICreateCheckoutDTO) => {
    const token = localStorage.getItem('token')
    setIsLoading(true)
    console.log('createCheckout.....')
    try {
      const res = await axios.post<ICreateCheckoutDTO>(`${API_HOST}/mine/checkout`, body, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })
      console.log(res.data)
    } catch (err) {
      throw new Error('Cannot create content')
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, createCheckout }
}

export default useCheckout
