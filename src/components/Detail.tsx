import Carousel from './Carousel'

export default function Detail() {
  const images = [
    'assets/carousel/CS.1.png',
    'assets/carousel/CS.2.png',
    'assets/carousel/CS.3.png',
    'assets/carousel/CS.4.png',
    'assets/carousel/CS.5.png',
    'assets/carousel/CS.6.png',
    'assets/carousel/CS.7.png',
    'assets/carousel/CS.8.png',
    'assets/carousel/CS.9.png',
    'assets/carousel/CS.10.png',
  ]
  return (
    <div className="">
      <div className="grid justify-items-center">
        <img src="assets/Header2.png" />
      </div>

      <div className="flex flex-col gap-y-[152px] max-md:gap-y-0">
        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between items-center max-w-[1020px]   max-md:flex-col-reverse ">
            <div className="h-[320px] text-center text-black text-3xl font-bold italic place-items-center flex items-center">
              The purpose of our lives
              <br /> is wake up to
              <br />
              drink coffee.
            </div>
            <div className="">
              <Carousel images={images} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between items-center max-w-[1020px] max-md:flex-col">
            <img src="assets/Brew.png" className="w-[450px] h-[450px] place-items-center flex items-center" />
            <div className="flex flex-col">
              <div className="text-stone-600 text-[30px] font-bold  tracking-[9.60px] place-items-center max-md:mt-10 ">
                DHAMAJATI
                <br />
              </div>
              <div className="text-yellow-600 text-[25px] font-bold  tracking-[9.60px] place-items-center ">
                ROASTER
              </div>

              <div className=" text-black text-[20px] font-normal indent-[70px] place-items-center max-md:mb-10">
                There are many different varieties of
                <br /> coffee beans in the world from many places
                <br /> of cultivation. Ripe red fruit from the coffee
                <br /> tree Has traveled through many methods
                <br /> before becoming the dark brown seeds that
                <br /> we are familiar with It must pass through the
                <br /> hands of someone we call a Coffee Roaster or
                <br /> someone who roasts coffee beans. who is the
                <br /> key to determining the taste of the delicious
                <br /> cup of coffee in your hand.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
