import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import s from './CTA.module.css'

export const CTA = () => (
  <div className="flex flex-col items-center justify-center mx-auto mt-8">
    <Link href="/register">
      <button type="button" className={cn(s.buttonRoot, s.buttonGradient)}>
        ลงทะเบียน
      </button>
    </Link>
    <div className="w-24 mt-2 md:w-48 md:mt-8">
      <Image src="/assets/tucmc.png" width={1071} height={162} />
    </div>
  </div>
)
