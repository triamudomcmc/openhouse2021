import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className="footer border-t-2 border-gray-200 font-display">
        <nav className="m-auto p-6 flex flex-col items-center">
          <div className="md:w-7/12 flex flex-col md:flex-row justify-between">
            <div className="max-w-full text-xl font-bold text-gray-500">
              <h1>TRIAM UDOM ONLINE</h1>
              <h1>OPEN HOUSE 2021</h1>
              <div className="flex flex-row space-x-4 py-4 hidden md:flex">
                <div>
                  <Image
                    src="/assets/vectors/facebook.svg"
                    width={40}
                    height={41}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/vectors/instagram.svg"
                    width={40}
                    height={41}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/vectors/twitter.svg"
                    width={40}
                    height={41}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/vectors/youtube.svg"
                    width={40}
                    height={41}
                  />
                </div>
              </div>
              <div className="pt-3 pb-2 flex justify-center md:p-0 md:justify-start">
                <Link href="/register">
                  <button
                    type="button"
                    className="px-6 py-2 text-base font-bold shadow-md text-white border border-transparent rounded-full bg-gradient-to-r from-blue-200 via-purple-200 to-red-200 md:py-2 w-max md:text-xl font-display focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-200"
                  >
                    เข้าสู่ระบบ
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col font-bold md:flex-row text-center md:text-right pt-4 md:pl-8">
              <div className="flex flex-col space-y-3 text-gray-500">
                <h1>สายการเรียน</h1>
                <h1>ชมรม</h1>
                <h1>บทความ</h1>
                <h1>คลิปวิดีโอ</h1>
                <h1>ติดต่อ</h1>
              </div>
            </div>
            <div className="flex flex-col font-bold md:flex-row text-center md:text-right pt-4">
              <div className="flex flex-col space-y-3 text-gray-500">
                <h1>การสอบเข้า</h1>
                <h1>การ์ดต้อนรับ</h1>
                <h1>การเดินทาง</h1>
                <h1>รายการสด</h1>
                <h1>นโยบายความเป็นส่วนตัว</h1>
              </div>
            </div>
            
              <div className="flex flex-row space-x-4 pt-8 md:hidden">
                <div>
                  <Image
                    src="/assets/vectors/facebook.svg"
                    width={40}
                    height={41}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/vectors/instagram.svg"
                    width={40}
                    height={41}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/vectors/twitter.svg"
                    width={40}
                    height={41}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/vectors/youtube.svg"
                    width={40}
                    height={41}
                  />
                </div>
              </div>
            
          </div>
        </nav>
        <section className=" md:border-t-2 md:border-gray-200 font-display">
          <div className="m-auto p-6 flex flex-col items-center">
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
