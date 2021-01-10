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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-red-200 font-display">
        <div className="text-3xl font-bold text-center text-white md:text-6xl text-shadow">
          <Home />
          <h1 className="mt-4">TRIAM UDOM</h1>
          <h1>OPENHOUSE 2021</h1>
        </div>
        <div className="flex flex-row justify-center mt-4 md:mt-8 font-display">
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
  }
}

const Index = () => <Countdown date={1613062800000} renderer={renderer} />

export default Index
