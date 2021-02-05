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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมการ์ตูน</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 60 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/triamudomcomicclub_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การจำหน่ายผลงานของฝ่ายศิลป์ และฝ่ายฟิคชันในงาน Open House
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมสำหรับนักเรียนที่มีความสนใจในวัฒนธรรมการ์ตูนทั้งจากฝั่งตะวันออกหรือตะวันตก
              ในรูปแบบของหนังสือการ์ตูน นวนิยาย เพลง คอสเพลย์ มีการพบปะพูดคุย
              แสดงความสามารถในการสร้างสรรค์ผลงาน และแบ่งปันความชื่นชอบกับผู้อื่นใน “ชมรมการ์ตูน
              โรงเรียนเตรียมอุดมศึกษา” โดยร่วมกันออกความเห็นและพัฒนาความสามารถผ่านการแยกเป็น 4 ฝ่าย
              ได้แก่ฝ่ายศิลป์ สำหรับผู้ที่สนใจการวาดรูปการ์ตูน
              แล้วนำมาประยุกต์ใช้จริงผ่านการทำหนังสือการ์ตูนของชมรมฝ่ายร้อง
              ฝึกฝนเทคนิคการร้องและโคฟเวอร์เพลงจากอนิเมชันและภาพยนตร์ต่าง ๆ ฝ่ายคอสเพลย์
              ร่วมแลกเปลี่ยนความรู้ด้านการทำอุปกรณ์ประกอบการคอสเพลย์ แนะนำเครื่องสำอางและสอนแต่งหน้า
              รวมถึงการเข้าถึงลักษณะนิสัยตัวละครที่คอสเพลย์ ฝ่ายฟิคชัน ฝึกฝนการเขียนนิยาย เรื่องสั้น
              แฟนฟิคชัน แลกเปลี่ยนคำแนะนำด้านการใช้ภาษา การวางโครงเรื่องต่าง ๆ“เพราะเราเชื่อว่า
              การ์ตูน เป็นได้มากกว่าแค่ความชอบ”
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudomcomicclub_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                การแสดงร้องเพลงที่เวทีลานอเนกประสงค์ 70 ปีต.อ. ของฝ่ายร้อง
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1\) ก่อให้เกิดทักษะในการมีปฏิสัมพันธ์ การแสดงออกทางความคิด
              รวมถึงการยอมรับความคิดเห็นของผู้อื่น 2\)
              พัฒนาความคิดสร้างสรรค์จากการออกแบบและสร้างชิ้นงาน
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudomcomicclub_image_3.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                คาเฟ่ชมรมการ์ตูนในงาน Open House โดยฝ่ายคอสเพลย์ทำหน้าที่เป็นบริกร
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">ของชมรม</p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/triamudomcomicclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">น้ำ</h1>
                  <span className="text-xs">เตรียมอุดม 80</span>
                  <span className="w-max text-xs">IG: twitter@seenum44350124</span>
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
                  หรือสมาชิกเก่า สำหรับเราการเข้าชมรมการ์ตูน (TUCC)
                  เป็นหนึ่งในเรื่องที่ไม่เคยรู้สึกว่าตัดสินใจผิดค่ะ
                  เป็นจิ๊กซอว์ชิ้นใหญ่ที่ขาดไปไม่ได้ของ 3
                  ปีในเตรียมอุดมหรือจะเป็นช่วงชีวิตแสนสำคัญที่กำลังเปลี่ยนผ่านอย่างวัยรุ่นก็ตาม
                  เราได้รับสิ่งสำคัญมากจากชมรมนี้เยอะมากค่ะทั้งเพื่อน รุ่นน้อง รุ่นพี่ สังคม
                  ความทรงจำและการเติบโต
                  เราพูดได้เต็มปากเลยว่าถ้าไม่ได้เข้าชมรมเราคงไม่ได้เป็นเราอย่างทุกวันนี้
                  เราหาสังคมแบบนี้ไม่ได้จากที่ไหน
                  สร้างความทรงจำแบบนี้อีกครั้งได้ไหมแล้วจะได้ที่ไหนก็ไม่รู้
                  ชมรมเป็นสถานที่แสนน่ารักและอบอุ่นค่ะต่อให้เรียนหนักแค่ไหนพอถึงวันจันทร์เราก็ไม่ได้รู้สึกทรมานขนาดนั้นเพราะมีคาบชมรมอยู่
                  เราได้ประสบการณ์มากมายจากชมรมทั้งวาดรูป ทำหนังสือ จัดรูปเล่ม ติดต่อโรงพิมพ์
                  จัดการบัญชี ทำงานร่วมกับผู้อื่น (ไม่ได้จะเขียนแบบคำนำรายงานนะคะแต่มันเป็นแบบนั้น)
                  จนถึงตอนนี้เรื่องที่ได้รับมาจากชมรมอย่างประสบการณ์ มิตรภาพดี ๆ
                  และความทรงจำที่สวยงาม ก็ยังคงอยู่กับเราเสมอ
                  ทำให้มีก้าวต่อไปได้อย่างมั่นคงและมีความสุข
                  เพราะชมรมเป็นสถานที่แบบนั้นสำหรับเราก็เลยอยากให้ทุกคนที่สนใจมาลองดูนะคะ !
                  (ในฐานะคนที่เคยเข้าสังคมไม่ค่อยเก่งตอนนี้คนที่คุยกันบ่อยๆหลังเรียนจบมีแต่คนที่เกี่ยวข้องกับชมรมเต็มไปหมดเลยค่ะแล้วทุกคนก็น่ารักกับเรามากที่สุดในโลกเลย
                  ! ) โดย น้ำ TU80 (Twitter : @seenum44350124)
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
                    src="/assets/clubs/triamudomcomicclub_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">มิจจี้</h1>
                  <span className="text-xs">เตรียมอุดม 76</span>
                  <span className="w-max text-xs">IG: facebookมิจจี้คิระคิระ</span>
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
                  เรื่องกิจกรรม ตอนม.4
                  ออดิชั่นเข้ามาในฝ่ายวาดแต่พอทำงานไปได้สามอาทิตย์เรารู้สึกว่าสายวาดไม่ใช่ทางของเราเท่าไหร่
                  บังเอิญตอนนั้นได้ไปร้องเกะญี่ปุ่นกับเหล่าประธานชมรมพอดีเลยได้เดบิวต์ย้ายฝ่ายเป็นฝ่ายร้องเพลงแทนซะเลย
                  ชมรมนี้เปิดโอกาสให้เราได้ทำอะไรกลายอย่างที่เราอยากลองทำมาตั้งแต่สมัยม.ต้น
                  ทั้งได้ไปขึ้นร้องเพลงบนเวทีงานคอสครั้งแรก ได้ลองคอสครั้งแรก
                  ได้ลองอัดเสียงเพื่อไปเปิดใช้ในงานแสดงครั้งแรก ที่สำคัญ
                  ได้ลองเป็นตากล้องคอสจนมันกลายมาเป็นพื้นฐานให้ชีวิตเราในตอนนี้
                  จากที่ได้ลิงเริ่มถ่ายคอสด้วยมือถือ เราซื้อกล้องตัวแรก ได้ลองไปถ่ายไพรกับพี่ ๆ
                  ในชมรม ได้เจอกันตากล้องโปรสายคอสเพลย์ ตอนเราม.4 ตอนนั้นยังไม่มีฝ่ายคอส
                  มีแค่ฝ่ายร้อง แต่พอ.เราม.5 เพื่อนกับรุ่นพี่ของเราได้จัดฝ่ายคอสขึ้นมา
                  เราเลยได้ขึ้นเป็นฝ่ายตากล้อง (ที่มีกันแค่สองคนก็ตาม 555 ) เราได้ถ่ายคอสมาเรื่อย ๆ
                  อาจจะมีหยุดไปบ้าง
                  แต่การได้เริ่มต้นงานอดิเรกถ่ายคอสในขมรมนี้มันก็เป็นจุดสำคัญของชีวิตเราไปแล้ว
                  เรื่องเพื่อน เราได้อยู่กับคนที่มีความสนใจเหมือนเรา ได้เจอคนที่เก่งทั้งวาดรูป
                  แต่งฟิค ร้องเพลง ไปจนถึงคอสเพลย์
                  การได้อยู่ใยสภาพแวดล้อมเช่นนี้มันสร้างแรงบันดาลใจให้เรา
                  และการที่เราได้อยู่กับกลุ่มคนที่เรารู้สึกสนิทด้วย
                  มันทำให้วันจันทร์ที่มีคาบชมรมเป็นวันที่เราตั้งตารอที่สุดของสัปดาห์
                  เราได้ทำกิจกรรมที่ไม่เคยทำมาก่อนกับเพื่อน ๆ
                  ที่ยังจำได้ดีที่สุดคือการเตรียมจัดร้านเมดคาเฟ่ในงานโอเพ่นเฮาส์ที่รุ่นก่อนหน้าไม่เคยจัดกันมาก่อน
                  น่าจะเป็นสิ่งที่ช่วยเติมเต็มชีวิต ม.ปลายของเราได้ดีที่สุดแล้ว
                  ความทรงจำได้เราได้ทำสิ่งที่เราชอบหลาย ๆ อย่างกับเพื่อน ๆ พี่ ๆ
                  ที่เรารู้สึกสนิทด้วยที่สุดมันได้เป็นความทรงจำอันมีค่าของเรามาถึงวันนี้ โดย มิจจี้
                  TU76 (Facebook: มิจจี้ คิระคิระ)
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
