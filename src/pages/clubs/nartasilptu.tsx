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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมนาฏศิลป์</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 50 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/nartasilptu_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              วิธีการนุ่งโจงกระเบนและการห่มสไบ
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมนาฏศิลป์จะเน้นที่การปฏิบัติมากกว่าด้านทฤษฎี
              ในแต่ละภาคเรียนจะมีกิจกรรมที่แตกต่างกันออกไป เช่น
              การนุ่งโจงกระเบนและการห่มสไบเพื่อให้นักเรียนในชมรมรู้และสามารถปฏิบัติได้อย่างถูกต้อง
              นอกจากนี้ชมรมของเรายังมีกิจกรรมเวิร์คช็อปเพื่อเป็นการละลายพฤติกรรมและเป็นการเตรียมพร้อมพื้นฐานในการแสดงออกต่อสาธารณะ
              นอกจากกิจกรรมภายในชมรมแล้วยังมีการส่งนักเรียนที่มีความสามารถไปแข่งขันภายนอกโรงเรียนอีกด้วย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/nartasilptu_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                การแข่งขันศิลปหัตถกรรม
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              นักเรียนจะได้พัฒนาทักษะทางด้านนาฏศิลป์ไทยหลากหลายด้าน
              ทั้งในด้านทักษะการแสดงนาฏศิลป์ไทย ซึ่งถือเป็นการพัฒนาบุคลิกภาพของนักเรียน
              รวมไปถึงทักษะการเตรียมความพร้อมในการแสดง ความรู้เรื่องเครื่องแต่งกาย วัฒนธรรมไทย
              และอื่นๆโดยมีอาจารย์เป็นผู้ให้คำปรึกษาและให้ความรู้แก่นักเรียน
              ทำให้นักเรียนในชมรมได้รับความรู้ในด้านนาฏศิลป์ไทย และวัฒนธรรมไทย
              ที่ควรค่าแก่การอนุรักษ์ ต่อยอด และสืบสานให้คงอยู่ต่อไป
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/nartasilptu_image_3.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
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
                    src="/assets/clubs/nartasilptu_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ครีม</h1>
                  <span className="text-xs">เตรียมอุดม 80</span>
                  <span className="w-max text-xs">IG: creampanwad</span>
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
                  หรือสมาชิกเก่า ชมรมนาฏศิลป์เตรียมอุดมฯ เปรียบเสมือนบ้านหลังที่ 2
                  เราได้เจอทั้งเพื่อนที่ดี รุ่นพี่รุ่นน้องที่น่ารัก ทีมเวิร์กที่ดี
                  ทุกคนเต็มที่กับการร่วมกิจกรรม คุณครูใจดีทุกคน เวลามีปัญหาเรามักจะปรึกษาครู
                  เราประทับใจมากกก เวลาซ้อมก็จริงจริง เวลาเล่นก็สนุกสนานเฮฮา รู้จักหน้าที่ น้อง ๆ
                  น่ารักกันทุกคน ชมรมนี้เคารพนับถือกันเเละกัน ซึ่งเราชอบความสัมพันธ์แบบนี้มากก
                  มันอบอุ่นจริง ๆ โดย ครีม TU80 IG:creampanwad
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
                    src="/assets/clubs/nartasilptu_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">โฟกัส</h1>
                  <span className="text-xs">เตรียมอุดม 80</span>
                  <span className="w-max text-xs">IG: ffocusr</span>
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
                  ตั้งเเต่เข้ามาอยู่ชมรมนาฏศิลป์ มีความประทับใจหลายอย่างมาก สังคมดีมาก
                  ทุกคนคอยช่วยเหลือกันหมดทั้งรุ่นพี่รุ่นน้อง เวลาซ้อมเเข่งทุกคนก็จะให้กำลังใจกัน
                  ครูชมรมนาฏศิลป์ก็ดีมาก คอยให้คำปรึกษาเเละช่วยเหลือทุกอย่าง สถานที่เรียนก็ดีค่ะ โดย
                  โฟกัส TU80 IG:ffocusr
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
