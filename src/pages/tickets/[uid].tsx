import {
  NakedPortrait,
  NakedSimplePortrait,
  NakedSimpleSquare,
  SimpleSquare
} from 'components/ticket/Visual'
import Image from 'next/image'
import React, { useState } from 'react'
import useWindowSize from 'lib/hooks/useWindowSize'
import Link from 'next/link'
import { SocialLink } from 'components/common/SocialLink'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getTicketData } from 'lib/db-admin'
import { motion } from 'framer-motion'
import Toast from '../../components/common/Toasts/Toast'

type Props = {
  nickname: string
  wishes: string
}

const Page = ({ nickname, wishes, haveWishes }) => {
  const { width } = useWindowSize()
  const [warnToast, setWarnToast] = useState(false)
  const cardWidth: number = width / 2 < 500 ? (width / 2 < 350 ? 350 : width / 2) : 500
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

  return (
    <div className="font-display">
      <div className="flex flex-col items-center justify-center bg-cover bg-ticket-show-bg">
        <Link href="/">
          <motion.div className="mt-4 md:mt-10 z-10 cursor-pointer" whileHover={{ scale: 1.05 }}>
            <h1 className="text-xs font-black leading-3 text-white md:text-xl">
              TRIAM UDOM ONLINE
            </h1>
            <h1 className="text-sm font-black text-white md:text-2xl">OPEN HOUSE 2021</h1>
          </motion.div>
        </Link>

        <div className="pt-0 md:pt-14 md:-mt-16">
          {haveWishes ? (
            <NakedPortrait nickname={nickname} width={cardWidth} wishes={wishes} />
          ) : (
            <NakedSimplePortrait nickname={nickname} width={cardWidth} />
          )}
        </div>
        <div className="flex flex-col items-center mb-24 -mt-10 md:-mt-16 md:mb-40">
          <h1 className="mt-8 text-lg font-medium text-white md:text-4xl">การ์ดของ</h1>
          <h1 className="text-lg font-semibold leading-4 text-white md:text-4xl">{nickname}</h1>
        </div>
      </div>
      <div className="bg-white">
        <div className="relative -top-14 md:-top-24">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col items-center justify-between w-10/12 p-5 bg-white shadow-lg md:w-3/12 md:p-6 rounded-3xl">
              <div className="pb-4 text-lg font-semibold md:pb-5">
                <h1 className="text-base text-center text-purple-250">ลงทะเบียนเข้าร่วมงาน</h1>
                <h1 className="text-base text-center text-purple-250">เพื่อรับการ์ดของคุณ</h1>
              </div>
              <Link href="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-row justify-center w-full py-3 text-base font-black text-white shadow-md cursor-pointer md:text-xl rounded-xl bg-gradient-to-r from-blue-70 via-purple-450 to-red-250"
                >
                  ลงทะเบียน
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
        <footer className="footer -mt-14 sfont-display">
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
          <nav className="flex flex-col items-center p-6 m-auto">
            <div className="flex flex-col justify-between md:w-7/12 md:flex-row">
              <div className="max-w-full text-xl font-bold text-gray-500">
                <h1 className="text-center">TRIAM UDOM ONLINE</h1>
                <h1 className="text-center">OPEN HOUSE 2021</h1>
                <div className="flex flex-row hidden py-4 space-x-4 md:flex">
                  <div>
                    <Image src="/assets/vectors/facebook.svg" width={40} height={41} />
                  </div>
                  <div>
                    <Image src="/assets/vectors/instagram.svg" width={40} height={41} />
                  </div>
                  <div>
                    <Image src="/assets/vectors/twitter.svg" width={40} height={41} />
                  </div>
                  <div>
                    <Image src="/assets/vectors/youtube.svg" width={40} height={41} />
                  </div>
                </div>
                <div className="flex justify-center pt-3 pb-2 md:p-0 md:justify-start">
                  <Link href="/register">
                    <button
                      type="button"
                      className="px-6 py-2 text-base font-bold text-white border border-transparent rounded-full shadow-md bg-gradient-to-r from-blue-200 via-purple-200 to-red-200 md:py-2 w-max md:text-xl font-display focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-200"
                    >
                      เข้าสู่ระบบ
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col font-bold text-center md:flex-row md:text-right md:pl-8">
                <div className="flex flex-col space-y-3 text-gray-500">
                  <h1 onClick={turnWarnToastOn} className="text-gray-400">
                    สายการเรียน
                  </h1>
                  <h1 onClick={turnWarnToastOn} className="text-gray-400">
                    ชมรม
                  </h1>
                  <h1 onClick={turnWarnToastOn} className="text-gray-400">
                    บทความ
                  </h1>
                  <h1 onClick={turnWarnToastOn} className="text-gray-400">
                    คลิปวิดีโอ
                  </h1>
                  <h1 onClick={turnWarnToastOn} className="text-gray-400">
                    ติดต่อ
                  </h1>
                </div>
              </div>
              <div className="flex flex-col font-bold text-center md:flex-row md:text-right">
                <div className="flex flex-col space-y-3 text-gray-500">
                  <h1 onClick={turnWarnToastOn} className="text-gray-400">
                    การสอบเข้า
                  </h1>
                  <Link href="/tickets">
                    <h1>การ์ดต้อนรับ</h1>
                  </Link>
                  <a onClick={turnWarnToastOn} className="text-gray-400">
                    การเดินทาง
                  </a>
                  <h1 onClick={turnWarnToastOn} className="text-gray-400">
                    รายการสด
                  </h1>
                  <Link href="/tos">
                    <h1>นโยบายความเป็นส่วนตัว</h1>
                  </Link>
                </div>
              </div>
              <SocialLink />
            </div>
          </nav>
          <section className=" md:border-t-2 md:border-gray-200 font-display">
            <div className="flex flex-col items-center p-6 m-auto">
              <div className="w-24 md:w-48">
                <Image src="/assets/tucmc.png" width={1071} height={162} />
              </div>
            </div>
          </section>
        </footer>
      </div>
    </div>
  )
}

export default Page

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const uid = params?.uid?.toString() || null

  if (uid) {
    const ticketData = await getTicketData(uid)

    return {
      props: {
        nickname: ticketData.nickname || null,
        wishes: ticketData.wishes || null,
        haveWishes: ticketData.haveWishes || null
      },
      revalidate: 5
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return Promise.resolve({
    paths: [],
    fallback: 'blocking'
  })
}
