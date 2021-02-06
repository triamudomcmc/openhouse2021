import React, { useEffect, useRef, useState } from 'react'
import { Layout } from 'components/common/Layout'
import RegisterForm from 'components/RegisterForm'
import { useAuth } from 'lib/auth'
import Router from 'next/router'
import Input from '../components/ui/Input'
import firebase from '../lib/firebase'
import classNames from 'classnames'
import Toast from '../components/common/Toasts/Toast'
import { motion, useAnimation } from 'framer-motion'

const Signup = () => {
  const email = useRef(null)
  const [toast, setToast] = useState(false)
  const [gtoast, setgToast] = useState(false)
  const [ftext, setFText] = useState('')
  const [content, setContent] = useState(<div></div>)
  const auth = useAuth()

  useEffect(() => {
    if (auth.userData && Object.keys(auth.userData).length === 5) {
      Router.push('/onboard')
    }
  }, [auth.userData])

  useEffect(() => {
    if (auth.userData && Object.keys(auth.userData).length >= 15) {
      Router.push('/')
    }
  }, [auth.userData])

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

  const turngToastOn = () => {
    setgToast(prev => {
      return true
    })
  }

  const signinWithEmail = async (email: string) => {
    if (email != '') {
      if (email.includes('@')) {
        await firebase.auth().sendSignInLinkToEmail(email, {
          url: 'http://localhost:3000/onboard',
          handleCodeInApp: true
        })
        window.localStorage.setItem('emailForSignIn', email)
        turngToastOn()
      } else {
        setFText('อีเมลไม่ถูกต้อง')
        turnToastOn()
      }
    } else {
      setFText('อีเมลไม่ถูกต้อง')
      turnToastOn()
    }
  }

  const reEnterEmail = () => {
    window.localStorage.removeItem('emailForSignIn')
    setgToast(false)
  }

  useEffect(() => {
    if (window.localStorage.getItem('emailForSignIn') === null) {
      setContent(
        <>
          <div className="flex flex-row items-end justify-center w-full space-x-4">
            <div className="w-11/12 md:w-5/12 mt-6">
              <div className="relative mt-1">
                <input
                  ref={email}
                  type="text"
                  className="w-full text-sm leading-6 md:text-base pr-32"
                  name="email"
                  placeholder="Email"
                  required
                />
                <div className="h-full absolute top-0 right-2 flex flex-col justify-center">
                  <button
                    onClick={() => {
                      signinWithEmail(email.current.value)
                    }}
                    className="inline-flex items-center px-4 py-1 text-base font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type="submit"
                  >
                    ลงทะเบียน
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-md md:text-lg flex flex-row justify-center font-medium text-gray-400">
            <div className="w-2/3 text-center">
              หมายเหตุ: ควรใช้บราวเซอร์เดียวกันกับบราวเซอร์ที่ใช้ลงทะเบียนในการเปิดลิงก์ยืนยันอีเมล
            </div>
          </div>
        </>
      )
    } else {
      setContent(
        <>
          <div className="mt-10 text-md md:text-lg max-w-4xl flex mx-3 flex-row justify-center font-medium text-gray-500">
            <div className="text-center text-2xl">
              อีเมลถูกส่งไปที่ {window.localStorage.getItem('emailForSignIn')}{' '}
              กรุณาเช็คอีเมลเพื่อยืนยันการลงทะเบียนหรือ{' '}
              <a className="cursor-pointer hover:underline text-blue-400" onClick={reEnterEmail}>
                ขอลงทะเบียนใหม่
              </a>{' '}
              หากกรอกที่อยู่อีเมลผิด
            </div>
          </div>
          <div className="mt-10 text-md md:text-lg flex flex-row justify-center font-medium text-gray-400">
            <div className="w-2/3 text-center">
              หมายเหตุ: ควรใช้บราวเซอร์เดียวกันกับบราวเซอร์ที่ใช้ลงทะเบียนในการเปิดลิงก์ยืนยันอีเมล
            </div>
          </div>
        </>
      )
    }
  }, [gtoast])

  return (
    <Layout hideSignIn={true}>
      <div
        onClick={() => {
          setToast(prevState => {
            return false
          })
        }}
        className="fixed cursor-pointer"
      >
        <Toast type="failed" text={ftext} show={toast} />
      </div>
      <div className="fixed cursor-pointer">
        <Toast type="success" text="ส่งอีเมลสำเร็จ กรุณาเช็คอีเมล" show={gtoast} />
      </div>
      <div className="flex flex-col items-center justify-center flex-1 w-full h-full px-8 py-24">
        <h1 className="text-2xl font-bold text-gray-600 md:text-4xl">ลงทะเบียนด้วยอีเมล</h1>
        {content}
      </div>
    </Layout>
  )
}

export default Signup
