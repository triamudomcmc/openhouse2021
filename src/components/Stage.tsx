import React from 'react'

import useSWR from 'swr'

export const StageContainer = ({ stream }) => {
  const response = useSWR('/api/stage', {
    initialData: stream,
    refreshInterval: 5000
  })

  const updatedStream = response.data || ''

  return (
    <div className="flex flex-col items-center justify-center flex-1 md:w-full mb-16">
      <iframe
        src={`${updatedStream.stream}`}
        frameBorder="0"
        allowFullScreen
        scrolling="no"
        height="560"
        width="1000"
        style={{ width: '80vw', height: '46vw' }}
      ></iframe>
    </div>
  )
}
