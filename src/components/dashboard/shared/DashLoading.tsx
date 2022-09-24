import React from "react"
import { BiLoaderAlt } from "react-icons/bi"

const DashLoading = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex items-center gap-2">
        <BiLoaderAlt className="text-2xl animate-spin" />
        <span>Loading...</span>
      </div>
    </div>
  )
}

export default DashLoading
