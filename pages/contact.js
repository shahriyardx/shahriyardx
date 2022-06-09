import Container from "@/components/Layout/Container";
import Main from "@/components/Layout/Main";
import SEO from "@/components/SEO";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiLoaderAlt, BiMailSend } from "react-icons/bi";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const SendIcon = sending ? BiLoaderAlt : BiMailSend;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendMail = async (data) => {
    setSending(true);

    const response = await fetch(`/api/mail`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    setSending(false);

    if (response.success) {
      toast.success(response.message);
      reset();
    } else {
      toast.error(response.message);
    }
  };

  return (
    <Main>
      <SEO title="Contact - Md Shahriyar Alam" />
      <Container className="py-20">
        <h1 className="text-zinc-200 text-3xl font-bold text-center">
          Have any question in mind?
        </h1>
        <p className="text-zinc-500 text-center mt-2">
          Just send me a quick message, I will contact you ASAP 🚀
        </p>

        <div className="mt-10">
          <form
            className="flex flex-col gap-3 sm:gap-5 w-full max-w-2xl mx-auto"
            onSubmit={handleSubmit(sendMail)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-zinc-300 text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="mt-2 bg-zinc-600 placeholder:text-transparent text-white"
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
                <label htmlFor="email" className="text-zinc-300 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="mt-2 bg-zinc-600 placeholder:text-transparent text-white"
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
              <label htmlFor="subject" className="text-zinc-300 text-lg">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="mt-2 bg-zinc-600 placeholder:text-transparent text-white"
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
              <label htmlFor="content" className="text-zinc-300 text-lg">
                Message
              </label>
              <textarea
                id="content"
                placeholder="Write content here..."
                rows={10}
                className="mt-2 bg-zinc-600 placeholder:text-transparent text-white"
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
                className="px-6 py-2 bg-accent text-black font-semibold flex items-center justify-center gap-2"
              >
                <SendIcon className={`text-lg ${sending && "animate-spin"}`} />
                <span>{sending ? "Sending..." : "Send Message"}</span>
              </button>
            </div>
          </form>
        </div>
      </Container>
    </Main>
  );
};

export default Contact;
