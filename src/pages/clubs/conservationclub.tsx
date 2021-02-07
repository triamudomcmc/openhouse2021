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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมอนุรักษ์ธรรมชาติ</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 60 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/conservationclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              พบปะกันในคาบชมรมเพื่อเเลกเปลี่ยนเเละให้ความรู้ในหัวข้อต่างๆที่เกี่ยวกับสิ่งเเวดล้อม
              รวมไปถึงการอนุรักษ์ทรัพยากรทางธรรมชาติ การทำซุ้มในงานกิจกรรมต่าง ๆ
              ของโรงเรียนโดยมีหัวข้อเกี่ยวกับสิ่งเเวดล้อมรวมไปถึงการให้ข้อมูลความรู้ต่างๆที่น่าสนใจเเละเป็นประโยชน์เเก่ผู้มาเยือนในซุ้ม
              โดยที่สามารถนำความรู้นั้น ๆ ไปปรับประยุกต์ใช้ได้จริงในชีวิตประจำวัน การทำเเผนภาพ
              Infographic
              ให้ความรู้เกี่ยวกับปัญหาทางสิ่งเเวดล้อมรวมไปถึงวิธีการเเก้ไขเเละป้องกันปัญหาเหล่านี้ที่สามารถเกิดได้ในอนาคตหากเรายังไม่ร่วมกันรักษาสิ่งเเวดล้อม
              นอกจากนี้ก็ยังมีกิจกรรมอื่น ๆ อีกมากมายที่ยังรอน้องทุกคนมาสร้างสรรค์อยู่
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมที่จะปลูกฝังจิตสำนึกที่ดีรวมไปถึงให้ความรู้ในด้านการอนุรักษ์สิ่งเเวดล้อมเเละทรัพยากรทางธรรมชาติในรูปเเบบต่าง
              ๆ ให้กับสมาชิกในชมรม
              นอกจากนี้ยังได้พบปะพูดคุยกับผู้คนที่มีความชอบเเละความสนใจในองค์ความรู้เดียวกัน
              นอกจากนี้เเล้วยังได้ฝึกความรับผิดชอบเเละการทำงานกลุ่มกับเพื่อน ๆ ต่างห้องอีกด้วย
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">ของชมรม \-</p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/conservationclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">นีโม่</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: nemmooooooo</span>
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
                  หรือสมาชิกเก่า เป็นชมรมที่ประทับใจมากครับ
                  มีการเเสดงความคิดต่อการอนุรักษ์ธรรมชาติเเละสิ่งเเวดล้อม ได้รู้จักเพื่อน ๆ
                  ที่รักสิ่งเเวดล้อมเหมือนกัน
                  สถานที่เรียนชมรมอยู่ในร่มไม้ให้ฟีลเหมือนได้อยู่ในธรรมชาติ ชิล ๆ สบาย ๆ ครับ โดย
                  นีโม่ TU82 IG : nemmooooooo
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
