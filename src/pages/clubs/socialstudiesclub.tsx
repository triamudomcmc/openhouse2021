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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมสังคมศึกษา</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 240 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/socialstudiesclub_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การแข่งขันตอบปัญหาสังคมศึกษา TUGSA
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมสังคมศึกษาเป็นชมรมที่เปิดโอกาสให้สมาชิกได้เรียนรู้
              และทำความเข้าใจสังคมรอบตัวในมิติใหม่ที่กว้างขึ้น
              ด้วยรูปแบบและหลากหลายวิธีการที่น่าสนใจ และอาจไม่เคยคิดมาก่อน ผ่านการทำกิจกรรมต่าง ๆ
              ในชมรม ซึ่งชมรมสังคมศึกษาประกอบด้วยชมรมย่อยทั้งหมด 5 ชมรม คือ
              ชมรมหลากทัศนะประวัติศาสตร์ ชมรมภาคีสังคมศึกษา (TUSYA) ชมรมหนังสังคม (SOC-DOC) ชมรม TU
              Activists หรือพลังยุวชนพลเมือง และชมรมพระพุทธศาสนา
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/socialstudiesclub_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                การแข่งขันตอบปัญหาสังคมศึกษา TUSAC
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1.แลกเปลี่ยนความคิด มุมมองใหม่ ต่อประเด็น และปัญหาสังคม
              2.สามารถนำความรู้และทักษะที่ได้ไปประยุกต์ใช้ได้ 3.พัฒนาศักยภาพการคิด วิเคราะห์
              ในสาขาทางสังคมศึกษา 4.ฝึกทักษะการทำงานร่วมกันกับสมาชิกในชมรม
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม 1.การจัดการแข่งขันตอบปัญหาสังคมศึกษาระดับมัธยมศึกษาตอนต้น และตอนปลาย เช่น
              TUSAC และ TUGSA
              2.จัดการติวเสริมสำหรับนักเรียนที่มีความสนใจในการเข้าแข่งขันรายการต่างๆในด้านสาขาวิชาสังคมศึกษาเช่นประวัติศาสเพชรยอดมงกุฎ
              นอกจากนี้ยังมีผลงานของชมรมย่อย อาทิ นิทรรศการและกิจกรรมต่าง ๆ
              ซึ่งสามารถติดตามได้ที่ช่องทางการติดต่อของชมรมย่อยโดยตรง
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/socialstudiesclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">นิพ</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: instagram@nypplpa</span>
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
                  หรือสมาชิกเก่า ภาคีสังคมเกิดจากการรวมตัวของโรงเรียนทั้ง 6
                  โรงเรียนทีมีแนวคิดและมุมมองในสังคมที่แตกต่างกันแต่มีความเชื่อร่วมกันว่าหากเราร่วมมือการกระทำแม้เพียงเล็กน้อยย่อมมีผลต่อการเปลี่ยนเเปลงสังคมบางอย่าง
                  จากประสบการณ์ของผมในฐานะอดีตสมาชิกชมรม ภาคีสามารถสร้างความเป็นไปได้หลายอย่าง
                  การรวมตัวกัน 6 โรงเรียนนั้นได้สร้างโอกาสที่แตกต่าง
                  อยู่ที่ว่าเราจะหยิบใช้โอกาสในการทำอะไร
                  และคุณค่าของสิ่งที่ทำจะมากหรือน้อยเเค่ไหนก็ขึ้นอยู่กับคุณ โดย นิพ TU81 Instagram:
                  @nypplpa
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
