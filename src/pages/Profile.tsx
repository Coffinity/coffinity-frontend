export const Profile = () => {
  return (
    <div>
      <div className="h-auto flex justify-center items-center bg-allPageBg bg-cover bg-fixed">
        <div className="relative bg-white shadow-xl p-12 rounded-md bg-opacity-80 mt-52 mb-28  ">
          <div className="flex justify-center">
            <h1 className="text-5xl text-gray-700 font-bold">ACCOUNT DETAILS</h1>
          </div>

          <div className="flex gap-5 mt-12 text-gray-500 font-semibold text-2xl justify-center">
            <div className="flex">
              <h2> Username :&nbsp; </h2>
              <p>Info@example</p>
            </div>
            <div className="flex">
              <h2> Email :&nbsp; </h2>
              <p>Info@example.com</p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <h1 className="text-5xl text-gray-700 font-bold">ORDER HISTORY</h1>
          </div>

          <div className="mx-auto mt-12 p overflow-hidden rounded-xl border shadow ">
            <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
              <thead className="hidden border-b lg:table-header-group">
                <tr className="">
                  <td width="50%" className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Order
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Date</td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Amount</td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
                </tr>
              </thead>

              <tbody className="lg:border-gray-300">
                <tr>
                  <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-700 sm:px-6">
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
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      Complete
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
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
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-200 py-1 px-2 text-left font-medium text-blue-500 lg:hidden">
                      Pending
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-blue-200 py-1 px-2 text-blue-500">
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
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      Complete
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
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
