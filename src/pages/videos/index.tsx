import React from 'react'

import { Layout } from 'components/common/Layout'
import { GetStaticProps } from 'next'
import * as fs from 'fs'
import parseJson from 'parse-json'
import { Videos } from '../../components/videos/Videos'

export const getStaticProps: GetStaticProps = async () => {
  const fetchedData = fs.readFileSync('./_maps/videosMap.json')

  if (!fetchedData) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      contents: parseJson(fetchedData.toString())
    }
  }
}

const Articles = ({ contents }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <div className="max-w-full text-3xl font-bold text-center text-blue-400">
          <h1 className="pt-6">วีดีโอ</h1>
        </div>
        {
          <div className="max-w-full md:w-8/12">
            <Videos contents={contents} />
          </div>
        }
      </div>
    </Layout>
  )
}

export default Articles