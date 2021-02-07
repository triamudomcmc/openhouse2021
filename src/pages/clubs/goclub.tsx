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
              ชมรมคณิตศาสตร์ (หมากล้อม)
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 30 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/goclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การแข่งขันภายในของชมรมหมากล้อม
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมหมากล้อมเป็นชมรมที่แยกย่อยออกมาจากชมรมคณิตศาสตร์
              กิจกรรมที่ชมรมนี้ทำส่วนมากก็จะเกี่ยวข้องกับหมากล้อมที่จะต้องใช้เรื่องการวางแผนและตรรกะในการเล่น
              โดยในเทอม 1 เนื่องมาจากสมาชิกชมรมส่วนหนึ่งเป็นผู้เล่นใหม่
              ทางชมรมก็จะให้ทุกคนได้เรียนรู้เกี่ยวกับอุปกรณ์ กฎ กติกา มารยาท
              และพื้นฐานการเล่นหมากล้อมขั้นเบื้องต้น และจะให้ทุกคนได้จับคู่เล่นหมากล้อมในทุก ๆ
              คาบชมรมที่ได้เจอกัน ส่วนในเทอม 2 ชมรมจะมีการจัดการแข่งขันภายในชมรมในคาบชมรม
              เพื่อให้ทุกคนได้มีประสบการณ์การแข่งขัน และจะมีรางวัลให้แก่ผู้ชนะด้วย นอกจากนี้
              หากมีเวลาหรือผู้ที่สนใจศึกษาการเล่นหมากล้อมเพิ่มเติม
              ก็อาจจะมีการอธิบายถึงทักษะขั้นสูสำหรับการเล่นเพื่อแข่งขันจริงจังให้ด้วย
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1\. ฝึกการคิดวางแผนการเล่น ซึ่งทำให้สมองซีกซ้ายได้ทำงาน 2\.
              ฝึกสมาธิอันเป็นผลมาจากการคิด 3\. รู้จักคนในโรงเรียนมากขึ้น
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
                    src="/assets/clubs/goclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">พร้อม</h1>
                  <span className="text-xs">เตรียมอุดม </span>
                  <span className="w-max text-xs">IG: 83เบอร์โทรศัพท์0631985808</span>
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
                  หรือสมาชิกเก่า ตั้งแต่เข้ามาเรียนที่โรงเรียนนี้
                  พี่ได้เข้ามาอยู่ชมรมหมากล้อมตั้งแต่ม.4 ยันม.6
                  ในตอนแรกที่เข้าชมรมพี่รู้สึกกังวลเพราะไม่เคยมีประสบการณ์ในการเล่นหมากล้อมมาก่อน
                  แต่พอเข้ามาจริง ๆ แล้วพวกรุ่นพี่ในชมรมก็ช่วยสอนการเล่นหมากล้อมให้อย่างดี
                  จนทำให้พี่เริ่มเล่นหมากล้อมเป็นและเริ่มรู้จักเพื่อนต่างห้องที่มีสิ่งที่ชอบเหมือนกัน
                  ซึ่งเป็นหนึ่งในช่วงเวลาที่ดีมาก ๆ ตลอด 3 ปีในเตรียมฯ ของพี่เลยแหละ โดย พร้อม TU 83
                  เบอร์โทรศัพท์: 0631985808
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
