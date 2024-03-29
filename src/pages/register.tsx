import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Image from 'next/image'

import { Google } from 'components/common/Logo/Google'
import { Facebook } from 'components/common/Logo/Facebook'
import { Layout } from 'components/common/Layout'

import { useAuth } from 'lib/auth'
import Link from 'next/link'
import { Email } from '../components/common/Logo/Email'
import firebase from 'firebase'
import InApp from 'detect-inapp'

const Register = () => {
  const auth = useAuth()
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    if (window.localStorage.getItem('emailForSignIn') !== null) {
      Router.push('/signup')
    }
    const inapp = new InApp(navigator.userAgent || navigator.vendor)
    if (inapp.isInApp) {
      setBlocked(true)
    }
  }, [])

  useEffect(() => {
    if (auth.userData && Object.keys(auth.userData).length === 5) {
      Router.push('/onboard')
    }
  }, [auth.userData])

  useEffect(() => {
    if (auth.userData && Object.keys(auth.userData).length >= 15) {
      Router.push('/stage')
    }
  }, [auth.userData])

  return (
    <Layout hideSignIn={true}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center flex-1">
          <div>
            {!blocked ? (
              <>
                <h1 className="text-2xl font-bold text-center text-gray-500 md:text-4xl">
                  Sign Up / ลงทะเบียน
                </h1>
                <div className="flex flex-col items-center justify-center mt-4 space-y-4 md:mt-12">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-5 py-2 text-base font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md hover:bg-gray-100 md:px-10 md:text-xl focus:outline-none"
                    onClick={() => auth.signinWithGoogle('/onboard')}
                  >
                    <Google className="w-5 h-5 mr-4" />
                    Sign in with Google
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-5 py-2 text-base font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md hover:bg-gray-100 md:px-10 md:text-xl focus:outline-none"
                    onClick={() => auth.signinWithFacebook('/onboard')}
                  >
                    <Facebook className="w-5 h-5 mr-4" />
                    Sign in with Facebook
                  </button>
                  <Link href="/signup">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-full px-5 py-2 text-base font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md hover:bg-gray-100 md:px-10 md:text-xl focus:outline-none"
                    >
                      <Email className="w-5 h-5 mr-4" />
                      Sign in with email
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold text-center text-gray-500 md:text-4xl">
                  Sign Up / ลงทะเบียน
                </h1>
                <div className="flex flex-col items-center justify-center mt-4 space-y-4 md:mt-12">
                  <Link href="/signup">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-full px-5 py-2 text-base font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md hover:bg-gray-100 md:px-10 md:text-xl focus:outline-none"
                    >
                      <Email className="w-5 h-5 mr-4" />
                      Sign in with email
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="w-24 py-8 md:w-48">
          <Image src="/assets/tucmc.png" width={1071} height={162} />
        </div>
      </div>
    </Layout>
  )
}

export default Register
