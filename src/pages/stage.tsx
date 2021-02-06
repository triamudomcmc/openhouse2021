import React from 'react'

import { Layout } from 'components/common/Layout'
import { StageContainer } from 'components/Stage'

import { getAllLiveSchedule, getStageStream } from 'lib/db-admin'
import { GetStaticProps } from 'next'
import Stream from 'types/Stream'
import Submit from '../assets/vectors/stage/Submit'
import { Live } from '../components/common/Live'
import Footer from '../components/common/Footer'

type Props = {
  stream: Stream
}

const Stage = ({ stream, schedule }) => {
  return (
    <Layout>
      <div className="mb-20">
        <StageContainer stream={stream} />
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col w-9/12 md:flex-row">
            <div className="md:w-1/2">
              <h1 className="text-base font-black text-gray-600 md:text-3xl">
                <span className="inline-block px-2 mr-2 text-sm font-medium text-white align-middle bg-red-400 md:py-1 md:text-xl">
                  LIVE
                </span>
                ทำความรู้จักศิลป์จีนเตรียมอุดมฯ โอ้โหโอ้โหว้าวว้าวว้าวเก่งจัง
              </h1>
              <h1 className="mt-2 text-sm font-medium text-gray-600 md:text-2xl">
                ละครเวที | 10.30-11.50
              </h1>
              <p className="mt-8 text-sm text-gray-500 md:text-xl">
                วิดีโอคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบาย
              </p>
            </div>
            <div className="flex flex-row items-center justify-center md:justify-end md:w-1/2">
              <div className="flex flex-col w-full h-full mt-8 md:w-10/12 md:mt-0">
                <div className="flex flex-row justify-center bg-white shadow-lg rounded-2xl h-1/2">
                  <div className="flex flex-col justify-center w-10/12">
                    <h1 className="mb-3 text-sm text-gray-600 md:mb-0 md:text-medium h-1/4">
                      สงสัยอะไรไหม ? พิมพ์ถามคำถามสด ๆ ได้เลย
                    </h1>
                    <div className="flex flex-row justify-between h-1/3">
                      <div className="flex flex-col items-center justify-center w-10/12 bg-gray-100 rounded-2xl">
                        <h1 className="w-10/12 font-semibold text-gray-300 text-medium md:text-xl md:font-bold">
                          ถามคำถามเลย !
                        </h1>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <Submit />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end mt-4 md:mt-0 h-1/2">
                  <h1 className="mb-1 text-sm font-bold text-gray-500 md:text-medium md:mb-0">
                    รายการต่อไป
                  </h1>
                  <div className="flex flex-row w-full py-3 bg-white rounded-lg shadow-lg md:py-0 h-1/2">
                    <div className="flex items-center justify-center w-1/2 h-full text-smoxs sm:text-base">
                      <span className="font-semibold text-center text-gray-600">10.30 - 11.52</span>
                    </div>
                    <div className="flex flex-col justify-center w-full leading-4">
                      <span className="text-xs font-semibold text-gray-800 sm:text-base">
                        การแสดงเชียร์เพลงพระราชนิพนธ์
                      </span>
                      <span className="text-xs font-normal text-gray-700 sm:text-sm">
                        ชมรมเชียร์
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Live schedule={schedule} />
      </div>
      <Footer />
    </Layout>
  )
}

export default Stage

export const getStaticProps: GetStaticProps<Props> = async () => {
  const schedule = await getAllLiveSchedule()
  const stream = await getStageStream()

  if (!schedule) {
    return {
      notFound: true
    }
  }
  if (!stream) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      stream,
      schedule
    },
    revalidate: 60
  }
}
