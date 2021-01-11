import React from 'react'
import { Home } from './Home'

export const Header = ({ days, hours, minutes, seconds }) => (
  <div className="min-h-screen font-display">
    <div className="w-full curved bg-gradient-to-br from-blue-200 via-purple-200 to-red-200">
      <div className="flex flex-col items-center justify-center w-full h-full pb-6 md:pb-12 font-display">
        <div className="text-3xl font-bold text-center text-white md:text-6xl">
          <Home />
          <h1 className="mt-4 text-shadow">TRIAM UDOM</h1>
          <h1 className="text-shadow">OPENHOUSE 2021</h1>
        </div>
      </div>
    </div>

    <svg width="0" height="0" className="hidden">
      <defs>
        <clipPath id="headerCurve" clipPathUnits="objectBoundingBox">
          <path d="M 0.503906 0.972656 C 0.265625 1.035156 0.0625 0.972656 -0.0117188 0.871094 L -0.0117188 -0.105469 L 1.011719 -0.105469 L 1.011719 0.972656 C 0.921875 0.90625 0.890625 0.871094 0.503906 0.972656 Z M 0.503906 0.972656" />
        </clipPath>
      </defs>
    </svg>

    <div className="relative flex flex-row justify-center pb-3 mt-4 -top-12 md:-top-24 md:mt-8 font-display">
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
  </div>
)
