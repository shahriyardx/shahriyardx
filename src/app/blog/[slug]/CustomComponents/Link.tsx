import React, { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLAnchorElement>

const Link = (props: Props) => {
  // @ts-expect-error src-exists
  const origin = new URL(props.href).origin

  return (
    <a {...props} className="m-0 p-0">
      {/* eslint-disable-next-line */} {/* prettier-ignore */}
      <img
        src={`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${origin}&size=16`}
        className="w-5 h-5 rounded-full m-0 p-0 inline-block mr-2"
        onError={(e) => {
          { /* @ts-expect-error src-exists */ } {/* prettier-ignore */}
          return (e.target.src = "/fallback-ico.ico")
        }}
      />
      <span className="truncate">{props.children}</span>
    </a>
  )
}

export default Link
