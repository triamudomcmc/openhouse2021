import React from 'react'

import useSWR from 'swr'

export const StageContainer = ({ stream }) => {
  const response = useSWR('/api/stage', {
    initialData: stream,
    refreshInterval: 5000,
  })

  const updatedStream = response.data || ''

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full mb-16">
      <iframe
        className="w-full stage-height-desktop"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        src={`${updatedStream.stream}?autoplay=1&mute=1`}
        width="560"
        height="340"
      />
    </div>
  )
}
