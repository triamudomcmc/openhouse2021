import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { Google } from 'components/common/Logo/Google'
import { Facebook } from 'components/common/Logo/Facebook'
import { Email } from 'components/common/Logo/Email'

import { Layout } from 'components/common/Layout'

import { StageContainer } from 'components/Stage'

import { getAllLiveSchedule, getStageStream } from 'lib/db-admin'
import { GetStaticProps } from 'next'
import Stream from 'types/Stream'
import Submit from '../assets/vectors/stage/Submit'
import { Live } from '../components/common/Live'
import { motion } from 'framer-motion'
import Footer from '../components/common/Footer'
import { useAuth } from 'lib/auth'
import { addQuestion } from 'lib/db'
import InApp from 'detect-inapp'

type Props = {
  stream: Stream
}

const Stage = ({ stream, schedule }) => {
  const { loading, user, signinWithGoogle, signinWithFacebook } = useAuth()
  const [question, setQuestion] = useState('')
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    const inapp = new InApp(navigator.userAgent || navigator.vendor)
    if (inapp.isInApp) {
      setBlocked(true)
    }
  }, [])

  const submitQuestion = async () => {
    const questionID = await addQuestion(question)
    if (questionID) {
      setQuestion('')
    }
  }

  return (
    <Layout>
      <div className="mb-20">
        {!loading && user ? (
          <StageContainer stream={stream} />
        ) : (
          <div className="flex flex-col h-full justify-center">
            {!blocked ? (
              <div className="flex flex-col items-center justify-center flex-1 px-4 my-20">
                <h1 className="text-2xl font-bold text-center text-gray-500 md:text-4xl">
                  โปรดลงทะเบียน
                </h1>
                <h1 className="text-2xl font-bold text-center text-gray-500 md:text-4xl">
                  เพื่อเข้าชมการถ่ายทอดสด
                </h1>
                <div className="flex flex-col items-center justify-center mt-4 space-y-4 md:mt-12">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-5 py-2 text-base font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md hover:bg-gray-100 md:px-10 md:text-xl focus:outline-none"
                    onClick={() => signinWithGoogle('/stage')}
                  >
                    <Google className="w-5 h-5 mr-4" />
                    Sign in with Google
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-5 py-2 text-base font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md hover:bg-gray-100 md:px-10 md:text-xl focus:outline-none"
                    onClick={() => signinWithFacebook('/stage')}
                  >
                    <Facebook className="w-5 h-5 mr-4" />
                    Sign in with Facebook
                  </button>
                  <Link href="/signup">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-full px-5 py-2 text-base font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md hover:bg-gray-100 md:px-10 md:text-xl focus:outline-none"
                    >
                      <Email className="w-5 h-5 mr-4" />
                      Sign in with email
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center flex-1 px-4 my-20">
                <h1 className="text-2xl font-bold text-center text-gray-500 md:text-4xl">
                  โปรดลงทะเบียน
                </h1>
                <h1 className="text-2xl font-bold text-center text-gray-500 md:text-4xl">
                  เพื่อเข้าชมการถ่ายทอดสด
                </h1>
                <div className="flex flex-col items-center justify-center mt-4 space-y-4 md:mt-12">
                  <Link href="/signup">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-full px-5 py-2 text-base font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md hover:bg-gray-100 md:px-10 md:text-xl focus:outline-none"
                    >
                      <Email className="w-5 h-5 mr-4" />
                      Sign in with email
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col w-9/12 md:flex-row h-40">
            <div className="md:w-1/2">
              <h1 className="text-base font-black text-gray-600 md:text-3xl">
                <span className="inline-block px-2 mr-2 text-sm font-medium text-white align-middle bg-red-400 md:py-1 md:text-xl">
                  LIVE
                </span>
                รายการถ่ายทอดสด
              </h1>
              <h1 className="mt-2 text-sm font-medium text-gray-600 md:text-2xl">
                รายการสด | วันที่ 13 กุมภาพันธ์ 2021
              </h1>
            </div>
            <div className="flex flex-row items-center justify-center md:justify-end md:w-1/2">
              <div className="flex flex-col w-full h-full mt-8 md:w-10/12 md:mt-0">
                <div className="flex flex-row justify-center bg-white shadow-lg rounded-2xl h-1/2">
                  <div className="flex flex-col justify-center w-10/12">
                    <h1 className="mb-3 text-sm text-gray-600 md:mb-2 md:text-medium h-1/4">
                      สงสัยอะไรไหม ? พิมพ์ถามคำถามสด ๆ ได้เลย
                    </h1>
                    <div className="flex flex-row justify-between h-1/3">
                      <div className="flex flex-col justify-center w-10/12 bg-gray-100 rounded-2xl">
                        <input
                          className="mx-4 font-semibold text-gray-400 placeholder-gray-300 bg-gray-100 text-medium md:text-xl"
                          placeholder="ถามคำถามเลย !"
                          onChange={e => setQuestion(e.currentTarget.value)}
                          value={question}
                        />
                      </div>
                      <motion.div
                        className="flex flex-col items-center justify-center cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={submitQuestion}
                      >
                        <Submit />
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end mt-4 md:mt-0 h-1/2"></div>
              </div>
            </div>
          </div>
        </div>
        <Live schedule={schedule} topClassName="mt-12 md:mt-20" />
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
