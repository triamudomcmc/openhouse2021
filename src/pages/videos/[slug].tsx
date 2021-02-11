import { Layout } from '../../components/common/Layout'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHTML'
import Footer from '../../components/common/Footer'
import fs from 'fs'
import Link from 'next/link'
import React from 'react'

const Videos = ({ post, suggestion }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center mb-10 w-full">
        <div className="flex flex-col items-center w-7/12 space-y- mt-20">
          <iframe
            width="100%"
            height="465"
            src={post.video}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="w-full text-gray-500 space-y-1">
            <h1 className="font-bold mt-6 text-2xl">{post.title}</h1>
            <h1 className="font-semibold text-xl">{post.author}</h1>
          </div>
          <article
            className="font-display text-gray-400 text-lg"
            dangerouslySetInnerHTML={{ __html: post.description }}
          ></article>
        </div>
        <div className="mt-20 w-7/12">
          <h1 className="text-2xl font-bold text-center mb-6">ชมรมอื่นๆ</h1>
          <div className="flex flex-wrap justify-center space-x-4">
            {suggestion.map(value => {
              return (
                <Link href={value.path}>
                  <div className="text-center mb-10">
                    <img
                      src={value.thumbnail}
                      style={{ width: '240px', height: '162px', objectFit: 'cover' }}
                      className="pb-2 w-60 rounded-xl"
                    />
                    <p style={{ width: '240px' }} className="font-semibold">
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
  const fetchedData = fs.readFileSync('./_maps/videosMap.json')
  let pathsItem = []
  let i = 1
  while (i <= 27) {
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
  const fetchedData = fs.readFileSync('./_maps/videosMap.json')
  const obj = JSON.parse(fetchedData.toString())
  const keys = Object.keys(obj)

  if (!fetchedData) {
    return {
      notFound: true
    }
  }

  let random = []
  while (random.length < 4) {
    let r = Math.floor(Math.random() * 5)
    if (random.indexOf(r) === -1 && r !== parseInt(params.slug)) random.push(r)
  }

  console.log(random)

  const suggestion = random.map(index => {
    return {
      path: `/videos/${index}`,
      thumbnail: obj[index].thumbnail,
      title: obj[index].title
    }
  })

  const data = JSON.parse(fetchedData.toString())

  return {
    props: {
      post: data[params.slug],
      suggestion: suggestion
    }
  }
}

export default Videos
