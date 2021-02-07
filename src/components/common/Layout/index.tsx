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
  <div className="min-h-screen font-display">
    <Nav hideSignIn={hideSignIn} className="z-50 hidden md:block" />
    <MobileMenu className="z-50 block md:hidden" />
    <div className={s.root}>
      <main className="flex flex-1 w-full">
        <div className={cn('flex flex-1  flex-col', className)}>{children}</div>
      </main>
    </div>
  </div>
)
