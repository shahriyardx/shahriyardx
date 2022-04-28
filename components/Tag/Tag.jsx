import React from 'react'

const tagMap = {
  HTML: {
    bg: 'bg-[#F53900]/20',
    text: 'text-[#F53900]'
  },
  CSS: {
    bg: 'bg-[#2965F1]/20',
    text: 'text-[#2965F1]'
  },
  JavaScript: {
    bg: 'bg-[#F7DF1E]/10',
    text: 'text-[#F7DF1E]'
  },
  Python: {
    bg: 'bg-[#a974f9]/10',
    text: 'text-[#f4bc84]'
  },
  ReactJs: {
    bg: 'bg-[#85D8F8]/10',
    text: 'text-[#85D8F8]'
  },
  NodeJs: {
    bg: 'bg-[#75AC64]/20',
    text: 'text-[#75AC64]'
  },
  NextJs: {
    bg: 'bg-black',
    text: 'text-white'
  },
  TailwindCss: {
    bg: 'bg-[#3B49DF]/20',
    text: 'text-[#3B49DF]'
  }
}

const Tag = (props) => {
  const { bg: bgColor, text: textColor } = tagMap[props.text]
  const styles = `${bgColor} ${textColor}`
  return (
    <div className={`px-2 py-1 rounded-lg text-sm ${styles} cursor-pointer`}>
      # {props.text}
    </div>
  )
}

export default Tag