import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Layout } from 'components/common/Layout'
import { ClubIndex } from 'components/clubs/Clubs'

const Clubs = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <div className="max-w-full pb-12 text-3xl font-bold text-center text-blue-400">
          <h1 className="pt-6">ชมรม</h1>
        </div>
        <div className="max-w-full md:w-7/12">
          <ClubIndex />
        </div>
      </div>
    </Layout>
  )
}

export default Clubs
