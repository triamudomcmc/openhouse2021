import React from 'react'
import { Layout } from 'components/common/Layout'
import RegisterForm from 'components/RegisterForm'

const Onboard = () => {
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
