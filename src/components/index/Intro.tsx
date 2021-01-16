import React from 'react'
import { Header } from 'components/common/Header'

export const Intro = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="font-display">
      <Header />
      <div className="relative flex flex-row justify-center -top-8 md:-top-14 font-display">
        <div className="flex flex-row font-bold text-center">
          <div>
            <div className="w-12 p-2 text-xl text-gray-600 bg-white shadow-md md:p-4 md:text-5xl md:w-24 rounded-xl">
              <h1>{days}</h1>
            </div>
            <h1 className="mt-2 text-sm text-gray-400 md:text-2xl">DAY</h1>
          </div>
          <div className="ml-2 md:ml-4">
            <div className="w-12 p-2 text-xl text-gray-600 bg-white shadow-md md:p-4 md:w-24 rounded-xl md:text-5xl">
              <h1>{hours}</h1>
            </div>
            <h1 className="mt-2 text-sm text-gray-400 md:text-2xl">HOUR</h1>
          </div>
          <div className="ml-2 md:ml-4">
            <div className="w-12 p-2 text-xl text-gray-600 bg-white shadow-md md:p-4 md:w-24 rounded-xl md:text-5xl">
              <h1>{minutes}</h1>
            </div>
            <h1 className="mt-2 text-sm text-gray-400 md:text-2xl">MIN</h1>
          </div>
          <div className="ml-2 md:ml-4">
            <div className="w-12 p-2 text-xl text-gray-600 bg-white shadow-md md:p-4 md:w-24 rounded-xl md:text-5xl">
              <h1>{seconds}</h1>
            </div>
            <h1 className="mt-2 text-sm text-gray-400 md:text-2xl">SEC</h1>
          </div>
        </div>
      </div>
      <div className="max-w-xs px-4 mx-auto text-sm font-normal tracking-wide text-center text-gray-400 md:text-2xl md:max-w-5xl">
        <p>
          พบกับ Triam Udom Online Open House 2021
          งานเปิดบ้านในรูปแบบออนไลน์ครั้งแรกของโรงเรียนเตรียมอุดมศึกษา
          เปิดหน้าจอแล้วมาพบกัน 12-13 กุมภาพันธ์นี้
        </p>
      </div>
    </div>
  )
}
