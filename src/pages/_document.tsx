import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import React from 'react'

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="th">
        <Head>
          <link
            rel="preload"
            href="/assets/fonts/Inter-roman.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/Inter-italic.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/IBMPlexSansThai-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/IBMPlexSansThai-ExtraLight.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/IBMPlexSansThai-Light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/IBMPlexSansThai-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/IBMPlexSansThai-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/IBMPlexSansThai-SemiBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/IBMPlexSansThai-Text.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/IBMPlexSansThai-Thin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <meta
            property="og:title"
            content="Triam Udom Online Open House 2021"
          />
          <meta property="og:url" content="" />
          <meta
            name="description"
            content="เมื่อโรงเรียนเตรียมอุดมศึกษาถูกเนรมิตเป็นเมืองที่จะนำทุกคนสู่บรรยากาศแห่งความอบอุ่น เมื่อสายการเรียนกลายมาเป็นบ้านแต่ละหลังที่ถึงแม้ว่าจะมีเอกลักษณ์ที่แตกต่าง แต่มีใจที่พร้อมต้อนรับทุกคนมาเป็นส่วนหนึ่งของครอบครัวเตรียมอุดมฯ"
          />
          <meta
            property="og:description"
            content="เมื่อโรงเรียนเตรียมอุดมศึกษาถูกเนรมิตเป็นเมืองที่จะนำทุกคนสู่บรรยากาศแห่งความอบอุ่น เมื่อสายการเรียนกลายมาเป็นบ้านแต่ละหลังที่ถึงแม้ว่าจะมีเอกลักษณ์ที่แตกต่าง แต่มีใจที่พร้อมต้อนรับทุกคนมาเป็นส่วนหนึ่งของครอบครัวเตรียมอุดมฯ"
          />
          <meta name="twitter:site" content={`@TriamUdomOPH`} />
          <meta name="twitter:card" content={'summary_large_image'} />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            property="og:image"
            content="https://openhouse.triamudom.ac.th/og.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
