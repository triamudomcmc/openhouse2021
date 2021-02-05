import React from 'react'
import { ContentCard } from '../common/Card/ContentCard'

export const Videos = ({ contents }) => {
  let times = 1
  let temp = <></>
  let result = <></>
  contents.forEach(data => {
    temp = (
      <>
        {temp}
        <ContentCard
          src={data.thumbnail}
          href={`/videos/${data.path}`}
          duration={data.duration}
          className="md:w-1/3"
        >
          <ContentCard.Desc>{data.title}</ContentCard.Desc>
          <ContentCard.Author>{data.author}</ContentCard.Author>
        </ContentCard>
      </>
    )

    if (times % 3 === 0) {
      result = (
        <>
          {result}
          <div className="flex flex-row justify-center">{temp}</div>
        </>
      )

      temp = <></>
    }
    if (times === contents.length) {
      result = (
        <>
          {result}
          <div className="flex flex-row justify-start">{temp}</div>
        </>
      )
    }

    times++
  })

  return (
    <div>
      <div className="flex flex-col items-center w-full justify-center py-4 space-y-4">
        <div className="flex flex-col w-full space-y-4 md:space-y-2 justify-center">{result}</div>
      </div>
    </div>
  )
}
