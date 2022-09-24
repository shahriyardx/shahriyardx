import React, { useState } from "react"

import toast from "react-hot-toast"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { BiLoaderAlt, BiMailSend } from "react-icons/bi"

import SEO from "components/shared/SEO"
import Main from "layouts/Main"
import Container from "components/shared/Container"

const container = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 100 },
  show: { y: 0 },
}

const Contact = () => {
  const [sending, setSending] = useState(false)
  const SendIcon = sending ? BiLoaderAlt : BiMailSend

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    name: string
    email: string
    subject: string
    text: string
  }>()

  const sendMail = async (data: any) => {
    setSending(true)

    const response = await fetch(`/api/mail`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json())

    setSending(false)

    if (response.success) {
      toast.success(response.message)
      reset()
    } else {
      toast.error(response.message)
    }
  }

  return (
    <Main>
      <SEO title="Contact - Md Shahriyar Alam" />
      <Container className="py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <h1 className="text-zinc-200 text-3xl font-bold text-center">
              Have any question in mind?
            </h1>
            <p className="text-zinc-500 text-center mt-2">
              Just send me a quick message, I will contact you ASAP 🚀
            </p>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <form
              className="flex flex-col gap-3 sm:gap-5 w-full max-w-2xl mx-auto"
              onSubmit={handleSubmit(sendMail)}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-lg">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="mt-2 text-white !bg-zinc-700"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Please enter your name.",
                      },
                    })}
                  />
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name?.message}
                  </p>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="mt-2 text-white !bg-zinc-700"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Please enter your email.",
                      },
                    })}
                  />
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email?.message}
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-lg">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="mt-2 text-white !bg-zinc-700"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Please enter a subject.",
                    },
                  })}
                />
                <p className="text-red-500 text-xs mt-1">
                  {errors.subject?.message}
                </p>
              </div>

              <div className="flex flex-col">
                <label htmlFor="content" className="text-lg">
                  Message
                </label>
                <textarea
                  id="content"
                  placeholder="Write content here..."
                  rows={10}
                  className="mt-2 text-white !bg-zinc-700"
                  {...register("text", {
                    required: {
                      value: true,
                      message: "Please write your message.",
                    },
                  })}
                />
                <p className="text-red-500 text-xs mt-1">
                  {errors.text?.message}
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={sending}
                  className="px-6 py-2 bg-accent text-black font-semibold flex items-center justify-center gap-2 
                            disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <SendIcon
                    className={`text-lg ${sending && "animate-spin"}`}
                  />
                  <span>{sending ? "Sending..." : "Send Message"}</span>
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </Container>
    </Main>
  )
}

export default Contact
