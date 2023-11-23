export default function Register() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <form className="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100">
        <h1 className="text-xl font-semibold lg:text-2xl flex items-center">REGISTER</h1>
        <div>
          <label className=""> Username </label>
          <input
            type="password"
            placeholder="******"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>

        <div className="">
          <label className=""> Email Address </label>
          <input
            type="email"
            placeholder="Info@example.com"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>
        <div>
          <label className=""> Password </label>
          <input
            type="password"
            placeholder="******"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>
        <div>
          <label className=""> Confirm Password </label>
          <input
            type="password"
            placeholder="******"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>

        <div>
          <button
            type="button"
            className="mt-5 w-full rounded-md bg-black p-2 text-center font-semibold text-white outline-none focus:ring"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}