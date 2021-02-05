import React from 'react'
import Footer from '../../components/common/Footer'
import { Layout } from '../../components/common/Layout'
import PlaceholderSuggestion from '../../assets/vectors/clubs/PlaceholderSuggestion'

const Page = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-10/12 md:max-w-3xl">
          <div className="flex flex-col justify-center items-center mt-20">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมคณิตศาสตร์</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">
              ชมรม | ไม่จำกัด คน
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/boardgameclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การแข่งขันบอร์ดเกม love letter
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1.จัดการเรียนการสอนวิชาคณิตศาสตร์ซึ่งตรงกับบทเรียนในห้องเรียน
              2.จัดกิจกรรมบูรณาการความรู้คณิตศาสตร์ เช่น การพับกระดาษ เกมคิดเลขคณิตศาสตร์ เป็นต้น
              3.จัดการแข่งขันคณิตศาสตร์ TUMSO โดยชมรมคณิตศาสตร์ นอกจากชมรมใหญ่แล้ว
              ยังมีชมรมย่อยแบ่งออกไปอีก 3 ชมรม คือ ชมรม A-math ชมรมหมากล้อม และชมรม E-sport
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/boardgameclub_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                ได้รับรางวัลชนะเลิศการแข่งขัน ศึกชิงสุดยอดเชฟ
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1.พัฒนาความเข้าใจในเนื้อหาวิชาคณิตศาสตร์จากการฝึกฝนโจทย์
              เพิ่มคะแนนสอบทั้งกลางภาคและปลายภาค
              2.เพิ่มความคิดสร้างสรรค์และทักษะการคิดวิเคราะห์ผ่านการทำกิจกรรมต่าง ๆ
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">จัดการการแข่งขัน TUMSO</p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>
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
