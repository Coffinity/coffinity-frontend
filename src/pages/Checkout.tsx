export const Checkout = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="flex mb-8 mt-11">
        <h1 className="text-5xl text-white font-bold">CHECK OUT</h1>
      </div>
      <div className="flex">
        <div className="px-4">
          <p className="text-2xl text-white font-semibold">Order Summary</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div className="flex rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 h-24 w-28 object-cover object-center"
                src="src/assets/Test Product.png"
                alt="product image"
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="text-xl font-bold">Dhamajati Balance</span>
                <span className="float-right text-gray-400">200g</span>
                <p className="text-lg font-bold">400.00 ฿</p>
              </div>
            </div>
            <div className="flex rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 h-24 w-28 object-cover object-center"
                src="src/assets/Test Product.png"
                alt="product image"
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="text-xl font-bold">Dhamajati Balance</span>
                <span className="float-right text-gray-400">200g</span>
                <p className="text-lg font-bold">400.00 ฿</p>
              </div>
            </div>
            <div className="flex rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 h-24 w-28 object-cover object-center"
                src="src/assets/Test Product.png"
                alt="product image"
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="text-xl font-bold">Dhamajati Balance</span>
                <span className="float-right text-gray-400">200g</span>
                <p className="text-lg font-bold">400.00 ฿</p>
              </div>
            </div>
            <div className="flex rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 h-24 w-28 object-cover object-center"
                src="src/assets/Test Product.png"
                alt="product image"
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="text-xl font-bold">Dhamajati Balance</span>
                <span className="float-right text-gray-400">200g</span>
                <p className="text-lg font-bold">400.00 ฿</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 rounded-lg">
          <p className="text-xl font-medium">Shipping Address</p>

          <div className="">
            <div className="relative mt-5">
              <input
                type="text"
                id="Full Name"
                name="Full Name"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Full Name"
              />
              <input
                type="text"
                id="Phone Number"
                name="Phone Number"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Phone Number"
              />
              <input
                type="text"
                id="Address1"
                name="Address1"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Address1"
              />
              <input
                type="text"
                id="Address2"
                name="Address2"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Address2"
              />
            </div>
            <label htmlFor="card-detail" className="mt-4 mb-2 block text-sm font-medium">
              Card Details
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Card Name"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="card-no"
                  name="card-no"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                name="credit-expiry"
                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="MM/YY"
              />
              <input
                type="text"
                name="credit-cvc"
                className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="CVC"
              />
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">800.00 ฿</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">FREE</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                <span className="text-xs font-normal text-gray-400">THB</span> 800.00
              </p>
            </div>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}
