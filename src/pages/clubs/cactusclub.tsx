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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมเพาะพันธุ์ไม้</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 65 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/cactusclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ในคาบชมรม สมาชิกในชมรมจะได้เรียนรู้ทักษะเกี่ยวกับการเพาะพันธุ์ไม้
              การลงมือปลูกต้นแคคตัส การทำสวนขวด การลงมือปลูกผักอินทรีย์ด้วยตนเอง
              การเพาะเมล็ดพืชลงดิน มีการทำโปสเตอร์ให้ความรู้เกี่ยวกับต้นไม้สายพันธุ์ต่าง ๆ
              ทั้งในโรงเรียนและนอกโรงเรียน เช่น วิธีการดูแล วิธีการปลูก
              รวมทั้งข้อมูลเบื้องต้นของสายพันธุ์นั้น ๆ ได้เรียนรู้วิธีการกำจัดวัชพืชต่าง ๆ
              อย่างถูกต้องและประหยัดเวลา ได้ฝึกการทำงานกลุ่มร่วมกัน เช่น
              การแบ่งหน้าที่ในการนำอุปกรณ์มาใช้ปลูกต้นไม้ ได้ผลัดกันนำเสนอต้นไม้ชนิดต่าง ๆ
              ช่วยพัฒนาทักษะด้านการแสดงออกให้ดียิ่งขึ้น ได้พูดคุยและแลกเปลี่ยนความคิดกับคนในชมรม
              และยังได้ฝึกความรับผิดชอบจากการที่ต้องดูแลต้นไม้อย่างต่อเนื่อง
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1.ได้รับมิตรภาพดี ๆ จากเพื่อนร่วมชมรม 2.ได้ฝึกทักษะการปลูกต้นไม้ 3.ได้ความรู้ใหม่ ๆ
              เกี่ยวกับต้นไม้ชนิดต่าง ๆ
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
                    src="/assets/clubs/cactusclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ฝน</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: ffonn.s</span>
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
                  หรือสมาชิกเก่า เป็นชมรมที่ทำให้ได้รู้จักเพื่อน ๆ พี่ ๆ เยอะมาก
                  ในแต่ละเทอมเราจะได้ปลูกต้นไม้ต้นเล็ก ๆ ทำให้รู้สึกว่าได้คลายเครียดจากการเรียน
                  รวมทั้งสถานที่ที่เรียนชมรมก็ร่มรื่น บรรยากาศในชมรมก็เป็นกันเองมาก ๆ
                  เป็นชมรมที่ดีชมรมนึงเลย โดย ฝน TU82 (Ig: ffonn.s)
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
