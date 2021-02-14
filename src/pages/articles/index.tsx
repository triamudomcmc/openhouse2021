import React from 'react'

import { Layout } from 'components/common/Layout'
import { GetStaticProps } from 'next'
import * as fs from 'fs'
import parseJson from 'parse-json'
import { Clubs } from '../../components/article/Clubs'
import matter from 'gray-matter'
import { getAllPosts } from '../../lib/api'
import { ContentCard } from '../../components/common/Card/ContentCard'
import Footer from '../../components/common/Footer'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import { User } from '../../assets/vectors/User'
import Link from 'next/link'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

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
      contents: shuffleArray(cleaned)
    }
  }
}

const Articles = ({ contents }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full mb-10">
        <div className="max-w-full text-3xl font-bold text-center text-blue-400">
          <h1 className="pt-6">บทความ</h1>
        </div>
        {
          <div className="max-w-full w-10/12 md:w-8/12">
            <div className="flex flex-col items-center lg:flex-row justify-center">
              <Link href="/articles/statistic">
                <motion.div
                  style={{ maxWidth: '400px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col justify-between cursor-pointer px-2 pt-3 pb-1 mx-2 space-y-2 shadow-md rounded-xl my-4 lg:w-2/5"
                >
                  <img
                    src="/assets/articles/stat/thumbnail.jpg"
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
                    สถิติการสอบเข้ามหาวิทยาลัยของนักเรียนเตรียมฯ
                  </h1>
                  <div className="flex flex-row space-x-1 text-gray-300 ">
                    <User />
                    <p>โรงเรียนเตรียมอุดมศึกษา</p>
                  </div>
                </motion.div>
              </Link>
              <Link href="/articles/admission">
                <motion.div
                  style={{ maxWidth: '400px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col justify-between cursor-pointer px-2 pt-3 pb-1 mx-2 space-y-2 shadow-md rounded-xl my-4 lg:w-2/5"
                >
                  <img
                    src="/assets/articles/admission/thumbnail.jpg"
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
                    การรับนักเรียนชั้นมัธยมศึกษาปีที่ ๔ ปีการศึกษา ๒๕๖๔
                  </h1>
                  <div className="flex flex-row space-x-1 text-gray-300 ">
                    <User />
                    <p>โรงเรียนเตรียมอุดมศึกษา</p>
                  </div>
                </motion.div>
              </Link>
            </div>
            <Clubs contents={contents} />
          </div>
        }
      </div>
      <Footer />
    </Layout>
  )
}

export default Articles
