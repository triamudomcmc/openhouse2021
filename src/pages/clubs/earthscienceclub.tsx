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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมโลกศาสตร์</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 30 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/earthscienceclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมโลกศาสตร์เป็นชมรมที่จัดกิจกรรมการเรียนรู้ในวิชาธรณีวิทยาและดาราศาสตร์
              มุ่งเน้นการจัดกิจกรรมโดยมีนักเรียนเป็นผู้ดำเนินกิจกรรมผ่านงานนำเสนอ เกม
              หรือการสร้างชิ้นงาน ในภาคเรียนที่ 1
              ชมรมโลกศาสตร์จะจัดกิจกกรมเกี่ยวกับวิชาธรณีวิทยาเป็นหลัก เช่น การสร้างโมเดลจำลอง
              การวิเคราะห์ภาพยนตร์เกี่ยวกับภัยพิบัติ รวมไปถึงการศึกษาเรื่องหินและแร่ผ่านตัวอย่างจริง
              ภายในพิพิธภัณฑ์หินแร่และสวนหินปิ่นหทัย ในภาคเรียนที่ 2
              ชมรมโลกศาสตร์จะจัดกิจกรรมเกี่ยวกับวิชาดาราศาสตร์เป็นหลัก โดยใช้สื่อการเรียนรู้ต่าง ๆ
              เช่น Simulation เพื่อศึกษาฟิสิกส์ดาราศาสตร์ หรือการทดลองทางดาราศาสตร์
              ฟิสิกส์ดาราศาสตร์ และฟิสิกส์อะตอม
              โดยมีครูผู้สอนวิชาวิทยาศาสตร์กายภาพเป็นครูที่ปรึกษาชมรม
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ความรู้ในวิชาวิทยาศาสตร์โลกและอวกาศ ซึ่งเป็นองค์ความรู้ที่สำคัญต่อมนุษย์ทุกคน
              ประสบการณ์ในการทำโครงงาน การนำเสนองาน ความคิดสร้างสรรค์ และจินตนาการ
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
                    src="/assets/clubs/earthscienceclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ชนน</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: chanon9945</span>
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
                  หรือสมาชิกเก่า
                  ชมรมโลกศาสตร์เป็นชมรมที่ให้อิสระสูงมากแก่ผู้เรียนในการที่จะทำกิจกรรมต่าง ๆ
                  แล้วก็มีครูที่มีความรู้ในเรื่องนั้น ๆ และรุ่นพี่ที่มีความรู้
                  คอยให้คำปรึกษาแนะนำในการทำโครงงาน
                  สำหรับผู้ที่สนใจในด้านธรณีวิทยาหรือดาราศาสตร์นั้นถือว่าน่าสนใจมากครับ โดย ชนน TU81
                  (IG : chanon9945)
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
