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
          <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
            <Image src={item.thumbnail} width={200} height={137} />
            <h1 className="font-bold">{item.title}</h1>
          </div>
        </Link>
      </>
    )

    if (times % 5 === 0) {
      if (times % 10 === 0) {
        tempStorage2 = (
          <>
            {tempStorage2}
            <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap md:w-full md:flex-row">
              {tempStorage1}
            </div>
          </>
        )
      } else {
        tempStorage2 = (
          <>
            {tempStorage2}
            <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap justify-end md:w-full md:flex-row">
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

    times++
  })

  return dataReturn
}

export const ClubIndex = ({ contents }) => {
  return <div>{generateContent(contents)}</div>
}
