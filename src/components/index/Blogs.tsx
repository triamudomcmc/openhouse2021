import { ContentCard } from '../common/Card/ContentCard'
import React from 'react'

const shuffle = array => {
  return array.sort(() => Math.random() - 0.5)
}

const Blogs = ({ content }) => {
  const halfLength = Math.ceil(content.length / 2)

  const top = shuffle(content.slice(0, halfLength))
  const bottom = shuffle(content.slice(halfLength, content.length))

  return (
    <div className="w-4/5 md:w-7/12">
      <h1 className="mt-16 mb-10 text-3xl font-black text-center text-blue-400 md:mt-48 md:text-7xl">
        บทความ
      </h1>
      <div className="flex flex-col items-center justify-center py-4 space-y-4">
        <div className="flex flex-col max-w-full pb-6 space-y-4 overflow-x-scroll md:space-y-0 md:space-x-4 md:flex-row">
          {top.map(data => {
            return (
              <ContentCard
                src={data.thumbnail}
                href={`/articles/${data.slug}`}
                className="md:w-1/3"
              >
                <ContentCard.Desc>{data.title}</ContentCard.Desc>
                <ContentCard.Author>{data.author}</ContentCard.Author>
              </ContentCard>
            )
          })}
        </div>
        <div className="flex flex-col max-w-full pb-6 space-y-4 overflow-x-scroll md:space-y-0 md:space-x-4 md:flex-row">
          {bottom.map(data => {
            return (
              <ContentCard
                src={data.thumbnail}
                href={`/articles/${data.slug}`}
                className="md:w-1/3"
              >
                <ContentCard.Desc>{data.title}</ContentCard.Desc>
                <ContentCard.Author>{data.author}</ContentCard.Author>
              </ContentCard>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Blogs
