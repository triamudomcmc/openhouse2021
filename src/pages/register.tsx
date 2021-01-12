import React from 'react'

import { Header } from 'components/common/Header'
import { Google } from 'components/common/Logo/Google'
import { Facebook } from 'components/common/Logo/Facebook'
import { useAuth } from 'lib/auth'

const Register = () => {
  const auth = useAuth()

  return (
    <div className="font-display">
      <Header />
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-2xl font-bold text-gray-600 md:text-4xl">
          Sign Up / ลงทะเบียน
        </h1>
        <div className="flex flex-col items-center justify-center mt-16">
          <button
            type="button"
            className="inline-flex items-center justify-center px-10 py-2 text-xl font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md w-96 focus:outline-none"
            onClick={() => auth.signinWithGoogle('/')}
          >
            <Google className="w-5 h-5 mr-4" />
            Sign in with Google
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center px-10 py-2 mt-4 text-xl font-medium text-center text-gray-600 bg-white border border-transparent rounded-full shadow-md w-96 focus:outline-none"
            onClick={() => auth.signinWithFacebook('/')}
          >
            <Facebook className="w-5 h-5 mr-4" />
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
