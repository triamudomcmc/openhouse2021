import React from 'react'
import Footer from '../components/common/Footer'

import { Layout } from 'components/common/Layout'
import { MapIndex } from 'components/map'

const Map = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full mb-20">
        <div className="max-w-full text-5xl font-bold text-center text-blue-400">
          <h1 className="pt-6">การเดินทาง</h1>
        </div>
        <div className="max-w-full md:w-7/12">
          <MapIndex />
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default Map
