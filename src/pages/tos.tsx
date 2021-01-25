import React from 'react'
import fs from 'fs'
import { join } from 'path'
import { Layout } from 'components/common/Layout'
import markdownToHtml from 'lib/markdownToHTML'

const TOS = ({ content }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center flex-1 w-full h-full px-8 py-8 md:py-16">
        <h1 className="text-xl font-bold text-gray-600 md:text-4xl">
          ข้อตกลงและเงื่อนไขในการใช้งาน
        </h1>

        <div
          className="prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </Layout>
  )
}

export default TOS

export async function getStaticProps() {
  const tos = join(process.cwd(), '/tos.md')
  const fileContents = fs.readFileSync(tos, 'utf8')

  const content = await markdownToHtml(fileContents || '')

  return {
    props: {
      content,
    },
  }
}
