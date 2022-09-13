import { Link } from "@shopify/hydrogen"

const Hero = () => {
  return (
    <section
      className={
        "relative justify-end flex flex-col w-full top-[-2rem] h-screen"
      }
    >
      <div className="relative">
        <img
          src={
            "https://images.pexels.com/photos/1250643/pexels-photo-1250643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt={"alt text"}
          className="w-full h-full object-cover opacity-75"
        />
        <span className="absolute bottom-[40rem] left-[2rem] lg:bottom-[10rem] lg:left-[5rem] lg:text-white">
          <h1 className="text-4xl lg:text-6xl mb-3">Old meets New.</h1>

          <Link
            to="#latest-collection"
            className="text-l lg:text-2xl cursor-pointer text-zinc-600 pl-1 lg:hover:text-white hover:tracking-widest lg:hover:tracking-normal"
          >
            View Our Latest Collections →
          </Link>
        </span>
      </div>
    </section>
  )
}

export default Hero
