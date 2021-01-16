import React from 'react'
import { Nav } from '../Nav'
import s from './Layout.module.css'

export const Layout = ({ children }) => (
  <div className="font-display">
    <Nav />
    <div className={s.root}>
      <main className="flex flex-1">{children}</main>
    </div>
  </div>
)
