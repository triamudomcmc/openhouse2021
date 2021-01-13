import React from 'react'
import Link from 'next/link'

export const Nav = () => {
  return (
    <div className="sticky top-0 flex justify-center w-full h-16 max-w-full shadow-md md:h-28">
      <header className="flex items-center py-4">
        <Link href="/">
          <div className="text-lg font-black leading-tight text-transparent cursor-pointer md:text-2xl font-display bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-red-200">
            <h1>TRIAM UDOM ONLINE</h1>
            <h1>OPEN HOUSE 2021</h1>
          </div>
        </Link>
      </header>
    </div>
  )
}
