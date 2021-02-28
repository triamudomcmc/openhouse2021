import { Layout } from '../../components/common/Layout'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHTML'
import Footer from '../../components/common/Footer'
import fs from 'fs'
import Link from 'next/link'
import React from 'react'
import { parseDecription } from '../../utils/decriptionParser'

const Videos = ({ post, suggestion }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center mb-10 w-full">
        <div className="flex flex-col items-center w-10/12 md:w-7/12 mt-12 md:mt-20">
          <iframe
            width="100%"
            height="505"
            className="frame-height-mobile md:frame-height-desktop"
            src={post.video}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col items-center w-9/12 md:w-7/12">
          <div className="w-full text-gray-500 mt-2 mb-4">
            <h1 className="font-bold mt-6 text-lg md:text-2xl">{post.title}</h1>
            <h1 className="font-semibold text-base text-gray-400 md:text-xl">{post.author}</h1>
          </div>
          <article
            className="font-display w-full text-gray-400 text-base md:text-xl"
            dangerouslySetInnerHTML={{ __html: post.description }}
          ></article>
        </div>
        <div className="mt-20 w-7/12">
          <h1 className="text-2xl font-bold text-center mb-6">วีดีโออื่นๆ</h1>
          <div className="flex flex-wrap max-w-3xl justify-center mx-auto space-x-4">
            {suggestion.map(value => {
              return (
                <Link href={value.path}>
                  <div className="text-center mb-10">
                    <img
                      src={value.thumbnail}
                      style={{ width: '240px', height: '162px', objectFit: 'cover' }}
                      className="pb-2 w-60 rounded-xl"
                    />
                    <p style={{ width: '240px' }} className="truncate font-semibold">
                      {value.title}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export async function getStaticPaths() {
  const fetchedData = fs.readFileSync('./_maps/schoolVideosMap.json')
  const maxData = JSON.parse(fetchedData.toString()).length
  let pathsItem = []
  let i = 1
  while (i <= maxData) {
    pathsItem.push(i)
    i++
  }

  if (!fetchedData) {
    return {
      notFound: true
    }
  }

  return {
    paths: pathsItem.map(posts => {
      return {
        params: {
          slug: posts.toString()
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const fetchedData = fs.readFileSync('./_maps/schoolVideosMap.json')
  const obj = JSON.parse(fetchedData.toString())
  const keys = Object.keys(obj)

  if (!fetchedData) {
    return {
      notFound: true
    }
  }

  let random = []
  while (random.length < 2) {
    let r = Math.floor(Math.random() * 3)
    if (random.indexOf(r) === -1 && r !== parseInt(params.slug) - 1) random.push(r)
  }

  const suggestion = random.map(index => {
    return {
      path: `/school/${index + 1}`,
      thumbnail: obj[index].thumbnail,
      title: obj[index].title
    }
  })

  const data = JSON.parse(fetchedData.toString())
  let parsed = []

  for (const item of data) {
    let current = {}
    for (const key in item) {
      current[key] =
        key === 'description' ? await parseDecription(await markdownToHtml(item[key])) : item[key]
    }
    parsed.push(current)
  }

  return {
    props: {
      post: parsed[params.slug - 1],
      suggestion: suggestion
    }
  }
}

export default Videos
