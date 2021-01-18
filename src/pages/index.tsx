import Countdown from 'react-countdown'

import { Home } from 'components/common/Header/Home'
import { Intro } from 'components/index/Intro'
import {CTA} from "../components/index/CTA";

const Renderer = ({ completed, days, hours, minutes, seconds }) => {
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
      <div className="pb-32">
        <Intro days={days} hours={hours} minutes={minutes} seconds={seconds} />
        <CTA/>
      </div>
    )
  }
}

const Index = () => (
  <Countdown
    date={1613062800000}
    renderer={({ completed, days, hours, minutes, seconds }) => (
      <Renderer
        completed={completed}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    )}
  />
)

export default Index
