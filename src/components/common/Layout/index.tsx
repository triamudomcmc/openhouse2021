import React from 'react'
import cn from 'classnames'
import { Nav } from '../Nav'
import s from './Layout.module.css'
import { MobileMenu } from '../Nav/Mobile'

type Props = {
  children: React.ReactNode
  className?: string
  hideSignIn?: boolean
}

export const Layout = ({ children, className, hideSignIn }: Props) => (
  <div className="font-display">
    <Nav hideSignIn={hideSignIn} restClassname="hidden md:block z-50"/>
    <MobileMenu restClassname="block md:hidden z-50"/>
    <div className="">
      <main className="flex flex-1">
        <div className={cn('flex flex-col w-full', className)}>{children}</div>
      </main>
    </div>
  </div>
)
