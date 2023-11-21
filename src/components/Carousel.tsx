import { FC, useRef } from 'react'

interface Props {
  images: string[]
}

const Carousel: FC<Props> = ({ images }) => {
  const carouselElement = useRef<HTMLDivElement | null>(null)

  const goToSlide = (index: number) => {
    if (carouselElement.current) {
      carouselElement.current.scrollTo({
        left: carouselElement.current.clientWidth * index + 1,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="carousel w-[450px] h-[450px] rounded-2xl" ref={carouselElement}>
      {images.map((image, index) => (
        <div key={index} className="carousel-item relative w-full">
          <img src={image} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={() => goToSlide((index - 1 + images.length) % images.length)}
              className=" btn-circle text-lg text-white"
            >
              ❮
            </button>
            <button onClick={() => goToSlide((index + 1) % images.length)} className=" text-lg text-white">
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Carousel
