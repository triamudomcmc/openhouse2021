import React from 'react'
import Image from 'next/image'
import Timetable from './Timetable'
import useSWR from 'swr'

export const Live = ({ schedule }) => {
  const response = useSWR('/api/schedule', {
    initialData: schedule,
    refreshInterval: 5000,
  })

  const updatedSchedule = response.data || schedule

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-full mt-10 md:mt-56 font-display">
        <h1 className="text-2xl font-bold text-center text-blue-400 md:text-6xl lg:text-8xl">
          ตารางรายการสด
          <span className="px-2 ml-1 text-xl text-white rounded md:ml-2 md:px-3 md:text-5xl lg:text-7xl md:rounded-lg bg-gradient-to-br from-red-300 to-red-100">
            LIVE
          </span>
        </h1>
        <div className="flex items-center justify-center w-8/12 max-w-2xl mx-auto">
          <Image
            src="/assets/vectors/UndrawPositiveAttitude.svg"
            width={854}
            height={441}
          />
        </div>
        <Timetable date={12} data={updatedSchedule} />
        <Timetable date={13} data={updatedSchedule} />
      </div>
    </div>
  )
}
