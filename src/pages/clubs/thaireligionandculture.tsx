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
              ชมรมศาสนาและวัฒนธรรมไทย
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 30 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/thaireligionandculture_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              กิจกรรมศึกษานอกสถานที่ ณ หอพระไตรปิฎกนานาชาติ คณะอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
              วันที่ 25 พฤศจิกายน 2559
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              พูดคุย ถกเถียง แลกเปลี่ยนความรู้
              เป็นชมรมที่มีจุดประสงค์หลักเพื่อให้นักเรียนทราบถึงความหลากหลายและความแตกต่างของวัฒนธรรมในสากลโลก
              นักเรียนจะได้เรียนรู้ถึงความเป็นมาและแนวคิดหลักของศาสนา ความเชื่อ และวัฒนธรรมต่าง ๆ
              ที่สามารถนำไปประยุกต์ใช้ในเกิดประโยชน์กับตัวนักเรียนในด้านการศึกษาและการดำรงชีวิต
              ทั้งนี้ การเรียนการสอนและกิจกรรมที่จัดขึ้นในชมรมจะเน้นการพัฒนากระบวนการคิดรวบยอด
              ฝึกการทำงานร่วมกันเป็นหมู่คณะ ฝึกการอภิปราย
              และการกล้าแสดงความคิดเห็นของตนเองอย่างเปิดเผยบนพื้นฐานของความรู้ควบคู่กับหลักจริยธรรมและเหตุผล
              นอกจากนี้ นักเรียนจะได้เรียนรู้หลักวัฒนธรรมของท้องถิ่นต่าง ๆ ทั่วประเทศไทย
              โดยผ่านรูปแบบของกิจกรรมบูรณาการที่ยึดหลัก “ผู้เรียนเป็นศูนย์กลาง”
              หรือเรียนรู้ผ่านประสบการณ์จริงของนักเรียนแต่ละคน
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/thaireligionandculture_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                บรรยากาศภายในชมรม
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              นักเรียนมีความกล้าแสดงออก และสามารถทำงานบูรณาการโดยอาศัยการอภิปรายกับหมู่
              คณะได้อย่างมีประสิทธิภาพ นักเรียนเข้าใจวัฒนธรรม ศาสนา ลัทธิ และความเชื่อต่าง ๆ
              ที่หลากหลาย
              นักเรียนเข้าใจหลักคำสอนที่เหมาะสมกับตัวนักเรียนและสามารถนำไปประยุกต์ใช้ในชีวิตประจำวัน
              เพื่อสร้างประโยชน์แก่พลโลกได้ด้วยตนเอง
              นักเรียนสามารถทำงานร่วมกับผู้อื่นได้ตามวิถีประชาธิปไตย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/thaireligionandculture_image_3.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม กิจกรรมจิตอาสาประดิษฐ์ดอกไม้ถวายความอาลัยกษัตริย์รัชกาลที่
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/thaireligionandculture_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เอื้อ</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: eua.pattano</span>
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
                  เป็นชมรมที่ดี สมาชิกไม่เยอะมาก อบอุ่น เป็นกันเอง ครูที่ปรึกษาใจดี
                  ห้องที่ใช้เรียนชมรมกว้างสบาย โดย เอื้อ TU82 (Ig : eua.pattano)
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
