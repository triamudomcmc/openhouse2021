import React from 'react'

import useSWR from 'swr'

export const StageContainer = ({ stream }) => {
  const response = useSWR('/api/stage', {
    initialData: stream,
    refreshInterval: 5000
  })

  const updatedStream = response.data || ''

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full mb-16">
      <iframe
        src={`${updatedStream.stream}`}
        frameBorder="0"
        allowFullScreen
        scrolling="no"
        height="340"
        width="560"
      ></iframe>
    </div>
  )
}
