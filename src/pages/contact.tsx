import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Layout } from 'components/common/Layout'
import { Contacthead } from '../../src/assets/vectors/Contacthead'

export const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center md:w-7/12">
          <div className="max-w-full text-center text-3xl font-bold text-blue-400">
            <h1 className="md:hidden pt-6">ช่องทางการติดตาม</h1>
            <div className="flex max-w-xs md:max-w-screen-md py-2 md:py-12">
              <Contacthead />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col md:w-2/3 text-center">
                <div className="flex flex-col hidden md:flex">
                  <h1 className="text-3xl font-bold text-blue-400">
                    ช่องทางการติดตาม
                  </h1>
                </div>
                <div className="flex flex-col md:flex-row justify-center text-gray-500 pt-4 md:border-r-2 md:border-gray-200">
                  <div className="flex flex-col flex-wrap">
                    <div className="md:h-28 flex flex-col justify-center px-16 px-2 py-4  md:py-8 mx-3 font-semibold md:px-10  mb-4 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl l">
                      <div className="flex flex-row justify-center items-center">
                        <Image
                          src="/assets/vectors/instagram.svg"
                          width={40}
                          height={41}
                        />
                        <h1 className="pl-2">triamudom.oph</h1>
                      </div>
                    </div>
                    <div className="md:h-28 flex flex-col justify-center px-16 px-2 py-4 md:py-8 mx-3 font-semibold md:px-10  mb-4 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
                      <div className="flex flex-row justify-center items-center">
                        <Image
                          src="/assets/vectors/facebook.svg"
                          width={40}
                          height={41}
                        />
                        <h1 className="pl-2 md:w-32">TRIAM UDOM OPEN HOUSE</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-wrap">
                    <div className="md:h-28 flex flex-col justify-center px-16 px-2 py-4 md:py-8 mx-3 font-semibold md:px-10  mb-4 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
                      <div className="flex flex-row justify-center items-center">
                        <Image
                          src="/assets/vectors/twitter.svg"
                          width={40}
                          height={41}
                        />
                        <h1 className="pl-2">@triamudomoph</h1>
                      </div>
                    </div>
                    <div className="md:h-28 flex flex-col justify-center px-16 px-2 py-4 md:py-8 mx-3 font-semibold md:px-10  mb-4 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
                      <div className="flex flex-row justify-center items-center">
                        <Image
                          src="/assets/vectors/youtube.svg"
                          width={40}
                          height={41}
                        />
                        <h1 className="pl-2">@triamudomoph</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:w-1/3 text-center">
                <div className="flex flex-col">
                  <h1 className="text-3xl font-bold text-blue-400 pt-8 md:p-0">
                    ติดต่อผู้จัดงาน
                  </h1>
                </div>
                <div className="flex flex-col md:flex-row justify-center text-gray-500 pt-4">
                  <div className="flex flex-col flex-wrap">
                    <div className="md:h-28 flex flex-col justify-center px-16 px-2 py-4 md:py-8 mx-3 font-semibold md:px-10  mb-4 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
                      <div className="flex flex-row justify-center items-center">
                        <Image
                          src="/assets/vectors/instagram.svg"
                          width={40}
                          height={41}
                        />
                        <h1 className="pl-2">tucmc_official</h1>
                      </div>
                    </div>
                    <div className="md:h-28 flex flex-col justify-center px-16 px-2 py-4 md:py-8 mx-3 font-semibold md:px-10  mb-4 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
                      <div className="flex flex-row justify-center items-center">
                        <Image
                          src="/assets/vectors/facebook.svg"
                          width={40}
                          height={41}
                        />
                        <h1 className="pl-2">TUCMC</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
