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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมดนตรีไทย</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 40 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/thaimusicclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมดนตรีไทยมีการซ้อมให้นักเรียนได้รู้ถึงความไพเราะเเละคุณค่าของดนตรีไทย
              ฝึกความมีวินัยเเละความรับผิดชอบต่อสังคม เช่น การฝึกซ้อมเป็นวง เเละการเก็บเครื่องดนตรี
              การนัดหมายเพื่อเตรียมพร้อมในการเเสดงในงานต่าง ๆ เเละการเเข่งขัน
              ชมรมดนตรีไทยเน้นการเเสดงความเคารพปฏิบัติต่อครูผู้สอนเเละเครื่องดนตรี
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ช่วยอนุรักษ์เเละสืบสานประเพณีเเละวัฒนธรรมไทยให้ดำรงคงอยู่ตลอดไป
              สามารถเล่นเครื่องดนตรีไทยเเละได้เพลงไทย
              ทำให้เกิดความระเบียบเเละความรับผิดชอบต่อหน้าที่ในเครื่องดนตรีในชมรม
              ทำให้นักเรียนได้ฝึกสมาธิเเละความจำ ทำให้รู้จักครูที่มีความเชี่ยวชาญในเเต่ละด้าน ดีด สี
              ตี เป่า สามารถนำความสามารถไปต่อยอดในการเข้ามหาลัยได้ ทำให้รู้จักการเคารพรุ่นพี่
              รุ่นน้อง
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">ของชมรม</p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/thaimusicclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เเสตมป์</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: duangtrapaisaneeyakorn.stamp</span>
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
                  หรือสมาชิกเก่า ชมรมเราเป็นชมรมที่รวบรวมคนที่สนใจด้านเดียวอยู่ด้วยกัน
                  เพราะฉะนั้นเวลาจะคุยอะไรก็มักจะมีเรื่องที่สนใจแบบเดียวกัน
                  มีระบบรุ่นพี่สอนรุ่นน้องเพื่อเชื่อมความสัมพันธ์จากรุ่นสู่รุ่น
                  มีอะไรก็ปรึกษากันได้ทุกเรื่อง ไม่ว่าจะเป็นการซ้อม การเรียน
                  คุณครูในชมรมก็ให้คำปรึกษาได้ และถ้าน้องๆขยันซ้อมดนตรี แล้วเล่นได้ดี
                  คุณครูก็จะส่งน้องไปแข่งอีกด้วย โดย เเสตมป์ TU82 (ig :
                  duangtrapaisaneeyakorn.stamp)
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
