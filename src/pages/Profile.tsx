export const Profile = () => {
  return (
    <div>
      <div className="min-h-screen w-full flex justify-center items-center bg-allPageBg bg-cover bg-fixed ">
        <div className="relative w-1/2 bg-white shadow-xl p-10 rounded-md bg-opacity-80 mt-52 mb-28 text-black border border-gray-100">
          <h1 className="text-xl font-semibold lg:text-2xl flex items-center justify-center">ACCOUNT DETAILS</h1>
          <div className="flex gap-5 text-gray-500  justify-center  mt-3 pb-4">
            <div className="flex ">
              <h2> Username :&nbsp; </h2>
              <p>Info@example</p>
            </div>
            <div className="flex">
              <h2> Email :&nbsp; </h2>
              <p>Info@example.com</p>
            </div>
          </div>

          <div className="mt-3 flex justify-center">
            <h1 className="text-xl font-semibold lg:text-xl flex items-center justify-center">ORDER HISTORY</h1>
          </div>

          <div className="">
            {/* mx-auto mt-3 p overflow-hidden rounded-xl border shadow  */}
            <table className="w-full border-separate border-spacing-y-2 border-spacing-x-2 mt-6 border-t border-b py-2 border-black">
              <thead className="hidden w-full border-b lg:table-header-group">
                <tr className="w-full">
                  <td width="50%" className="whitespace-normal py-4 text-sm font-bold text-gray-500 sm:px-6">
                    Order
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-bold text-gray-500 sm:px-6">Date</td>

                  <td className="whitespace-normal py-4 text-sm font-bold text-gray-500 sm:px-6">Amount</td>

                  <td className="whitespace-normal py-4 text-sm font-bold text-gray-500 sm:px-6">Status</td>
                </tr>
              </thead>

              <tbody className="lg:border-gray-300">
                <tr>
                  <td className="whitespace-no-wrap py-4 text-sm font-bold text-gray-700 sm:px-6">
                    #000001
                    <div className="mt-1 lg:hidden ">
                      <p className="font-normal text-gray-500">15 December, 2021</p>
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell w-full">
                    15 December, 2021
                  </td>

                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    500.00 THB
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-black py-2 px-3 text-left text-xs font-bold text-white lg:hidden">
                      Complete
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-black py-2 px-3 text-xs text-white">
                      Complete
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-700 sm:px-6">
                    #000002
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-500">14 November, 2021</p>
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    14 November, 2021
                  </td>

                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    500.00 THB
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-gray-500 py-1 px-2 text-left font-bold text-white lg:hidden">
                      Pending
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-gray-500 py-1 px-2 text-white">
                      Pending
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-700 sm:px-6">
                    #000003
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-500">15 October, 2021</p>
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    15 October, 2021
                  </td>

                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    500.00 THB
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-black py-2 px-3 text-left text-xs font-bold text-white lg:hidden">
                      Complete
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-black py-2 px-3 text-xs text-white">
                      Complete
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
