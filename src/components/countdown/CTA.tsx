import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from 'lib/auth'
import { motion } from 'framer-motion'

export const CTA = () => {
  const { user, loading, userData } = useAuth()

  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-12 md:mt-16">
      {!loading && !user ? (
        <Link href="/register">
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            className="inline-flex items-center px-20 py-3 text-2xl font-black text-white border border-transparent rounded-full bg-gradient-to-r from-blue-70 via-purple-450 to-red-250 md:py-4 w-max md:text-3xl font-display focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-200"
          >
            ลงทะเบียน
          </motion.button>
        </Link>
      ) : (
        <Link href="/tickets">
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            className="inline-flex items-center px-16 py-3 text-2xl font-black text-white border border-transparent rounded-full bg-gradient-to-r from-blue-70 via-purple-450 to-red-250 md:py-4 w-max md:text-3xl font-display focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-200"
          >
            การ์ดต้อนรับ
          </motion.button>
        </Link>
      )}

      <div className="w-24 mt-10 md:w-48 md:mt-24">
        <Image src="/assets/tucmc.png" width={1071} height={162} />
      </div>
    </div>
  )
}
