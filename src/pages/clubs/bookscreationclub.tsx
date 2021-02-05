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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมสร้างสรรค์หนังสือ</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 60 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/bookscreationclub_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              กิจกรรมฝึกหัดการเขียนบทความ(2)
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              เป็นชมรมที่มีกิจกรรมเกี่ยวกับการสร้างสรรค์หนังสือ ออกแบบหนังสือ
              และให้ความรู้เกี่ยวกับการทำหนังสือในรูปแบบต่าง ๆ ไม่ว่าจะเป็นการออกแบบปก
              การเขียนบทบรรณาธิการ การเขียนบทสัมภาษณ์ การทำหัวข้อ เป็นต้น
              ทั้งหมดนี้ล้วนแล้วแต่เป็นองค์ประกอบของการทำหนังสือ
              และยังมีส่วนร่วมในการทำวารสารของโรงเรียนเตรียมอุดมศึกษาอีกด้วย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/bookscreationclub_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ได้รับความรู้ในการทำหนังสือ เพราะในแต่ละขั้นตอนมีวิธีการที่น่าสนใจและละเอียดมาก
              รวมทั้งการได้ฝึกคิดฝึกเขียน สร้างสรรค์ผลงานออกมาเป็นหนังสือ
              และที่สำคัญคือการได้รู้จักเพื่อนใหม่ ๆ เพราะชมรมของเรามีสมาชิกตั้งแต่ชั้นม.4 จนถึงม.6
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม วารสารโรงเรียนเตรียมอุดมศึกษา
            </p>
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
