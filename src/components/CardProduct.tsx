const CardProduct = () => {
  return (
    <div className="relative m-10 flex w-full h-max max-w-xs flex-col overflow-hidden rounded-lg bg-transparent shadow-[0_0_50px_0 rgb(0 0 0 / 0.1)">
      <a className="flex rounded-xl items-center" href="#">
        <img className="" src="src/assets/Test Product.png" alt="product image" />
      </a>
      <div className="mt-4 px-5 pb-5 flex flex-col text-center">
        <a href="#">
          <h5 className="text-xl font-bold tracking-tight text-slate-900">Dhamajati Balance (200g)</h5>
          <p className="text-green-500">In stock</p>
        </a>
        <div className="mt-2 mb-5 flex flex-col items-center">
          <p>
            <span className="text-3xl font-bold text-slate-900">400.00 ฿</span>
          </p>
          <p className="py-3">Shipping calculated at checkout.</p>
          <div className="w-36 h-16 bg-white rounded-2xl border-2 border-neutral-400 flex items-center justify-center">
            <div className=" w-full flex justify-around ">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add to cart
      </a>
    </div>
  )
}

export default CardProduct
