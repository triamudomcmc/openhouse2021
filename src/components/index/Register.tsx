import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import cs from './styles/Register.module.css'

export const Register = () => (
  <div className="flex flex-col items-center justify-center mx-auto mt-8">
    <button
      type="button"
      className={cn(cs.buttonRoot,cs.buttonGradiant)}
    >
      ลงทะเบียน
    </button>
    <div className="w-24 mt-2 md:w-48 md:mt-8">
      <Image src="/assets/tucmc.png" width={1071} height={162} />
    </div>
  </div>
)
