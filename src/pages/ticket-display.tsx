import { Layout } from '../components/common/Layout'
import Footer from '../components/common/Footer'
import {
  NakedPortrait,
  NakedSquare,
  SimplePortrait,
  SimpleSquare
} from '../components/ticket/Visual'
import Image from 'next/image'
import React from 'react'
import useWindowSize from '../lib/hooks/useWindowSize'
import Link from 'next/link'
import { SocialLink } from '../components/common/SocialLink'

const Page = () => {
  const { width } = useWindowSize()

  return (
    <div className="font-display">
      <div className="flex flex-col justify-center items-center bg-cover bg-ticket-show-bg">
        <div className="mt-4 md:mt-10">
          <h1 className="font-black text-xs md:text-xl text-white leading-3">TRIAM UDOM ONLINE</h1>
          <h1 className="font-black text-sm md:text-2xl text-white">OPEN HOUSE 2021</h1>
        </div>
        <div className="md:-mt-16">
          <SimpleSquare nickname="tatatawan" width={width > 500 ? width / 1.8 : width / 1} />
        </div>
        <div className="md:-mt-16 mb-24 md:mb-40 flex flex-col items-center">
          <h1 className="text-lg md:text-4xl font-medium text-white">การ์ดของ</h1>
          <h1 className="text-lg md:text-4xl font-semibold text-white">tatatatawan</h1>
        </div>
      </div>
      <div className="bg-white">
        <div className="relative -top-14 md:-top-24">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-between items-center w-10/12 md:w-3/12 bg-white shadow-lg p-5 md:p-6 rounded-3xl">
              <div className="text-lg font-semibold pb-4 md:pb-5">
                <h1 className="text-purple-250 text-base text-center">ลงทะเบียนเข้าร่วมงาน</h1>
                <h1 className="text-purple-250 text-base text-center">เพื่อรับการ์ดของคุณ</h1>
              </div>
              <div className="flex flex-row py-3 justify-center text-base md:text-xl rounded-xl bg-gradient-to-r from-blue-70 via-purple-450 to-red-250 text-white font-black shadow-md w-full">
                ลงทะเบียน
              </div>
            </div>
          </div>
        </div>
        <footer className="footer -mt-14 sfont-display">
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
                  <Link href="/programmes">
                    <h1>สายการเรียน</h1>
                  </Link>
                  <Link href="/clubs">
                    <h1>ชมรม</h1>
                  </Link>
                  <Link href="/articles">
                    <h1>บทความ</h1>
                  </Link>
                  <Link href="/videos">
                    <h1>คลิปวิดีโอ</h1>
                  </Link>
                  <Link href="/contact">
                    <h1>ติดต่อ</h1>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col font-bold text-center md:flex-row md:text-right">
                <div className="flex flex-col space-y-3 text-gray-500">
                  <h1>การสอบเข้า</h1>
                  <Link href="/ticket">
                    <h1>การ์ดต้อนรับ</h1>
                  </Link>
                  <Link href="/map">
                    <h1>การเดินทาง</h1>
                  </Link>
                  <Link href="/stage">
                    <h1>รายการสด</h1>
                  </Link>
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
