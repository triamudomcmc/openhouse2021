import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const CTA = () => (
  <div className="flex flex-col items-center justify-center mx-auto mt-8">
    <div className="w-32 mt-2 md:w-60 md:mt-8">
      <Image src="/assets/tucmc.png" width={1071} height={162} />
    </div>
  </div>
)
