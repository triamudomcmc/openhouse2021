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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมคอมพิวเตอร์</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 50 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/computerclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              บรรยากาศการเรียนการสอนภายในชมรม
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              สำหรับชมรมนี้ มีจุดมุ่งหมายเพื่อพัฒนาศักยภาพการเขียนโปรแกรมของสมาชิกชมรม
              ไม่ว่าจะเป็นในด้านการพัฒนาซอฟท์แวร์ พัฒนาเว็บไซต์
              การเขียนโปรแกรมเพื่อไปแข่งขันในระดับโอลิมปิกวิชาการ
              หรือทักษะทางคอมพิวเตอร์ในชีวิตประจำวันก็ตาม โดยสำหรับปีการศึกษานี้
              ได้มีการจัดการเรียนการสอนสลับกันระหว่างเนื้อหาเรื่องการพัฒนาเว็บไซต์ กับ Competitive
              Programming หรือการเขียนโปรแกรมเพื่อการแข่งขัน สอนโดยประธานและรองประธานชมรม นอกจากนี้
              ยังมีการอบรมนักเรียนที่จะเข้าค่ายโอลิมปิก ทั้งในระดับชาติ และระดับ สสวท. อีกด้วย
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              สิ่งที่นักเรียนจะได้รับจากชมรมนี้ ได้แก่ ด้านการพัฒนาซอฟท์แวร์ พัฒนาเว็บไซต์
              การเขียนโปรแกรมเพื่อไปแข่งขันในระดับโอลิมปิกวิชาการ
              และทักษะทางคอมพิวเตอร์ในชีวิตประจำวัน
              รวมถึงการได้แลกเปลี่ยนความรู้กับนักเรียนที่มีความสนใจในด้านนี้ด้วย
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม มีสมาชิกชมรมที่ได้รับเหรียญทั้งในระดับชาติและระดับโลกทุก ๆ ปี,
              ได้ส่งสมาชิกชมรมไปแข่งยังงานแข่งขันต่างโรงเรียน เช่น โรงเรียนอัสสัมชัญบางรัก
              โรงเรียนสวนกุหลาบ, จัดการแข่งขัน TUMSO
              สาขาคอมพิวเตอร์ที่มีหลายโรงเรียนส่งตัวแทนมาเข้าร่วม
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/computerclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">วิน</h1>
                  <span className="text-xs">เตรียมอุดม 80</span>
                  <span className="w-max text-xs">IG: facebookpongsapholpongsawakul</span>
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
                  หรือสมาชิกเก่า เป็นชมรมที่ทำให้คนที่สนใจสิ่งเดียวกัน ได้พบปะพูดคุย
                  แลกเปลี่ยนความรู้ สำหรับตัวผม ได้เรียนรู้เนื้อหาในด้านโอลิมปิกวิชการหลาย ๆ อย่าง
                  และชมรมนี้เป็นแรงผลักดันให้ผมได้ไปแข่งขันในระดับโลกอีกด้วย โดย วิน TU80 Facebook :
                  Pongsaphol Pongsawakul
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
