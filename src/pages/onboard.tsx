import React, { useEffect } from 'react'
import { Layout } from 'components/common/Layout'
import RegisterForm from 'components/RegisterForm'
import { useAuth } from 'lib/auth'
import Router from 'next/router'

const Onboard = () => {
  const { user, loading, userData } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      Router.push('/register')
    }
  }, [loading, user])

  useEffect(() => {
    if (userData && Object.keys(userData).length >= 14) {
      Router.push('/')
    }
  }, [userData])

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center flex-1 w-full h-full px-8 py-8">
        <h1 className="text-xl font-bold text-gray-600 md:text-4xl">Sign Up / ลงทะเบียน</h1>
        <div className="mt-4">
          <RegisterForm />
        </div>
      </div>
    </Layout>
  )
}

export default Onboard
