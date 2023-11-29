import { useState } from 'react'
import { ICheckoutResponse, ICreateCheckoutDTO } from '../types/dto'
import axios from 'axios'
import { API_HOST, STRIPE_PK_KEY } from '../const'
import { loadStripe } from '@stripe/stripe-js'

const useCheckout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const createCheckout = async (body: ICreateCheckoutDTO) => {
    const stripePromise = loadStripe(STRIPE_PK_KEY)
    const stripe = await stripePromise
    const token = localStorage.getItem('token')
    setIsLoading(true)
    console.log('createCheckout.....')
    try {
      const res = await axios.post<ICheckoutResponse>(`${API_HOST}/mine/checkout`, body, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })
      console.log(res.data)
      stripe.redirectToCheckout({ sessionId: res.data.session_id })
      // remove cart item
      localStorage.removeItem('DMJ')
    } catch (err) {
      throw new Error('Cannot create content')
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, createCheckout }
}

export default useCheckout
