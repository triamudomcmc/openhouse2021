import React from 'react'
import cn from 'classnames'

import { Home } from './Home'
import s from '../../../assets/styles/Header.module.css'

export const Header = () => (
  <React.Fragment>
    <div className={cn(s.root, s.gradient)}>
      <div className="flex flex-col items-center justify-center w-full h-full pb-8 md:pb-12 font-display">
        <div className="mt-12 text-3xl font-black text-center text-white md:mt-16 md:text-6xl">
          <div className="md:max-w-screen-md">
            <Home />
          </div>
          <h1 className="mt-8 md:mt-16 text-shadow">TRIAM UDOM</h1>
          <h1 className="text-shadow">OPEN HOUSE 2021</h1>
          <div>
            <h2 className="m-6 text-4xl font-bold md:m-12">12-13 FEBRUARY</h2>
          </div>
        </div>
      </div>
    </div>
    <svg width="0" height="0">
      <defs>
        <clipPath id="headerCurve" clipPathUnits="objectBoundingBox">
          <path d="M 0.503906 0.972656 C 0.265625 1.035156 0.0625 0.972656 -0.0117188 0.871094 L -0.0117188 -0.105469 L 1.011719 -0.105469 L 1.011719 0.972656 C 0.921875 0.90625 0.890625 0.871094 0.503906 0.972656 Z M 0.503906 0.972656" />
        </clipPath>
      </defs>
      <defs>
        <clipPath id="headerCurveMobile" clipPathUnits="objectBoundingBox">
          <path d="M 0.601562 0.972656 C 0.683594 0.9375 0.902344 0.96875 1 0.984375 L 1 -0.015625 L 0 -0.015625 L 0 0.941406 C 0.0898438 1.015625 0.496094 1.011719 0.601562 0.972656 Z M 0.601562 0.972656 " />
        </clipPath>
      </defs>
    </svg>
  </React.Fragment>
)
