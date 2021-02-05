import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SocialLink } from '../SocialLink'

const Footer = () => {
  return (
    <div>
      <footer className="border-t-2 border-gray-200 footer font-display">
        <nav className="flex flex-col items-center p-6 m-auto">
          <div className="flex flex-col justify-between md:w-7/12 md:flex-row">
            <div className="max-w-full text-xl font-bold text-gray-500">
              <h1>TRIAM UDOM ONLINE</h1>
              <h1>OPEN HOUSE 2021</h1>
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
  )
}

export default Footer
