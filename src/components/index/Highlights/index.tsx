import React from 'react'
import cn from 'classnames'

import s from './Highlights.module.css'
import { Live, Clip, CircleYellow, Giveaway } from './SVGs'

export const Highlights = () => (
  <div>
    <div>
      <div className="flex flex-row mt-20 md:mt-28 h-96 md:h-873 font-display">
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
      <div className="flex flex-row -mt-36 md:-mt-32 h-96 md:h-873 font-display">
        <div className="flex w-full pl-8 text-left relative pt-2 md:pt-32 md:text-center md:h-full">
          <div className="w-full">
            <div className="inline-block text-left">
              <div className="w-40 pt-4 text-base font-normal text-gray-500 md:text-5xl md:leading-normal md:pt-2 md:w-36rem">
                <p>คลิป/บทความที่น่าสนใจ จากรุ่นพี่เตรียมอุดมฯ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-end w-full">
          <div className="absolute">
            <CircleYellow />
          </div>
          <div className="absolute top-20 right-12 md:top-80 md:right-40">
            <Clip />
          </div>
        </div>
      </div>
      <div className="flex flex-row -mt-36 md:-mt-32 h-96 md:h-873 font-display">
        <div className="relative w-full">
          <div className={cn('rounded-full absolute', s.circle3Gradient)} />
          <div className="absolute top-28 left-12 md:top-80 md:left-40">
            <Giveaway />
          </div>
        </div>
        <div className="absolute flex w-full pr-8 relative pt-2 md:pt-32 text-right md:text-center md:h-full">
          <div className="w-full">
            <div className="inline-block text-right">
              <div className="w-64 pt-2 text-base font-normal text-gray-500 md:text-5xl md:leading-normal md:pt-10 md:w-36rem">
                <p>Giveaway ปฏิทินสอบเข้า และ sticker สุดน่ารัก</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
