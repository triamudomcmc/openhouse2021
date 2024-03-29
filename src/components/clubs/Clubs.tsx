import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const generateContent = data => {
  let tempStorage1,
    tempStorage2 = <></>
  let dataReturn = <></>
  let times = 1
  data.forEach(item => {
    tempStorage1 = (
      <>
        {tempStorage1}
        <Link href={item.path}>
          <div
            className="relative flex cursor-pointer flex-col items-center pb-1 px-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none"
            style={{ width: '40vw', maxWidth: '216px', height: '200px' }}
          >
            <img
              style={{
                objectFit: 'cover',
                maxHeight: '137px',
                maxWidth: '200px',
                minHeight: '137px',
                width: '38vw'
              }}
              src={item.thumbnail}
              width={200}
              height={137}
            />
            <div className="flex flex-col justify-center my-auto">
              <h1 className="font-bold text-sm md:text-base text-center">{item.title}</h1>
            </div>
          </div>
        </Link>
      </>
    )

    if (times % 5 === 0) {
      if (times % 10 === 0) {
        tempStorage2 = (
          <>
            {tempStorage2}
            <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap lg:justify-center md:w-full md:flex-row">
              {tempStorage1}
            </div>
          </>
        )
      } else {
        tempStorage2 = (
          <>
            {tempStorage2}
            <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap justify-end lg:justify-center md:w-full md:flex-row">
              {tempStorage1}
            </div>
          </>
        )
      }
      tempStorage1 = <></>
    }

    if (times % 10 === 0) {
      dataReturn = (
        <>
          {dataReturn}
          <div className="flex flex-row items-center justify-center md:flex-col">
            {tempStorage2}
          </div>
        </>
      )
      tempStorage2 = <></>
    }

    if (data.length - times < 5) {
      dataReturn = (
        <>
          {dataReturn}
          <div className="flex flex-row items-center justify-center md:flex-col">
            {tempStorage2}
          </div>
        </>
      )
      tempStorage2 = <></>
    }

    times++
  })

  return dataReturn
}

export const ClubIndex = ({ contents }) => {
  return <div>{generateContent(contents)}</div>
}
