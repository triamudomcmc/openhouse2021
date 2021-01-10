import { Home } from 'components/index/Home'
import React from 'react'
import Countdown from 'react-countdown'

const renderer = ({ completed, days, hours, minutes, seconds }) => {
  if (completed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-red-200 font-display">
        <div className="text-6xl font-bold text-center text-white text-shadow">
          <Home />
          <h1 className="mt-4">TRIAM UDOM</h1>
          <h1>OPENHOUSE 2021</h1>
        </div>
      </div>
    )
  } else {
    return (
    <div className="min-h-screen font-display">
        <div className="curved bg-gradient-to-br from-blue-200 via-purple-200 to-red-200 w-full">
          <div className='flex flex-col items-center justify-center font-display w-full h-full pb-12'>
            <div className="text-3xl font-bold text-center text-white md:text-6xl font-bold">
            <Home />
            <h1 className="mt-4 text-shadow">TRIAM UDOM</h1>
            <h1 className="text-shadow">OPENHOUSE 2021</h1>
          </div>
          </div>
        </div>
        <svg width="0" height="0">
        <defs>
          <clipPath id="myClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.503906 0.972656 C 0.265625 1.035156 0.0625 0.972656 -0.0117188 0.871094 L -0.0117188 -0.105469 L 1.011719 -0.105469 L 1.011719 0.972656 C 0.921875 0.90625 0.890625 0.871094 0.503906 0.972656 Z M 0.503906 0.972656"/>
          </clipPath>
        </defs>
      </svg>
        <div className='w-full'>
          <div className="w-full h-96">
            <div className="relative -top-24 pb-3 flex flex-row justify-center mt-4 md:mt-8 font-display">
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
            <div className="bg-white w-full h-full shadow-md">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Index = () => <Countdown date={1613062800000} renderer={renderer} />

export default Index
