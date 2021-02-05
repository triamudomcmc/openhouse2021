import React, { useState } from 'react'
import Link from 'next/link'
import { BusInfo } from './bus'
import { BtsInfo } from './bts'
import { MrtInfo } from './mrt'
import { BusLogo } from 'assets/vectors/TLogos/BusLogo'
import { BtsLogo } from 'assets/vectors/TLogos/BtsLogo'
import { MrtLogo } from 'assets/vectors/TLogos/MrtLogo'
import { BusMap } from 'assets/vectors/map/BusMap'
import { BtsMap } from 'assets/vectors/map/BtsMap'
import { MrtMap } from 'assets/vectors/map/MrtMap'
import { BusInv } from 'assets/vectors/InvertedLogos/BusInv'
import { BtsInv } from 'assets/vectors/InvertedLogos/BtsInv'
import { MrtInv } from 'assets/vectors/InvertedLogos/MrtInv'

export const Inside = () => {
  const [currentTab, setCurrentTab] = useState<'bus' | 'bts' | 'mrt'>('bts')

  let highlightbus = 'bg-white'
  let highlightbts = 'bg-white'
  let highlightmrt = 'bg-white'

  const getCurrentTab = () => {
    switch (currentTab) {
      case 'bus':
        return <BusInfo />
      case 'bts':
        return <BtsInfo />
      case 'mrt':
        return <MrtInfo />
    }
  }
  const getCurrentMap = () => {
    switch (currentTab) {
      case 'bus':
        return <BusMap />
      case 'bts':
        return <BtsMap />
      case 'mrt':
        return <MrtMap />
    }
  }

  if (currentTab === 'bus') {
    highlightbus = 'bg-blue-400'
    highlightbts = 'bg-white'
    highlightmrt = 'bg-white'
  }

  if (currentTab === 'bts') {
    highlightbus = 'bg-white'
    highlightbts = 'bg-blue-400'
    highlightmrt = 'bg-white'
  }

  if (currentTab === 'mrt') {
    highlightbus = 'bg-white'
    highlightbts = 'bg-white'
    highlightmrt = 'bg-blue-400'
  }

  return (
    <div className="max-w-full pt-14 md:pt-0">
      <div className="flex max-w-full ">
        <div className="flex items-center justify-center max-w-full -ml-4 -mr-16 md:m-0 h-80 md:h-full md:w-1/2 md:flex-col">
          {getCurrentMap()}
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/2">
          <div className="flex flex-col self-center max-w-full py-12 space-y-2 md:space-y-0 md:space-x-4 md:flex-row">
            <div>
              <p
                className={
                  highlightbus +
                  ' flex items-center w-14 h-14 justify-center rounded-full shadow-md md:h-24 md:w-24'
                }
                onClick={() => setCurrentTab('bus')}
              >
                <div className={currentTab === 'bus' ? 'hidden' : 'flex'}>
                  <BusLogo />
                </div>
                <div className={currentTab === 'bus' ? 'flex' : 'hidden'}>
                  <BusInv />
                </div>
              </p>
              <p className="flex items-center justify-center pt-2 text-xs text-center md:text-sm">
                รถประจำทาง
              </p>
            </div>
            <div>
              <p
                className={
                  highlightbts +
                  ' flex items-center w-14 h-14 justify-center rounded-full shadow-md md:h-24 md:w-24'
                }
                onClick={() => setCurrentTab('bts')}
              >
                <div className={currentTab === 'bts' ? 'hidden' : 'flex'}>
                  <BtsLogo />
                </div>
                <div className={currentTab === 'bts' ? 'flex' : 'hidden'}>
                  <BtsInv />
                </div>
              </p>
              <p className="flex items-center justify-center pt-2 text-xs text-center md:text-sm">
                BTS
              </p>
            </div>
            <div>
              <p
                className={
                  highlightmrt +
                  ' flex  items-center pb-1 w-14 h-14 justify-center md:pb-2 rounded-full shadow-md md:h-24 md:w-24'
                }
                onClick={() => setCurrentTab('mrt')}
              >
                <div className={currentTab === 'mrt' ? 'hidden' : 'flex'}>
                  <MrtLogo />
                </div>
                <div className={currentTab === 'mrt' ? 'flex' : 'hidden'}>
                  <MrtInv />
                </div>
              </p>
              <p className="flex items-center justify-center pt-2 text-xs text-center md:text-sm">
                MRT
              </p>
            </div>
          </div>
          <div className="hidden h-1/3 md:flex">{getCurrentTab()}</div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-16 mx-4 h-1/3 md:hidden">
        {getCurrentTab()}
      </div>
    </div>
  )
}
