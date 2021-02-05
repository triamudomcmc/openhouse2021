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
              ชมรมคณิตศาสตร์ (A-math)
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 54 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/triamudoma-mathclub_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การจัดการแข่งขันกีฬาสีภายในโรงเรียน
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ในคาบชมรมจะจัดการแข่งขันเหมือนการแข่งขันทั่วไป โดยแข่งขันอาทิตย์ละ 1 เกมการแข่งขัน
              มีการมอบรางวัลให้กับผู้ทำคะแนนได้สูงสุดในแต่ละเทอม นอกจากนั้น
              ยังมีการเตรียมตัวสำหรับการจัดการแข่งขันต่าง ๆ ภายในโรงเรียน เช่น 1\. Triamudom A-math
              championship เป็นการแข่งขัน A-math ภายในโรงเรียนเตรียมอุดมศึกษาประจำปีที่ใหญ่ที่สุด
              นักเรียนทุกคนสามารถเข้าร่วมการแข่งขันได้
              นักเรียนในชมรมสามารถเป็นได้ทั้งผู้จัดการแข่งขันหรือว่าจะลงสมัครเข้าแข่งขันเองก็ได้ 2\.
              การแข่งขันกีฬาสี ชมรม A-math เป็นผู้จัดการแข่งขัน A-math กีฬาสีโรงเรียนเตรียมอุดมศึกษา
              สีที่ชนะการแข่งขันเป็นลำดับที่ 1
              จะเป็นตัวแทนโรงเรียนเข้าร่วมการแข่งขันกีฬาประเพณีเตรียมอุดมฯ -เตรียมทหาร นอกจากนี้
              สมาชิกชมรมยังสามารถออกไปแข่งขันรายการต่าง ๆ ภายนอกโรงเรียน เช่น
              การแข่งขันเอแม็ทกรังด์ปรีซ์ หรือการแข่งขันแบรนด์ครอสเวิร์ดเกมฯ อีกด้วย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudoma-mathclub_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                กิจกรรมในชั่วโมงชมรม
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1\. ฝึกทักษะการเล่น A-math 2\. ฝึกการทำงานเป็นทีมและการวางแผนในการแข่งขัน 3\.
              ฝึกการคิดเลขให้เร็วและถูกต้อง
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudoma-mathclub_image_3.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม 1\. จัดการแข่งขัน Triam Udom A-math championship ประจำปี 2.จัดการแข่งขัน
              A-Math ในกีฬาสี เพื่อคัดเลือกตัวแทนโรงเรียนไปแข่งกีฬาประเพณี ต.อ.-ต.ท.
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/triamudoma-mathclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ปั้น</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: instagrampunpunyawish</span>
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
                  หรือสมาชิกเก่า สำหรับผมนะครับผมก็ว่าชมรมนี้เป็นชมรมนึงที่ดีเลยทีเดียว
                  ในชั่วโมงชมรมเราจะใช้เวลาไปกับการเล่นเอแม็ทกันโดยส่วนมาก
                  บางคนอาจจะคิดว่ามันจะน่าเบื่อหรือเปล่า ? ผมขอบอกเลยครับว่า จริง ๆ แล้วเกม
                  เอแม็ทเวลาเล่นเนี่ยสนุกแล้วก็ตื่นเต้นมากครับ !
                  เราจะใช้เวลาไปกับการคิดและแก้ปัญหาบนเกมของเรา
                  ซึ่งเป็นความท้าทายและความสนุกของเกมเอแม็ทเลยหละครับ !
                  บางคนอาจจะสงสัยว่าเราเล่นกันจริงจังเลยหรือเปล่า ? เครียดมากไหม ? ก็อยากบอกน้อง ๆ
                  นะครับว่าชมรมเราเนี่ยก็มีทั้งคนที่เล่นกันสนุก ๆ แล้วก็คนที่เล่นกันจริงจังครับ
                  ส่วนบรรยากาศในชมรมเนี่ยไม่เครียดเลย อยู่กันแบบสบาย ๆ ครับ (ฮ่า ๆ )
                  นอกจากจะได้เล่นเอแม็ทแล้ว เราก็ยังจะได้เจอกับเพื่อนใหม่ ๆ ได้ทำกิจกรรมใหม่ ๆ
                  อีกเยอะเลย
                  ถ้าใครเคยเล่นเอแม็ทอยู่แล้วการเข้ามาชมรมเนี่ยก็จะเป็นการฝึกฝีมือได้อย่างดี
                  เพราะจะมีทั้งคุณครูแล้วก็เพื่อน ๆ คอยให้คำแนะนำต่าง ๆ
                  ส่วนใครยังไม่เคยเล่นก็สามารถเข้ามาเริ่มเล่น เริ่มฝึกได้ ทั้งคุณครูแล้วก็เพื่อน ๆ
                  ก็จะช่วยสอนให้เป็นอย่างดีเลยครับ โดย ปั้น TU82 Instagram punpunyawish
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
                    src="/assets/clubs/triamudoma-mathclub_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ใบบัว</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: _prnioharp_</span>
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
                  ชมรมของเราชื่อว่า 'เอแม็ท' กิจกรรมชมรมก็คือเล่นเอแม็ทนั้นแหละ (ฮ่า)
                  หลายคนอาจจะไม่รู้จักว่าเอแม็ทมันคืออะไร ถ้าง่าย ๆ ก็คือเกมคณิตศาสตร์แหละ
                  ฟังชื่ออาจจะดูปวดหัว แต่มันไม่ใช่แบบนั้นหรอกนะ
                  ถ้าได้ลองเล่นแล้วละก็...จะต้องสนุกไปกับมันแน่นอน
                  แถมยังยังได้ฝึกคิดเลขไปในตัวอีกด้วย เป็นเกมทูอินวันเลยนะเนี่ย~
                  สำหรับคนที่เล่นไม่เป็นก็ไม่ต้องกังวลไปนะ เดี๋ยวพี่ ๆ ที่ชมรมจะคอยช่วยสอนให้เอง
                  ได้แข่งกับคนหลาย ๆ แบบ ได้สนุกกับการคิดวิธีเอาชนะคู่แข่งแบบใหม่ ๆ สนุกมาก ๆ เลยละ
                  เพื่อน ๆ ในชมรมก็คุยง่าย ถึงจะเป็นคู่แข่งกันในเกม
                  แต่ในอีกแง่ก็เหมือนเพื่อนร่วมสนามรบละมั้ง (ฮ่า) พี่ ๆ ในชมรมก็ใจดี
                  เคยให้คำแนะนำต่าง ๆ ไม่ใช่แค่การเล่นเอแม็ทนะ แต่เรื่องต่างๆในโรงเรียนก็คุยได้ ~
                  ส่วนอาจารย์ประจำชมรมก็ไม่ดุ น่ารัก แล้วก็ใจดีมาก ๆ เลย เราดีใจมาก ๆ
                  เลยที่ได้มาอยู่ชมรมนี้ ได้เจอเพื่อนดี ๆ รุ่นพี่ดี ๆ ครูดี ๆ แล้วก็ได้ประสบการ์ณดี
                  ๆ กลับไปมากมาย :) โดย ใบบัว TU82 Ig: _prnioharp_
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
                    src="/assets/clubs/triamudoma-mathclub_profile_3.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ซันเดย์</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: instagram_sundayyzz</span>
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
                  สำหรับผมนะครับ ชมรมเอแม็ทนี่ก็ดีนะครับ
                  ในคาบชมรมก็จะใช้เวลากับการเล่นเกมกระดานเอแม็ท
                  ซึ่งเป็นเกมเกี่ยวกับการคำนวณสมการทางคณิตศาสตร์
                  ซึ่งถ้าจะเล่นเอาจริงจังก็ทำได้หรือว่าทำเล่น ๆ เหมือนเป็นการฝึกสมองก็ได้
                  แต่ส่วนใหญ่เขาจะเอาจริงเอาจังกันมากกว่าครับ !! 555
                  แต่ก็ไม่ต้องกลัวนะครับว่าจะแบบกดดันหรือเปล่า เพราะว่าถ้าแพ้
                  ทุกตาเราก็จะมีรางวัลปลอบใจนะครับ นอกจากนี้แล้ว การมาเล่นในชมรมเอแมทเนี่ย
                  ทำให้เราได้รู้จักกับเพื่อน ๆ พี่ ๆ น้อง ๆ ที่ชอบในทางเดียวกับเราครับ
                  นอกจากนั้นยังมีคุณครูที่ปรึกษาชมรมและเพื่อน ๆ
                  ในชมรมที่คอยให้คำแนะนำเป็นอย่างดีครับถ้าคุณคิดว่าไม่เก่ง ถ้าคุณคิดว่าเล่นไม่เป็น
                  ถ้าคุณคิดว่ากดดันมาก ขอบอกจากประสบการณ์เลยนะครับว่า
                  ไม่มีสิ่งเหล่านั้นอยู่ในหัวเลยตั้งแต่ก้าวเขามาในชมรมเอแม็ทครับ โดย ซันเดย์ TU82
                  Instagram: _sundayyzz
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
