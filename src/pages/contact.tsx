import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Layout } from 'components/common/Layout'
import { Contacthead } from '../../src/assets/vectors/Contacthead'
import Footer from 'components/common/Footer'
import { Instagram } from 'assets/vectors/social/Instagram'
import { Twitter } from 'assets/vectors/social/Twitter'
import { Youtube } from 'assets/vectors/social/Youtube'

export const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center pb-12">
        <div className="flex flex-col items-center 2xl:w-7/12">
          <div className="max-w-full text-3xl font-bold text-center text-blue-400">
            <h1 className="pt-6 2xl:hidden">ช่องทางการติดตาม</h1>
            <div className="flex flex-col items-center ">
              <div className="flex py-2 2xl:max-w-screen-md">
                <Contacthead />
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-full">
            <div className="flex flex-col 2xl:flex-row">
              <div className="flex flex-col text-center 2xl:w-2/3">
                <div className="flex-col hidden 2xl:flex">
                  <h1 className="text-3xl font-bold text-blue-400">ติดตามงานโอเพนเฮาส์</h1>
                </div>
                <div className="flex flex-col justify-center pt-4 text-gray-500 2xl:pr-6 2xl:flex-row 2xl:border-r-2 2xl:border-gray-200">
                  <div className="flex flex-col flex-wrap">
                    <a href="https://www.instagram.com/triamudom.oph/" target="_blank">
                      <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md 2xl:h-28 2xl:py-8 2xl:px-10 2xl:mb-8 2xl:text-lg rounded-xl 2xl:rounded-3xl l">
                        <div className="flex flex-row items-center justify-center">
                          <Instagram />
                          <h1 className="pl-2">triamudom.oph</h1>
                        </div>
                      </div>
                    </a>
                    <a href="https://www.facebook.com/TriamUdomOPH" target="_blank">
                      <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md 2xl:h-28 2xl:py-8 2xl:px-10 2xl:mb-8 2xl:text-lg rounded-xl 2xl:rounded-3xl ">
                        <div className="flex flex-row items-center justify-center">
                          <Image src="/assets/vectors/facebook.svg" width={40} height={41} />
                          <h1 className="pl-2 2xl:w-32">TRIAM UDOM OPEN HOUSE</h1>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="flex flex-col flex-wrap">
                    <a href="https://twitter.com/triamudomoph" target="_blank">
                      <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md 2xl:h-28 2xl:py-8 2xl:px-10 2xl:mb-8 2xl:text-lg rounded-xl 2xl:rounded-3xl ">
                        <div className="flex flex-row items-center justify-center">
                          <Twitter />
                          <h1 className="pl-2">@triamudomoph</h1>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCHebOxW-sZkK8IFmmSFXU6Q"
                      target="_blank"
                    >
                      <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md 2xl:h-28 2xl:py-8 2xl:px-10 2xl:mb-8 2xl:text-lg rounded-xl 2xl:rounded-3xl ">
                        <div className="flex flex-row items-center justify-center">
                          <Youtube />
                          <h1 className="pl-2">@triamudomoph</h1>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-center 2xl:w-1/3">
                <div className="flex flex-col">
                  <h1 className="pt-8 text-3xl font-bold text-blue-400 2xl:p-0">ติดต่อผู้จัดงาน</h1>
                </div>
                <div className="flex flex-col justify-center pt-4 text-gray-500 2xl:flex-row 2xl:pl-6">
                  <div className="flex flex-col flex-wrap">
                    <a href="https://www.instagram.com/tucmc_official/" target="_blank">
                      <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md 2xl:h-28 2xl:py-8 2xl:px-10 2xl:mb-8 2xl:text-lg rounded-xl 2xl:rounded-3xl ">
                        <div className="flex flex-row items-center justify-center">
                          <Instagram />
                          <h1 className="pl-2">tucmc_official</h1>
                        </div>
                      </div>
                    </a>
                    <a href="https://www.facebook.com/triamudomclubs" target="_blank">
                      <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md 2xl:h-28 2xl:py-8 2xl:px-10 2xl:mb-8 2xl:text-lg rounded-xl 2xl:rounded-3xl ">
                        <div className="flex flex-row items-center justify-center">
                          <Image src="/assets/vectors/facebook.svg" width={40} height={41} />
                          <h1 className="pl-2">TUCMC</h1>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default Contact
