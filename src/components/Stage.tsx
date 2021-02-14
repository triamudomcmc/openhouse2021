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
    </div>
  )
}
