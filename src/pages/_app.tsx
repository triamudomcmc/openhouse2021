import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import 'styles/tailwind.css'
import 'styles/custom.css'

import { AuthProvider } from 'lib/auth'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="antialiased">
    <Head>
      <title>Triam Udom Openhouse 2020</title>
    </Head>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </div>
)

export default MyApp
