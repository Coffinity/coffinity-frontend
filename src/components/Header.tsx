export default function Header() {
  return (
    <div className="min-h-screen bg-videoBg bg-cover items-center flex justify-end relative ">
      <video className="object-cover h-screen w-full" src="/assets/videocoffee1.mp4" autoPlay loop muted />

      <p
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration="1000"
        className="text-neutral-400 text-2xl font-normal absolute bottom-0 right-[70px] "
      >
        OPEN 7.30AM - 5.00PM
        <br />
        CLOSED ON THURSDAY
        <br /> <br />
        <br />
      </p>
    </div>
  )
}
