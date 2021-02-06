import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Layout } from 'components/common/Layout'
import { Contacthead } from '../../src/assets/vectors/Contacthead'
import Footer from 'components/common/Footer'

export const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center pb-12">
        <div className="flex flex-col items-center md:w-7/12">
          <div className="max-w-full text-3xl font-bold text-center text-blue-400">
            <h1 className="pt-6 md:hidden">ช่องทางการติดตาม</h1>
            <div className="flex max-w-xs py-2 md:max-w-screen-md md:py-12">
              <Contacthead />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col text-center md:w-2/3">
                <div className="flex-col hidden md:flex">
                  <h1 className="text-3xl font-bold text-blue-400">ช่องทางการติดตาม</h1>
                </div>
                <div className="flex flex-col justify-center pt-4 text-gray-500 md:flex-row md:border-r-2 md:border-gray-200">
                  <div className="flex flex-col flex-wrap">
                    <a href="https://www.instagram.com/triamudom.oph/" target="_blank">
                      <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md md:h-28 md:py-8 md:px-10 md:mb-8 md:text-lg rounded-xl md:rounded-3xl l">
                        <div className="flex flex-row items-center justify-center">
                          <Image src="/assets/vectors/instagram.svg" width={40} height={41} />
                          <h1 className="pl-2">triamudom.oph</h1>
                        </div>
                      </div>
                    </a>
                    <a href="https://www.facebook.com/TriamUdomOPH" target="_blank">
                      <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md md:h-28 md:py-8 md:px-10 md:mb-8 md:text-lg rounded-xl md:rounded-3xl ">
                        <div className="flex flex-row items-center justify-center">
                          <Image src="/assets/vectors/facebook.svg" width={40} height={41} />
                          <h1 className="pl-2 md:w-32">TRIAM UDOM OPEN HOUSE</h1>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="flex flex-col flex-wrap">
                    <a href="https://twitter.com/triamudomoph" target="_blank">
                      <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md md:h-28 md:py-8 md:px-10 md:mb-8 md:text-lg rounded-xl md:rounded-3xl ">
                        <div className="flex flex-row items-center justify-center">
                          <Image src="/assets/vectors/twitter.svg" width={40} height={41} />
                          <h1 className="pl-2">@triamudomoph</h1>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCHebOxW-sZkK8IFmmSFXU6Q"
                      target="_blank"
                    >
                      <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md md:h-28 md:py-8 md:px-10 md:mb-8 md:text-lg rounded-xl md:rounded-3xl ">
                        <div className="flex flex-row items-center justify-center">
                          <Image src="/assets/vectors/youtube.svg" width={40} height={41} />
                          <h1 className="pl-2">@triamudomoph</h1>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-center md:w-1/3">
                <div className="flex flex-col">
                  <h1 className="pt-8 text-3xl font-bold text-blue-400 md:p-0">ติดต่อผู้จัดงาน</h1>
                </div>
                <div className="flex flex-col justify-center pt-4 text-gray-500 md:flex-row">
                  <div className="flex flex-col flex-wrap">
                    <a href="https://www.instagram.com/tucmc_official/" target="_blank">
                      <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md md:h-28 md:py-8 md:px-10 md:mb-8 md:text-lg rounded-xl md:rounded-3xl ">
                        <div className="flex flex-row items-center justify-center">
                          <Image src="/assets/vectors/instagram.svg" width={40} height={41} />
                          <h1 className="pl-2">tucmc_official</h1>
                        </div>
                      </div>
                    </a>
                    <a href="https://www.facebook.com/triamudomclubs" target="_blank">
                      <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md md:h-28 md:py-8 md:px-10 md:mb-8 md:text-lg rounded-xl md:rounded-3xl ">
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
