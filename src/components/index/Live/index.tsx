import React from 'react'
import Image from 'next/image'

export const Liveshow = () => (
  <div>
    <div className="flex flex-col items-center justify-center w-full h-full mt-2 md:mt-24 font-display">
      <h1 className="text-2xl font-bold text-center text-blue-400 md:text-6xl lg:text-8xl">
        ตารางรายการสด
        <span className="px-2 ml-1 text-xl text-white rounded md:ml-2 md:px-3 md:text-5xl lg:text-7xl md:rounded-lg bg-gradient-to-tl from-white to-red-300">
          LIVE
        </span>
      </h1>
      <div className="w-9/12 mx-auto lg:w-max">
        <Image
          src="/assets/vectors/UndrawPositiveAttitude.svg"
          width={854}
          height={441}
        />
      </div>
      <div className="flex items-center justify-center w-full mt-1 md:mt-10"></div>
    </div>
  </div>
)
