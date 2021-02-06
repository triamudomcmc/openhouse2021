import { Layout } from 'components/common/Layout'
import Router from 'next/router'
import { Portrait, SimplePortrait, SimpleSquare, Square } from 'components/ticket/Visual'
import useWindowSize from 'lib/hooks/useWindowSize'
import React, { useEffect, useRef, useState } from 'react'
import Footer from 'components/common/Footer'
import { useAuth } from 'lib/auth'
import getImgDownloadQS from 'utils/getImgDownloadQS'

const Ticket = () => {
  const { loading, user, userData, updateUserData } = useAuth()
  const [squareDis, setSquareDis] = useState(false)
  const [imgReady, setImgReady] = useState(false)
  const [imgLoading, setImgLoading] = useState(false)

  useEffect(() => {
    updateUserData()
  }, [])

  const downloadLink = useRef<HTMLAnchorElement>()
  const permalink = encodeURIComponent(`https://localhost:3000/tickets/${userData?.uid}`)
  const downloadUrl = `/api/ticket-images/${userData?.uid}?type=${encodeURIComponent(
    getImgDownloadQS(userData?.wishes ? 'wishes' : 'nowishes', squareDis)
  )}`
  const text = encodeURIComponent(`#TriamUdomOnlineOpenHouse2021 #triamOPH2021 #tu84 #tu85`)
  const tweetUrl = `https://twitter.com/intent/tweet?url=${permalink}&via=triamudomoph&text=${text}`

  useEffect(() => {
    setImgReady(false)

    const img = new Image()

    img.src = downloadUrl
    img.onload = () => {
      setImgReady(true)
      setImgLoading(false)
      if (downloadLink.current) {
        downloadLink.current.click()
        downloadLink.current = undefined
      }
    }
  }, [downloadUrl])

  useEffect(() => {
    if (!loading && !user) {
      Router.push('/register')
    }
  }, [loading, user])

  const { width } = useWindowSize()

  const getTicket = () => {
    if (userData?.haveWishes) {
      if (squareDis) {
        return (
          <Square
            width={width / 4}
            nickname={userData?.nickname}
            wishes={userData?.wishes}
            number={999999}
          />
        )
      } else {
        return (
          <Portrait
            width={width / 4}
            nickname={userData?.nickname}
            wishes={userData?.wishes}
            number={999999}
          />
        )
      }
    } else {
      if (squareDis) {
        return (
          <SimpleSquare
            width={width / 4}
            nickname={userData?.nickname}
            wishes={userData?.wishes}
            number={999999}
          />
        )
      } else {
        return (
          <SimplePortrait
            width={width / 4}
            nickname={userData?.nickname}
            wishes={userData?.wishes}
            number={999999}
          />
        )
      }
    }
  }

  const switchToSquare = () => {
    setSquareDis(true)
  }

  const switchToPortrait = () => {
    setSquareDis(false)
  }

  return (
    <Layout>
      <div className="w-full h-full py-16">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-4xl font-black text-blue-400 md:text-6xl">การ์ดต้อนรับ</h1>
          {!squareDis ? (
            <div className="flex flex-row mb-10 space-x-8">
              <div onClick={switchToSquare} className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-center bg-white rounded-lg shadow-md w-18 h-18 md:w-24 md:h-24">
                  <div className="w-12 h-12 border-2 border-gray-400 rounded md:w-16 md:h-16 md:rounded-lg"></div>
                </div>
                <h1 className="mt-4 text-sm font-medium text-gray-400 md:text-base">Square</h1>
              </div>
              <div onClick={switchToPortrait} className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-center rounded-lg shadow-md bg-blue-25 w-18 h-18 md:w-24 md:h-24">
                  <div className="w-8 h-12 border-2 border-white rounded-lg md:w-10 md:h-16"></div>
                </div>
                <h1 className="mt-4 text-sm font-medium text-gray-400 md:text-base">Portrait</h1>
              </div>
            </div>
          ) : (
            <div className="flex flex-row mb-10 space-x-8">
              <div onClick={switchToSquare} className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-center rounded-lg shadow-lg bg-blue-25 w-18 h-18 md:w-24 md:h-24">
                  <div className="w-12 h-12 border-2 border-white rounded md:w-16 md:h-16 md:rounded-lg"></div>
                </div>
                <h1 className="mt-4 text-sm font-medium text-gray-400 md:text-base">Square</h1>
              </div>
              <div onClick={switchToPortrait} className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-center bg-white rounded-lg shadow-lg w-18 h-18 md:w-24 md:h-24">
                  <div className="w-8 h-12 border-2 border-gray-400 rounded-lg md:w-10 md:h-16"></div>
                </div>
                <h1 className="mt-4 text-sm font-medium text-gray-400 md:text-base">Portrait</h1>
              </div>
            </div>
          )}
          {!loading && user && getTicket()}
          <div style={{ width: width / 4 }} className="flex flex-row mt-6 mb-10 space-x-2">
            <a
              className="flex flex-col items-center justify-center justify-between w-1/3 py-2 font-medium text-center text-gray-400 bg-white shadow-lg text-xxs md:text-base md:py-4 rounded-xl"
              href={tweetUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="w-6 md:w-9" src="/assets/icon/twitter.png" />
              Share to Twitter
            </a>
            <div className="flex flex-col items-center justify-center justify-between w-1/3 py-2 font-medium text-center text-gray-400 bg-white shadow-lg text-xxs md:text-base md:py-4 rounded-xl">
              <img className="w-6 md:w-auto" src="/assets/icon/facebook.png" />
              Share to Facebook
            </div>
            <a
              className="flex flex-col items-center justify-center w-1/3 py-2 font-medium text-center text-gray-400 bg-white shadow-lg md:justify-between text-xxs md:text-base md:py-4 rounded-xl"
              href={imgLoading ? undefined : downloadUrl}
              onClick={e => {
                if (imgReady) return

                e.preventDefault()
                downloadLink.current = e.currentTarget
                // Wait for the image download to finish
                setImgLoading(true)
              }}
              download="ticket.png"
            >
              <img className="w-6 md:w-auto" src="/assets/icon/download.png" />
              Download
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default Ticket
