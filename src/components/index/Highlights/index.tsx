import React from 'react'

import {
  Live,
  Clip,
  CircleYellow,
  Giveaway,
  CirclePink,
  CirclePurple,
} from './SVGs'

export const Highlights = () => (
  <div>
    <div>
      <h1 className="hidden font-black text-center text-blue-400 md:block mt-52 text-7xl">
        Highlights
      </h1>
      <div className="flex flex-wrap mt-2 md:justify-center md:mt-12 font-display">
        <div className="flex flex-row items-center w-full mt-16 md:flex-col md:ml-14 md:mr-28 md:w-1/4">
          <div className="relative w-80">
            <div className="hidden rounded-full md:block bg-gradient-to-b from-pink-100 to-pink-0 w-80 h-80" />
            <div className="inline-block md:hidden">
              <CirclePink />
            </div>
            <div className="absolute left-8 top-10 md:top-20 md:left-12">
              <Live className="w-44 md:w-auto" />
            </div>
          </div>
          <div className="flex flex-col h-full text-right md:items-center md:justify-center">
            <div className="hidden text-base font-normal text-right text-gray-500 md:block md:text-center md:text-2xl md:leading-normal md:w-80">
              <p>Live แนะนำสายการเรียน</p>
              <p>สัมภาษณ์รุ่นพี่ และคอนเทนต์น่าสนใจอื่น ๆ อีกมากมาย</p>
            </div>
            <div className="absolute right-0 text-base font-normal text-right text-gray-500 md:hidden md:text-center md:text-2xl md:leading-normal w-72">
              <div className="absolute -top-6">
                <h1 className="block pb-1 text-xl font-black text-right text-blue-400 md:hidden">
                  Highlights
                </h1>
                <p>Live แนะนำสายการเรียน สัมภาษณ์รุ่นพี่</p>
                <p>และคอนเทนต์น่าสนใจอื่น ๆ อีกมากมาย</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse w-full -mt-10 md:flex-col md:items-center md:justify-center md:mt-12 md:mx-14 md:w-1/4">
          <div className="relative text-right w-80">
            <div className="hidden rounded-full md:block bg-gradient-to-b from-yellow-100 to-yellow-0 w-80 h-80" />
            <div className="inline-block md:hidden">
              <CircleYellow />
            </div>
            <div className="absolute top-0 right-10 md:top-12 md:-left-4">
              <Clip className="w-48 md:w-auto" />
            </div>
          </div>
          <div className="flex text-right sm:items-center sm:justify-center">
            <div className="mt-6 text-base font-normal text-left text-gray-500 w-58 ml-7 sm:ml-0 md:ml-0 sm:mt-0 md:mt-0 md:text-center md:text-2xl md:leading-normal md:w-64">
              <p>คลิป/บทความที่น่าสนใจ จากรุ่นพี่เตรียมอุดมฯ</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full -mt-10 md:flex-col md:items-center md:justify-center md:mt-12 md:mx-14 md:w-1/4">
          <div className="relative w-80">
            <div className="hidden rounded-full md:block bg-gradient-to-b from-purple-100 to-purple-0 w-80 h-80" />
            <div className="inline-block md:hidden">
              <CirclePurple />
            </div>
            <div className="absolute left-8 -top-10 md:-top-4 md:left-4">
              <Giveaway className="w-44 md:w-auto" />
            </div>
          </div>
          <div className="flex text-right sm:items-center sm:justify-center">
            <div className="hidden w-64 mt-0 ml-0 text-2xl font-normal leading-normal text-center text-gray-500 sm:hidden md:block">
              <p>Giveaway ปฏิทินสอบเข้า และ sticker สุดน่ารัก</p>
            </div>
            <div className="absolute mt-8 text-base font-normal text-right text-gray-500 sm:hidden md:hidden right-10 w-44 ml-9">
              <p>Giveaway ปฏิทินสอบเข้า และ sticker สุดน่ารัก</p>
            </div>
            <div className="hidden w-full mt-0 ml-0 text-base font-normal leading-normal text-center text-gray-500 sm:block md:hidden">
              <p>Giveaway ปฏิทินสอบเข้า และ sticker สุดน่ารัก</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
