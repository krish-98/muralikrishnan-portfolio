import Profile from "../assets/programming.svg"

const About = () => {
  return (
    <>
      <div id="about" className="mb-36" />
      <section className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-3xl font-semibold tracking-wide uppercase my-4 lg:text-4xl">
          About <span className="text-primary">Me </span>
        </h2>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
          <div className="w-full">
            <img
              className="md:w-[70%] md:mx-auto lg:w-full"
              src={Profile}
              alt="my profile"
            />
          </div>

          <div className="flex flex-col items-center self-center lg:items-start">
            <p className="text-sm text-center tracking-wide leading-6 font-semibold mb-6 lg:text-base lg:leading-7 lg:text-left">
              Hello World!{" "}
              <span className="text-primary">I'm Murali Krishnan</span>. I
              belong to <span className="text-primary">Madurai, India</span>. I
              have a Bachelor's Degree in Computer Science & Engg, yet I learned
              everything on the Internet and still learning.
            </p>

            <a
              href="#contact"
              className=" bg-primary text-white px-8 py-4 rounded-xl tracking-wide  lg:px-8 lg:mt-4 drop-shadow-2xl hover:text-lightBlack hover:bg-white hover:ring-2 hover:ring-primary transition ease-in-out duration-500 hover:shadow-lg hover:shadow-primary "
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
export default About
