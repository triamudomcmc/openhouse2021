import React from 'react'

import { Layout } from 'components/common/Layout'
import { GetStaticProps } from 'next'
import * as fs from 'fs'
import parseJson from 'parse-json'
import { Clubs } from '../../components/article/Clubs'
import matter from 'gray-matter'
import { getAllPosts } from '../../lib/api'
import { ContentCard } from '../../components/common/Card/ContentCard'

export const getStaticProps: GetStaticProps = async () => {
  const fetchedData = getAllPosts(['slug', 'title', 'author', 'thumbnail'], '_articles')
  let cleaned = fetchedData.filter(item => Object.keys(item).length > 1)
  if (!cleaned) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      contents: cleaned
    }
  }
}

const Articles = ({ contents }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <div className="max-w-full text-3xl font-bold text-center text-blue-400">
          <h1 className="pt-6">บทความ</h1>
        </div>
        {
          <div className="max-w-full w-10/12 md:w-8/12">
            <ContentCard
              src="/assets/articles/stat/thumbnail.jpg"
              href={`/articles/statistic`}
              className="mx-auto my-4 md:w-1/3"
            >
              <ContentCard.Desc>สถิติการสอบเข้ามหาวิทยาลยของนักเรียนเตรียมฯ</ContentCard.Desc>
              <ContentCard.Author>โรงเรียนเตรียมอุดมศึกษา</ContentCard.Author>
            </ContentCard>
            <Clubs contents={contents} />
          </div>
        }
      </div>
    </Layout>
  )
}

export default Articles
