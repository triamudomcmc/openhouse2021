import React from 'react'
import cn from 'classnames'

import s from './Highlights.module.css'
import { Live } from './LiveSVG'
import { Clip } from './ClipSVG'

export const Highlights = () => (
  <div>
    <div className="flex flex-row mt-20 md:mt-28 h-873 font-display">
      <div className="relative w-full">
        <div className={cn('rounded-full absolute', s.circle1Gradient)} />
        <div className="absolute top-28 left-12 md:top-80 md:left-40">
          <Live />
        </div>
      </div>
      <div className="absolute flex w-full pr-8 text-right md:relative md:items-center md:text-center md:h-full">
        <div className="w-full">
          <div className="inline-block text-right">
            <h1 className="text-xl font-black text-blue-400 md:text-8xl">
              Highlights
            </h1>
            <div className="w-64 pt-2 text-base font-normal text-gray-500 md:text-5xl md:leading-normal md:pt-10 md:w-36rem">
              <p>
                Live แนะนำสายการเรียน สัมภาษณ์รุ่นพี่ และคอนเทนต์น่าสนใจอื่น ๆ
                อีกมากมาย
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-row -mt-32 h-873 font-display">
      <div className="absolute flex w-full pl-8 text-left md:relative pt-32 md:text-center md:h-full">
        <div className="w-full">
          <div className="inline-block text-left">
            <div className="w-64 pt-2 text-base font-normal text-gray-500 md:text-5xl md:leading-normal md:pt-2 md:w-36rem">
              <p>คลิป/บทความที่น่าสนใจ จากรุ่นพี่เตรียมอุดมฯ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="">
          <div className={cn('rounded-full absolute', s.circle2Gradient)} />
        </div>
        <div className="absolute top-28 right-12 md:top-80 md:right-40">
          <Clip />
        </div>
      </div>
    </div>
  </div>
)
