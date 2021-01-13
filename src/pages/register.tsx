import React from 'react'
import Image from 'next/image'

import { Google } from 'components/common/Logo/Google'
import { Facebook } from 'components/common/Logo/Facebook'
import { Nav } from 'components/common/Nav'
import { Layout } from 'components/common/Layout'

import { useAuth } from 'lib/auth'

const Register = () => {
  const auth = useAuth()

  return (
    <div className="font-display">
      <Nav />
      <Layout>
        <div className="flex flex-col items-center justify-center flex-1">
          <div>
            <h1 className="text-2xl font-bold text-center text-gray-500 md:text-4xl">
              Sign Up / ลงทะเบียน
            </h1>
            <div className="flex flex-col items-center justify-center mt-4 space-y-4 md:mt-12">
              <button
                type="button"
                className="inline-flex items-center justify-center w-full px-5 py-2 text-base font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md md:px-10 md:text-xl focus:outline-none"
                onClick={() => auth.signinWithGoogle('/')}
              >
                <Google className="w-5 h-5 mr-4" />
                Sign in with Google
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center w-full px-5 py-2 text-base font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md md:px-10 md:text-xl focus:outline-none"
                onClick={() => auth.signinWithFacebook('/')}
              >
                <Facebook className="w-5 h-5 mr-4" />
                Sign in with Facebook
              </button>
            </div>
          </div>
        </div>
        <div className="w-24 py-8 md:w-48">
          <Image src="/assets/tucmc.png" width={1071} height={162} />
        </div>
      </Layout>
    </div>
  )
}

export default Register
