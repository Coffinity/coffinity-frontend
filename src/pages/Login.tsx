import { useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await login({ username, password })
      toast.success('Sign In Success')

      navigate('/')
    } catch (err) {
      console.log(err)
      toast.error('Incorrect username or password')
    } finally {
      setUsername('')
      setPassword('')
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-allPageBg bg-cover ">
      <form
        onSubmit={handleSubmit}
        className="relative space-y-3 rounded-md bg-white bg-opacity-80 p-6 shadow-xl lg:p-10 border border-gray-100  text-black"
      >
        <h1 className="text-xl font-semibold lg:text-2xl flex items-center">SIGN IN</h1>
        <p className="pb-4 text-gray-500">Sign in to access your account</p>

        <label className=""> Username </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          required
        />

        <div>
          <label className=""> Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
            required
          />
        </div>

        <div>
          <p className="pb-1 text-gray-500 flex justify-center">Forgot Password?</p>
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-black p-2 text-center font-semibold text-white outline-none focus:ring"
          >
            Get Started
          </button>
        </div>
      </form>
    </div>
  )
}
