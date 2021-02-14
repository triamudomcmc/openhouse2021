import React, { useState } from 'react'
import cn from 'classnames'
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
        return <BusMap className="w-96 lg:w-auto" />
      case 'bts':
        return <BtsMap className="w-96 lg:w-auto" />
      case 'mrt':
        return <MrtMap className="w-96 lg:w-auto" />
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
    <div className="max-w-full pt-14 lg:pt-0">
      <div className="flex max-w-full ">
        <div className="flex w-full items-center justify-center max-w-full -ml-4 -mr-16 lg:m-0 h-80 lg:h-full lg:w-1/2 lg:flex-col">
          {getCurrentMap()}
        </div>
        <div className="flex flex-col items-center justify-center lg:w-1/2">
          <div className="flex flex-col self-center max-w-full py-12 space-y-2 lg:space-y-0 lg:space-x-4 lg:flex-row">
            <div>
              <p
                className={cn(
                  'flex items-center w-14 h-14 justify-center rounded-full shadow-md lg:h-24 lg:w-24',
                  highlightbus
                )}
                onClick={() => setCurrentTab('bus')}
              >
                <div className={currentTab === 'bus' ? 'hidden' : 'flex'}>
                  <BusLogo />
                </div>
                <div className={currentTab === 'bus' ? 'flex' : 'hidden'}>
                  <BusInv />
                </div>
              </p>
              <p className="flex items-center justify-center pt-2 text-xs text-center lg:text-sm">
                รถประจำทาง
              </p>
            </div>
            <div>
              <p
                className={cn(
                  'flex items-center w-14 h-14 justify-center rounded-full shadow-md lg:h-24 lg:w-24',
                  highlightbts
                )}
                onClick={() => setCurrentTab('bts')}
              >
                <div className={currentTab === 'bts' ? 'hidden' : 'flex'}>
                  <BtsLogo />
                </div>
                <div className={currentTab === 'bts' ? 'flex' : 'hidden'}>
                  <BtsInv />
                </div>
              </p>
              <p className="flex items-center justify-center pt-2 text-xs text-center lg:text-sm">
                BTS
              </p>
            </div>
            <div>
              <p
                className={cn(
                  'flex items-center pb-1 w-14 h-14 justify-center lg:pb-2 rounded-full shadow-md lg:h-24 lg:w-24',
                  highlightmrt
                )}
                onClick={() => setCurrentTab('mrt')}
              >
                <div className={currentTab === 'mrt' ? 'hidden' : 'flex'}>
                  <MrtLogo />
                </div>
                <div className={currentTab === 'mrt' ? 'flex' : 'hidden'}>
                  <MrtInv />
                </div>
              </p>
              <p className="flex items-center justify-center pt-2 text-xs text-center lg:text-sm">
                MRT
              </p>
            </div>
          </div>
          <div className="hidden h-1/3 lg:flex">{getCurrentTab()}</div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-16 mx-4 h-1/3 lg:hidden">
        {getCurrentTab()}
      </div>
    </div>
  )
}
