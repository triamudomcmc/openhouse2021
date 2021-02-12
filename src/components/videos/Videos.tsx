import React, { useState } from 'react'
import { ContentCard } from '../common/Card/ContentCard'
import Toast from '../common/Toasts/Toast'

export const Videos = ({ contents }) => {
  const [warnToast, setWarnToast] = useState(false)
  const turnWarnToastOn = () => {
    setWarnToast(prev => {
      return true
    })
    setTimeout(() => {
      setWarnToast(prev => {
        return false
      })
    }, 4000)
  }
  let times = 1
  let temp = <></>
  let result = <></>
  contents.forEach(data => {
    if ('video' in data) {
      temp = (
        <>
          {temp}
          <ContentCard
            src={data.thumbnail}
            href={`${data.path}`}
            duration={data.duration}
            className="md:w-1/3 md:mt-4"
          >
            <ContentCard.Desc>{data.title}</ContentCard.Desc>
            <ContentCard.Author>{data.author}</ContentCard.Author>
          </ContentCard>
        </>
      )
    } else {
      temp = (
        <>
          {temp}
          <ContentCard
            src={data.thumbnail}
            disabled={true}
            callback={() => {
              turnWarnToastOn()
            }}
            duration={data.duration}
            className="md:w-1/3 md:mt-4"
          >
            <ContentCard.Desc>{data.title}</ContentCard.Desc>
            <ContentCard.Author>{data.author}</ContentCard.Author>
          </ContentCard>
        </>
      )
    }

    if (times % 3 === 0) {
      result = (
        <>
          {result}
          <div className="flex flex-col md:flex-row justify-center w-full">{temp}</div>
        </>
      )

      temp = <></>
    }
    if (times === contents.length) {
      result = (
        <>
          {result}
          <div className="flex flex-col md:flex-row justify-start w-full">{temp}</div>
        </>
      )
    }

    times++
  })

  return (
    <div>
      <div
        onClick={() => {
          setWarnToast(prevState => {
            return false
          })
        }}
        className="fixed cursor-pointer"
      >
        <Toast type="failed" text="เนื้อหายังไม่เปิดใช้งาน" show={warnToast} />
      </div>
      <div className="flex flex-col items-center justify-center py-4 space-y-4">
        <div className="flex flex-wrap space-y-4 md:space-y-0 justify-center w-11/12 md:w-full">
          {result}
        </div>
      </div>
    </div>
  )
}
