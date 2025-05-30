import React from 'react'

export default function Input({type, placeholder, icon, className}) {
  return (
    <div className='relative w-[400px]'>
        <input type={type} className={`${className} ${"border-[1px] border-black p-[10px] pl-[30px] font-light w-[542px] h-[60px] rounded-[5px] placeholder:text-black outline-none"}`} placeholder={placeholder}/>
        <i className={`${icon} ${"text-[20px] absolute z-10 left-[490px] top-[19px]"}`}/>
    </div>
  )
}
