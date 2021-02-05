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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมสันทนากร</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 46 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/entertainer_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การแข่งขัน SG Cover & Street Dance Competition 2020
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ในคาบชมรมจะมีการพูดคุยและวางแผนเกี่ยวกับการแสดงในงานต่าง ๆ เริ่มแบ่งหน้าที่ของงาน
              และเริ่มทำการซ้อมเต้น ทุกการแสดงจะต้องซ้อมออกมาให้พร้อมเพรียงมากที่สุด
              และจะต้องสื่ออารมณ์ให้ผู้ชมรู้สึกไปด้วย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/entertainer_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1.พัฒนาทักษะทางการเต้น 2.ได้เรียนรู้การทำงานเป็นหมู่คณะ 3\. มิตรภาพในชมรม
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม กิจกรรมเปิดหมวก การแข่งเต้นในงาน SG Music Festival
              การแสดงในงานกีฬาประเพณีต.อ.-ต.ท. การแสดง Open House การแสดงในงาน PAE และอื่น ๆ
              อีกมากมาย
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/entertainer_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">พลอย</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: instagram@ployputipanpong</span>
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
                  หรือสมาชิกเก่า สวัสดีค่ะ น้อง ๆ ทุกคน พี่ชื่อพลอยนะ ปีนี้ก็อยู่ชมรม Entertainer
                  มาเป็นปีที่ 3 แล้ว เหมือนเป็นบ้านอีกหลังตอนเราอยู่ที่โรงเรียนเลย
                  ชมรมนี้เป็นชมรมสำหรับทุกคนที่ชอบการเต้น เพราะเราจะเต้นกันไม่หยุดเลย
                  เต้นจนน้ำหนักลดกันไปตาม ๆ กันเลย ถึงจะเหนื่อยตอนซ้อมบ้างอะไรบ้าง
                  แต่ก็คุ้มกับประสบการณ์ที่ได้มาตลอด 3 ปีจริง ๆ
                  ที่ชมรมเราไม่เรียกว่าชมรมเต้นหรืออะไร เพราะเราเน้นที่จะเอนเตอร์เทนผู้ชม
                  และที่สำคัญตัวเราก็ได้ความสนุกเองด้วย อีกทั้งเรายังมีโอกาสได้ทำงานหลาย ๆ ด้าน
                  สำหรับการทำการแสดงอีกด้วย ไม่ว่าจะเรื่อง costume, make up, การจัดองค์ประกอบของโชว์
                  ของเวที และอีกหลาย ๆ อย่าง
                  ใครได้เข้าชมรมนี้เรียกว่าได้เก็บประสบการณ์หลากหลายด้านมาก ๆ เลย
                  อีกทั้งยังได้มิตรภาพดี ๆ กับเพื่อนในชมรม เพราะเราเป็นครอบครัวเล็ก ๆ จึงสนิทกันมาก
                  อยากให้ทุกคนที่ชื่นชอบด้านนี้ ได้ลองมาเป็นส่วนหนึ่งของครอบครัวนี้นะคะ โดย พลอย
                  TU81 Instagram : @ployputipanpong
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
                    src="/assets/clubs/entertainer_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">แคท</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: instagram@vj.kat_</span>
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
                  ชมรม Entertainer เป็นชมรมที่คนในชมรมสนิทกันมาก ๆ เพราะคนน้อย 55555555
                  ประทับใจมากเพราะไม่คิดว่าจะมีชมรมที่รุ่นพี่รุ่นน้องสนิทกันได้ขนาดนี้
                  เป็นเหมือนสังคมอีกกลุ่มนึงในโรงเรียนของเราเลย เราในฐานะที่เคยเป็นประธาน
                  ก็ได้เรียนรู้การทำงานหลายๆอย่างที่ทำให้ได้ค้นพบความเป็นตัวเองมากขึ้น
                  กิจกรรมในชมรมก็มีตลอดทั้งปี เราเอนจอยมาก ๆ เลย ถึงจะเหนื่อยแต่ก็ได้เต้น
                  ได้ทำในสิ่งที่ชอบ แนะนำมากเลยสำหรับน้อง ๆ ที่ชอบและสนใจในการเต้น โดย แคท TU81
                  Instagram : @vj.kat_
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
                    src="/assets/clubs/entertainer_profile_3.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เกรท</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: instagram@ggracelyns</span>
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
                  สวัสดีค่ะ พี่ชื่อเกรซ อยู่ศิลป์จีนรุ่นที่ 7 แล้วก็เป็นประธานชมรม Entertainer
                  รุ่นที่ 11 ค่ะ ที่เข้าชมรมนี้เพราะรู้ตัวเองว่าชอบเต้นมาก
                  เวลาดูคนอื่นแสดงหรือเต้นจะรู้สึกคันไม้คันมืออยากลุกไปเต้นด้วย
                  ชมรมนี้เลยเป็นสิ่งที่เติมเต็มให้ 3 ปีในเตรียมฯ คุ้มสุด ๆ
                  ทั้งเรื่องกิจกรรมแล้วก็เรื่องเพื่อน กิจกรรมของชมรมมีเยอะมาก ๆ
                  เรียกได้ว่ามีเต้นกันเกือบทุกงานโรงเรียนเลยทีเดียว (ถึงไม่มีงานของโรงเรียน
                  เราก็ไปหางานข้างนอกอยู่ดี 555) และด้วยความที่เด็กเตรียมฯ ก็เรียนหนักมากกันอยู่แล้ว
                  การแบ่งเวลาเลยสำคัญมาก ช่วงแรกก็ปรับตัวกันหนักเลยแหละ
                  เพราะชมรมนี้จริงจังเรื่องโชว์ ซ้อมกันเช้าถึงเย็นทุกวัน เหนื่อยนะ แต่สนุกมากกว่า
                  พอมองย้อนกลับไปจะรู้สึกภูมิใจทุกครั้งที่ผ่านมันมาได้ ส่วนเรื่องเพื่อนในชมรม
                  ต้องบอกว่า ที่สุด ! เพราะว่าเราไม่ได้สนิทกันแค่ในเวลาชมรม
                  หลังเลิกเรียนในวันปกติก็จะนัดไปสยามด้วยกันบ่อย ๆ วันหยุดก็ไปเที่ยวด้วยกัน
                  เป็นกลุ่มเพื่อนที่สนิทมาก ๆ เพราะฉะนั้น อย่างที่บอกไปว่าชมรม Entertainer
                  ทำให้เราใช้ 3 ปีในเตรียมฯ ได้คุ้มมาก มีครบทุกรสชาติ อาจจะเครียดตอนซ้อมนิดหน่อย
                  (กลัวซ้อมไม่ทัน555) มีสนุกเพราะได้ซ้อมกับเพื่อน พี่ ละก็น้อง
                  มีตื่นเต้นเพราะพอถึงเวลาที่ต้องสแตนด์บายหลังเวที ทุกคนจะตื่นเต้นและกดดันมาก ๆ
                  เราก็จะบอกกันตลอดว่า ทำให้สนุกที่สุด เราทำได้ ! และในทุก ๆ การแสดง
                  เราจะได้ประสบการณ์ใหม่ ๆ ตลอด ทั้งเรื่องทักษะการเต้นเพลงรูปแบบต่าง ๆ
                  ที่แทบไม่เคยซ้ำกันเลย แล้วก็ทักษะการทำงานเป็นกลุ่ม
                  ดังนั้นชมรมนี้เหมาะกับคนที่ชอบเต้น ชอบเอนเตอร์เทนคนดู ไม่จำเป็นต้องเต้นเก่ง
                  ขอแค่มี passion กับมันก็พอค่ะ โดย เกรท TU82 Instagram : @ggracelyns
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
