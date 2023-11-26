import { useState } from 'react'

export const Cart = () => {
  const [quantityProduct, setQuantityProduct] = useState<number>(1)
  return (
    <div className="h-screen flex justify-center items-center bg-allPageBg bg-cover">
      <section className="relative  rounded-md bg-white bg-opacity-80 p-6 lg:p-10 border border-gray-100">
        {/* relative w-1/2 bg-white shadow-xl p-10 rounded-md bg-opacity-80 mt-52 mb-28 text-black border border-gray-100 */}
        <div className="">
          <div className="flex items-center justify-center">
            <h1 className="text-xl font-semibold lg:text-2xl flex items-center text-black">YOUR CART</h1>
          </div>

          <div className="my-8 ">
            <div className="rounded-md w-[900px] ">
              <div className="w-full">
                <div className="flow-root">
                  <ul className="">
                    <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0 bg-red">
                      <div className="shrink-0">
                        <img
                          className="h-24 w-24 max-w-full rounded-lg object-cover"
                          src="src/assets/Test Product.png"
                          alt="product image"
                        />
                      </div>

                      <div className="relative flex flex-1 flex-col justify-between">
                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                          <div className="pr-8 sm:pr-5">
                            <p className="text-base font-semibold text-gray-900">Dhamajati Balance</p>
                            <p className="mx-0 mt-1 mb-0 text-sm font-normal text-gray-500">200g</p>
                          </div>

                          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <p className="shrink-0 w-20 text-sm font-bold text-gray-700 sm:order-2 sm:ml-8 sm:text-right ">
                              400.00 ฿
                            </p>

                            <div className="sm:order-1">
                              <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                <button
                                  className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                  onClick={() => setQuantityProduct(quantityProduct - 1)}
                                  disabled={quantityProduct === 1}
                                >
                                  -
                                </button>
                                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                  <p>{quantityProduct}</p>
                                </div>
                                <button
                                  className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                  onClick={() => setQuantityProduct(quantityProduct + 1)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                          <button
                            type="button"
                            className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                          >
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                                className=""
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 border-t border-b py-2 border-black">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-normal text-gray-500">Subtotal</p>
                    <p className="text-sm font-bold text-gray-700 sm:px-6">400.00 ฿</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-normal text-gray-500">Shipping</p>
                    <p className="text-sm font-bold text-gray-700 sm:px-6">FREE</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    <span className="text-xs font-normal text-gray-400">THB</span> 400.00
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    className="group inline-flex w-full items-center justify-center rounded-md bg-black px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-500"
                  >
                    Checkout
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
