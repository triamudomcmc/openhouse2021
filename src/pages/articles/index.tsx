import React from 'react'

import { Layout } from 'components/common/Layout'
import Tabs from 'components/article/Tabs'
import { GetStaticProps } from 'next'
import * as fs from 'fs'
import parseJson from 'parse-json'

// export const getStaticProps: GetStaticProps = async () => {
//   const fetchedData = fs.readFileSync('./articlesMap.json')

//   if (!fetchedData) {
//     return {
//       notFound: true
//     }
//   }

//   return {
//     props: {
//       contents: parseJson(fetchedData.toString())
//     }
//   }
// }

const Articles = ({ contents }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <div className="max-w-full text-3xl font-bold text-center text-blue-400">
          <h1 className="pt-6">บทความ</h1>
        </div>
        {/* <Tabs contents={contents} /> */}
      </div>
    </Layout>
  )
}

export default Articles
