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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมศิลปศึกษา</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 50 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/tuartclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              \- ส่งเสริมให้ใช้ความคิดสร้างสรรค์ สร้างผลงานจากจินตนาการ \- สร้างความกล้า
              และความมั่นใจในการถ่ายทอดภาพในจินตนาการ \- ให้ฝึกฝนการสร้างสรรค์ลายเส้นแบบต่างๆ \-
              ให้รู้จักการวางโครงร่างภาพ และจัดองค์ประกอบภาพให้เหมาะสม \- แนะนำเทคนิคการใช้สีต่าง ๆ
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/tuartclub_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              \- พัฒนาทักษะด้านความคิดสร้างสรรค์และจินตนาการ \-
              เป็นกิจกรรมสันทนาการได้ความเพลิดเพลินและผ่อนคลายความเครียด \-
              เพิ่มพูนทักษะการวาดภาพและเทคนิคการลงสี \- ฝึกความสามัคคี และได้รับมิตรภาพดี ๆ ในชมรม
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม กิจกรรมเพนท์​กำแพงที่ Chula Art Town
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/tuartclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">แพ็ตตี้</h1>
                  <span className="text-xs">เตรียมอุดม 79</span>
                  <span className="w-max text-xs">
                    IG: instagrampatty1na.drawแอคฯวาดรูปของพี่เองจ้า แต่ทักมาคุยได้เลย
                  </span>
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
                  หรือสมาชิกเก่า 3 ปีที่อยู่ชมรมศิลปะมา เป็นสิ่งที่ให้อะไรหลาย ๆ อย่างกับพี่มาก ๆ
                  ส่วนตัวพี่ชอบศิลปะมาตั้งแต่เด็กแล้ว ชอบวาดรูปมาก
                  ก็เลยตัดสินใจเข้าชมรมนี้แน่นอนตั้งแต่ม.4 แถมม.5 กับ ม.6
                  มันไม่มีวิชาศิลปะให้เรียนแล้วอะ
                  พี่ชอบที่เวลาเรียนเสร็จจะได้มาทำโปรเจ็กงานศิลปะสนุก ๆ กับเพื่อน
                  เป็นแรงขับเคลื่อนอย่างนึงที่ทำให้ไม่โดดชมรมเลย 5555 บรรยากาศส่วนใหญ่ในชมรมก็จะชิล
                  ๆ ไม่เครียดเลย เพื่อนส่วนใหญ่ก็สายชิล
                  ถ้าใครเจอคออนิเมะหรือเพื่อนชมรมที่ชอบอะไรคล้ายกันก็จะได้รู้จักกันไปยาว ๆ
                  ถึงจะมาจากคนละสาย คนละชั้น ส่วนครูก็สนับสนุนโปรเจ็คเต็มที่มาก แบบใจดี
                  เป็นกันเองสุด ๆ ปรึกษาได้แทบทุกเรื่อง ช่วงม.ปลายเรายังไม่รู้ว่าจริง ๆ
                  เราชอบศิลปะด้านไหน ชมรมเลยเป็นที่ที่เราได้ค้นหาตัวเองเต็มที่
                  ได้ลองทำงานอาร์ตหลายด้านไปจนถึงเรื่องงานบริหารเลย
                  เพราะเราได้ลองมาเป็นประธานชมรมตอนม.5 เหนื่อยนะ แต่สนุกมากกก
                  ได้เรียนรู้อะไรหลายอย่างมากจริง ๆ อย่างนึงที่ชอบมากที่สุดของชมรมคือโต๊ะดร๊าฟ5555
                  ใหญ่สุดไรสุด เหมาะสำหรับคนของเยอะแบบพี่ ปรับมุมโต๊ะได้อีกตะหาก
                  เอาเป็นว่าน้องคนไหนที่เข้ามาเป็นสมาชิกชมรมศิลปะ
                  ก็ขอให้ดูแลห้องที่สวยงามของชมรมเราต่อไปน้า
                  ชมรมจะเป็นคาบที่สนุกมากถ้าเราได้ทำในสิ่งที่ชอบ โดย แพ็ตตี้ TU79 Instagram:
                  patty1na.draw (แอคฯ วาดรูปของพี่เองจ้า แต่ทักมาคุยได้เลย)
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
                    src="/assets/clubs/tuartclub_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">มุก</h1>
                  <span className="text-xs">เตรียมอุดม 80</span>
                  <span className="w-max text-xs">IG: piri_choc</span>
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
                  สำหรับเราชมรมศิลปะเป็นมากกว่าเพียงกิจกรรมชมรม
                  ด้วยกิจกรรมชมรมที่หลากหลายและช่วยเพิ่มพูนทักษะทางศิลปะให้แก่สมาชิกในชมรม
                  เช่นการแกะสลักยางลบ การวาดรูปสีน้ำ
                  ชมรมศิลปะยังเป็นที่ที่เราได้เพื่อนใหม่ต่างชั้นเรียน
                  ได้มาทำความรู้จักกันผ่านความชอบเดียวกัน ทำให้ได้สังคมใหม่ ๆ นอกเหนือจากสังคมเดิม
                  อีกทั้งชมรมศิลปะยังมีสถานที่เรียนที่สะดวกสบาย มีห้องชมรมที่พร้อมสำหรับการทำกิจกรรม
                  อีกทั้งยังมีคุณครูประจำชมรมที่เข้าใจและให้ความช่วยเหลือในด้านต่าง ๆ
                  เวลาสามปีในฐานะสมาชิกชมรมศิลปะจึงเป็นประสบการณ์ที่สนุกและประทับใจที่สุดประสบการณ์หนึ่งในรั้วเตรียมอุดมฯ
                  โดย มุก TU80 IG: piri_choc
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
