import Image from 'next/image'
import { User } from '../../assets/vectors/User'
import React from 'react'
import { ContentCard } from '../common/Card/ContentCard'

export const SchoolBlogs = () => {
  return (
    <div className="w-4/5 md:w-7/12">
      <h1 className="font-black text-center text-blue-400 mt-16 md:mt-48 text-3xl md:text-7xl mb-10">
        แนะนำโรงเรียน
      </h1>
      <div className="flex flex-col max-w-full space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
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
  )
}