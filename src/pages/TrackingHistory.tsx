export default function TrackingHistory() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center gap-y-5 ">
      <div className="flex justify-center items-center w-full">
        <form className="rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 w-1/2 items-center my-10">
          <div className="flex justify-center ">
            <div className="flex w-full gap-x-20  justify-center w-1/2">
              <div className="w-1/2">
                <p>1</p>
              </div>

              <div className="flex items-center">
                <div className="w-0 h-full border-solid border-black border-[1px]"></div>
              </div>
            </div>

            <div className="space-y-10 w-3/4">
              <div className="text-4xl font-bold ">PRODUCT ORDER</div>
              <div className="space-y-3">
                <div className="flex justify-start gap-10">
                  <div className="grid place-items-center">
                    <img src="src/assets/DRIP.webp" className="h-24 w-24 max-w-full rounded-lg object-cover" />
                  </div>
                  <div className="items-center">
                    <div>
                      <p className="font-semibold">PRODUCT NAME</p>
                    </div>
                    <div className="space-y-5">
                      <div className="text-sm">
                        <p>PRIZE :</p>
                        <p>QUANTITY :</p>
                        <p>TOTAL :</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className=" flex justify-start gap-10">
                  <div className="grid place-items-center">
                    <img src="src/assets/DRIP.webp" className="h-24 w-24 max-w-full rounded-lg object-cover" />
                  </div>
                  <div>
                    <div>
                      <p className="font-semibold">PRODUCT NAME</p>
                    </div>
                    <div className="space-y-5">
                      <div className="text-sm">
                        <p>PRIZE :</p>
                        <p>QUANTITY :</p>
                        <p>TOTAL :</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-start gap-10">
                  <div className="grid place-items-center">
                    <img src="src/assets/DRIP.webp" className="h-24 w-24 max-w-full rounded-lg object-cover" />
                  </div>
                  <div>
                    <div>
                      <p className="font-semibold">PRODUCT NAME</p>
                    </div>
                    <div className="space-y-5">
                      <div className="text-sm">
                        <p>PRIZE :</p>
                        <p>QUANTITY :</p>
                        <p>TOTAL :</p>
                      </div>

                      <div className="">
                        <p>TOTAL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
