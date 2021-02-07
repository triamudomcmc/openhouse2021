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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมนิเทศศิลป (ZODUTU)</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 20 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/nitadesilp(zodotu)_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              สำหรับ ZODOTU หรือที่เรามักรู้จักกันในชื่อของฝ่ายนิตยสาร ชมรมนิเทศศิลป
              จะรับผิดชอบเกี่ยวกับการทำนิตยสาร ZODOTU ซึ่งเป็นนิตยสารประจำปี ที่ถือเป็นไฮไลท์ของเรา
              เพื่อนำออกมาวางจำหน่ายในวันโอเพ่นเฮาส์
              ทั้งนี้เราจะได้ร่วมลงมือทำชิ้นงานนี้โดยผ่านกระบวนการทุกขั้นตอน ตั้งแต่การคิดธีมร่วมกัน
              การเขียนคอลัมน์ การสัมภาษณ์ จนออกมาเป็นนิตยสารที่สมบูรณ์
              สมาชิกทุกคนจะได้ร่วมรังสรรค์ผลงานผ่านนิตยสารโดยการเขียนคอลัมน์ในเรื่องที่ตนสนใจ
              ภายใต้ขอบเขตของธีมในแต่ละปี ได้ถ่ายทอดตัวตนออกมาผ่านการเขียน รวมถึงการออกความเห็นต่าง
              ๆ ในการจัดกิจกรรมของ ZODOTU เพิ่มเติมด้วย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/nitadesilp(zodotu)_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ได้ฝึกทักษะการเขียนให้ดียิ่งขึ้น ได้รู้จักกับเพื่อน ๆ รุ่นพี่ รุ่นน้องมากขึ้น
              ทั้งยังได้ฝึกทักษะการทำงานร่วมกับผู้อื่น
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/nitadesilp(zodotu)_image_3.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                บรรยากาศซุ้มในงาน Open House
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">ของชมรม นิตยสาร ZODOTU</p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/nitadesilp(zodotu)_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ฟ้า</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: instagramfahpichar</span>
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
                  หรือสมาชิกเก่า การเข้ามาเป็นส่วนหนึ่งของ ZODOTU ทำให้เราได้รับประสบการณ์ดี ๆ
                  มากมาย ได้รู้จักเพื่อนมากขึ้น
                  ทั้งยังมีรุ่นพี่ที่คอยให้คำแนะนำเกี่ยวกับการเขียนคอลัมน์
                  มันทำให้เราได้ฝึกฝนทักษะการเขียนให้ดีขึ้น
                  มีครูเหน่งคอยให้คำปรึกษาเกี่ยวกับการทำกิจกรรมต่าง ๆ
                  รวมถึงสมาชิกในชมรมทุกคนก็ต่างให้ความร่วมมือในการทำนิตยสารกันอย่างเต็มที่
                  นั่นเป็นสิ่งที่เรารู้สึกประมับใจในชมรมนี้มาก แล้วเราก็จะยินดีมาก ๆ
                  ถ้าชมรมของเราสามารถเติบโตไปได้ไกลกว่านี้ ยังไงก็ขอฝากชมรมนิเทศศิลป
                  ฝ่ายนิตยสารไว้ในอ้อมอกอ้อมใจของทุกคนด้วยนะคะ โดย ฟ้า TU82 Instagram : fahpichar
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
