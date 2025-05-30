import React from 'react'

export default function Button({children}) {
  return (
    <button className='bg-primary text-white w-[229px] h-[70px] font-[18px] hover:opacity-75'>{children}</button>
  )
}
