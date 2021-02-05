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
              ชมรมห้องสมุด (บอร์ดเกม)
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 50 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/boardgameclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การแข่งขันบอร์ดเกม love letter
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมบอร์ดเกมจะเน้นทำกิจกรรมที่เกี่ยวกับการเล่นบอร์ดเกมเป็นหลัก น้อง ๆ
              จะได้เล่นบอร์ดเกมต่าง ๆ ในคาบชมรม หารือเกี่ยวกับกฎกติกาของบอร์ดเกม
              และเป็นตัวแทนเพื่อที่จะไปแข่งขันทั้งในและนอกโรงเรียน
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/boardgameclub_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                ได้รับรางวัลชนะเลิศการแข่งขัน ศึกชิงสุดยอดเชฟ
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              สมาชิกชมรมจะได้เปิดประสบการณ์เล่นบอร์ดเกมใหม่ ๆ และรู้จักเพื่อนต่างสาย ต่างรุ่น
              สร้างมนุษยสัมพันธ์ที่ดี อีกทั้งบอร์ดเกมยังเป็นสิ่งที่ช่วยพัฒนาสมอง
              ฝึกให้ผู้เล่นรู้จักแก้ปัญหา คิดกลยุทธ์เพื่อชนะอีกฝ่าย
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม การจัดการแข่งขันเกม azul ในงานสัปดาห์ห้องสมุด การแข่งขันเกมศึกชิงสุกยอดเชฟ
              ได้รางวัลชนะเลิศ (นอกโรงเรียน) การแข่งขันเกม love letter
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/boardgameclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">มาร์ค</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: mark.ambitio5</span>
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
                  หรือสมาชิกเก่า ตอนไปชมรมครั้งแรกก็กลัวอยู่ว่าจะมีเพื่อนเล่นด้วยมั้ย แต่พอเข้าชมรม
                  ด้วยความที่ทุกคนอยากเล่นเกมเหมือนกัน พอมีคนเสนอเกมอะไรมาทุกคนก็พร้อมเล่นด้วยทันที
                  เกมก็เป็นสื่อกลางที่ดีตัวหนึ่งที่ทำให้ทุกคนรู้จักกันได้ง่ายขึ้น ด้วยรูปแบบต่าง ๆ
                  ของเกม ไม่ว่าจะเป็นร่วมมือกันหรือแข่งขันกัน
                  (เป็นศัตรูในเกมก่อนละค่อยไปเป็นเพื่อนนอกเกม 555) ไม่ว่าจะแพ้หรือชนะ
                  ทุกคนก็ได้ความสนุกจากเกมไปอยู่ดี เพราะงั้นอย่าลืมมาเข้าชมรมบอร์ดเกมกัน
                  มาเข้าเดี๋ยวนี้ !!!!! โดย มาร์ค TU82 (ig mark.ambitio5)
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
                    src="/assets/clubs/boardgameclub_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เมย์</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: nnatthanicha_may</span>
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
                  ชมรมบอร์ดเกมก็เป็นชมรมใหม่เพิ่งเปิดได้ไม่กี่ปี เราก็ได้เข้าเป็นรุ่นแรก
                  ตอนเราออดิชั่นเราก็เกร็ง ๆ แต่ว่าทุกคนใจดีมาก ๆ
                  แล้วพอถึงช่วงการโปรโมทชมรมและรับสมัครสมาชิกเพิ่ม ด้วยความที่เป็นชมรมใหม่
                  พวกเราก็ช่วยกันทำงานแต่ละส่วน เช่น เพจเฟสบุ๊ค ไอจี โปสเตอร์ หนังสั้น
                  รวมถึงดูแลการออดิชั่นด้วยกัน ส่วนบรรยากาศในชมรม พอได้เข้ามาแล้วทุกคนคือน่ารักมาก ๆ
                  พอเราเดินเข้ามาในห้องชมรม(ห้องสมุด) ก็จะมีเพื่อน ๆ ชวนมานั่งที่โต๊ะ
                  มาเลือกบอร์ดเกมเล่นกัน บางบอร์ดเกมที่เราไม่เคยเล่นก็จะมีเพื่อน ๆ คอยช่วยสอน
                  ช่วยอธิบาย และคุณครูก็ดูเเลพวกเราเป็นอย่างดี
                  ทั้งเรื่องสถานที่และการจัดหาบอร์ดเกมเพิ่มเติม โดย เมย์ TU81 (ig nnatthanicha_may)
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
