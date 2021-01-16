import React from 'react'
import cn from 'classnames'
import { Nav } from '../Nav'
import s from './Layout.module.css'

type Props = {
  children: React.ReactNode
  className?: string
}

export const Layout = ({ children, className }: Props) => (
  <div className="font-display">
    <Nav />
    <div className={s.root}>
      <main className="flex flex-1">
        <div className={cn('flex flex-col w-full', className)}>{children}</div>
      </main>
    </div>
  </div>
)
