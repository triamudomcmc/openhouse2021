import React from 'react'
import cn from 'classnames'

import { Home } from './Home'
import s from '../../../assets/styles/Header.module.css'

export const Header = () => (
  <React.Fragment>
    <div className={cn(s.root, s.gradient)}>
      <div className="flex flex-col items-center justify-center w-full h-full pb-8 md:pb-12 font-display">
        <div className="flex flex-col items-center mt-12 mb-5 text-3xl font-black text-center text-white md:text-6xl">
          <div className={cn(s.headerIcon)}>
            <Home />
          </div>
          <h1 className="mt-8 text-shadow">TRIAM UDOM ONLINE</h1>
          <h1 className="text-shadow">OPEN HOUSE 2021</h1>
          <div>
            <h2 className="mb-8 mt-4 text-xl md:text-4xl font-bold md:mt-8 md:mb-11">
              12-13 FEBRUARY 2021
            </h2>
          </div>
        </div>
      </div>
    </div>
    <svg width="0" height="0">
      <defs>
        <clipPath id="headerCurve" clipPathUnits="objectBoundingBox">
          <path d="M 0.503906 0.976562 C 0.269531 1.039062 0.0742188 0.972656 0 0.875 L 0 0 L 1 0 L 1 0.976562 C 0.910156 0.90625 0.882812 0.875 0.503906 0.976562 Z M 0.503906 0.976562 " />
        </clipPath>
      </defs>
      <defs>
        <clipPath id="headerCurveMobile" clipPathUnits="objectBoundingBox">
          <path d="M 0 0 L 0 0.96875 C 0.0820312 1.003906 0.269531 1.015625 0.496094 0.96875 C 0.710938 0.917969 0.914062 0.929688 1 0.96875 L 1 0 Z M 0 0 " />
        </clipPath>
      </defs>
    </svg>
  </React.Fragment>
)
