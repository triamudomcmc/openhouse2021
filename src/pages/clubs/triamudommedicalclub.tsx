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
              ชมรมผู้นำเยาวชนสาธารณสุขฯ
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 30 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/triamudommedicalclub_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              กิจกรรมสาธิตการปฐมพยาบาลเบื้องต้น
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              แลกเปลี่ยนความรู้ ความคิดเห็น เกี่ยวกับสุขภาพและสาธารณสุข ผ่านกิจกรรมในคาบเรียน
              ฝึกปฏิบัติและจัดทำผลิตภัณฑ์ส่งเสริมสุขอนามัย อาทิ การศึกษาและการฝึกปฐมพยาบาลเบื้องต้น
              การทำยาดมสมุนไพร ลูกประคบ และอื่น ๆ ตามความเหมาะสมกับสถานการณ์
              เป็นจิตอาสาด้านสาธารณสุขในโอกาสต่าง ๆ
              เพื่อส่งเสริมการดูแลรักษาสุขภาพของตนเองและผู้อื่น
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudommedicalclub_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                กิจกรรมการทำลูกประคบ
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              สามารถนำความรู้ ทักษะ รวมทั้งผลิตภัณฑ์ที่จัดทำขึ้นไปประยุกต์ใช้ในชีวิตประจำวัน
              ได้รับมิตรภาพที่ดีภายในชมรม
              และได้ร่วมเป็นส่วนหนึ่งที่ช่วยส่งเสริมการดูแลรักษาสุขภาพของตนเองและผู้อื่น
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudommedicalclub_image_3.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
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
                    src="/assets/clubs/triamudommedicalclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ปาล์ม</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: palmmrin</span>
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
                  หรือสมาชิกเก่า บรรยากาศในชมรมสบาย ๆ ไม่เครียด คุณครูและเพื่อน ๆ ในชมรมก็น่ารักมาก
                  ๆ เช่นกัน ในคาบเรียนจะมีการเรียนรู้ผ่านสื่อต่าง ๆ
                  มีการเเลกเปลี่ยนความรู้และกิจกรรมให้ทำร่วมกัน เช่น เกมตอบคำถาม
                  การฝึกปฐมพยาบาลเป็นกลุ่ม การทำลูกประคบและยาดมสมุนไพรด้วยตนเอง
                  ทำให้ได้รับความสนุกสนานเพลิดเพลิน
                  รวมทั้งความรู้และทักษะที่สามารถนำไปใช้ในชีวิตประจำวันได้ โดย ปาล์ม TU82 (IG :
                  palmmrin)
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
                    src="/assets/clubs/triamudommedicalclub_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เกิร์ล</h1>
                  <span className="text-xs">เตรียมอุดม 83</span>
                  <span className="w-max text-xs">IG: pakkkamol</span>
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
                  ชมรมผู้นำเยาวชนสาธารณะสุขเป็นชมรมที่ทำให้เราได้มีความรู้ในด้านสุขภาพต่าง ๆ
                  ซึ่งเป็นสิ่งที่ใกล้ตัวแต่หลายคนอาจจะมองข้ามไป
                  โดยในชมรมจะให้เรียนรู้ผ่านการทำกิจกรรมต่าง ๆ เช่น การเล่นเกม
                  หรือการศึกษาความรู้แล้วสรุปออกมาเป็นอินโฟกราฟิก อีกทั้งยังมีการให้ปฏิบัติจริง
                  อย่างการทำลูกประคบ ซึ่งความรู้ที่ได้นี้เราสามารถนำไปใช้ได้จริง โดย เกิร์ล TU83 IG
                  : pakkkamol
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
                    src="/assets/clubs/triamudommedicalclub_profile_3.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เจ๊คกี้</h1>
                  <span className="text-xs">เตรียมอุดม 83</span>
                  <span className="w-max text-xs">IG: jek._.ky</span>
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
                  ในช่วงนี้เรื่องของสุขภาพก็เป็นสิ่งสำคัญมาก ๆ
                  ชมรมของเราก็จะเกี่ยวกับการรักษาสุขภาพเลย
                  ตั้งแต่สุขภาพในชีวิตประจำวันทั่วไปจนถึงการทำลูกประคบที่น่าสนใจมาก ๆ มีกิจกรรมอื่น
                  ๆ ในชมรมให้ทำอีกมากมายเลย มาเป็นส่วนหนึ่งของเรากันเยอะ ๆ นะ โดย เจ๊คกี้ TU83 IG :
                  jek._.ky
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
