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
              ชมรมสีสรรพ์ภาษาต่างประเทศที่ 2 (ภาษาเกาหลี)
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 60 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/koreanclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              กิจกรรมนี้เป็นกิจกรรมการทำคิมบับ(김밥)
              สมาชิกในชมรมจะได้เรียนรู้วิธีการทำคิมบับจากสูตรของคุณครูประจำชมรม
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ในชมรมสีสรรพ์ภาษาเกาหลีมีกิจกรรมที่เกี่ยวกับภาษาเกาหลีมากมาย
              ทั้งการเรียนรู้คำศัพท์ในชีวิตประจำวัน และบทสนทนาพื้นฐานภาษาเกาหลี
              นอกจากนั้นจะมีการเรียนรู้วัฒนธรรมของประเทศเกาหลี เช่น การสวมชุดฮันบก (한복)
              การทำพัดเกาหลี และการพับดอกมูกุงฮวา (무궁화) เป็นต้น
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              สมาชิกในชมรมจะได้รู้จักประเทศเกาหลีมากขึ้นผ่านการทำกิจกรรมต่าง ๆ ในชมรม
              และได้พูดคุยกับเพื่อน ๆ หรือรุ่นพี่รุ่นน้องที่มีความสนใจในประเทศเกาหลีเหมือนกัน
              นอกจากนั้นยังสามารถนำความรู้ที่ได้จากในชมรมไปต่อยอดในชีวิตประจำวันได้
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
                    src="/assets/clubs/koreanclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ท็อป</h1>
                  <span className="text-xs">เตรียมอุดม 80</span>
                  <span className="w-max text-xs">IG: topppn</span>
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
                  หรือสมาชิกเก่า รู้สึกว่าเป็นชมรมที่ต่อให้ไม่รู้อะไรเกี่ยวกับเกาหลีเลยก็เข้าได้
                  แล้วก็เหมาะมาก ๆ สำหรับคนที่มีความสนใจในเกาหลีอยู่แล้ว
                  ส่วนตัวเรารู้สึกว่ามันเป็นทางหนึ่งที่ทำให้เราได้อะไรมากกว่าในห้องเรียนด้วย
                  ในฐานะคนที่เรียนสายศิลป์เกาหลี
                  มันได้ความรู้นอกห้องเรียนที่ไม่ใช่แกรมม่าหรือหลักภาษาทั่ว ๆ ไป
                  ในชมรมก็จะมีโอกาสได้ฟังบรรยายจากคนดัง ๆ ด้วยเช่นพี่เจ เบบี้ฟู้ด
                  ได้มีโอกาสเรียนรู้วัฒนธรรมของเกาหลี เช่น ทำอาหารเกาหลี
                  อย่างประสบการณ์ที่ประทับใจก็ตอนทำซุ้มชมรม ขายต้อกได้ดีมากๆๆ 555555
                  เหนื่อยแต่สนุกมากกก ตั้งแต่ตกแต่งซุ้มเลย สังคมในชมรมก็รู้สึกเป็นกันเองมาก ๆ
                  เพราะส่วนใหญ่จะได้เจอแต่เพื่อนตัวเองแหละ
                  หรือไม่ก็ได้คุยกับคนที่มีความสนใจในเกาหลีเหมือนกัน นอกจากได้ฟังบรรยายจากพี่เจ
                  ยังมีอาจารย์ท่านอื่น ๆ ด้วยที่ inspire เราหลายอย่างเลย
                  จำได้ว่ามีอาจารย์มาบรรยายเกี่ยวกับประวัติศาสตร์ แล้วก็การพัฒนาของประเทศเกาหลี
                  ตอนนั้นรสเจ๋งมาก ๆ สนใจเรื่องนี้ขึ้นมาทันที
                  สถานที่เรียนชมรมไม่ได้รู้สึกว่าโรงเรียนให้ความสนับสนุนด้านนี้มากเท่าไหร่
                  ส่วนครูประจำชมรมก็ดีที่สุดเลย &gt;___&lt; ครูเอ้ ครูแนนน่าร้ากกก🤟🏻 โดย ท็อป TU80
                  (ig : topppn)
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
