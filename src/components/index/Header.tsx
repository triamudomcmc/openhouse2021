import React from 'react'
import cn from 'classnames'

import { Home } from './Home'
import styles from './Header.module.css'

export const Header = ({ days, hours, minutes, seconds }) => {
  const rootClassName = cn(styles.root, styles.gradient)

  return (
    <div className="min-h-screen font-display">
      <div className={rootClassName}>
        <div className="flex flex-col items-center justify-center w-full h-full pb-8 md:pb-12 font-display">
          <div className="text-3xl font-bold text-center text-white md:text-6xl">
            <Home />
            <h1 className="mt-8 md:mt-16 text-shadow">TRIAM UDOM</h1>
            <h1 className="text-shadow">OPENHOUSE 2021</h1>
          </div>
        </div>
      </div>

      <svg width="0" height="0">
        <defs>
          <clipPath id="headerCurve" clipPathUnits="objectBoundingBox">
            <path d="M 0.503906 0.972656 C 0.265625 1.035156 0.0625 0.972656 -0.0117188 0.871094 L -0.0117188 -0.105469 L 1.011719 -0.105469 L 1.011719 0.972656 C 0.921875 0.90625 0.890625 0.871094 0.503906 0.972656 Z M 0.503906 0.972656" />
          </clipPath>
        </defs>
        <defs>
          <clipPath id="headerCurveMobile" clipPathUnits="objectBoundingBox">
            <path d="M 0.601562 0.972656 C 0.683594 0.9375 0.902344 0.96875 1 0.984375 L 1 -0.015625 L 0 -0.015625 L 0 0.941406 C 0.0898438 1.015625 0.496094 1.011719 0.601562 0.972656 Z M 0.601562 0.972656 " />
          </clipPath>
        </defs>
      </svg>

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
      <div className="text-center text-gray-400 text-2xl">
        <p>
          เมื่อโรงเรียนเตรียมอุดมศึกษาถูกเนรมิตเป็นเมืองที่จะนำทุกคนสู่บรรยากาศแห่งความอบอุ่น
        </p>
        <p>
          เมื่อสายการเรียนกลายมาเป็นบ้านแต่ละหลังที่ถึงแม้ว่าจะมีเอกลักษณ์ที่แตกต่าง
        </p>
        <p>แต่มีใจที่พร้อมต้อนรับทุกคนมาเป็นส่วนหนึ่งของครอบครัวเตรียมอุดมฯ</p>
      </div>
    </div>
  )
}
