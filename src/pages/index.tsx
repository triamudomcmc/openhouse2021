import React from 'react'
import Countdown from 'react-countdown'

import { Header } from 'components/index/Header'
import { Home } from 'components/index/Home'
import { Register } from 'components/index/Register'
import { Highlights } from 'components/index/Highlights'

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
      <div>
        <Header days={days} hours={hours} minutes={minutes} seconds={seconds} />
        <Register />
        <Highlights />
      </div>
    )
  }
}

const Index = () => <Countdown date={1613062800000} renderer={renderer} />

export default Index
