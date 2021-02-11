import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import useSWR from 'swr'

import s from '../../assets/styles/Header.module.css'
import { Home } from '../common/Header/Home'

import Group8 from '../../assets/vectors/Group8'
import { Camera, CardV, Carv, Phone, Puzzle } from '../../assets/vectors/Icons'
import Videos from './Videos'
import Blogs from './Blogs'
import Programmes from './Programmes'
import Countdown from 'react-countdown'
import Footer from '../common/Footer'
import { Live } from '../common/Live'
import { SchoolBlogs } from '../SchoolBlogs'

export const Index = ({ stream, schedule, contents, videos }) => {
  const date = new Date()
  console.log(date.getHours())
  const response = useSWR('/api/stage', {
    initialData: stream,
    refreshInterval: 5000
  })

  const updatedStream = response.data || ''

  return (
    <div className="">
      <div className={cn(s.root, s.indexGradient)}>
        <div className="flex flex-col items-center justify-center w-full h-full pb-20 md:pb-32 font-display">
          <div className="pb-4 mt-8 text-3xl font-black text-center text-white md:pb-14 md:mt-16 md:text-6xl">
            <div className="max-w-xs md:max-w-screen-md">
              <Home />
            </div>
            <h1 className="mt-6 md:mt-16 text-shadow">TRIAM UDOM ONLINE</h1>
            <h1 className="text-shadow">OPEN HOUSE 2021</h1>
            <div>
              <h2 className="m-4 text-xl font-bold md:text-4xl md:m-12">12-13 FEBRUARY</h2>
            </div>
            <Link href="/register">
              <button
                type="button"
                className="inline-flex items-center px-10 py-2 text-base font-bold text-white text-purple-200 bg-white border border-transparent rounded-full md:py-4 w-max md:text-3xl font-display focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-200"
              >
                เข้าร่วมงาน
              </button>
            </Link>
          </div>
        </div>
      </div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="headerCurve" clipPathUnits="objectBoundingBox">
            <path d="M 1 0 L 0 0 L 0 0.917969 C 0.0742188 0.984375 0.269531 1.023438 0.503906 0.984375 C 0.871094 0.917969 0.910156 0.9375 0.992188 0.980469 C 0.996094 0.980469 0.996094 0.984375 1 0.984375 Z M 1 0 " />
          </clipPath>
        </defs>
        <defs>
          <clipPath id="headerCurveMobile" clipPathUnits="objectBoundingBox">
            <path d="M 0.601562 0.972656 C 0.683594 0.9375 0.902344 0.96875 1 0.984375 L 1 -0.015625 L 0 -0.015625 L 0 0.941406 C 0.0898438 1.015625 0.496094 1.011719 0.601562 0.972656 Z M 0.601562 0.972656 " />
          </clipPath>
        </defs>
      </svg>
      <div className="relative flex flex-col items-center justify-center -top-16 md:-top-36 font-display">
        <div className="w-4/5 px-5 py-5 mb-3 bg-white shadow-lg md:w-7/12 rounded-3xl md:px-10 smd:py-8">
          <div className="mb-4 ml-2 font-medium md:mb-8">
            <div className="flex items-center text-xs md:text-2xl">
              <span className="px-2 text-xs font-semibold text-white bg-red-400 md:text-2xl">
                LIVE
              </span>
              <span className="ml-2 md:ml-4">ไอ้ตะวัน ประธาน กช. โดนรุมกระทืบ</span>
            </div>
            <div className="mt-1 text-xs text-gray-300 min-w-min md:text-2xl">
              Public Event | ประธานชมรม | 10.30-16.80 น.
            </div>
          </div>
          <div className="frame-height-mobile md:frame-height-desktop">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              src={`${updatedStream.stream}?autoplay=1&mute=1`}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-4/5 px-4 py-4 mb-3 bg-white shadow-lg md:w-7/12 rounded-3xl md:px-12 md:py-16">
          <div className="flex flex-col items-center justify-center mx-auto">
            <h1 className="text-3xl font-semibold md:font-bold md:text-7xl text-blue-75">
              สอบเข้า
            </h1>
            <h1 className="text-xs font-bold text-gray-400 md:text-3xl">6 March 2021</h1>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto">
            <Countdown
              date={1614992400000}
              renderer={({ days }) => (
                <h1 className="text-4xl font-bold md:text-8xl text-blue-75">{days}</h1>
              )}
            />
            <p className="text-xs font-medium text-gray-400 md:text-xl">DAYS LEFT</p>
          </div>
          <div className="flex flex-col items-center justify-center h-20 mx-auto md:h-full">
            <Group8 className="w-24 md:w-full" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center w-4/5 space-x-2 md:justify-between md:w-7/12 md:space-x-2">
          <div className="flex flex-col items-center justify-center w-16 h-16 mt-2 text-xs text-gray-400 bg-white shadow-lg md:mt-4 sm:w-24 sm:h-24 md:font-semibold md:text-lg md:w-44 md:h-44 rounded-xl md:rounded-3xl">
            <Camera className="h-9 sm:h-12 md:h-24" />
            วีดีโอ
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-16 mt-2 text-xs text-gray-400 bg-white shadow-lg md:mt-4 sm:w-24 sm:h-24 md:font-semibold md:text-lg md:w-44 md:h-44 rounded-xl md:rounded-3xl">
            <Puzzle className="h-9 sm:h-12 md:h-24" />
            ชมรม
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-16 mt-2 text-xs text-gray-400 bg-white shadow-lg md:mt-4 sm:w-24 sm:h-24 md:font-semibold md:text-lg md:w-44 md:h-44 rounded-xl md:rounded-3xl">
            <Carv className="my-1 h-7 sm:h-10 md:h-24" />
            การเดินทาง
          </div>
          <div className="flex-col items-center justify-center hidden w-16 h-16 mt-2 text-xs text-gray-400 bg-white shadow-lg md:mt-4 sm:w-24 sm:h-24 2xl:flex md:font-semibold md:text-lg md:w-44 md:h-44 rounded-xl md:rounded-3xl">
            <CardV className="h-9 sm:h-10 md:h-24" />
            การ์ดต้อนรับ
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-16 mt-2 text-xs text-gray-400 bg-white shadow-lg md:mt-4 sm:w-24 sm:h-24 md:font-semibold md:text-lg md:w-44 md:h-44 rounded-xl md:rounded-3xl">
            <Phone className="my-1 h-7 sm:h-10 md:h-24" />
            ติดต่อ
          </div>
        </div>
        <Programmes />
        <SchoolBlogs />
        <Videos videos={videos} />
        <Blogs content={contents} />
        <Live schedule={schedule} />
      </div>
      <Footer />
    </div>
  )
}
