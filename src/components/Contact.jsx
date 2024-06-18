import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { RiMailSendLine } from 'react-icons/ri'

const Contact = () => {
  const [sendMsg, setSendMsg] = useState(null)
  const formRef = useRef()

  const handleEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_iz1xi0h', 'template_fdqjlle', formRef.current, {
        publicKey: 'ePt-fCck01QMroed-',
      })
      .then(
        (result) => {
          setSendMsg('Message Sent ✅')
          formRef.current.reset()
          console.log(result.text)
          setTimeout(() => setSendMsg(''), 3000)
        },
        (error) => {
          setSendMsg("Message didn't delivery ❌")
          console.log(error)
          setTimeout(() => setSendMsg(''), 3000)
        }
      )
  }

  return (
    <section id="contact" className="flex flex-col items-center mt-28 pb-16">
      <h2 className="text-3xl font-semibold tracking-wide uppercase my-4 lg:text-4xl dark:text-white">
        Contact
      </h2>

      <form
        ref={formRef}
        onSubmit={handleEmail}
        className="flex flex-col items-center gap-5 w-full my-7 md:w-[70%] lg:w-[50%]"
      >
        {sendMsg && (
          <p className="bg-primary text-white w-fit py-1 px-2 rounded-lg">
            {sendMsg}
          </p>
        )}
        <input
          className="w-full border border-primary px-4 py-3 rounded-lg outline-none placeholder:text-sm focus:shadow-md focus:shadow-primary"
          type="text"
          name="from_name"
          placeholder="Enter your name"
          required
        />
        <input
          className="w-full border border-primary px-4 py-3 rounded-lg outline-none placeholder:text-sm focus:shadow-md focus:shadow-primary"
          type="email"
          name="from_email"
          placeholder="Enter email address"
          required
        />
        <textarea
          className="w-full border border-primary px-4 py-3 rounded-lg outline-none placeholder:text-sm focus:shadow-md focus:shadow-primary h-36 resize-none"
          name="message"
          placeholder="Enter Message"
          required
        ></textarea>

        <button
          className={`bg-primary text-white p-4 rounded-2xl flex items-center justify-center gap-1 hover:shadow-lg hover:shadow-primary hover:text-lightBlack hover:bg-white hover:ring-2 hover:ring-primary transition ease-in-out duration-500 lg:self-end lg:w-[40%] ${
            sendMsg && 'disabled:opacity-75 hover:cursor-not-allowed'
          }`}
          type="submit"
          disabled={sendMsg}
        >
          Send Message
          <RiMailSendLine className="w-7 h-5" />
        </button>
      </form>
    </section>
  )
}

export default Contact
