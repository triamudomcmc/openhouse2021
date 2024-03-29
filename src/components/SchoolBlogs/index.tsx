import React, { useState } from 'react'
import Image from 'next/image'
import { User } from '../../assets/vectors/User'
import { ContentCard } from '../common/Card/ContentCard'
import Toast from '../common/Toasts/Toast'
import Link from 'next/link'

const shuffle = array => {
  return array.sort(() => Math.random() - 0.5)
}

const SchoolBlogs = ({ videos }) => {
  const [warnToast, setWarnToast] = useState(false)
  const turnWarnToastOn = () => {
    setWarnToast(prev => {
      return true
    })
    setTimeout(() => {
      setWarnToast(prev => {
        return false
      })
    }, 4000)
  }

  const top = videos

  return (
    <div className="w-4/5 md:w-7/12">
      <div
        onClick={() => {
          setWarnToast(prevState => {
            return false
          })
        }}
        className="fixed cursor-pointer"
      >
        <Toast type="failed" text="เนื้อหายังไม่เปิดใช้งาน" show={warnToast} />
      </div>
      <div className="flex flex-row justify-between md:justify-center mt-16 md:mt-16 md:mb-10 items-end">
        <Link href="/videos">
          <h1 className="text-3xl cursor-pointer font-black text-center text-blue-400 md:mt-48 md:text-7xl">
            แนะนำโรงเรียน
          </h1>
        </Link>
        <Link href="/videos">
          <h1 className="block md:hidden cursor-pointer font-bold text-lg text-gray-400">
            ดูทั้งหมด
          </h1>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center py-3 space-y-4">
        <div className="flex max-w-full pb-6 space-y-4 overflow-x-scroll md:space-y-0 md:space-x-4 flex-row">
          {top.map(data => {
            if ('video' in data) {
              return (
                <ContentCard
                  href={data.path}
                  src={data.thumbnail}
                  duration={data.duration}
                  className="md:w-1/3"
                  slider={true}
                >
                  <ContentCard.Desc>{data.title}</ContentCard.Desc>
                  <ContentCard.Author>{data.author}</ContentCard.Author>
                </ContentCard>
              )
            } else {
              return (
                <ContentCard
                  src={data.thumbnail}
                  href={data.path}
                  duration={data.duration}
                  className="md:w-1/3"
                  disabled={true}
                  slider={true}
                  callback={() => {
                    turnWarnToastOn()
                  }}
                >
                  <ContentCard.Desc>{data.title}</ContentCard.Desc>
                  <ContentCard.Author>{data.author}</ContentCard.Author>
                </ContentCard>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default SchoolBlogs
