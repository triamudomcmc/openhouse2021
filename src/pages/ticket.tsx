import { Layout } from 'components/common/Layout'
import { Potrait, Square } from 'components/ticket/Visual'
import useWindowSize from 'lib/hooks/useWindowSize'
import React, { useEffect, useState } from 'react'
import Footer from '../components/common/Footer'

const Ticket = () => {
  const { width } = useWindowSize()
  const [squareDis, setSquareDis] = useState(false)
  const [portraitDis, setPortraitDis] = useState(true)

  const switchToSquare = () => {
    setSquareDis(true)
    setPortraitDis(false)
  }

  const switchToPortrait = () => {
    setSquareDis(false)
    setPortraitDis(true)
  }

  return (
    <Layout>
      <div className="w-full h-full py-16">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-4xl font-black text-blue-400 md:text-6xl">การ์ดต้อนรับ</h1>
          {portraitDis ? (
            <div className="flex flex-row mb-10 space-x-8">
              <div onClick={switchToSquare} className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-center bg-white rounded-lg shadow-lg w-18 h-18 md:w-24 md:h-24">
                  <div className="w-12 h-12 border-2 border-gray-400 rounded md:w-16 md:h-16 md:rounded-lg"></div>
                </div>
                <h1 className="text-sm font-medium text-gray-400 md:text-base">square</h1>
              </div>
              <div onClick={switchToPortrait} className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-center rounded-lg shadow-lg bg-blue-25 w-18 h-18 md:w-24 md:h-24">
                  <div className="w-8 h-12 border-2 border-white rounded-lg md:w-10 md:h-16"></div>
                </div>
                <h1 className="text-sm font-medium text-gray-400 md:text-base">portrait</h1>
              </div>
            </div>
          ) : (
            <div className="flex flex-row mb-10 space-x-8">
              <div onClick={switchToSquare} className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-center rounded-lg shadow-lg bg-blue-25 w-18 h-18 md:w-24 md:h-24">
                  <div className="w-12 h-12 border-2 border-white rounded md:w-16 md:h-16 md:rounded-lg"></div>
                </div>
                <h1 className="text-sm font-medium text-gray-400 md:text-base">square</h1>
              </div>
              <div onClick={switchToPortrait} className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-center bg-white rounded-lg shadow-lg w-18 h-18 md:w-24 md:h-24">
                  <div className="w-8 h-12 border-2 border-gray-400 rounded-lg md:w-10 md:h-16"></div>
                </div>
                <h1 className="text-sm font-medium text-gray-400 md:text-base">portrait</h1>
              </div>
            </div>
          )}
          {squareDis && <Square width={width / 1.8} />}
          {portraitDis && <Potrait width={width / 1.8} />}
          <div style={{ width: width / 1.8 }} className="flex flex-row mt-6 mb-10 space-x-2">
            <div className="flex flex-col items-center justify-center justify-between w-1/3 py-2 font-medium text-center text-gray-400 bg-white shadow-lg text-xxs md:text-base md:py-4 rounded-xl">
              <img className="w-6 md:w-9" src="/assets/icon/twitter.png" />
              Share to Twitter
            </div>
            <div className="flex flex-col items-center justify-center justify-between w-1/3 py-2 font-medium text-center text-gray-400 bg-white shadow-lg text-xxs md:text-base md:py-4 rounded-xl">
              <img className="w-6 md:w-auto" src="/assets/icon/facebook.png" />
              Share to Facebook
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 py-2 font-medium text-center text-gray-400 bg-white shadow-lg md:justify-between text-xxs md:text-base md:py-4 rounded-xl">
              <img className="w-6 md:w-auto" src="/assets/icon/download.png" />
              Download
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default Ticket
