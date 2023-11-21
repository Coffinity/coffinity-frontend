import Carousel from './Carousel'

export default function Detail() {
  const images = [
    'src/assets/carousel/CS.1.png',
    'src/assets/carousel/CS.2.png',
    'src/assets/carousel/CS.3.png',
    'src/assets/carousel/CS.4.png',
    'src/assets/carousel/CS.5.png',
    'src/assets/carousel/CS.6.png',
    'src/assets/carousel/CS.7.png',
    'src/assets/carousel/CS.8.png',
    'src/assets/carousel/CS.9.png',
    'src/assets/carousel/CS.10.png',
  ]
  return (
    <div className="">
      <div className="">
        <img src="src/assets/Header2.png" />
      </div>

      <div className="flex flex-col gap-y-[152px]">
        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between max-w-[1020px]    ">
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
          <div className="flex w-full justify-between max-w-[1020px]">
            <img src="src/assets/Brew.png" className="w-[450px] h-[450px] place-items-center flex items-center" />
            <div className="flex flex-col">
              <div className="text-stone-600 text-[30px] font-bold  tracking-[9.60px] place-items-center ">
                DHAMAJATI
                <br />
              </div>
              <div className="text-yellow-600 text-[25px] font-bold  tracking-[9.60px] place-items-center ">
                ROASTER
              </div>

              <div className=" text-black text-[20px] font-normal indent-[70px] place-items-center ">
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
