import React from 'react'

import { Layout } from 'components/common/Layout'
import { GetStaticProps } from 'next'
import * as fs from 'fs'
import parseJson from 'parse-json'
import { Videos } from '../../components/videos/Videos'
import Footer from '../../components/common/Footer'
import { shuffleArray } from '../../utils/arraymethods'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { User } from '../../assets/vectors/User'
import { Clubs } from '../../components/article/Clubs'

export const getStaticProps: GetStaticProps = async () => {
  const fetchedData = fs.readFileSync('./_maps/videosMap.json')

  if (!fetchedData) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      contents: shuffleArray(JSON.parse(fetchedData.toString()))
    }
  }
}

const Articles = ({ contents }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full mb-10">
        <div className="max-w-full text-3xl font-bold text-center text-blue-400">
          <h1 className="pt-6">วีดีโอ</h1>
        </div>
        <div className="max-w-full w-10/12 md:w-8/12">
          <div className="flex flex-col items-center lg:flex-row justify-center">
            <Link href="/school/1">
              <motion.div
                style={{ maxWidth: '400px' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col justify-between cursor-pointer px-2 pt-3 pb-1 mx-2 space-y-2 shadow-md rounded-xl my-4 lg:w-2/5"
              >
                <img
                  src="/assets/school/thumb_1.jpg"
                  style={{
                    height: '18vw',
                    minHeight: '145px',
                    maxHeight: '188px',
                    maxWidth: '375px',
                    objectFit: 'cover'
                  }}
                  className="mx-auto w-76vw lg:w-24vw"
                  width={240}
                  height={188}
                />
                <h1 style={{ width: '100%' }} className="mx-2 font-bold truncate">
                  84 facts about Triam Udom | EP.1 พาทัวร์โรงเรียนเตรียมฯ ⛲️⊹🪄⋆
                </h1>
                <div className="flex flex-row space-x-1 text-gray-300 ">
                  <User />
                  <p>คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน</p>
                </div>
              </motion.div>
            </Link>
            <Link href="#">
              <motion.div
                style={{ maxWidth: '400px' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col justify-between bg-gray-200 cursor-pointer px-2 pt-3 pb-1 mx-2 space-y-2 shadow-md rounded-xl my-4 lg:w-2/5"
              >
                <img
                  src="/assets/school/thumb_2.jpg"
                  style={{
                    height: '18vw',
                    minHeight: '145px',
                    maxHeight: '188px',
                    maxWidth: '375px',
                    objectFit: 'cover'
                  }}
                  className="mx-auto w-76vw lg:w-24vw"
                  width={240}
                  height={188}
                />
                <h1 style={{ width: '100%' }} className="mx-2 font-bold truncate">
                  84 facts about Triam Udom | EP.2 กิจกรรมในโรงเรียนเตรียมฯ *📓꒰🤍
                </h1>
                <div className="flex flex-row space-x-1 text-gray-300 ">
                  <User />
                  <p>คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน</p>
                </div>
              </motion.div>
            </Link>
            <Link href="#">
              <motion.div
                style={{ maxWidth: '400px' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col justify-between bg-gray-200 cursor-pointer px-2 pt-3 pb-1 mx-2 space-y-2 shadow-md rounded-xl my-4 lg:w-2/5"
              >
                <img
                  src="/assets/school/thumb_3.jpg"
                  style={{
                    height: '18vw',
                    minHeight: '145px',
                    maxHeight: '188px',
                    maxWidth: '375px',
                    objectFit: 'cover'
                  }}
                  className="mx-auto w-76vw lg:w-24vw"
                  width={240}
                  height={188}
                />
                <h1 style={{ width: '100%' }} className="mx-2 font-bold truncate">
                  84 facts about Triam Udom | EP.3 Lifestyle เด็กเตรียมฯ 🪡⋆｡˚👕
                </h1>
                <div className="flex flex-row space-x-1 text-gray-300 ">
                  <User />
                  <p>คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน</p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
        {
          <div className="max-w-full w-10/12 md:w-8/12">
            <Videos contents={contents} />
          </div>
        }
      </div>
      <Footer />
    </Layout>
  )
}

export default Articles
