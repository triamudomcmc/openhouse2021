import React from 'react'
import Link from 'next/link'
import { ContentCard } from '../common/Card/ContentCard'

export const Clubs = ({ contents }) => {
  let times = 1
  let temp = <></>
  let result = <></>
  contents.forEach(data => {
    temp = (
      <>
        {temp}
        <ContentCard src={data.thumbnail} href={`/articles/${data.slug}`} className="lg:w-1/3">
          <ContentCard.Desc>{data.title}</ContentCard.Desc>
          <ContentCard.Author>{data.author}</ContentCard.Author>
        </ContentCard>
      </>
    )

    if (times % 3 === 0) {
      result = (
        <>
          {result}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full">{temp}</div>
        </>
      )

      temp = <></>
    }
    if (times === contents.length) {
      result = (
        <>
          {result}
          <div className="flex flex-col lg:flex-row items-center justify-start w-full">{temp}</div>
        </>
      )
    }

    times++
  })

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-4 space-y-4">
        <div className="flex flex-wrap space-y-4 lg:space-y-0 justify-center w-11/12 lg:w-full">
          {result}
        </div>
      </div>
    </div>
  )
}
