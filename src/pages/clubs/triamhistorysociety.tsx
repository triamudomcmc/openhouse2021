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
              ชมรมสังคมศึกษา (หลากทัศนประวัติศาสตร์)
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 60 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/triamhistorysociety_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              ทัศนศึกษาวัดเบญจมบพิตรดุสิตวนาราม
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมหลากทัศนะประวัติศาสตร์เป็นหนึ่งในชมรมย่อยของชมรมสังคมศึกษา โรงเรียนเตรียมอุดมศึกษา
              โดยกิจกรรมของชมรมจะเน้นการนำเสนอ (Group Presentation) และการอภิปราย (Class Discussion)
              ด้วยข้อมูลและเหตุผล ซึ่งไม่ได้มีเป้าหมายเพื่อหาข้อสรุปที่ดีที่สุด
              หรือหาแนวคิดที่น่าจะถูกต้องที่สุด
              แต่มีเป้าหมายเพื่อที่จะเรียนรู้ประวัติศาสตร์ในหลายมุมมอง
              นอกจากนี้ทางชมรมจะให้ประสบการณ์การเรียนรู้ประวัติศาสตร์กับผู้เข้าร่วมที่แตกต่างออกไปจากในชั้นเรียน
              โดยจะไม่ได้มองประวัติศาสตร์เป็นเพียงจุด ๆ หนึ่งของเวลา
              แต่จะมองในลักษณะของการเปลี่ยนแปลงในอดีตที่ส่งผลต่อเนื่องจากเวลาหนึ่งไปสู่อีกเวลาหนึ่ง
              เพื่อที่จะให้ผู้เข้าร่วมได้ร่วมสนุกที่จะคิด ร่วมสนุกที่จะตั้งคำถาม
              และร่วมสนุกที่จะสนทนาไปด้วยกัน
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamhistorysociety_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ได้ฝึกทักษะกระบวนการคิดทางประวัติศาสตร์
              ได้มีพื้นที่สำหรับการสนทนาประวัติศาสตร์ในเชิงวิพากษ์
              ได้เรียนรู้ประวัติศาสตร์ในมุมมองที่หลากหลายผ่านกระบวนการจัดกิจกรรมในชมรม
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม การจัดการแข่งขันตอบปัญหาสังคมศึกษาระดับชั้นมัธยมศึกษาตอนปลาย (TUSAC)
              สนามประวัติศาสตร์ไทยและสนามประวัติศาสตร์สังคม ร่วมกับกลุ่มสาระการเรียนรู้สังคมศึกษา
              ศาสนา และวัฒนธรรมในการจัดการแข่งขันตอบปัญหาสังคมศึกษาระดับชั้นมัธยมศึกษาตอนต้น (TUGSA)
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/triamhistorysociety_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เเชมป์</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: fbbhumipatrawdthong</span>
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
                  หรือสมาชิกเก่า สำหรับชมรมของพี่
                  ส่วนใหญ่เราจะเน้นเรื่องให้ทุกคนมีส่วนร่วมในประเด็นประวัติศาสตร์ที่เราสนใจ
                  ทุกคนสามารถแสดงมุมมองของตัวเองออกมาได้อย่างเต็มที่ิ นอกจากนี้
                  ยังมีรุ่นพี่คอยให้คำแนะนำเกี่ยวกับสิ่งที่น้อง ๆ สนใจอีกด้วย
                  เพราะฉะนั้นถ้าน้องเป็นคนที่ชอบประวัติศาสตร์ หรืออยากรู้เรื่องราวประวัติศาสตร์ใหม่
                  ๆ นอกห้องเรียน พี่ว่าชมรมนี้จะเป็นชมรมที่เหมาะกับน้องมาก ๆ เลยครับ โดย เเชมป์ TU81
                  (fb : Bhumipat Rawdthong)
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
                    src="/assets/clubs/triamhistorysociety_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">บิ๊กเเม็ค</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: bmc_tem</span>
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
                  ผมเป็นสมาชิกชมรมหลากทัศนะประวัติศาสตร์ ในปีการศึกษา 2563 นี้
                  ชมรมนี้เป็นชมรมที่ให้โอกาสทุกคนได้เข้ามาพูดคุยแลกเปลี่ยนมุมมองความคิดทางประวัติศาสตร์ของตนเอง
                  ไม่ว่าใครจะมีความรู้พื้นฐานทางประวัติศาสตร์มามากน้อยแค่ไหน
                  เมื่อได้เข้ามาในชมรมนี้ก็จะได้พบเจอกับมุมมองใหม่ ๆ
                  ที่หลายคนแทบจะไม่เคยพบมาก่อนผ่านการพูดคุยแลกเปลี่ยนกันระหว่างคนในชมรมที่มีหลากหลายความคิดจากหลากหลายสภาพแวดล้อมที่แต่ละคนได้พบเจอมา
                  เพราะว่าประวัติศาสตร์ไม่จำเป็นต้องเป็นประวัติศาสตร์ที่น่าเบื่อ
                  มีแต่การพูดถึงเรื่องราวในอดีตในแบบที่รัฐต้องการให้เรารู้ผ่านการเขียนเอาไว้ในหนังสือเรียน
                  ประวัติศาสตร์ไม่จำเป็นต้องเป็นเหตุการณ์แบบเดียวที่เป็นเส้นตรง
                  แต่ประวัติศาสตร์สามารถเป็นเรื่องราวที่เป็นเส้นขนานแตกกิ่งสาขาที่มนุษย์เป็นผู้ปรุงแต่งขึ้นมาก็ได้
                  เราจึงต้องมาพูดคุยแลกเปลี่ยนกัน นอกจากนั้นแล้วชมรมหลากทัศนะประวัติศาสตร์ยังเป็น
                  society ที่สมาชิกจะมีมุมมองความคิดเป็นของตนเอง
                  มีการพูดคุยเกี่ยวกับการเมืองสอดแทรกอยู่ในคาบอย่างเสมอ และมีการนำเรื่องราวต่าง ๆ
                  ที่เกิดขึ้นทั้งในโรงเรียนและนอกโรงเรียนมาพูดคุยแลกเปลี่ยนกันบ้างเป็นระยะ
                  โดยที่ทุกคนเป็นผู้ที่เปิดกว้างทางความคิด
                  พร้อมที่จะรับฟังความคิดเห็นที่แตกต่างกันของแต่ละคน
                  โดยไม่ยึดถือว่าความคิดนั้นจะขัดกับมุมมองของตนมากแค่ไหน
                  แต่จะคอยรับฟังและโต้แย้งกันด้วยเหตุผลเป็นหลัก โดย บิ๊กเเม็ค TU82 (ig : bigmc_tem)
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
