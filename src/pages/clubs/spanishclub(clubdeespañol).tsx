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
              ชมรมสีสรรพ์ภาษาต่างประเทศที่ 2 (ภาษาสเปน)
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 90 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/spanishclub(clubdeespañol)_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              ทำอาหารเป็นเมนูประจำแคว้น Galicia ชื่อว่า Pulpo a la gallega
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              กิจกรรมที่ทำจะเกี่ยวข้องกับสเปนและละตินอเมริกา มีทั้งเรียนเต้นพื้นเมือง การทำอาหาร
              ทำปิญญาตา (Piñata) การเรียนรู้เกี่ยวกับเทศกาลต่าง ๆ
              รวมไปถึงแนะนำซีรีส์และภาพยนตร์ที่มีความเกี่ยวข้องกับสเปนและแถบละตินอเมริกา
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/spanishclub(clubdeespañol)_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                ทำปิญญาตา (Piñata) หรือตุ๊กตาแห่งความสุข
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ได้ทราบถึงเสน่ห์และวัฒนธรรมของสเปนและแถบประเทศละตินอเมริกา มีเพื่อนต่างชมรม ได้ล
              องประสบการณ์ใหม่ ๆ ทราบวัฒนธรรมแปลก ๆ และรับความสนุกไปพร้อม ๆ กัน
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/spanishclub(clubdeespañol)_image_3.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                วันภาษาสเปน (Día del Español)
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม จัดกิจกรรมวันภาษาสเปน (Día del Español)
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/spanishclub(clubdeespañol)_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ไข่มุก</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: justmiddcem</span>
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
                  ชมรมสีสรรพ์ภาษาสเปนเป็นชมรมที่เราเลือกเพราะคิดว่าตรงกับสายการเรียนมากที่สุด
                  มีเพื่อนๆอีกหลายคนในห้องก็เลือกชมรมนี้เหมือนกัน
                  เป็นชมรมที่ได้ลองเรียนรู้วัฒนธรรมของสเปนและละตินอเมริกาผ่านสื่อวิดีโอที่นำมาเปิดให้ความรู้ภายในคาบชมรม
                  และมีกิจกรรมต่างๆให้ลองทำ ไม่ว่าจะเป็นการทำอาหารหรือการประดิษฐ์ la piñata
                  คุณครูผู้สอนก็ใจดีทุกคนเลยค่ะ โดย ไข่มุก TU82 (IG : justmiddcem)
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
                    src="/assets/clubs/spanishclub(clubdeespañol)_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เอิร์น</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: ccchaliss</span>
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
                  ชมรมนี้เป็นชมรมที่เป็นกันเองมากๆ คอยหากิจกรรมที่น่าสนใจต่างๆมาให้ทำทุกอาทิตย์
                  เพื่อน ๆ พี่เฟรนลี่ คุณครูทุกคนน่ารัก
                  ใส่ใจเด็กทุกคนมีเรื่องอะไรคอยให้คำปรึกษาได้หมด
                  มีการจัดสถานที่ต่างๆให้เข้ากับกิจกรรมที่ทำ และกิจกรรมต่าง ๆ
                  นอกจากจะสนุกน่าสนใจแล้ว ยังให้ความรู้สามารถนำไปใช้ได้จริงด้วย
                  สิ่งที่เราประทับใจที่สุดคือทุกอาทิตย์ที่มีการทำอาหาร อาจารย์จะคอยมาช่วยทำ
                  หาวัตถุดิบต่าง ๆ ซึ่งอาหารแต่ละอย่างมันอร่อยมาก ๆ เหมือนได้ไปกินที่สเปนเลย โดย
                  เอิร์น TU82 (IG : ccchaliss)
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
