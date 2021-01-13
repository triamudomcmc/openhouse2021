import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const CTA = () => (
  <div className="flex flex-col items-center justify-center mx-auto mt-8">
    <Link href="/register">
      <button
        type="button"
        className="inline-flex items-center px-10 py-2 text-base font-bold text-white border border-transparent rounded-full bg-gradient-to-r from-blue-200 via-purple-200 to-red-200 md:py-4 w-max md:text-3xl font-display focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-200"
      >
        ลงทะเบียน
      </button>
    </Link>
    <div className="w-24 mt-2 md:w-48 md:mt-8">
      <Image src="/assets/tucmc.png" width={1071} height={162} />
    </div>
  </div>
)
