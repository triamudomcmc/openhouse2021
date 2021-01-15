import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import 'styles/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="antialiased">
    <Head>
      <title>Triam Udom Open House 2021</title>
    </Head>
    <Component {...pageProps} />
  </div>
)

export default MyApp
