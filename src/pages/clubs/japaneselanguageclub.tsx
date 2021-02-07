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
              ชมรมสีสรรพ์ภาษาต่างประเทศที่ 2 (ภาษาญี่ปุ่น)
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 50 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/japaneselanguageclub_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              กิจกรรมเขียนพู่กัน
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ทำกิจกรรมเกี่ยวกับภาษาและวัฒนธรรมของประเทศญี่ปุ่น ไม่ว่าจะเป็นเรียนรู้วิธีการทักทาย
              มารยาท ประวัติความเป็นมา ทำอาหารญี่ปุ่น เช่น โอนิกิริ ข้าวแกงกะหรี่
              เล่นเกมการละเล่นต่าง ๆ และกิจกรรมอื่น ๆ ที่จะสลับสับเปลี่ยนในแต่ละปี
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/japaneselanguageclub_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                กิจกรรมทำอาหารญี่ปุ่น ข้าวแกงกะหรี่
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1.ได้รับความรู้ความเข้าใจเกี่ยวกับภาษาและวัฒนธรรม 2.ได้ทำกิจกรรมที่แปลกใหม่และหลากหลาย
              3.ได้รับมิตรภาพในชมรม ได้รู้จักเพื่อนที่สนใจสิ่งเดียวกัน
            </p>
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
                    src="/assets/clubs/japaneselanguageclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ปุ๊น</h1>
                  <span className="text-xs">เตรียมอุดม 80</span>
                  <span className="w-max text-xs">IG: poonney_ss</span>
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
                  หรือสมาชิกเก่า อยู่ชมรมนี้มา 3 ปี ได้เพื่อนใหม่ทุกปีเลยค่ะ
                  บางคนจากที่ไม่รู้จักกันเลย ตอนนี้ก็สนิทสนมพอควรในมหาวิทยาลัย น้อง ๆ ในชมรมก็น่ารัก
                  แต่ส่วนมากแล้วจะสนิทกันในแถบที่นั่งใกล้ ๆ กันมากกว่า ไม่ค่อยมีเรื่องขัดแย้งกัน
                  กิจกรรมชมรมอาจมีกร่อยบ้างแล้วแต่ปี ครูกุ๊กน่ารักดีค่ะ555
                  โดยเฉพาะเวลาสอนร้องเพลงทั้ง Sukiyaki Doraemon สถานที่เรียนก็โอเคค่ะ
                  มีแอบขัดใจเรื่องโปรเจคเตอร์ที่ได้ข่าวว่าส่งเรื่องซ่อมตั้งแต่ก่อนรุ่นTU80
                  จนเราอยู่ม.6 แล้วก็ยังไม่ได้ซ่อมให้555 โดย ปุ๊น TU80 (ig : poonney_ss)
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
