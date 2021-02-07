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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมภาษาไทย</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 90 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/thaiclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การแข่งขันอ่านจับใจความ โดยชมรมภาษาไทย
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมภาษาไทย เป็นชมรมที่นักเรียนจะได้ฝึกฝนทักษะภาษาไทยด้านต่าง ๆ เช่น การฟัง การพูด
              การอ่าน การเขียน รวมถึงการวิเคราะห์
              ซึ่งจำเป็นต่อการสื่อสารทั้งในชีวิตประจำวันและการทำงานในอนาคต
              นอกจากนี้ชมรมยังมีการเปิดโอกาสให้นักเรียนได้แสดงความสามารถ
              โดยจัดการแข่งขันหลากหลายรายการขึ้นเป็นประจำทุกปี
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ทำให้นักเรียนได้พัฒนาทักษะภาษาไทยด้านต่าง ๆ
              แล้วสามารถนำไปประยุกต์ใช้ได้อย่างถูกต้องเหมาะสม
              เปิดโอกาสให้นักเรียนได้เข้าสู่เวทีการแข่งขันและแสดงความสามารถของตน
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม มีการจัดการแข่งขันประกวดคัดลายมือ, จัดการแข่งขันย่อความ,
              จัดการแข่งขันประพันธ์กลอนสด เป็นต้น
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/thaiclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ต้นหอม</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: facebookพัชรมัยเลาวิชุวกรนุกูลtonhom</span>
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
                  หรือสมาชิกเก่า จากประสบการณ์ที่ได้อยู่ชมรมมา 2 ปี ชมรมให้อะไรเราหลายอย่างเลย
                  ทำให้เรามีความระมัดระวังการใช้ภาษาแล้วก็มีความกล้าแสดงออกมากขึ้น
                  จากการได้ทำชิ้นงานรูปแบบต่างๆ รู้จักคนใหม่ๆ มีการทำงานกลุ่มร่วมกัน ได้รู้จักเพื่อน
                  รุ่นพี่ รุ่นน้องหลากหลายสายการเรียน ครูทุกคนก็ใจดี คอยให้คำปรึกษาตลอด
                  เวลาที่เราทำอะไรผิดพลาดครูก็จะคอยชี้แนะให้เรารู้ว่าควรปรับปรุงตรงไหน
                  ส่วนห้องชมรมมี 2 ห้องอยู่ตรงตึก 1 ชั้นล่าง ตึกอาจจะดูเก่าหน่อยแต่ว่าแอร์เย็นดี
                  แถมอยู่ใกล้ทางออกโรงเรียนด้วย
                  นอกจากนี้เวลาชมรมจัดแข่งขันอะไรก็จะมีเงินรางวัลและเกียรติบัตรให้
                  ถึงเงินรางวัลจะไม่ได้มากมายขนาดนั้นแต่ก็พอให้เป็นค่าขนมได้หลายวัน
                  แล้วยังได้ประสบการณ์กลับบ้านไปอีกเยอะเลย โดย ต้นหอม TU82 Facebook: พัชรมัย
                  เลาวิชุวกรนุกูล (Tonhom)
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
