import React from 'react'

import { UndrawPositiveAttitude } from './HeaderPhotoSVG'
import {Timetable} from "./Timetable";

export const Liveshow = () => (
  <div>
    <div className="flex flex-col mt-2 md:mt-24 items-center justify-center w-full h-full font-display">
      <h1 className="text-2xl md:text-8xl font-bold text-center text-blue-400	">
        ตารางรายการสด
        <span className="ml-1 md:ml-2 px-2 md:px-3 text-white text-xl md:text-7xl rounded md:rounded-lg bg-gradient-to-tl	from-white to-red-300">
          LIVE
        </span>
      </h1>
      <div className="">
        <UndrawPositiveAttitude />
      </div>
      <div className="mt-1 md:mt-10 w-full flex items-center justify-center">
        <Timetable className="flex flex-col md:flex-row" />
      </div>
    </div>
  </div>
)
