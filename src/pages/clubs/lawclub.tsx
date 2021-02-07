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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมกฎหมายน่ารู้</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 50 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/lawclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การแข่งขันตอบปัญหากฎหมาย
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมกฎหมายน่ารู้เป็นชมรมที่สอนเกี่ยวกับพื้นฐานของวิชากฎหมาย กฎเกณฑ์ต่าง ๆ
              และระเบียบแบบแผนในชีวิตประจำวันภายใต้ระบอบการปกครองแบบประชาธิปไตย
              ทำให้สมาชิกชมรมได้รับองค์ความรู้ใหม่ที่สามารถนำไปปฏิบัติตาม ต่อยอด
              และปรับใช้กับแนวทางการเป็นพลเมืองดีของสังคมไทยได้ในอนาคต
              อีกทั้งชมรมกฎหมายน่ารู้ยังมีการนำเสนอแนวทางและการให้ข้อมูลเกี่ยวกับการศึกษาต่อคณะนิติศาสตร์ในระดับอุดมศึกษา
              เพื่อเตรียมความพร้อมให้กับสมาชิกชมรมที่มีความสนใจในศึกษาศาสตร์ของกฎหมายต่อไป
              นอกจากนี้ชมรมของเรายังมีการจัดกิจกรรมต่าง ๆ ระหว่างปีการศึกษา
              ไม่ว่าจะเป็นการจัดแข่งขันตอบปัญหากฎหมาย หรือการจัดทัศนศึกษานอกสถานที่
              ทำให้สมาชิกชมรมได้มีประสบการณ์จริงในการลงพื้นที่หรือทดสอบองค์ความรู้ด้านกฎหมาย
              อีกทั้งยังทำให้สมาชิกชมรมได้รับทักษะด้านการจัดการ
              การนำความรู้ที่ได้เรียนมาไปใช้ประโยชน์
              และทำให้นักเรียนทุกคนได้มีส่วนร่วมในการทำกิจกรรม
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/lawclub_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ได้ความรู้เกี่ยวกับวิชากฎหมาย สร้างความสามัคคีกลมเกลียวในชมรม
              และได้ไปเยี่ยมชมสถานทีจริงที่มีความเกี่ยวข้องกับกฎหมายไทย
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม 1.การจัดแข่งขันตอบปัญหากฎหมาย 2.พาสมาชิกชมรมทัศนศึกษานอกสถานที่
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/lawclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ปอย</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: poyboonsu</span>
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
                  หรือสมาชิกเก่า ชมรมกฎหมายน่ารู้เป็นชมรมที่น่าสนใจมากๆ
                  สำหรับตัวพี่ที่สนใจที่จะเข้านิติศาสตร์
                  ด้วยหลักสูตรของชมรมที่มีการฝึกฝนให้ทำโจทย์เกี่ยวกับเรื่องกฎหมายอยู่สม่ำเสมอ
                  รวมทั้งเพื่อน ๆ พี่ ๆ น้อง ๆ ในชมรมที่น่ารักทุกคน และที่สำคัญ
                  อาจารย์วีระชัยผู้เป็นที่ปรึกษาชมรมก็เป็นอาจารย์ที่มีประสบการณ์ในการสอนมาหลายปี
                  ทำให้กฎหมายเป็นเรื่องที่เข้าใจง่ายขึ้นมาทันใดเลยค่ะ โดย ปอย TU81 (IG : poyboonsu)
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
