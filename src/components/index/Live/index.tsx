import React from 'react'
import cn from 'classnames'

import { UndrawPositiveAttitude } from './HeaderPhotoSVG'

export const Liveshow = () => (
  <div>
    <div className="flex flex-col items-center justify-center w-full h-full font-display">
      <h1 className="text-8xl font-bold text-center text-blue-400	">
        ตารางรายการสด
        <span className="ml-2 px-3 text-white text-7xl rounded-lg bg-gradient-to-tl	from-white to-red-300">
          LIVE
        </span>
      </h1>
      <div className="">
        <UndrawPositiveAttitude />
      </div>
    </div>
  </div>
)
