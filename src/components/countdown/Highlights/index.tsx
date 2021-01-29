import React from 'react'

import { Live, Clip, CircleYellow, Giveaway, CirclePink, CirclePurple } from './SVGs'

export const Highlights = () => (
  <div>
    <div>
      <h1 className="font-black text-center text-blue-400 mt-32 md:mt-52 text-3xl md:text-7xl">
        Highlights
      </h1>
      <div className="flex flex-wrap justify-center mt-8 md:mt-12 font-display">
        <div className="flex flex-col items-center mt-0 md:mt-16 ml-4 md:ml-8 mr-4 inline-block">
          <div className="bg-white rounded-3xl shadow-lg px-12 py-8 md:px-24 md:py-14 mb-6">
            <div className="relative w-52 md:w-80">
              <div className="rounded-full bg-gradient-to-b from-pink-100 to-pink-0 w-40 h-40 md:w-56 md:h-56" />
              <div className="absolute top-2 left-12 md:top-12 md:left-14">
                <Live className="w-44 md:w-64" />
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full text-right items-center justify-center">
            <div className="hidden md:block text-base font-normal text-gray-500 text-center md:text-2xl md:leading-normal md:w-80">
              <p>Live แนะนำสายการเรียน</p>
              <p>สัมภาษณ์รุ่นพี่ และคอนเทนต์น่าสนใจอื่น ๆ อีกมากมาย</p>
            </div>
            <div className="block md:hidden text-base font-normal text-gray-500 text-center md:text-2xl md:leading-normal md:w-80">
              <p className="w-64 md:w-auto">
                Live แนะนำสายการเรียน สัมภาษณ์รุ่นพี่ และคอนเทนต์น่าสนใจอื่น ๆ อีกมากมาย
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16 mx-4 inline-block">
          <div className="bg-white rounded-3xl shadow-lg px-12 py-8 md:px-24 md:py-14 mb-6">
            <div className="flex justify-center items-center relative w-52 md:w-80">
              <div className="rounded-full bg-gradient-to-b from-yellow-100 to-yellow-0 w-40 h-40 md:w-56 md:h-56" />
              <div className="absolute -top-6 left-1 md:top-12 md:-left-4">
                <Clip className="w-48 md:w-72" />
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full text-right md:items-center md:justify-center">
            <div className="mt-2 md:mt-6 text-base font-normal text-center text-gray-500 w-44 md:text-center md:text-2xl md:leading-normal md:w-64">
              <p>คลิป/บทความที่น่าสนใจ จากรุ่นพี่เตรียมอุดมฯ</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16 ml-4 mr-4 md:mr-8 inline-block">
          <div className="bg-white rounded-3xl shadow-lg px-12 py-8 md:px-24 md:py-14 mb-6">
            <div className="flex flex-row-reverse relative w-52 md:w-80">
              <div className="rounded-full bg-gradient-to-b from-purple-100 to-purple-0 w-40 h-40 md:w-56 md:h-56" />
              <div className="absolute -top-14 right-11 md:-top-10 md:left-2">
                <Giveaway className="w-40 md:w-64" />
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full text-right md:items-center md:justify-center">
            <div className="mt-2 md:mt-6 text-base font-normal text-center text-gray-500 w-40 text-center md:text-2xl leading-normal md:w-64">
              <p>Giveaway ปฏิทินสอบเข้า และ sticker สุดน่ารัก</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
