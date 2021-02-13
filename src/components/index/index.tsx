import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import useSWR from 'swr'

import s from '../../assets/styles/Header.module.css'
import { Home } from '../common/Header/Home'

import Group8 from '../../assets/vectors/Group8'
import { Camera, CardV, Carv, Phone, Puzzle } from '../../assets/vectors/Icons'
import Videos from './Videos'
import Blogs from './Blogs'
import Programmes from './Programmes'
import Countdown from 'react-countdown'
import Footer from '../common/Footer'
import { Live } from '../common/Live'
import { SchoolBlogs } from '../SchoolBlogs'
import { useAuth } from '../../lib/auth'
import { motion } from 'framer-motion'
import { Google } from '../common/Logo/Google'
import { Facebook } from '../common/Logo/Facebook'
import { Email } from '../common/Logo/Email'
import Router from 'next/router'
import InApp from 'detect-inapp'

export const Index = ({ stream, schedule, contents, videos }) => {
  const [blocked, setBlocked] = useState(false)
  const [currenTTime, setCurrentTime] = useState(0)
  const [liveContent, setLiveContent] = useState({
    title: 'รายการถ่ายทอดสด',
    club: 'รายการถ่ายทอดสด'
  })

  const convertTomin = time => {
    return parseInt(time.split(':')[0]) * 60 + parseInt(time.split(':')[1])
  }

  useEffect(() => {
    setCurrentTime(date.getHours() * 60 + date.getMinutes())
    if (window.localStorage.getItem('emailForSignIn') !== null) {
      Router.push('/signup')
    }
    const inapp = new InApp(navigator.userAgent || navigator.vendor)
    if (inapp.isInApp) {
      setBlocked(true)
    }
    setInterval(() => {
      let date = new Date()
      setCurrentTime(date.getHours() * 60 + date.getMinutes())
    }, 5000)
  }, [])

  useEffect(() => {
    let now = new Date().getDate()
    schedule.forEach(item => {
      if (now === item.startTime.date) {
        const start = convertTomin(item.startTime.time)
        const end = convertTomin(item.endTime.time)
        if (start <= currenTTime && currenTTime < end) {
          setLiveContent({
            title: item.title,
            club: item.club
          })
        }
      }
    })
  }, [currenTTime])

  const { loading, user, signinWithGoogle, signinWithFacebook } = useAuth()

  const date = new Date()

  const response = useSWR('/api/stage', {
    initialData: stream,
    refreshInterval: 5000
  })

  const updatedStream = response.data || ''

  return (
    <div className="">
      <div className={cn(s.root, s.indexGradient)}>
        <div className="flex flex-col items-center justify-center w-full h-full pb-20 md:pb-32 font-display">
          <div className="pb-4 mt-8 text-3xl font-black text-center text-white md:pb-14 md:mt-16 md:text-6xl">
            <div className="max-w-xs md:max-w-screen-md">
              <Home />
            </div>
            <h1 className="mt-6 md:mt-16 text-shadow">TRIAM UDOM ONLINE</h1>
            <h1 className="text-shadow">OPEN HOUSE 2021</h1>
            <div>
              <h2 className="m-4 text-xl font-bold md:text-4xl md:m-12">12-13 FEBRUARY</h2>
            </div>
            <Link href="/register">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="button"
                className="inline-flex items-center px-10 py-2 text-base font-bold text-white text-purple-200 bg-white border border-transparent rounded-full md:py-4 w-max md:text-3xl font-display focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-200"
              >
                เข้าร่วมงาน
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="headerCurve" clipPathUnits="objectBoundingBox">
            <path d="M 1 0 L 0 0 L 0 0.917969 C 0.0742188 0.984375 0.269531 1.023438 0.503906 0.984375 C 0.871094 0.917969 0.910156 0.9375 0.992188 0.980469 C 0.996094 0.980469 0.996094 0.984375 1 0.984375 Z M 1 0 " />
          </clipPath>
        </defs>
        <defs>
          <clipPath id="headerCurveMobile" clipPathUnits="objectBoundingBox">
            <path d="M 0.601562 0.972656 C 0.683594 0.9375 0.902344 0.96875 1 0.984375 L 1 -0.015625 L 0 -0.015625 L 0 0.941406 C 0.0898438 1.015625 0.496094 1.011719 0.601562 0.972656 Z M 0.601562 0.972656 " />
          </clipPath>
        </defs>
      </svg>
      <div className="relative flex flex-col items-center justify-center -top-16 md:-top-36 font-display">
        <div className="w-4/5 px-5 py-5 mb-3 bg-white shadow-lg md:w-7/12 rounded-3xl md:px-10 smd:py-8">
          <div className="mb-2 ml-2 font-medium lg:mb-8">
            <div className="flex items-center text-xs md:text-2xl">
              <span className="px-2 text-xs font-semibold text-white bg-red-400 md:text-2xl">
                LIVE
              </span>
              <span className="ml-2 md:ml-4">{liveContent.title}</span>
            </div>
            <div className="mt-1 text-xs text-gray-300 min-w-min md:text-2xl">
              {liveContent.club} | วันที่ 13 กุมภาพันธ์ 2021
            </div>
          </div>
          <div className="frame-height-mobile md:frame-height-desktop">
            {!loading && user ? (
              <iframe
                src={`${updatedStream.stream}`}
                frameBorder="0"
                allowFullScreen
                scrolling="no"
                height="100%"
                width="100%"
              ></iframe>
            ) : (
              <div className="flex flex-col h-full justify-center">
                {!blocked ? (
                  <div className="flex flex-col items-center justify-center flex-1 px-4">
                    <h1 className="text-sm md:text-xl font-bold text-center text-gray-500 lg:text-3xl">
                      โปรดลงทะเบียน
                    </h1>
                    <h1 className="text-sm md:text-xl font-bold text-center text-gray-500 lg:text-3xl">
                      เพื่อเข้าชมการถ่ายทอดสด
                    </h1>
                    <div className="flex flex-col items-center justify-center mt-2 space-y-1 lg:space-y-4 lg:mt-6">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center w-full px-5 py-1 md:py-2 text-xxs font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md hover:bg-gray-100 md:px-10 lg:text-xl focus:outline-none"
                        onClick={() => signinWithGoogle('/stage')}
                      >
                        <Google className="w-5 h-5 mr-4" />
                        Sign in with Google
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center w-full px-5 py-1 md:py-2 text-xxs font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md hover:bg-gray-100 md:px-10 lg:text-xl focus:outline-none"
                        onClick={() => signinWithFacebook('/stage')}
                      >
                        <Facebook className="w-5 h-5 mr-4" />
                        Sign in with Facebook
                      </button>
                      <Link href="/signup">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center w-full px-5 py-1 md:py-2 text-xxs font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md hover:bg-gray-100 md:px-10 lg:text-xl focus:outline-none"
                        >
                          <Email className="w-5 h-5 mr-4" />
                          Sign in with email
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center flex-1 px-4">
                    <h1 className="text-sm md:text-xl font-bold text-center text-gray-500 lg:text-3xl">
                      โปรดลงทะเบียน
                    </h1>
                    <h1 className="text-sm md:text-xl font-bold text-center text-gray-500 lg:text-3xl">
                      เพื่อเข้าชมการถ่ายทอดสด
                    </h1>
                    <div className="flex flex-col items-center justify-center mt-2 space-y-1 lg:space-y-4 lg:mt-6">
                      <Link href="/signup">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center w-full px-5 py-1 md:py-2 text-xxs font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md hover:bg-gray-100 md:px-10 lg:text-xl focus:outline-none"
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
          </div>
        </div>
        <Link href="/articles/admission">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            style={{ paddingTop: '2.4vw', paddingBottom: '2.4vw' }}
            className="flex flex-row justify-center w-4/5 px-4 mb-3 bg-white shadow-lg md:w-7/12 rounded-3xl md:px-12"
          >
            <div className="flex flex-col items-center justify-center mx-auto">
              <h1
                style={{ fontSize: 'calc(15px + 3.5vw)' }}
                className="text-3xl font-semibold md:font-bold md:text-7xl text-blue-75"
              >
                สอบเข้า
              </h1>
              <h1
                style={{ fontSize: 'calc(5px + 2vw)' }}
                className="text-xs font-bold text-gray-400 md:text-3xl"
              >
                6 March 2021
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto">
              <Countdown
                date={1614992400000}
                renderer={({ days }) => (
                  <h1
                    style={{ fontSize: 'calc(15px + 3.4vw)' }}
                    className="text-4xl font-bold md:text-8xl text-blue-75"
                  >
                    {days}
                  </h1>
                )}
              />
              <p
                style={{ fontSize: 'calc(1px + 1vw)' }}
                className="text-xs font-medium text-gray-400 md:text-xl"
              >
                DAYS LEFT
              </p>
            </div>
            <div className="flex flex-col items-center justify-center h-20 mx-auto md:h-full">
              <Group8 style={{ width: '16vw' }} className="w-24 md:w-full" />
            </div>
          </motion.div>
        </Link>
        <div className="flex flex-wrap items-center justify-evenly w-4/5 md:w-7/12">
          <div className="w-1/5">
            <Link href="/videos">
              <div
                style={{ width: '96%', height: '12vw', fontSize: '1.8vw' }}
                className="flex flex-col cursor-pointer mr-2 items-center hover:bg-gray-100 w-full justify-center w-16 h-16 text-xxs text-gray-400 bg-white shadow-lg sm:w-24 sm:h-24 md:font-semibold md:text-xl md:h-44 rounded-xl md:rounded-3xl"
              >
                <Camera style={{ width: '50%', height: '50%' }} className="h-9 sm:h-12 md:h-24" />
                วีดีโอ
              </div>
            </Link>
          </div>
          <div className="w-1/5">
            <Link href="/clubs">
              <div
                style={{ width: '96%', height: '12vw', fontSize: '1.8vw' }}
                className="flex flex-col cursor-pointer mr-2 items-center hover:bg-gray-100 justify-center w-16 h-16 text-xxs text-gray-400 bg-white shadow-lg sm:w-24 sm:h-24 md:font-semibold md:text-xl md:h-44 rounded-xl md:rounded-3xl"
              >
                <Puzzle style={{ width: '50%', height: '50%' }} className="h-9 sm:h-12 md:h-24" />
                ชมรม
              </div>
            </Link>
          </div>
          <div className="w-1/5">
            <Link href="/map">
              <div
                style={{ width: '96%', height: '12vw', fontSize: '1.8vw' }}
                className="flex flex-col cursor-pointer mr-2 items-center hover:bg-gray-100 justify-center w-16 h-16 text-xxs text-gray-400 bg-white shadow-lg sm:w-24 sm:h-24 md:font-semibold md:text-xl md:h-44 rounded-xl md:rounded-3xl"
              >
                <Carv
                  style={{ width: '36%', height: '36%' }}
                  className="my-1 h-7 sm:h-10 md:h-24"
                />
                การเดินทาง
              </div>
            </Link>
          </div>
          <div className="w-1/5">
            <Link href="/tickets">
              <div
                style={{ width: '96%', height: '12vw', fontSize: '1.8vw' }}
                className="flex flex-col cursor-pointer mr-2 items-center hover:bg-gray-100 justify-center w-16 h-16 text-xxs text-gray-400 bg-white shadow-lg sm:w-24 sm:h-24 md:font-semibold md:text-xl md:h-44 rounded-xl md:rounded-3xl"
              >
                <CardV style={{ width: '40%', height: '40%' }} className="h-9 sm:h-10 md:h-24" />
                การ์ด
              </div>
            </Link>
          </div>
          <div className="w-1/5">
            <Link href="/contact">
              <div
                style={{ width: '96%', height: '12vw', fontSize: '1.8vw' }}
                className="flex flex-col items-center cursor-pointer hover:bg-gray-100 justify-center w-16 h-16 text-xxs text-gray-400 bg-white shadow-lg sm:w-24 sm:h-24 md:font-semibold md:text-xl md:h-44 rounded-xl md:rounded-3xl"
              >
                <Phone
                  style={{ width: '44%', height: '44%' }}
                  className="my-1 h-7 sm:h-10 md:h-24"
                />
                ติดต่อ
              </div>
            </Link>
          </div>
        </div>
        <Programmes />
        <Videos videos={videos} />
        <Blogs content={contents} />
        <Live schedule={schedule} />
      </div>
      <Footer />
    </div>
  )
}
