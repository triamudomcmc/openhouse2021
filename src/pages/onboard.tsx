import React, { useEffect } from 'react'
import { Layout } from 'components/common/Layout'
import RegisterForm from 'components/RegisterForm'
import { useAuth } from 'lib/auth'
import Router from 'next/router'
import firebase from 'firebase/app'
import { getCurrentUserData } from '../lib/db'

const Onboard = () => {
  const auth = useAuth()
  const { user, loading, userData } = useAuth()

  useEffect(() => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn')
      console.log(email)
      if (email !== null) {
        auth.signinWithEmail(email, window.location.href)
        window.localStorage.removeItem('emailForSignIn')
      } else {
        Router.push('/signup')
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

  return (
    <Layout hideSignIn={true}>
      <div className="flex flex-col items-center justify-center flex-1 w-full h-full px-8 py-24">
        <h1 className="text-xl font-bold text-gray-600 md:text-4xl">Sign Up / ลงทะเบียน</h1>
        <div className="mt-4">
          <RegisterForm />
        </div>
      </div>
    </Layout>
  )
}

export default Onboard
