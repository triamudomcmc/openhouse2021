import React, { useEffect } from 'react'
import { GetStaticProps } from 'next'
import Countdown from 'react-countdown'

import { CountdownContainer } from 'components/countdown'

import { getAllLiveSchedule } from 'lib/db-admin'
import TimetableData from 'types/Timetable'
import { useKonamiCode } from 'lib/hooks/useKonamiCode'
import firebase from 'lib/firebase'
import { useAuth } from 'lib/auth'
import Router from 'next/router'

type Props = {
  schedule: TimetableData[]
  // stream: Stream
}

const Renderer = ({ completed, days, hours, minutes, seconds, schedule, stream, content }) => {
  if (completed) {
    return <div></div>
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

const IndexPage = ({ schedule, stream, content }) => {
  const { userData } = useAuth()

  useEffect(() => {
    if (userData && Object.keys(userData).length === 5) {
      Router.push('/onboard')
    }
  }, [userData])

  useKonamiCode(async () => {
    await firebase.auth().signOut()
  })

  return (
    <Countdown
      date={1613091600000}
      renderer={({ completed, days, hours, minutes, seconds }) => (
        <Renderer
          completed={completed}
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          schedule={schedule}
          stream={stream}
          content={content}
        />
      )}
    />
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps<Props> = async () => {
  const schedule = await getAllLiveSchedule()
  // const stream = await getStageStream()
  // const fetchedData = getAllPosts(['slug', 'title', 'author', 'thumbnail'], '_articles')
  // let cleaned = fetchedData.filter(item => Object.keys(item).length > 1)

  // if (!cleaned) {
  //   return {
  //     notFound: true
  //   }
  // }

  if (!schedule) {
    return {
      notFound: true
    }
  }

  // if (!stream) {
  //   return {
  //     notFound: true
  //   }
  // }

  return {
    props: {
      schedule
    },
    revalidate: 60
  }
}
