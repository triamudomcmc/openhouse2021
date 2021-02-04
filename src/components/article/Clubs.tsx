import React from 'react'
import Link from 'next/link'
import { ContentCard } from '../common/Card/ContentCard'

export const Clubs = ({ contents }) => {
  const cards = contents.map(data => {
    return (
      <ContentCard src={data.thumbnail} href={`/articles/${data.path}`} className="md:w-1/4">
        <ContentCard.Desc>{data.title}</ContentCard.Desc>
        <ContentCard.Author>{data.author}</ContentCard.Author>
      </ContentCard>
    )
  })

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-4 space-y-4">
        <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4 justify-center">
          {cards}
        </div>
      </div>
    </div>
  )
}
