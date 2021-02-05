import { ContentCard } from '../common/Card/ContentCard'
import React from 'react'

const shuffle = array => {
  return array.sort(() => Math.random() - 0.5)
}

const Blogs = ({ content }) => {
  const half_length = Math.ceil(content.length / 2)

  const top = shuffle(content.slice(0, half_length))
  const bottom = shuffle(content.slice(half_length, content.length))

  const items1 = top.map(data => {
    return (
      <ContentCard src={data.thumbnail} href={`/articles/${data.slug}`} className="md:w-1/3">
        <ContentCard.Desc>{data.title}</ContentCard.Desc>
        <ContentCard.Author>{data.author}</ContentCard.Author>
      </ContentCard>
    )
  })

  const items2 = bottom.map(data => {
    return (
      <ContentCard src={data.thumbnail} href={`/articles/${data.slug}`} className="md:w-1/3">
        <ContentCard.Desc>{data.title}</ContentCard.Desc>
        <ContentCard.Author>{data.author}</ContentCard.Author>
      </ContentCard>
    )
  })

  return (
    <div className="w-4/5 md:w-7/12">
      <h1 className="font-black text-center text-blue-400 mt-16 md:mt-48 text-3xl md:text-7xl mb-10">
        บทความ
      </h1>
      <div className="flex flex-col items-center justify-center py-4 space-y-4">
        <div className="flex flex-col max-w-full space-y-4 pb-6 md:space-y-0 md:space-x-4 md:flex-row overflow-x-scroll">
          {items1}
        </div>
        <div className="flex flex-col max-w-full space-y-4 pb-6 md:space-y-0 md:space-x-4 md:flex-row overflow-x-scroll">
          {items2}
        </div>
      </div>
    </div>
  )
}

export default Blogs
