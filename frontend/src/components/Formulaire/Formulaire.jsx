import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import logo from "../../assets/Logo.png"

export default function Formulaire({type, href, text, className, children}) {
  return (
    <form className={`${className} ${'flex flex-col py-[30px] text-center w-[642px] shadow-2xl mt-8 ml-9'}`}> 
      <div className="logo ml-[50%] translate-x-[-30%]">
        <img src={logo} alt="Logo du site" />
      </div>
      <h3 className='font-bold text-[32px] mt-7'>{type} to <span className='text-primary'>Pro</span><span className='text-secondary'>Chat</span></h3>
      <p>Create your project and chatting</p>
      <div className="input my-[35px] ml-[50%] translate-x-[-85%]">
        {children}
      </div>
      <div className="bottom flex justify-between text-left items-center w-[85%] ml-12">
        <div className='w-[50%]'>
            <a href={href}>{text}</a>
        </div>
        <Button>Verifier</Button>
      </div>
    </form>
  )
}
