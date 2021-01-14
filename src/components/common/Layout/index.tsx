import React from 'react'
import { Nav } from '../Nav'
import s from './Layout.module.css'

export const Layout = ({ children, ...restProps }) => (
  <div className="font-display">
    <Nav />
    <div className={s.root} {...restProps}>
      {children}
    </div>
  </div>
)
