import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

type Props = {
  hideSignIn: boolean
  className: string
}

export const Nav = ({ hideSignIn, className }: Props) => {
  return (
    <div
      className={cn(
        'top-0 justify-center hidden w-full h-16 max-w-full shadow-md md:flex md:h-28 bg-gradient-to-r from-blue-200 via-purple-200 to-red-200',
        className
      )}
    >
      <nav className="flex items-center justify-between w-full px-16 py-4">
        <Link href="/">
          <div className="text-lg font-black leading-tight cursor-pointer md:text-2xl font-display">
            <h1 className="text-justify text-white">
              TRIAM UDOM ONLINE
              <br />
              OPEN HOUSE 2021
            </h1>
          </div>
        </Link>
        <div className="space-x-6 text-lg font-semibold leading-tight text-white md:text-xl font-display">
          <Link href="/">
            <a>หน้าแรก</a>
          </Link>
          <Link href="/clubs">
            <a>ชมรม</a>
          </Link>
          <Link href="/articles">
            <a>บทความ</a>
          </Link>
          <Link href="/videos">
            <a>วิดิโอ</a>
          </Link>
          <Link href="/stage">
            <a>รายการสด</a>
          </Link>
          <Link href="/">
            <a>การสอบเข้า</a>
          </Link>
          <Link href="/contact">
            <a>ติดต่อ</a>
          </Link>
          {!hideSignIn && (
            <Link href="/register">
              <button
                type="button"
                className="inline-flex items-center px-6 py-2 text-base font-bold text-white text-red-200 bg-white border border-transparent rounded-full md:py-3 w-max md:text-xl font-display focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-200"
              >
                เข้าร่วมงาน
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}
