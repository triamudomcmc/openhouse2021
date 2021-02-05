import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Inside } from './selector'

export const MapIndex = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col max-w-full">
          <Inside />
        </div>
      </div>
    </div>
  )
}
