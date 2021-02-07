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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมหุ่นยนต์</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 30 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/turobotclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              กิจกรรมในชมรม เน้นให้รุ่นพี่สอนรุ่นน้อง
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              กิจกรรมในชมรมหลัก ๆ จะเป็นการฝึกเขียน
              ฝึกต่อหุ่นตามโจทย์ในการแข่งขันต่างๆตั้งแต่พื้นฐานตามความสนใจของน้อง ๆ เลย
              ซึ่งความรู้ตรงนี้ก็สามารถต่อยอดไปสู่กิจกรรมอื่น ๆ ที่อยู่ทั้งในและนอกโรงเรียน
              ซึ่งรวมไปถึงการพาไปร่วมการแข่งขันตามงานแล้วแต่ที่น้อง ๆ เสนอกันเข้ามาอีกด้วย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/turobotclub_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              สิ่งที่ได้แน่นอนเลยก็คือได้ฝึกฝนทักษะเกี่ยวกับคอมพิวเตอร์และการโค้ดดิ้ง
              แล้วก็ได้รับมิตรภาพดี ๆ จากคนที่มีความชอบและความสนใจเดียวกัน
              การได้อยู่กับเพื่อนที่ชอบอะไรเหมือนกับเรามันทำให้เรารู้สึกสบายใจจริง ๆ
              นอกจากนี้ก็ยังได้ประสบการณ์เกี่ยวกับตัวหุ่นยนต์กลศาสตร์ต่าง ๆ
              ที่สามารถต่อยอดไปใช้ในอนาคตได้อีกนั่นเอง
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
                    src="/assets/clubs/turobotclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">กล้า</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: klaspnk</span>
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
                  หรือสมาชิกเก่า สำหรับเรานะ ชมรมนี้ก็เป็นชมรมที่ทำให้เราเรียนรู้อะไรเยอะขึ้นมากๆเลย
                  เราเป็นอีกคนหนึ่งที่ไม่ได้รู้เรื่องหุ่นยนต์มาก่อน เราก็ได้มาเรียนรู้จากที่นี่
                  นอกจากนี่ที่นี่ก็ทำให้เราได้สนิทกับเพื่อน ๆ พี่ ๆ รวมไปถึงน้องๆหลาย
                  ๆคนนอกเหนือจากเพื่อนในห้องเรียนเลย ซึ่งเป็นอีกสังคมในเตรียมที่น่ารักมาก ๆ
                  เลยสำหรับเรา ถ้าน้อง ๆ ได้มีโอกาสเข้ามาที่นี่
                  ก็อยากให้เก็บชมรมนี้เป็นอีกหนึ่งตัวเลือกที่น่าสนใจครับ โดย กล้า TU82 (IG :
                  klaspnk)
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
                    src="/assets/clubs/turobotclub_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">พี่น้ำฝน</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: nf_schy</span>
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
                  ความรู้สึกแรกต่อชมรมส่วนตัวคือตื่นเต้นมาก ๆ ๆ ตอนประกาศผลออละเข้าชมรมวันแรก
                  เพราะไม่รู้จักใครเลยบวกกับไม่มั่นใจความรู้พื้นฐานหุ่นยนต์ของตัวเอง
                  แต่พอได้อยู่ไปเรื่อย ๆ ก็รู้จักเพื่อน ๆ พี่ ๆ มากขึ้น พี่ ๆ ในชมรมปีก่อนก็ค่อย ๆ
                  ช่วยกันสอนอะไรที่เราไม่เคยรู้แบบใจเย็น
                  ทำให้ไม่ได้รู้สึกเครียดหรือกังวลแบบที่คิดไว้ก่อนหน้า
                  นอกจากความรู้ที่ได้ก็มีความมั่นใจในตัวเองที่เพิ่มมากขึ้น
                  ทักษะการเข้าสังคมเพิ่มขึ้นเพราะได้มาเจอกับคนใหม่ ๆ
                  ที่ถึงจะมีโอกาสอยู่ด้วยกันแค่คาบเดียวต่ออาทิตย์ แต่ก็ยังมาสนิทกันได้ พี่ ๆ น้อง ๆ
                  ที่เจอเมื่อไหร่ก็ทักกันตลอด
                  จนคาบชมรมกลายเป็นเหมือนคาบที่จะได้มาเล่นสนุกกับเพื่อนนอกชั้นเรียน ได้ความรู้
                  ได้ลองทำสิ่งที่รักกับกลุ่มคนที่เรารัก นับว่าเป็นประสบการณ์ที่มีค่าสำหรับเรามาก ๆ
                  เลย โดย พี่น้ำฝน TU82 (IG : nf_schy)
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
