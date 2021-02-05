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
              ชมรมวิทยาศาสตร์โลกทั้งระบบ
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 60 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/globetriamudom_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              ตราสัญลักษณ์ของ GLOBE Triamudom ซึ่งได้รับการอนุญาตจาก GLOBE ประเทศไทย
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              สนับสนุนให้สมาชิกได้เรียนรู้วิธีการศึกษาอย่างมีกระบวนการ ผ่านอุปกรณ์ที่ทันสมัย
              สอดรับกับประเทศไทยยุค 4.0 ลดรูปแบบการศึกษาที่เป็นเพียงการท่องอ่านตามตำรา
              ปลูกฝังจิตสำนึกที่ดีต่อสิ่งแวดล้อม หันมาลงมือทำสิ่งที่เกิดผลในเชิงประจักษ์
              โดยเริ่มต้นที่ตัวเอง เสริมสร้างทักษะความเป็นผู้นำการเปลี่ยนแปลงให้กับสมาชิกในชมรม
              ผ่านพันธกิจหลัก 3 ประการ จาก "ศาสตร์พระราชา" \[ 1 \] เข้าใจ : เข้าใจความเป็นไป
              ของปัญหาอย่างลึกซึ้ง โดยอาศัยกระบวนการย่อย 4 ประการ ได้แก่ \- การใช้ข้อมูลที่มีอยู่
              (Existing data) \- การใช้ข้อมูลเชิงประจักษ์ (Empirical data) \- การวิเคราะห์และวิจัย
              (Analytics and Research) \- การทดลองจนได้ผลจริง (Experiment till actionable results)
              \[ 2 \] เข้าถึง : เข้าถึงปัญหา อย่างแท้จริง โดยอาศัยกระบวนการย่อย 3 ประการ ได้แก่ \-
              ระเบิดจากข้างใน (Inside-out blasting) \- เข้าใจกลุ่มเป้าหมาย (Understand target) \-
              สร้างปัญญา (Educate) \[ 3 \] พัฒนา : พัฒนาแก้ปัญหาอย่างตรงจุด มั่นคง และยั่งยืน
              โดยอาศัยกระบวนการย่อย 3 ประการ ได้แก่ \- เริ่มต้นด้วยตนเอง (Self-initiated) \-
              พึ่งพาตนเองได้ (Self-reliance) \- ต้นแบบเผยแพร่ความรู้ (Prototype and role model)"
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/globetriamudom_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                ภาพกิจกรรมปริศนาในม่านเมฆจากชมรมของเราได้รับคัดเลือกลงในเว็บไซต์ของ NASA เนื่องในวัน
                EARTH Day
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ฝึกตั้งคำถามจากการสังเกตสิ่งแวดล้อมรอบตัว
              ทักษะการสำรวจทางวิทยาศาสตร์อย่างมีกระบวนการวิธี ได้เข้าใจ เข้าถึง
              และพัฒนาแก้ปัญหาที่เกิดขึ้นให้เกิดผลจริง ทักษะความเป็นผู้นำการเปลี่ยนแปลง
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม รางวัลชนะเลิศจากผลงาน “การประดิษฐ์เครื่องมือสำรวจปริมาณฝุ่นละอองในอากาศ”
              จากงาน Thailand New Gen Inventors Awards, จัดแสดงผลงานวิจัยในงาน GLOBE Thailand SRC
              2020, เหรียญรางวัลระดับ 4 ดาวจาก GLOBE Program NASA (มากที่สุดในประเทศไทย)
              และผลงานต่าง ๆ ในแต่ละปีที่ร่วมกับสถาบันการศึกษา/กลุ่มวิจัยจากทั่วโลก
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/globetriamudom_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ก้อง</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: @_kongzerreiei_</span>
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
                  หรือสมาชิกเก่า GLOBE นอกจากจะเป็นชมรมที่ทำให้เราได้ตั้งคำถามกับสิ่งต่าง ๆ
                  รอบตัวเรา และศึกษา เรียนรู้อย่างมีกระบวนการ ผ่านอุปกรณ์ที่ทันสมัย
                  ได้ผลเชิงประจักษ์แล้ว ยังมีเพื่อน ๆ ที่น่ารักจากหลากหลายสายการเรียน
                  และบรรยากาศการจัดกิจกรรมที่เต็มไปด้วยความสุขและรอยยิ้ม
                  ดีใจมากที่ได้เข้ามาเป็นส่วนหนึ่งของ GLOBE Triamudom โดย ก้อง TU82 Ig :
                  @_kongzerreiei_
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
