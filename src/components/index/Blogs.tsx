import { ContentCard } from '../common/Card/ContentCard'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { shuffleArray } from '../../utils/arraymethods'

const Blogs = ({ content }) => {
  const [top, setTop] = useState([])
  const [bottom, setBottom] = useState([])

  useEffect(() => {
    const halfLength = Math.ceil(content.length / 2)
    setTop(shuffleArray(content.slice(0, halfLength)))
    setBottom(shuffleArray(content.slice(halfLength, content.length)))
  }, [content])

  return (
    <div className="w-4/5 md:w-7/12">
      <div className="flex flex-row justify-between md:justify-center mt-16 mb-10 items-end">
        <Link href="/articles">
          <h1 className="text-3xl cursor-pointer font-black text-center text-blue-400 md:mt-48 md:text-7xl">
            บทความ
          </h1>
        </Link>
        <Link href="/articles">
          <h1 className="block md:hidden cursor-pointer font-bold text-lg text-gray-400">
            ดูทั้งหมด
          </h1>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center py-4 space-y-4">
        <div className="flex max-w-full pb-6 space-y-4 overflow-x-scroll md:space-y-0 md:space-x-4 flex-row">
          {top.map(data => {
            return (
              <ContentCard
                src={data.thumbnail}
                href={`/articles/${data.slug}`}
                slider={true}
                className="md:w-1/3"
              >
                <ContentCard.Desc>{data.title}</ContentCard.Desc>
                <ContentCard.Author>{data.author}</ContentCard.Author>
              </ContentCard>
            )
          })}
        </div>
        <div className="flex max-w-full pb-6 space-y-4 overflow-x-scroll md:space-y-0 md:space-x-4 flex-row">
          {bottom.map(data => {
            return (
              <ContentCard
                src={data.thumbnail}
                href={`/articles/${data.slug}`}
                slider={true}
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
