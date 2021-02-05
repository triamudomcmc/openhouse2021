import React from 'react'
import Image from 'next/image'
import { User } from '../../assets/vectors/User'
import { ContentCard } from '../common/Card/ContentCard'

const Videos = () => {
  return (
    <div className="w-4/5 md:w-7/12">
      <div className="flex flex-row justify-between md:justify-center mt-16 mb-10 items-end">
        <h1 className="text-3xl font-black text-center text-blue-400 md:mt-48 md:text-7xl">
          วีดีโอ
        </h1>
        <h1 className="block md:hidden font-bold text-lg text-gray-400">ดูทั้งหมด</h1>
      </div>
      <div className="flex flex-col items-center justify-center py-4 space-y-4">
        <div className="flex max-w-full pb-6 space-y-4 overflow-x-scroll md:space-y-0 md:space-x-4 flex-row">
          <ContentCard src="/assets/nok.png" duration="12.30" className="md:w-1/3">
            <ContentCard.Desc>
              เปิดพิกัด ต้นต้อยติ่งในโรงเรียน ! อาวุธสง ครามของต้องห้ามประจำโรงเรียนเตรียมอุดมศึกษา
            </ContentCard.Desc>
            <ContentCard.Author>ไอร่’ ตะวัน นน’ คนไม่มี คัยย.</ContentCard.Author>
          </ContentCard>
          <ContentCard src="/assets/nok.png" duration="12.30">
            <ContentCard.Desc>
              เปิดพิกัด ต้นต้อยติ่งในโรงเรียน ! อาวุธสง ครามของต้องห้ามประจำโรงเรียนเตรียมอุดมศึกษา
            </ContentCard.Desc>
            <ContentCard.Author>ไอร่’ ตะวัน นน’ คนไม่มี คัยย.</ContentCard.Author>
          </ContentCard>
          <ContentCard src="/assets/nok.png" duration="12.30">
            <ContentCard.Desc>
              เปิดพิกัด ต้นต้อยติ่งในโรงเรียน ! อาวุธสง ครามของต้องห้ามประจำโรงเรียนเตรียมอุดมศึกษา
            </ContentCard.Desc>
            <ContentCard.Author>ไอร่’ ตะวัน นน’ คนไม่มี คัยย.</ContentCard.Author>
          </ContentCard>
        </div>
        <div className="flex max-w-full pb-6 space-y-4 overflow-x-scroll md:space-y-0 md:space-x-4 flex-row">
          <ContentCard src="/assets/nok.png" duration="12.30">
            <ContentCard.Desc>
              เปิดพิกัด ต้นต้อยติ่งในโรงเรียน ! อาวุธสง ครามของต้องห้ามประจำโรงเรียนเตรียมอุดมศึกษา
            </ContentCard.Desc>
            <ContentCard.Author>ไอร่’ ตะวัน นน’ คนไม่มี คัยย.</ContentCard.Author>
          </ContentCard>
          <ContentCard src="/assets/nok.png" duration="12.30">
            <ContentCard.Desc>
              เปิดพิกัด ต้นต้อยติ่งในโรงเรียน ! อาวุธสง ครามของต้องห้ามประจำโรงเรียนเตรียมอุดมศึกษา
            </ContentCard.Desc>
            <ContentCard.Author>ไอร่’ ตะวัน นน’ คนไม่มี คัยย.</ContentCard.Author>
          </ContentCard>
          <ContentCard src="/assets/nok.png" duration="12.30">
            <ContentCard.Desc>
              เปิดพิกัด ต้นต้อยติ่งในโรงเรียน ! อาวุธสง ครามของต้องห้ามประจำโรงเรียนเตรียมอุดมศึกษา
            </ContentCard.Desc>
            <ContentCard.Author>ไอร่’ ตะวัน นน’ คนไม่มี คัยย.</ContentCard.Author>
          </ContentCard>
        </div>
      </div>
    </div>
  )
}

export default Videos
