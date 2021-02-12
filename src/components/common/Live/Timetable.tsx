import TimetableData from 'types/Timetable'
import { useEffect, useRef, useState } from 'react'

interface ITimetableProps {
  data: TimetableData[]
  date: number
}

const Timetable: React.FC<ITimetableProps> = ({ data, date, ...restProps }) => {
  const [currentLive, setCurrentLive] = useState(0)
  const [currenTTime, setCurrentTime] = useState(0)
  const containerRef = useRef(null)

  const convertTomin = time => {
    return parseInt(time.split(':')[0]) * 60 + parseInt(time.split(':')[1])
  }

  useEffect(() => {
    setInterval(() => {
      let date = new Date()
      setCurrentTime(date.getHours() * 60 + date.getMinutes())
    }, 5000)
    let date = new Date()
    setCurrentTime(date.getHours() * 60 + date.getMinutes())
  }, [])

  let oldState = 0

  useEffect(() => {
    let now = new Date().getDate()
    let times = 1
    data.forEach(item => {
      if (now === item.startTime.date) {
        const start = convertTomin(item.startTime.time)
        const end = convertTomin(item.endTime.time)
        if (start <= currenTTime && currenTTime < end) {
          setCurrentLive(times)
          if (containerRef.current && oldState !== times) {
            containerRef.current.scrollTo(0, times * 68)
            oldState = times
          }
        }
        times++
      }
    })
  }, [currenTTime])

  const filtered = data.filter(val => val.startTime.date === date)

  let heading: React.ReactNode
  let i = 0

  if (date === 12) {
    heading = (
      <div className="rounded-full bg-gradient-to-r from-blue-70 via-purple-450 to-red-250">
        <span className="flex items-center justify-center py-2 text-xl font-black text-white px-14 whitespace-nowrap md:py-4 md:px-24 md:text-3xl">
          12 FEBRUARY 2021
        </span>
      </div>
    )
  } else if (date === 13) {
    heading = (
      <div className="rounded-full bg-gradient-to-r from-blue-70 via-purple-450 to-red-250">
        <span className="flex items-center justify-center py-2 text-xl font-black text-white px-14 whitespace-nowrap md:py-4 md:px-24 md:text-3xl">
          13 FEBRUARY 2021
        </span>
      </div>
    )
  }

  const table = filtered.map((value: TimetableData) => {
    i++
    return i === currentLive && value.startTime.date === 13 ? (
      <div className="flex flex-row px-3 py-2 rounded-md shadow-md bg-gradient-to-r from-blue-70 via-purple-450 to-red-250">
        <div className="flex flex-col items-center justify-center w-1/2 pr-5 text-smoxs sm:text-base">
          <div className="flex flex-col">
            <span className="font-semibold text-xl sm:text-3xl text-center text-white">
              {value.startTime.time}
            </span>
            <span className="text-blue-25 text-center bg-white rounded-md md:rounded-md px-2 text-xxs md:text-xs font-black">
              กำลังถ่ายทอดสด
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full leading-4">
          <span className="text-xs font-bold text-white sm:text-base">{value.title}</span>
          <span className="text-xs font-normal text-white sm:text-sm">{value.club}</span>
        </div>
      </div>
    ) : (
      <div className="flex flex-row px-3 py-2 rounded-md shadow-md" key={value.id}>
        <div className="flex items-center justify-center w-1/2 pr-5 text-xl sm:text-3xl">
          <span className="font-medium text-gray-600 md:text-gray-500">{value.startTime.time}</span>
        </div>
        <div className="flex flex-col w-full leading-4">
          <span className="text-xs font-semibold text-gray-800 sm:text-base">{value.title}</span>
          <span className="text-xs font-normal text-gray-700 sm:text-sm">{value.club}</span>
        </div>
      </div>
    )
  })

  let tableOverFlow =
    date === 13 ? (
      <div
        ref={containerRef}
        className="py-8 px-2 mt-8 space-y-4 overflow-custom scroll-hidden h-table"
      >
        {table}
      </div>
    ) : (
      <div className="py-8 px-2 mt-8 space-y-4 overflow-custom scroll-hidden h-table">{table}</div>
    )

  return (
    <div className="flex flex-col w-full max-w-2xl px-4 mt-10 md:mt-16 font-display" {...restProps}>
      <div>
        <div className="flex flex-col items-center justify-center">{heading}</div>
        {tableOverFlow}
      </div>
    </div>
  )
}

export default Timetable
