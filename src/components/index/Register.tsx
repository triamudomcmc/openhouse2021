import React from 'react'
import Image from 'next/image'

export const Register = () => (
  <div className="flex flex-col items-center justify-center mx-auto mt-8">
    <button
      type="button"
      className="inline-flex items-center px-10 py-4 text-xs font-bold text-white bg-indigo-600 border border-transparent rounded-full w-max md:text-3xl bg-gradient-to-r from-blue-200 via-purple-200 to-red-200 font-display focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-200"
    >
      ลงทะเบียน
    </button>
    <div className="w-24 mt-2 md:w-48 md:mt-8">
      <Image src="/assets/tucmc.png" width={1071} height={162} />
    </div>
  </div>
)
