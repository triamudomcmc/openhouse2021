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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมเศรษฐศาสตร์</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 60 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/economicsclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              ทัศนศึกษา ณ ศูนย์การเรียนรู้ธนาคารแห่งประเทศไทย
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1.เรียนรู้วิชาเศรษฐศาสตร์ การบริหาร การลงทุน และข่าวสารต่าง ๆ
              2.ฟังบรรยายจากวิทยากรพิเศษที่มีชื่อเสียง 3.แลกเปลี่ยนความคิดเห็นภายในชมรม
              4.ทัศนศึกษาสถาบันการเงินต่าง ๆ เทอมละ 1 ครั้ง 5.ส่งสมาชิกเข้าแข่งขันการตอบปัญหาต่าง ๆ
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/economicsclub_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                บรรยากาศภายในห้องเรียน
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1.ได้รับความรู้ทางการเงินหลากหลายแขนงที่สามารถนำไปประยุกต์ใช้ในชีวิตประจำวัน
              2.สมาชิกสามารถนำความรู้ที่ได้ไปต่อยอดในการลงทุนในสินทรัพย์ต่าง ๆ เช่น หุ้น กองทุน
              อสังหาริมทรัพย์ 3.ได้เยี่ยมชมสถานที่ทำงาน รู้ถึงกระบวนการทำงานของสถาบันทางการเงิน
              4.ได้รู้จักสมาชิกและศิษย์เก่าที่มีความสนใจตรงกัน
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/economicsclub_image_3.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม 1.ส่งสมาชิกเข้าร่วมแข่งขันรายการต่าง ๆ และได้รางวัลชนะเลิศมากมาย เช่น
              เศรษฐศาสตร์เพชรยอดมงกุฎ, BOT Challenge and Experience, การแข่งขันของมหาวิทยาลัยต่าง ๆ
              2.จัดการบรรยายทางด้านเศรษฐศาสตร์ การเงิน การลงทุน
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/economicsclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เซิน</h1>
                  <span className="text-xs">เตรียมอุดม 81.5</span>
                  <span className="w-max text-xs">IG: nxlurr</span>
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
                  หรือสมาชิกเก่า เราอยู่ชมรมเศรษฐศาสตร์มาตั้งแต่ ม.4
                  ชมรมนี้เปิดโอกาสให้เราเรียนรู้สิ่งใหม่ ๆ ที่เราไม่คิดว่าตัวเองจะทำได้ ปีแรกในชมรม
                  อาจารย์ให้โอกาสเราได้ไปแข่งเวทีต่าง ๆ ทั้ง ๆ ที่เราก็ยังไม่มีประสบการณ์
                  ก่อนแข่งก็จะมีรุ่นพี่มาช่วยติวเข้มจริง ๆ จนทำให้เราสามารถชนะการแข่งขันได้
                  บรรยากาศในห้องเรียนเป็นกันเองมาก
                  ทุกคนสามารถพูดคุยแลกเปลี่ยนความคิดเห็นกันได้เต็มที่
                  อาจารย์ก็ให้เราเสนอสิ่งที่อยากทำกันได้ตลอด
                  อย่างทัศนศึกษาเราก็สามารถเลือกกันเองได้เลยว่าสนใจอยากไปที่ไหน
                  เป็นบรรยากาศที่กระตุุ้นให้เกิดการเรียนรู้มาก ๆ เลย โดย เซิน TU81.5 (ig:nxlurr)
                  <h1 className="md:hidden text-center text-gray-300 text-6xl h-22 w-full">”</h1>
                </div>
                <div className="hidden md:block relative">
                  <span className="absolute text-gray-300 text-8xl right-16 -top-20">”</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/economicsclub_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ขิม</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: kkim.pn</span>
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
                  ชมรมเศรษฐศาสตร์ เป็นชมรมที่เป็นกันเองมาก ๆ ได้ความรู้มากมาย เพราะทุก ๆ
                  คาบจะมีพี่มาให้คำแนะนำ มาแชร์ประสบการณ์ เกี่ยวกับการสอบแข่งขันวิชาเศรษฐศาสตร์ หรือ
                  อัพเดตสถานการณ์ปัจจุบันที่น่าสนใจ ที่สำคัญคือพวกเราได้ลองปฏิบัติจริง !
                  ผ่านการเล่นเกมสนุก ๆ อีกด้วย โดย ขิม TU82 (ig:kkim.pn)
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
