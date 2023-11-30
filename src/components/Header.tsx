export default function Header() {
  return (
    <div className="min-h-screen items-center bg-header bg-cover bg-fixed flex justify-end relative ">
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
