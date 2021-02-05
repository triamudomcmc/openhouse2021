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
              ชมรมพัฒนาศักยภาพวิทยาศาสตร์
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 120 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/sci-techclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              บรรยากาศการแข่งขัน TUMSO จัดโดยชมรมของเรา
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมศักยภาพทางวิทยาศาสตร์เป็นชมรมที่รวบรวมผู้ที่สนใจในวิชาวิทยาศาตร์สาขาเดียวกัน
              ไม่ว่าจะเป็น ฟิสิกส์ เคมี ชีววิทยา หรือวิทยาศาสตร์โลก
              โดยจะมีรุ่นพี่ซึ่งมีประสบการณ์การแข่งขันเป็นวิทยากรให้ความรู้ และติวเพื่อการสอบต่าง ๆ
              ทั้งการสอบเข้ามหาวิทยาลัยและการสอบแข่งขัน เช่น สอวน. เป็นต้น
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ได้สั่งสมความรู้ทางวิทยาศาสตร์ในสาขาต่าง ๆ ให้เพิ่มพูนเพื่อเตรียมพร้อมสำหรับการสอบ
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม การแข่งขัน TUSCI หรือการแข่งขันวิทยาศาสตร์ภายในโรงเรียนเตรียมอุดมศึกษา
              รวมทั้งหมด 9 ครั้ง การแข่งขัน TUMSO
              หรือการแข่งขันคณิตศาสตร์และวิทยาศาสตร์ระหว่างโรงเรียน
              จัดและออกข้อสอบโดยนักเรียนเตรียมอุดมศึกษา
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/sci-techclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">นุ้กนิ้ก</h1>
                  <span className="text-xs">เตรียมอุดม 80</span>
                  <span className="w-max text-xs">IG: facebookmathaweekongchai</span>
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
                  หรือสมาชิกเก่า การเข้าชมรมสนุกมาก ๆ พี่ตั้งตารอทุกอาทิตย์ที่จะเข้าชมรม
                  ทุกคนแลกเปลี่ยนความรู้กัน และพี่ ๆ วิทยากรคอยให้ความรู้อย่างเต็มที่ โดย นุ้กนิ้ก
                  TU80 Facebook Mathawee Kongchai
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
