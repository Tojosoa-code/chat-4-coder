import React from 'react'
import Formulaire from "../../components/Formulaire/Formulaire"
import Input from '../../components/Input/Input'


export default function Register() {
  return (
    <div>
        <div className="bg-secondary w-[752px] h-[500px] left-0 top-0 absolute"></div>
        <Formulaire type="Register"  className="z-10 translate-x-[90%] translate-y-[15%]  bg-white">
          <Input type="email" placeholder="Email" icon="fa-solid fa-envelope" className="mb-[20px]"/>
          <Input type="password" placeholder="Password" icon="fa-solid fa-eye-slash" className="mb-[20px]"/>  
          <Input type="password" placeholder="Confirm Password" icon="fa-solid fa-eye-slash"/>
        </Formulaire>
    </div>
  )
}
