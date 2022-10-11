import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { FiTwitter } from "react-icons/fi"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { GiHeartBeats } from "react-icons/gi"

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-6 bg-highlights py-16">
      <h3 className="text-3xl font-semibold tracking-wide uppercase lg:text-4xl">
        Get In <span className="text-primary">Touch</span>
      </h3>

      <div className="flex gap-8 my-4">
        <a
          className="hover:text-primary transition-all ease-in-out duration-300 "
          href="https://www.linkedin.com/in/muralikrishnan98/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="w-6 h-5 lg:h-7 lg:w-8" />
        </a>
        <a
          className="hover:text-primary transition-all ease-in-out duration-300 "
          href="https://twitter.com/muralikrishn_an"
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter className="w-6 h-5 lg:h-7 lg:w-8" />
        </a>
        <a
          className="hover:text-primary transition-all ease-in-out duration-300 "
          href="https://github.com/krish-98"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="w-6 h-5 lg:h-7 lg:w-8" />
        </a>
        <a
          className="hover:text-primary transition-all ease-in-out duration-300 "
          href="mailto:muralikrishnanm98@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineMail className="w-6 h-5 lg:h-7 lg:w-8" />
        </a>
      </div>

      <p>
        Built by{" "}
        <span className="text-primary ml-1">
          Murali Krishnan <GiHeartBeats className="inline-block" />
        </span>
      </p>
    </div>
  )
}

export default Footer
