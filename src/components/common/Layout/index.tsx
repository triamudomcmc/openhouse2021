import React from 'react'
import s from './Layout.module.css'

export const Layout = ({ children, ...restProps }) => (
  <div className={s.root} {...restProps}>
    {children}
  </div>
)
