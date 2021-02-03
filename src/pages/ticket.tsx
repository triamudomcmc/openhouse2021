import { Layout } from 'components/common/Layout'
import { Potrait, Square } from 'components/ticket/Visual'
import React, { useEffect, useState } from 'react'
import Footer from '../components/common/Footer'

const Ticket = () => {
  const [frameWidth, setFrameWidth] = useState(600)
  const [squareDis, setSquareDis] = useState(false)
  const [portraitDis, setPortraitDis] = useState(true)

  useEffect(() => {
    const updateWindowDimensions = () => {
      setFrameWidth(prevState => {
        return window.innerWidth / 1.8
      })
    }

    window.addEventListener('resize', updateWindowDimensions)
  }, [])

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
          <h1 className="text-4xl md:text-6xl font-black text-blue-400 mb-4">การ์ดต้อนรับ</h1>
          {portraitDis ? (
            <div className="flex flex-row space-x-8 mb-10">
              <div onClick={switchToSquare} className="flex flex-col items-center">
                <div className="flex flex-row justify-center items-center bg-white rounded-lg shadow-lg w-18 h-18 md:w-24 md:h-24">
                  <div className="border-2 border-gray-400 w-12 h-12 md:w-16 md:h-16 rounded md:rounded-lg"></div>
                </div>
                <h1 className="text-sm md:text-base text-gray-400 font-medium">square</h1>
              </div>
              <div onClick={switchToPortrait} className="flex flex-col items-center">
                <div className="flex flex-row justify-center items-center bg-blue-25 rounded-lg shadow-lg w-18 h-18 md:w-24 md:h-24">
                  <div className="border-2 border-white w-8 h-12 md:w-10 md:h-16 rounded-lg"></div>
                </div>
                <h1 className="text-sm md:text-base text-gray-400 font-medium">portrait</h1>
              </div>
            </div>
          ) : (
            <div className="flex flex-row space-x-8 mb-10">
              <div onClick={switchToSquare} className="flex flex-col items-center">
                <div className="flex flex-row justify-center items-center bg-blue-25 rounded-lg shadow-lg w-18 h-18 md:w-24 md:h-24">
                  <div className="border-2 border-white w-12 h-12 md:w-16 md:h-16 rounded md:rounded-lg"></div>
                </div>
                <h1 className="text-sm md:text-base text-gray-400 font-medium">square</h1>
              </div>
              <div onClick={switchToPortrait} className="flex flex-col items-center">
                <div className="flex flex-row justify-center items-center bg-white rounded-lg shadow-lg w-18 h-18 md:w-24 md:h-24">
                  <div className="border-2 border-gray-400 w-8 h-12 md:w-10 md:h-16 rounded-lg"></div>
                </div>
                <h1 className="text-sm md:text-base text-gray-400 font-medium">portrait</h1>
              </div>
            </div>
          )}
          {squareDis && <Square width={frameWidth} />}
          {portraitDis && <Potrait width={frameWidth} />}
          <div style={{ width: frameWidth }} className="flex flex-row space-x-2 mt-6 mb-10">
            <div className="flex flex-col justify-between items-center text-xxs md:text-base font-medium text-gray-400 text-center justify-center bg-white py-2 md:py-4 w-1/3 rounded-xl shadow-lg">
              <img className="w-6 md:w-9" src="/assets/icon/twitter.png" />
              Share to Twitter
            </div>
            <div className="flex flex-col justify-between items-center text-xxs md:text-base font-medium text-gray-400 text-center justify-center bg-white py-2 md:py-4 w-1/3 rounded-xl shadow-lg">
              <img className="w-6 md:w-auto" src="/assets/icon/facebook.png" />
              Share to Facebook
            </div>
            <div className="flex flex-col md:justify-between items-center text-xxs md:text-base font-medium text-gray-400 text-center justify-center bg-white py-2 md:py-4 w-1/3 rounded-xl shadow-lg">
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
