import React from 'react'
import { CTA } from './CTA'
import { Highlights } from './Highlights'
import { Live } from '../common/Live'
import { Intro } from './Intro'
import Footer from '../common/Footer'

export const CountdownContainer = ({ days, hours, minutes, seconds, schedule }) => (
  <div className="pb-32">
    <Intro days={days} hours={hours} minutes={minutes} seconds={seconds} />
    <CTA />
    <Highlights />
    <div className="pb-32"></div>
    {/*<Live schedule={schedule} className="w-full md:w-8/12" />*/}
    <Footer />
  </div>
)
