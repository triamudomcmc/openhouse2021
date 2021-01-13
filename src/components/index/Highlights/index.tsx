import React from 'react'

import {Live, Clip, CircleYellow, Giveaway, CirclePink, CirclePurple} from './SVGs'

export const Highlights = () => (
  <div>
    <div>
      <h1 className="hidden md:block mt-52 text-center font-black text-blue-400 text-7xl">
        Highlights
      </h1>
      <div className="flex flex-wrap md:justify-center mt-2 md:mt-12 font-display">
        <div className="flex flex-row md:flex-col items-center mt-16 md:ml-14 md:mr-28 w-full md:w-1/4">
          <div className="relative w-80">
            <div className="hidden md:block rounded-full bg-gradient-to-b from-pink-100 to-pink-0 w-80 h-80"/>
            <div className="inline-block md:hidden">
              <CirclePink/>
            </div>
            <div className="absolute left-8 top-10 md:top-20 md:left-12">
              <Live className="w-44 md:w-auto"/>
            </div>
          </div>
          <div className="flex flex-col text-right h-full md:items-center md:justify-center">
            <div
              className="hidden md:block text-base text-right md:text-center font-normal text-gray-500 md:text-2xl md:leading-normal md:w-80">
              <p>
                Live แนะนำสายการเรียน
              </p>
              <p>สัมภาษณ์รุ่นพี่ และคอนเทนต์น่าสนใจอื่น ๆ
                อีกมากมาย
              </p>
            </div>
            <div className="absolute right-0 md:hidden text-base text-right md:text-center font-normal text-gray-500 md:text-2xl md:leading-normal w-72">
              <div className="absolute -top-6">
                <h1 className="block md:hidden text-xl text-right font-black text-blue-400 pb-1">
                  Highlights
                </h1>
                <p>
                  Live แนะนำสายการเรียน สัมภาษณ์รุ่นพี่
                </p>
                <p>และคอนเทนต์น่าสนใจอื่น ๆ อีกมากมาย
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse md:flex-col md:items-center md:justify-center -mt-10 md:mt-12 md:mx-14 w-full md:w-1/4">
          <div className="relative w-80 text-right">
            <div className="hidden md:block rounded-full bg-gradient-to-b from-yellow-100 to-yellow-0 w-80 h-80"/>
            <div className="inline-block md:hidden">
              <CircleYellow/>
            </div>
            <div className="absolute top-0 right-10 md:top-12 md:-left-4">
              <Clip className="w-48 md:w-auto"/>
            </div>
          </div>
          <div className="flex sm:items-center sm:justify-center text-right">
            <div
              className="w-58 ml-7 sm:ml-0 md:ml-0 mt-6 sm:mt-0 md:mt-0 text-base text-left md:text-center font-normal text-gray-500 md:text-2xl md:leading-normal md:w-64">
              <p>
                คลิป/บทความที่น่าสนใจ
                จากรุ่นพี่เตรียมอุดมฯ
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col md:items-center md:justify-center -mt-10 md:mt-12 md:mx-14 w-full md:w-1/4">
          <div className="relative w-80">
            <div className="hidden md:block rounded-full bg-gradient-to-b from-purple-100 to-purple-0 w-80 h-80"/>
            <div className="inline-block md:hidden">
              <CirclePurple/>
            </div>
            <div className="absolute left-8 -top-10 md:-top-4 md:left-4">
              <Giveaway className="w-44 md:w-auto"/>
            </div>
          </div>
          <div className="flex sm:items-center sm:justify-center text-right">
            <div
              className="hidden sm:hidden md:block ml-0 mt-0 text-center font-normal text-gray-500 text-2xl leading-normal w-64">
              <p>
                Giveaway ปฏิทินสอบเข้า และ sticker สุดน่ารัก
              </p>
            </div>
            <div
              className="absolute sm:hidden md:hidden right-10 w-44 ml-9 mt-8 text-base text-right font-normal text-gray-500">
              <p>
                Giveaway ปฏิทินสอบเข้า และ sticker สุดน่ารัก
              </p>
            </div>
            <div
              className="hidden sm:block md:hidden ml-0 mt-0 text-center font-normal text-gray-500 text-base leading-normal w-full">
              <p>
                Giveaway ปฏิทินสอบเข้า และ sticker สุดน่ารัก
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
