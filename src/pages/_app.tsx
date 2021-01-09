import React from 'react'
import { AppProps } from 'next/app'

import 'styles/tailwind.css'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="antialiased">
    <Head>
      <title>Triam Udom Openhouse 2020</title>
    </Head>
    <Component {...pageProps} />
  </div>
)

export default MyApp
