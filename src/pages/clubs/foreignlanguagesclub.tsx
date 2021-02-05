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
              ชมรมสีสรรพ์ภาษาต่างประเทศที่ 2
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 60 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/foreignlanguagesclub_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">ทำ piñata</h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ทำกิจกรรมเกี่ยวกับภาษาและวัฒนธรรมของประเทศนั้น ๆ ทั้งฝรั่งเศส เยอรมัน สเปน ญี่ปุ่น
              จีนและเกาหลี เรียนรู้เกี่ยวกับมารยาท บทสนทนา เกร็ดความรู้ต่าง ๆ แถมยังได้ลองทำอาหาร
              เล่นเกม ร้องเพลง และอื่น ๆ อีกมากมาย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/foreignlanguagesclub_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">เขียนพู่กัน</h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1.ได้รับความรู้ความเข้าใจเกี่ยวกับภาษาและวัฒนธรรม 2.ได้ทำกิจกรรมที่แปลกใหม่และหลากหลาย
              3.ได้รับมิตรภาพในชมรม ได้รู้จักเพื่อนที่สนใจสิ่งเดียวกัน
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/foreignlanguagesclub_image_3.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">ของชมรม -</p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/foreignlanguagesclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">บิ๊ก</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: bgerous</span>
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
                  หรือสมาชิกเก่า ชมรมสีสรรพ์ภาษาต่างประเทศที่ 2 ของเรา ประกอบด้วย 6 ภาษาย่อย ได้แก่
                  ฝรั่งเศส, เยอรมัน, ญี่ปุ่น, สเปน, จีน และ เกาหลี โดยน้อง ๆ
                  จะได้เรียนรู้เกี่ยวกับวัฒนธรรมของประเทศนั้น ๆ ในแต่ละด้าน เช่น อาหาร การแต่งกาย
                  ภาษา ประวัติศาสตร์ เทศกาล โดยเรียนรู้ผ่านกิจกรรมต่าง ๆ ที่น้อง ๆ
                  ทุกคนจะได้ลงมือจริง กิจกรรมของชมรมเราในแต่ละสัปดาห์ไม่เน้นหนักมาก เพื่อให้น้อง ๆ
                  ได้ผ่อนคลายความเครียดจากการเรียนในห้องทั้งวันและได้สนุกไปกับกิจกรรมอย่างเต็มที่
                  เช่น สาธิตและชิมอาหาร เช่น เกาหลี-ทำต๊อกปกกี
                  เชิญวิทยากรจากภายนอกมาให้ความรู้เกี่ยวกับวัฒนธรรมเฉพาะ เช่น จีน-การเขียนพู่กันจีน,
                  สเปน-การระบำสเปน โดยในวัน Open House
                  ชมรมของเราก็จะมาร่วมกันออกซุ้มสาธิตและจำหน่ายอาหารอีกด้วย เช่น เครปฝรั่งเศส,
                  ไก่ทอดเกาหลี, ทาโกะยากิ, ไส้กรอกเยอรมัน, หม่าล่า โดย บิ๊ก TU81 (Ig:biggerous)
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
