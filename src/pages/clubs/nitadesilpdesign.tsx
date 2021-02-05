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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">
              ชมรมนิเทศศิลป (ฝ่ายออกแบบ)
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 20 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/nitadesilpdesign_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              นิตยสาร Zodotu เป็นนิตยสารของชมรมนิเทศศิลปที่จัดทำเป็นประจำทุกปีการศึกษา
              โดยมีคอลัมน์ที่น่าสนใจจากปลายปากกาของสมาชิกฝ่ายนิตยสาร บทสัมภาษณ์สุดพิเศษ
              และผลงานกราฟิกที่สวยงามของสมาชิกฝ่ายออกแบบ
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ฝ่ายออกแบบ เป็นหนึ่งในสี่ฝ่ายของชมรมนิเทศศิลป โดยที่กิจกรรมของฝ่ายออกแบบหลัก ๆ
              คือการทำงานกราฟิกดีไซน์ ซึ่งมีทั้งการออกแบบโปสเตอร์ ภาพตัดปะ ผลิตภัณฑ์ต่าง ๆ และอื่น ๆ
              อีกมากมายตามโจทย์ที่กำหนดให้ในแต่ละครั้ง
              นอกจากนี้ยังมีการออกแบบกราฟิกสำหรับคอลัมน์ที่น่าสนใจมากมายในนิตยสาร ZODOTU
              ของชมรมนิเทศศิลปอีกด้วย
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ได้ฝึกฝนฝีมือการออกแบบ ได้ลองทำตามโจทย์ที่น่าสนใจและท้าทาย ได้มีผลงานของตัวเอง
              มีพื้นที่แสดงฝีมือ และยังได้พบกับเพื่อน รุ่นพี่ รุ่นน้อง จากหลากหลายสายการเรียน
              และแน่นอนว่าจะได้พบประสบการณ์ใหม่ที่ไม่เคยพบที่ไหนมาก่อนด้วย
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม นิตยสาร Zodotu ที่ร่วมกันทำกับชมรมนิเทศศิลป ฝ่ายนิตยสาร
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/nitadesilpdesign_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">หยง</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: instagram@yoqn___</span>
                </div>
              </div>
              <div className="flex flex-col md:ml-4">
                <div className="hidden md:block relative">
                  <span className="absolute text-gray-300 text-8xl left-10 top-6">“</span>
                </div>
                <div className="bg-whtie text-medium md:text-xl shadow-lg text-gray-500 rounded-3xl md:py-16 px-6 md:px-16">
                  <div className="md:hidden text-center text-gray-300 text-6xl pt-2 h-10">
                    <span className="absolute">“</span>
                  </div>
                  หรือสมาชิกเก่า เป็นชมรมที่สนุกมากค่ะ อยู่มา 3 ปีไม่เสียดายเลย
                  ทั้งได้ทำกิจกรรมที่หลากหลายได้เรียนรู้สิ่งใหม่ ๆ ได้เจอเพื่อน ๆ จากหลายสายการเรียน
                  อีกทั้งการได้ทำนิตยสาร ZODOTU ก็เป็นอะไรที่ท้าทายมาก
                  การได้ดีไซน์คอลัมน์เป็นอะไรที่แปลกใหม่มากค่ะ
                  แล้วก็ได้ฝึกการประสานงานกับฝ่ายอื่นด้วย ถือเป็นประสบการณ์ที่น่าจดจำมากค่ะ โดย หยง
                  TU81 Instagram @yoqn___
                  <h1 className="md:hidden text-center text-gray-300 text-6xl h-22 w-full">”</h1>
                </div>
                <div className="hidden md:block relative">
                  <span className="absolute text-gray-300 text-8xl right-16 -top-20">”</span>
                </div>
              </div>
            </div>
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
