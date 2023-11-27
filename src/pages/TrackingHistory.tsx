import { useState } from 'react'
// interface History {
//   order: string
//   adress: string
//   track
// }

interface Order {
  name: string
  price: number
  quantity: number
  total: number
}
export default function TrackingHistory() {
  const [orders, setOders] = useState<Order[]>([
    {
      name: 'Product name',
      price: 10,
      quantity: 1,
      total: 10,
    },
    {
      name: 'Product name',
      price: 10,
      quantity: 1,
      total: 10,
    },
  ])

  // fetch api and set orders
  // useEffect(() => {

  // }, [])

  return (
    <div className="min-h-screen pt-24 bg-allPageBg bg-cover bg-center bg-no-repeat flex flex-col items-center">
      <div className="flex justify-center items-center w-full my-10">
        <form className="rounded-md bg-white bg-opacity-80 p-6 shadow-xl lg:p-10 border border-gray-100 w-1/2 items-center my-10">
          <div className="flex justify-center ">
            <div className="flex  gap-x-20 justify-center w-1/2">
              <div className="">
                <div className="">
                  <p className="text-xl font-semibold lg:text-2xl flex items-center">ORDER PRODUCT</p>
                  <p>1</p>
                  <p>1</p>
                </div>
                <div className="">
                  <p className="text-xl font-semibold lg:text-2xl flex items-center">SHIPPING ADRESS</p>
                  <p>1</p>
                  <p>1</p>
                </div>
                <div className="">
                  <p className="text-xl font-semibold lg:text-2xl flex items-center">TRACKING NUMBER</p>
                  <p>1</p>
                  <p>1</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-0 h-full border-solid border-black border-[1px]"></div>
              </div>
            </div>

            <div className="space-y-10 w-3/4">
              <div className="text-xl font-semibold lg:text-2xl flex items-center space-y-3 ">PRODUCT ORDER</div>
              <div className=""></div>
              {orders.map((order, index) => (
                <>
                  <div key={index} className="flex justify-start gap-10">
                    <div className="grid place-items-center">
                      <img src="src/assets/DRIP.webp" className="h-24 w-24 max-w-full rounded-lg object-cover" />
                    </div>
                    <div>
                      <div>
                        <p className="font-semibold">{order.name}</p>
                      </div>
                      <div className="space-y-5">
                        <div className="text-sm">
                          <p>PRICE : {order.price} THB</p>
                          <p>QUANTITY : {order.quantity}</p>
                          <p>TOTAL : {order.total} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
              <div className="text-sm font-medium text-gray-900">Total :</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
