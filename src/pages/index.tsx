import React from 'react'
import Countdown from 'react-countdown'

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {days} วัน {hours} ชั่วโมง {minutes} นาที {seconds} วินาที
    </span>
  )
}

const Index = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-red-200">
    <div className="text-6xl font-bold font-display">
      TRIAM UDOM OPENHOUSE 2021
    </div>
    <div className="mt-8 text-6xl font-display">
      <Countdown date={1613062800000} renderer={renderer} />
    </div>
  </div>
)

export default Index
