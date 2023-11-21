import { FC, useState } from 'react'

interface Props {
  images: string[]
}

const Carousel: FC<Props> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="carousel w-[450px] h-[450px] rounded-3xl mx-auto my-auto">
      {images.map((image, index) => (
        <div key={index} className={`carousel-item relative w-full ${index === currentSlide ? 'block' : 'hidden'}`}>
          <img src={image} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={() => goToSlide((index - 1 + images.length) % images.length)}
              className=" btn-circle text-lg text-white"
            >
              ❮
            </button>
            <button onClick={() => goToSlide((index + 1) % images.length)} className=" btn-circle text-lg text-white">
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Carousel
