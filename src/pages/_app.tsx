import React, { useEffect } from 'react'
import { SSRProvider, OverlayProvider } from 'react-aria'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Router from 'next/router'

import 'styles/tailwind.css'
import * as gtag from 'lib/gtag'

import { AuthProvider } from 'lib/auth'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
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
}

export default MyApp
