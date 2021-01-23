import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Layout } from 'components/common/Layout'
import Tabs from 'components/article/Tabs'

const Article = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <div className="max-w-full text-3xl font-bold text-center text-blue-400">
          <h1 className="pt-6">บทความ</h1>
        </div>

        <Tabs />
      </div>
    </Layout>
  )
}

export default Article
