import React from 'react'
import { GetStaticProps } from 'next'
import Countdown from 'react-countdown'

import { CountdownContainer } from 'components/countdown'
import { Index } from 'components/index'

import { getAllLiveSchedule } from 'lib/db-admin'
import TimetableData from 'types/Timetable'

type Props = {
  schedule: TimetableData[]
}

const Renderer = ({ completed, days, hours, minutes, seconds, schedule }) => {
  if (completed) {
    return <Index />
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

const IndexPage = ({ schedule }) => (
  <Countdown
    date={1613062800000}
    renderer={({ completed, days, hours, minutes, seconds }) => (
      <Renderer
        completed={completed}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        schedule={schedule}
      />
    )}
  />
)

export default IndexPage

export const getStaticProps: GetStaticProps<Props> = async () => {
  const schedule = await getAllLiveSchedule()

  if (!schedule) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      schedule,
    },
    revalidate: 60,
  }
}
