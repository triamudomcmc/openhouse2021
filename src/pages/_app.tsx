import React, { useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Router from 'next/router'

import 'styles/tailwind.css'
import * as gtag from 'lib/gtag'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <div className="antialiased">
      <Head>
        <title>Triam Udom Open House 2021</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
