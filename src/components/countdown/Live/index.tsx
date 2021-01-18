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
        <h1 className="text-2xl font-bold text-center mb-4 md:text-6xl lg:text-8xl bg-clip-text text-blue-400">
          ตารางรายการสด
        </h1>
        <div className="flex items-center justify-center w-8/12 max-w-2xl mx-auto">
          <h1 className="max-w-xs px-4 mt-2 mx-auto text-sm font-normal tracking-wide text-center text-gray-400 md:text-2xl md:max-w-5xl md:mt-8">
            พบกับรายการสดมากมายทั้งรายการ LIVE แนะนำสายการเรียน สัมภาษณ์รุ่นพี่
            และคอนเทนต์ที่น่าสนใจอื่น ๆ มากมาย
          </h1>
        </div>
        <div className="flex flex-wrap w-full justify-center">
          <Timetable date={12} data={updatedSchedule} />
          <Timetable date={13} data={updatedSchedule} />
        </div>
      </div>
    </div>
  )
}
