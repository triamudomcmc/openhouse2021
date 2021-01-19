import React from 'react'
import { GetStaticProps } from 'next'
import Countdown from 'react-countdown'

import { CountdownContainer } from 'components/countdown'
import { Index } from 'components/index'

import {getAllLiveSchedule, getStageStream} from 'lib/db-admin'
import TimetableData from 'types/Timetable'
import Stream from "../types/Stream";

type Props = {
  schedule: TimetableData[],
  stream: Stream
}

const Renderer = ({ completed, days, hours, minutes, seconds, schedule , stream }) => {
  if (completed) {
    return <Index stream={stream}/>
  } else {
    return (
      <CountdownContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        schedule={schedule}
      />
    )
  }
}

const IndexPage = ({ schedule, stream }) => (
  <Countdown
    date={1610988496000}
    renderer={({ completed, days, hours, minutes, seconds }) => (
      <Renderer
        completed={completed}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        schedule={schedule}
        stream={stream}
      />
    )}
  />
)

export default IndexPage

export const getStaticProps: GetStaticProps<Props> = async () => {
  const schedule = await getAllLiveSchedule()
  const stream = await getStageStream()

  if (!schedule) {
    return {
      notFound: true,
    }
  }
  if (!stream) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      schedule,
      stream
    },
    revalidate: 60,
  }
}
