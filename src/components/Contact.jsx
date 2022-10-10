import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { AiOutlineHome } from "react-icons/ai"
import { FiPhoneCall, FiMail, FiSend } from "react-icons/fi"
import { GrSend } from "react-icons/gr"
import { RiMailSendLine } from "react-icons/ri"

const Contact = () => {
  const formRef = useRef()
  // const nameRef = useRef()
  // const emailRef = useRef()
  // const msgRef = useRef()

  const handleForm = (e) => {
    e.preventDefault()
    console.log("form")

    emailjs
      .sendForm(
        "service_gtcqruh",
        "template_fdqjlle",
        formRef.current,
        "ePt-fCck01QMroed-"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div id="contact" className="flex flex-col items-center my-28">
      <h2 className="text-3xl font-semibold tracking-wide uppercase my-4 lg:text-4xl">
        Contact
      </h2>

      {/* <div>
        <div>
          <AiOutlineHome />
          <p>Madurai, India</p>
        </div>
        <div>
          <FiPhoneCall />
          <p>+91 95432 40143</p>
        </div>
        <div>
          <FiMail />
          <p>muralikrishnanm98@gmail.com</p>
        </div>
      </div> */}

      <form
        ref={formRef}
        onSubmit={handleForm}
        className="flex flex-col items-center gap-5 w-full my-7 md:w-[70%] lg:w-[50%]"
      >
        <input
          className="w-full border border-primary px-4 py-3 rounded-lg outline-none placeholder:text-sm focus:shadow-md focus:shadow-primary"
          type="text"
          placeholder="Enter your name"
        />
        <input
          className="w-full border border-primary px-4 py-3 rounded-lg outline-none placeholder:text-sm focus:shadow-md focus:shadow-primary"
          type="email"
          name="from_name"
          placeholder="Enter email address"
        />
        <textarea
          className="w-full border border-primary px-4 py-3 rounded-lg outline-none placeholder:text-sm focus:shadow-md focus:shadow-primary h-36 resize-none"
          name="message"
          placeholder="Enter Message"
        ></textarea>

        <button
          className="bg-primary text-white p-4 rounded-2xl flex items-center justify-center gap-1 hover:text-lightBlack hover:bg-white hover:ring-2 hover:ring-primary transition ease-in-out duration-500 lg:self-end lg:w-[40%]"
          type="submit"
        >
          Send Message
          <RiMailSendLine className="w-7 h-5" />
        </button>
      </form>
    </div>
  )
}

export default Contact
