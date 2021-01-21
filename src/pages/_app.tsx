import React from 'react'
import { SSRProvider, OverlayProvider } from 'react-aria'
import Head from 'next/head'
import { AppProps } from 'next/app'

import 'styles/tailwind.css'

import { AuthProvider } from 'lib/auth'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SSRProvider>
    <OverlayProvider>
      <div className="antialiased">
        <Head>
          <title>Triam Udom Open House 2021</title>
        </Head>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </div>
    </OverlayProvider>
  </SSRProvider>
)

export default MyApp
