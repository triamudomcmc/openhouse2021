import { Layout } from 'components/common/Layout'
import Router from 'next/router'
import { Portrait, SimplePortrait, SimpleSquare, Square } from 'components/ticket/Visual'
import useWindowSize from 'lib/hooks/useWindowSize'
import React, { useEffect, useRef, useState } from 'react'
import Footer from 'components/common/Footer'
import { useAuth } from 'lib/auth'
import getImgDownloadQS from 'utils/getImgDownloadQS'
import { motion } from 'framer-motion'
import Toast from '../../components/common/Toasts/Toast'
import { SITE_URL } from 'lib/constants'

const Ticket = () => {
  const { loading, user, userData, updateUserData } = useAuth()
  const [squareDis, setSquareDis] = useState(false)
  const [imgReady, setImgReady] = useState(false)
  const [imgLoading, setImgLoading] = useState(false)

  useEffect(() => {
    if (user) {
      updateUserData()
    }
  }, [user])

  const downloadLink = useRef<HTMLAnchorElement>()
  const link = `${SITE_URL}/tickets/${userData?.uid}`
  const permalink = encodeURIComponent(link)
  const downloadUrl = `/api/ticket-images/${userData?.uid}?type=${encodeURIComponent(
    getImgDownloadQS(userData?.haveWishes ? 'wishes' : 'nowishes', squareDis)
  )}`
  const text = encodeURIComponent(`#TriamUdomOnlineOpenHouse2021`)
  const tweetUrl = `https://twitter.com/intent/tweet?url=${permalink}&via=triamudomoph&text=${text}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${permalink}`

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
  const urlText = useRef(null)
  const [toast, setToast] = useState(false)

  const turnToastOn = () => {
    setToast(prev => {
      return true
    })
    setTimeout(() => {
      setToast(prev => {
        return false
      })
    }, 4000)
  }

  const cardWidth: number = width / 2 < 500 ? (width / 2 < 350 ? 350 : width / 2) : 500

  const copy = () => {
    turnToastOn()
    const url = urlText.current.value
    const ta = document.createElement('textarea')
    ta.innerText = url
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    ta.remove()
  }

  const getTicket = () => {
    if (userData?.haveWishes) {
      if (squareDis) {
        return (
          <SimpleSquare width={cardWidth} nickname={userData?.nickname} wishes={userData?.wishes} />
        )
      } else {
        return (
          <SimplePortrait
            width={cardWidth}
            nickname={userData?.nickname}
            wishes={userData?.wishes}
          />
        )
      }
    } else {
      if (squareDis) {
        return (
          <SimpleSquare width={cardWidth} nickname={userData?.nickname} wishes={userData?.wishes} />
        )
      } else {
        return (
          <SimplePortrait
            width={cardWidth}
            nickname={userData?.nickname}
            wishes={userData?.wishes}
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
      <div
        onClick={() => {
          setToast(prevState => {
            return false
          })
        }}
        className="fixed cursor-pointer"
      >
        <Toast type="success" text="คัลลอกลิงก์สำเร็จ" show={toast} />
      </div>
      <div className="w-full h-full py-16">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-4xl font-black text-blue-400 md:text-6xl">การ์ดต้อนรับ</h1>
          {!squareDis ? (
            <div className="flex flex-row mb-10 space-x-8">
              <div onClick={switchToSquare} className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-center bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100 w-18 h-18 md:w-24 md:h-24">
                  <div className="w-12 h-12 border-2 border-gray-400 rounded md:w-16 md:h-16 md:rounded-lg"></div>
                </div>
                <h1 className="mt-4 text-sm font-medium text-gray-400 md:text-base">Square</h1>
              </div>
              <div onClick={switchToPortrait} className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-center rounded-lg shadow-md cursor-pointer bg-blue-25 w-18 h-18 md:w-24 md:h-24">
                  <div className="w-8 h-12 border-2 border-white rounded-lg md:w-10 md:h-16"></div>
                </div>
                <h1 className="mt-4 text-sm font-medium text-gray-400 md:text-base">Portrait</h1>
              </div>
            </div>
          ) : (
            <div className="flex flex-row mb-10 space-x-8">
              <div onClick={switchToSquare} className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-center rounded-lg shadow-lg cursor-pointer bg-blue-25 w-18 h-18 md:w-24 md:h-24">
                  <div className="w-12 h-12 border-2 border-white rounded md:w-16 md:h-16 md:rounded-lg"></div>
                </div>
                <h1 className="mt-4 text-sm font-medium text-gray-400 md:text-base">Square</h1>
              </div>
              <div onClick={switchToPortrait} className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-center bg-white rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 w-18 h-18 md:w-24 md:h-24">
                  <div className="w-8 h-12 border-2 border-gray-400 rounded-lg md:w-10 md:h-16"></div>
                </div>
                <h1 className="mt-4 text-sm font-medium text-gray-400 md:text-base">Portrait</h1>
              </div>
            </div>
          )}
          {!loading && user && getTicket()}
          <div style={{ width: cardWidth }} className="flex flex-row mt-6 mb-10 space-x-2">
            <a
              className="flex flex-col items-center justify-center justify-between w-1/3 py-2 font-medium text-center text-gray-400 bg-white shadow-lg hover:bg-gray-100 text-xxs md:text-base md:py-4 rounded-xl"
              href={tweetUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="w-6 md:w-9" src="/assets/icon/twitter.png" />
              Share to Twitter
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={facebookUrl}
              className="flex flex-col items-center justify-center justify-between w-1/3 py-2 font-medium text-center text-gray-400 bg-white shadow-lg hover:bg-gray-100 text-xxs md:text-base md:py-4 rounded-xl"
            >
              <img className="w-6 md:w-auto" src="/assets/icon/facebook.png" />
              Share to Facebook
            </a>
            <a
              className="flex flex-col items-center justify-center w-1/3 py-2 font-medium text-center text-gray-400 bg-white shadow-lg hover:bg-gray-100 md:justify-between text-xxs md:text-base md:py-4 rounded-xl"
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
          <div className="mb-16" style={{ width: cardWidth }}>
            <h1 className="ml-3 text-sm font-medium text-gray-400 md:ml-6 md:text-xl">
              Your ticket URL
            </h1>
            <div className="flex flex-row items-center justify-between w-full h-12 bg-gray-100 md:h-16 rounded-xl">
              <div className="flex flex-row w-10/12 ml-3 truncate md:ml-6">
                <input
                  ref={urlText}
                  className="w-full text-sm font-medium text-gray-400 bg-gray-100 md:text-lg"
                  value={link}
                />
              </div>
              <motion.button
                onClick={copy}
                className="mr-3 md:mr-6"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1871 13.6081C10.1871 11.9844 11.4855 10.6681 13.0871 10.6681H21.7871C23.3887 10.6681 24.6871 11.9844 24.6871 13.6081V22.4281C24.6871 24.0518 23.3887 25.3681 21.7871 25.3681H13.0871C11.4855 25.3681 10.1871 24.0518 10.1871 22.4281V13.6081Z"
                    fill="#CBD5E0"
                  />
                  <path
                    d="M7.28709 4.78809C5.68546 4.78809 4.38708 6.10437 4.38708 7.72809V16.5481C4.38708 18.1718 5.68546 19.4881 7.28709 19.4881L7.28709 7.72809H18.8871C18.8871 6.10437 17.5887 4.78809 15.9871 4.78809H7.28709Z"
                    fill="#CBD5E0"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default Ticket
