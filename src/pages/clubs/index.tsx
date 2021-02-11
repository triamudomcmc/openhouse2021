import React from 'react'
import { Layout } from 'components/common/Layout'
import { ClubIndex } from 'components/clubs/Clubs'
import Footer from '../../components/common/Footer'
import { GetStaticProps } from 'next'
import * as fs from 'fs'
import { ContentCard } from '../../components/common/Card/ContentCard'

export const getStaticProps: GetStaticProps = async () => {
  const data = fs.readFileSync('./_maps/clubsMap.json', { encoding: 'utf8', flag: 'r' })
  const obj = JSON.parse(data)
  const items = Object.values(obj) as [
    { englishName: string; imageURL: Array<{ url: string; description: string }>; thaiName: string }
  ]

  console.log(Object.values(obj).length)
  const objContents = items.map(item => {
    return {
      path: `clubs/${item.englishName}`,
      thumbnail: item.imageURL.length >= 1 ? item.imageURL[0].url : '/assets/nok.png',
      title: item.thaiName
    }
  })
  return {
    props: {
      contents: objContents
    }
  }
}

const Clubs = ({ contents }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full mb-20">
        <div className="max-w-full pb-12 text-3xl font-bold text-center text-blue-400">
          <h1 className="pt-6">ชมรม</h1>
        </div>
        <div className="w-8/12">
          <ClubIndex contents={contents} />
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default Clubs
