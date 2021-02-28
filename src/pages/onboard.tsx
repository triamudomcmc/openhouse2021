import React, { useEffect, useRef, useState } from 'react'
import { Layout } from 'components/common/Layout'
import RegisterForm from 'components/RegisterForm'
import { useAuth } from 'lib/auth'
import Router from 'next/router'
import firebase from 'firebase/app'
import Toast from '../components/common/Toasts/Toast'

const Onboard = () => {
  const auth = useAuth()
  const { user, loading, userData } = useAuth()
  const [askForEmail, setAskForEmail] = useState(false)
  const [ftext, setFText] = useState('')
  const [toast, setToast] = useState(false)
  const email = useRef(null)
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

  useEffect(() => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn')
      if (email !== null) {
        auth.signinWithEmail(email, window.location.href)
        window.localStorage.removeItem('emailForSignIn')
      } else {
        setAskForEmail(true)
      }
    }
  }, [])

  useEffect(() => {
    if (!firebase.auth().isSignInWithEmailLink(window.location.href)) {
      if (!loading && !user) {
        Router.push('/register')
      }
    }
  }, [loading, user])

  useEffect(() => {
    if (userData && Object.keys(userData).length >= 15) {
      Router.push('/')
    }
  }, [userData])

  const signinWithEmail = async (email: string) => {
    if (email != '') {
      if (email.includes('@')) {
        auth
          .signinWithEmail(email, window.location.href)
          .then(() => {
            setAskForEmail(false)
          })
          .catch(e => {
            setFText('ไม่พบอีเมล โปรดกรอกใหม่อีกครั้ง')
            turnToastOn()
          })
      } else {
        setFText('อีเมลไม่ถูกต้อง')
        turnToastOn()
      }
    } else {
      setFText('อีเมลไม่ถูกต้อง')
      turnToastOn()
    }
  }

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
      {askForEmail ? (
        <div className="flex flex-col items-center justify-center flex-1 w-full h-full px-8 py-24">
          <h1 className="text-2xl font-bold text-gray-600 md:text-4xl">กรอกอีเมลอีกครั้ง</h1>
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
                    ยืนยันอีเมล
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-md md:text-lg flex flex-row justify-center font-medium text-gray-400">
            <div className="w-2/3 text-center">
              กรอกอีเมลเพื่อยืนยันการลงทะเบียนอีกครั้งเพื่อไปสู่ขั้นตอนถัดไป
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center flex-1 w-full h-full px-8 py-24">
          <h1 className="text-xl font-bold text-gray-600 md:text-4xl">Sign Up / ลงทะเบียน</h1>
          <div className="mt-4">
            <RegisterForm />
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Onboard
