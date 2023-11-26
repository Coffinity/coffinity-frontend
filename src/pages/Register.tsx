import { useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { FormEvent, useState } from 'react'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await register({ username, password, email })

      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="h-screen flex justify-center items-center bg-allPageBg bg-cover ">
      <form
        onSubmit={handleSubmit}
        className="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 bg-opacity-80 text-black"
      >
        <h1 className="text-xl font-semibold lg:text-2xl flex items-center">REGISTER</h1>

        <label className=""> Username </label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
        />

        <div className="">
          <label className=""> Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Info@example.com"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>
        <div>
          <label className=""> Password </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>
        <div>
          <label className=""> Confirm Password </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>

        <div>
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-black p-2 text-center font-semibold text-white outline-none focus:ring"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}
