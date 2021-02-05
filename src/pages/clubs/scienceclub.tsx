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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมวิทยาศาสตร์</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 450 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/scienceclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              ผลงาน infographic ของสมาชิกในชมรม
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมวิทยาศาสตร์เหมาะสำหรับผู้ที่ชื่นชอบหรือสนใจในวิชาวิทยาศาสตร์
              โดยชมรมวิทยาศาสตร์ส่งเสริมให้สมาชิกได้ใช้ความคิดสร้างสรรค์และการคิดวิเคราะห์เพื่อประยุกต์ใช้ในชีวิตประจำวัน
              เน้นการลงมือปฏิบัติงานจริงมากกว่าภาคทฤษฎี กิจกรรมที่ทำในชมรมได้แก่
              การแลกเปลี่ยนความรู้วิชาวิทยาศาสตร์ที่สนใจกับเพื่อน ๆ ในชมรม
              การคิดโจทย์ปัญหารวมถึงการสร้างสรรค์ผลงานทางวิทยาศาสตร์
              การแข่งขันชิงรางวัลทั้งไม่ว่าจะเป็นแบบกลุ่มหรือแบบเดี่ยว
              การประกวดและจัดการทดลองตามสถานการณ์ที่เหมาะสม
              โดยสมาชิกชมรมจะได้ร่วมจัดงานในงานสัปดาห์วิทยาศาตร์ เป็นผู้ดูแลการสอบ Pre-Test ประจำปี
              และจัดกิจกรรม Open House
              ซึ่งนอกจากจะได้ความรู้แล้วยังได้ฝึกฝนทักษะในการเข้าสังคมและทำงานร่วมกันกับผู้อื่นผ่านประสบการณ์ใหม่
              ๆ ที่อาจยังไม่เคยสัมผัสอีกด้วย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/scienceclub_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              เสริมสร้างความสามัคคีและการร่วมมือกันในหมู่คณะ
              ฝึกทักษะความเป็นผู้นำและความรับผิดชอบในการทำงาน
              ฝึกการแก้ปัญหาเฉพาะหน้าในสถานการณ์ต่างๆ ผ่านการจัดกิจกรรม
              เสริมสร้างความคิดสร้างสรรค์จากการแลกเปลี่ยนความคิดเห็น
              เพื่อเพิ่มพูนความรู้ระหว่างสมาชิกในชมรม
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม จัดกิจกรรมวันวิทยาศาสตร์ ดูแลการสอบ Pre-Test เข้ามัธยมศึกษาปีที่ 4
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/scienceclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ฟ้า</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: fharlin.s</span>
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
                  หรือสมาชิกเก่า ชมรมวิทยาศาสตร์มีกิจกรรมให้เลือกทำเยอะมากเนื่องจากมีหลายสาขาวิชา
                  ซึ่งส่วนใหญ่เราจะเน้นการเข้าชมรมมาร่วมแลกเปลี่ยนความรู้และทำกิจกรรมระหว่างกันมากกว่า
                  ทำให้ได้รู้จักทั้งเพื่อน ๆ รุ่นพี่และรุ่นน้องเยอะมากๆเลยค่ะ โดย ฟ้า TU82 (IG :
                  fharlin.s)
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
                    src="/assets/clubs/scienceclub_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ใบบัว</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: nannxpat</span>
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
                  สำหรับเราชมรมวิทยาศาสตร์เป็นชมรมที่ค่อนข้างเปิดกว้างและหลากหลายเลยนะ เพื่อน ๆ
                  ในชมรมเฟรนด์ลี่มาก มีการถามความคิดเห็นของคนในชมรมตลอดว่าอยากให้มีกิจกรรมอะไรในชมรม
                  สามารถเลือกได้ว่าอยากที่จะทำงานออกมาในรูปแบบไหน
                  ที่สำคัญคืองานเบาแล้วก็สบายมากๆเลยย ♡´･ᴗ･`♡ โดย ใบบัว TU82 (IG : nannxpat)
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
