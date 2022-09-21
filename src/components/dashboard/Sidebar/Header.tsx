import React from "react"
import Image from "next/image"

const Header = () => {
  return (
    <div className="p-5 flex items-center">
      <div className="flex items-center gap-5">
        <Image
          src="/images/me.jpg"
          width={56}
          height={56}
          alt="Shahriyar"
          objectFit="cover"
          className="rounded-md aspect-square"
        />
        <div>
          <div className="text-lg flex flex-col leading-5">
            <span className="font-bold">Shahriyar</span>
            <span>Alam</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
