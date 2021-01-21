import React from 'react'
import { CTA } from './CTA'
import { Highlights } from './Highlights'
import { Live } from '../common/Live'
import { Intro } from './Intro'

export const CountdownContainer = ({
  days,
  hours,
  minutes,
  seconds,
  schedule,
}) => (
  <div className="pb-32">
    <Intro days={days} hours={hours} minutes={minutes} seconds={seconds} />
    <CTA />
    <Highlights />
    <Live schedule={schedule} />
  </div>
)
