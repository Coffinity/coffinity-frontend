import { ChangeEvent, useContext, useState } from 'react'
import { CartContext, CartItem } from '../providers/CartProvider'
import { AddressDTO, ItemDTO } from '../types/dto'
import useCheckout from '../hooks/useCheckout'

interface State {
  fullname: ''
  addressLine: string
  province: string
  district: string
  postcode: string
  phoneNumber: string
}

export const Checkout = () => {
  const [state, setState] = useState<State>({
    fullname: '',
    addressLine: '',
    province: '',
    district: '',
    postcode: '',
    phoneNumber: '',
  })
  const { createCheckout } = useCheckout()
  const { cartState } = useContext(CartContext)
  const { cartList, totalPrice } = cartState

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const onPlaceHolderClick = async () => {
    // post api
    const { fullname, addressLine, province, district, postcode, phoneNumber } = state
    const items = cartList.map(transformToObject)
    const address: AddressDTO = {
      fullname,
      address_line: addressLine,
      province,
      district,
      postcode,
      phone_number: phoneNumber,
    }
    const body = { items, address }

    try {
      await createCheckout(body)
    } catch (error) {
      alert(error)
    } finally {
      setState({
        fullname: '',
        addressLine: '',
        province: '',
        district: '',
        postcode: '',
        phoneNumber: '',
      })
    }
  }

  const transformToObject = (item: CartItem): ItemDTO => {
    return {
      productId: item.id,
      quantity: item.quantity,
    }
  }

  return (
    <div className="min-h-screen pt-24 bg-allPageBg bg-cover bg-center bg-no-repeat flex flex-col items-center  ">
      <div className="flex gap-10 max-md:flex-col-reverse ">
        <div className="">
          <div className="flex my-10">
            <h1 className="text-3xl text-white font-bold">CHECK OUT</h1>
          </div>
          <div className="my-10 bg-white bg-opacity-80 px-8 pt-8 lg:mt-0 rounded-lg w-[670px] ">
            <p className="text-xl font-semibold lg:text-2xl flex items-center text-black">SHIPPING ADRESS</p>

            <div className="">
              <div className="">
                <div className="relative flex flex-col mt-5 gap-y-5">
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={state.fullname}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Full Name"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="addressLine"
                    name="addressLine"
                    value={state.addressLine}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Address_Line"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="district"
                    name="district"
                    value={state.district}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="District"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="province"
                    name="province"
                    value={state.province}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Province"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={state.postcode}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Postcode"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={state.phoneNumber}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Phone_Number"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mt-6 border-t border-b py-2 border-black">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-normal text-gray-500">Subtotal</p>
                  <p className="font-semibold text-gray-900">{totalPrice} THB</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-normal text-gray-500">Shipping</p>
                  <p className="font-semibold text-gray-900">FREE</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>

                <p className="text-2xl font-semibold text-gray-900">
                  {' '}
                  <span className="text-xs font-normal text-gray-400">THB </span>
                  {totalPrice}
                </p>
              </div>
            </div>
            <div className="mt-6 mb-8 text-center">
              <button
                type="button"
                onClick={() => onPlaceHolderClick()}
                className="mt-4 mb-8 group inline-flex w-full items-center justify-center rounded-md bg-black px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-500"
              >
                Place Order
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
            {/* <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
              Place Order
            </button> */}
          </div>
        </div>
        <div>
          <div className="">
            <div className="flex my-10">
              <p className="text-3xl text-white font-bold">ORDER SUMMARY</p>
            </div>
            <div className="bg-white bg-opacity-80 px-8 py-8 lg:mt-0 rounded-lg h-[386px] overflow-y-auto">
              {cartList.map((item, index) => (
                <div key={index} className="">
                  <div className="flex rounded-lg  sm:flex-row">
                    <img className="m-2 h-24 w-28 object-cover object-center" src={item.image} alt="product image" />
                    <div className="flex w-full flex-col px-4 py-4">
                      <span className="text-m font-semibold text-black">{item.name}</span>
                      <span className="text-sm font-normal text-gray">{item.quantity}x qty</span>

                      <p className="text-l font-semibold text-black">{item.price * item.quantity} THB</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
