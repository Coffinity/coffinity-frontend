import { useEffect, useState } from 'react'
import { IUserDTO } from '../types/dto'
import axios from 'axios'

const useProfile = () => {
  const [profile, setProfile] = useState<IUserDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token')
      setIsLoading(true)
      try {
        const res = await axios.get<IUserDTO>('http://localhost:8080/products', {
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        })

        setProfile(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return { profile, isLoading }
}

export default useProfile
