import React from 'react'

import useSWR from 'swr'

export const StageContainer = ({ stream }) => {
  const response = useSWR('/api/stage', {
    initialData: stream,
    refreshInterval: 5000
  })

  const updatedStream = response.data || ''

  return (
    <div className="flex flex-col items-center justify-center flex-1 md:w-full my-32 md:my-60">
      <h1 className="text-xl md:text-4xl">ขออภัย ขณะนี้รายการสดได้จบลงแล้ว</h1>
      <h1 className="text-gray-400 w-10/12 text-center text-xs md:text-xl mt-4">
        ทางเรากำลังรีบอัพโหลดรายการที่บันทึกไว้ ระหว่างนี้สามารถติดตามข่าวสารได้ที่ IG:{' '}
        <a
          className="hover:text-blue-300 hover:underline"
          href="https://www.instagram.com/triamudom.oph/"
        >
          @triamudom.oph
        </a>
      </h1>
    </div>
  )
}
