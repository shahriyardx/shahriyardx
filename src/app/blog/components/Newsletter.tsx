"use client"

import { cn } from "@/tools/tw"
import React, { HTMLAttributes, useEffect, useState } from "react"
import toast from "react-hot-toast"

type Props = HTMLAttributes<HTMLDivElement>
const Newsletter = ({ className, ...props }: Props) => {
  const [email, setEmail] = useState("")
  const [subbed, setSubbed] = useState(false)

  const handleSubscribe = () => {
    if (!email.trim()) return toast.error("please enter an email")

    fetch(`/api/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setEmail("")
          setSubbed(true)
          localStorage.setItem("subbed", "true")
          toast.success("subscribed successfully")
        } else {
          toast.error(data.message)
          setSubbed(data.subbed)
          localStorage.setItem("subbed", data.subbed)
        }
      })
  }

  useEffect(() => {
    const subbed = Boolean(localStorage.getItem("subbed"))
    setSubbed(subbed)
  }, [])

  return (
    <div className={cn(className)} {...props}>
      <div className="border-2 border-zinc-600 rounded-md p-5">
        <h1 className="text-xl font-semibold">Newsletter</h1>
        <p className="text-xs text-zinc-400">
          Get future posts notifications directly in your email
        </p>
        {!subbed ? (
          <>
            <div className="mt-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              onClick={handleSubscribe}
              className="px-3 py-2 bg-zinc-900 rounded-md mt-3"
            >
              Subscribe
            </button>
          </>
        ) : (
          <div className="mt-5 text-green-500">
            You are subscribed to this newsletter ✨
          </div>
        )}
      </div>
    </div>
  )
}

export default Newsletter
