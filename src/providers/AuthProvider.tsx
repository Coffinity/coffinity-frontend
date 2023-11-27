import { ReactNode, createContext, useContext, useState } from 'react'
import { IAccessToken, ICreateUserDTO, ILogin, IUserDTO } from '../types/dto'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContextType {
  isLoggedIn: boolean
  username: string | null
  login: (loginBody: ILogin) => Promise<void>
  logout: () => void
  register: (body: ICreateUserDTO) => Promise<void>
}

const AuthContext = createContext<IAuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within AuthProvider')

  return context
}

const token = localStorage.getItem('token')
const user = localStorage.getItem('username')

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedin] = useState<boolean>(!!token)
  const [username, setUsername] = useState<string | null>(user)

  const register = async (registerBody: ICreateUserDTO) => {
    try {
      await axios.post<IUserDTO>('http://localhost:8080/users', registerBody, {
        headers: { 'Content-Type': 'application/json' },
      })
      navigate('/login')
    } catch (error) {
      throw new Error('Can not Sign up !')
    }
  }

  const login = async (loginBody: ILogin) => {
    const { username } = loginBody

    try {
      const res = await axios.post<IAccessToken>('http://localhost:8080/auth/login', loginBody, {
        headers: { 'Content-Type': 'application/json' },
      })

      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('username', username)
      setIsLoggedin(true)
      console.log(isLoggedIn)

      setUsername(username)
    } catch (err) {
      throw new Error('Invalid username or password')
    }
  }
  const logout = () => {
    localStorage.clear()
    setIsLoggedin(false)
    setUsername(null)

    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ register, isLoggedIn, username, login, logout }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
