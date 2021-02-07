import React from 'react'
import { Layout } from '../../components/common/Layout'
import PlaceholderProfile from '../../assets/vectors/clubs/PlaceholderProfile'
import Footer from '../../components/common/Footer'
import PlaceholderSuggestion from '../../assets/vectors/clubs/PlaceholderSuggestion'
import { GetStaticPaths, GetStaticProps } from 'next'
import * as fs from 'fs'
import markdownToHtml from '../../lib/markdownToHTML'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const file = fs.readFileSync('./_clubs/clubs.json', { encoding: 'utf8', flag: 'r' })
  const obj = JSON.parse(file)
  const fname: string = params.name as string
  const reviewItems = await Promise.all(
    obj[fname].reviews.map(async (item, index) => {
      return {
        content: await markdownToHtml(item.description),
        profileData: item.profileContent,
        profileURL: obj[fname].reviewURL.length >= index + 1 ? obj[fname].reviewURL[index] : ''
      }
    })
  )

  const content = {
    thaiName: obj[fname].thaiName,
    englishName: obj[fname].englishName,
    count: obj[fname].count,
    activity: await markdownToHtml(obj[fname].activity),
    benefit: await markdownToHtml(obj[fname].benefit),
    portfolio: await markdownToHtml(obj[fname].portfolio.replace(/ของชมรม\n\n/g, '')),
    pictures: obj[fname].imageURL,
    reviews: reviewItems
  }

  console.log(content)

  return {
    props: {
      contents: content
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const file = fs.readFileSync('./_clubs/clubs.json', { encoding: 'utf8', flag: 'r' })
  const obj = JSON.parse(file)
  return {
    paths: Object.keys(obj).map(post => {
      return {
        params: {
          name: post
        }
      }
    }),
    fallback: false
  }
}

const Page = ({ contents }) => {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-10/12 md:max-w-3xl">
          <div className="flex flex-col justify-center items-center mt-20">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">{contents.thaiName}</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">
              ชมรม | {contents.count} คน
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center mt-12">
            {contents.pictures.length >= 1 ? (
              <>
                <img
                  src={contents.pictures[0].url}
                  className="bg-gray-300 h-60 md:h-96 w-full"
                ></img>
                <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                  {contents.pictures[0].description}
                </h1>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไร</h1>
            <article
              className="prose text-gray-500 text-medium md:text-xl mt-12"
              dangerouslySetInnerHTML={{ __html: contents.activity }}
            ></article>
            <div className="flex flex-col justify-center items-center mt-12">
              {contents.pictures.length >= 2 ? (
                <>
                  <img
                    src={contents.pictures[1].url}
                    className="bg-gray-300 h-60 md:h-96 w-full"
                  ></img>
                  <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                    {contents.pictures[1].description}
                  </h1>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <article
              className="prose text-gray-500 text-medium md:text-xl mt-12"
              dangerouslySetInnerHTML={{ __html: contents.benefit }}
            ></article>
            <div className="flex flex-col justify-center items-center mt-12">
              {contents.pictures.length >= 3 ? (
                <>
                  <img
                    src={contents.pictures[2].url}
                    className="bg-gray-300 h-60 md:h-96 w-full"
                  ></img>
                  <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                    {contents.pictures[2].description}
                  </h1>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมาของชมรม</h1>
            <article
              className="prose text-gray-500 text-medium md:text-xl mt-12"
              dangerouslySetInnerHTML={{ __html: contents.portfolio }}
            ></article>
            <div className="flex flex-col justify-center items-center mt-12">
              {contents.pictures.length >= 4 ? (
                <>
                  <img
                    src={contents.pictures[3].url}
                    className="bg-gray-300 h-60 md:h-96 w-full"
                  ></img>
                  <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                    {contents.pictures[3].description}
                  </h1>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>
            {contents.reviews.map(item => {
              return (
                <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
                  <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                    <div className="flex">
                      <img
                        src={item.profileURL}
                        width="96px"
                        height="96px"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                      <h1 className="text-xl md:text-2xl font-black">{item.profileData.name}</h1>
                      <span className="text-xs">เตรียมอุดม {item.profileData.year}</span>
                      <span className="w-max text-xs">IG: {item.profileData.contact}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:ml-4">
                    <div className="hidden md:block relative">
                      <span className="absolute text-gray-300 text-8xl left-10 top-6">“</span>
                    </div>
                    <div className="bg-whtie shadow-lg rounded-3xl md:py-16 px-6 md:px-16">
                      <div className="md:hidden text-center text-gray-300 text-6xl pt-2 h-10">
                        <span className="absolute">“</span>
                      </div>
                      <article
                        className="prose text-medium md:text-xl text-gray-500"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      ></article>
                      <h1 className="md:hidden text-center text-gray-300 text-6xl h-22 w-full">
                        ”
                      </h1>
                    </div>
                    <div className="hidden md:block relative">
                      <span className="absolute text-gray-300 text-8xl right-16 -top-20">”</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-20">
            <h1 className="text-2xl font-bold text-center mb-6">ชมรมอื่นๆ</h1>
            <div className="flex flex-wrap justify-center space-x-4">
              <div className="text-center mb-10">
                <PlaceholderSuggestion className="pb-2 w-60" />
                <span className="font-semibold">พัฒนาศักยภาพทางวิทยาศาสตร์</span>
              </div>
              <div className="text-center mb-10">
                <PlaceholderSuggestion className="pb-2 w-60" />
                <span className="font-semibold">พัฒนาศักยภาพทางวิทยาศาสตร์</span>
              </div>
              <div className="text-center mb-10">
                <PlaceholderSuggestion className="pb-2 w-60" />
                <span className="font-semibold">พัฒนาศักยภาพทางวิทยาศาสตร์</span>
              </div>
              <div className="text-center mb-10">
                <PlaceholderSuggestion className="pb-2 w-60" />
                <span className="font-semibold">พัฒนาศักยภาพทางวิทยาศาสตร์</span>
              </div>
              <div className="text-center mb-10">
                <PlaceholderSuggestion className="pb-2 w-60" />
                <span className="font-semibold">พัฒนาศักยภาพทางวิทยาศาสตร์</span>
              </div>
              <div className="text-center mb-10">
                <PlaceholderSuggestion className="pb-2 w-60" />
                <span className="font-semibold">พัฒนาศักยภาพทางวิทยาศาสตร์</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default Page
