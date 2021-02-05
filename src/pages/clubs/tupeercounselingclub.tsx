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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมเพื่อนที่ปรึกษา</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 50-60 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/tupeercounselingclub_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              ภายในงานอบรมโครงการ พัฒนาศักยภาพเพื่อนที่ปรึกษา "ฝึกใจให้เห็นหัวใจ
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมเพื่อนที่ปรึกษามุ่งเน้นให้นักเรียนได้ทั้งเพื่อน
              และได้ฝึกฝนทักษะการปรับตัวเข้ากับสภาพแวดล้อมอย่างมีประสิทธิภาพ
              การปฏิสัมพันธ์ระหว่างบุคคล การเสริมสร้างความเข้าใจทั้งต่อตนเอง และสังคมรอบข้าง
              รวมไปถึงฝึกฝนทักษะในการเป็นทั้ง 'ผู้ฟัง' และ 'ผู้ให้คำปรึกษา' ที่ดีแก่เพื่อน
              ผ่านการทำกิจกรรมกลุ่มสัมพันธ์ต่าง ๆ ในชั้นเรียนร่วมกัน
              ตั้งแต่การเริ่มซักถามไปจนถึงท่าทางการวางตัวที่ถูกต้อง
              ซึ่งเราจะได้เรียนรู้ผ่านสถานการณ์สมมติ จากกิจกรรมฝึกปฏิบัติให้คำปรึกษา
              มีคาบเรียนเกี่ยวกับภาคทฤษฎีทางจิตวิทยาเบื้องต้นและอาการวิทยา
              รวมทั้งมีการจัดกิจกรรมสัมมนาจากวิทยากรนักจิตวิทยา
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/tupeercounselingclub_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1\. ได้เรียนรู้ทักษะการฟัง และทักษะการให้คำปรึกษาแก่ผู้อื่น 2\. ได้รับการพัฒนา
              และส่งเสริมทักษะชีวิตในด้านต่าง ๆ เช่น การสร้างสัมพันธภาพระหว่างบุคคล, การทำงานเป็นทีม
              และการสื่อสาร เพื่อนำไปประยุกต์ใช้ในชีวิตและสังคมในอนาคต 3\.
              ได้เห็นคุณค่าของตนเองและคนรอบข้างมากขึ้น 4\.
              สามารถปรับตัวเข้ากับการดำเนินชีวิตในโรงเรียนได้ไวขึ้น
              สามารถเรียนรู้ที่จะอยู่ร่วมกันกับผู้อื่นอย่างมีความสุข
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม การอบรมโครงการพัฒนาศักยภาพเพื่อนที่ปรึกษา การบรรยายหัวข้อ "ฝึกใจให้เห็นหัวใจ"
              โดย คุณนรพันธ์ ทองเชื่อม นักจิตวิทยาผู้เชี่ยวชาญด้านเด็กและวัยรุ่น
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/tupeercounselingclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">โรส</h1>
                  <span className="text-xs">เตรียมอุดม </span>
                  <span className="w-max text-xs">IG: 80rose_nylit</span>
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
                  หรือสมาชิกเก่า ชมรมเพื่อนที่ปรึกษาทำให้เราเข้าใจตัวเองมากขึ้น ก่อนที่จะค่อย ๆ
                  เริ่มทำความเข้าใจผู้อื่น ในชมรมมีการเรียนการสอนเกี่ยวกับจิตวิทยาเบื้องต้น
                  และมีกิจกรรมที่ฝึกให้เราได้มีปฏิสัมพันธ์กับเพื่อน ๆ
                  ร่วมกันคิดวิเคราะห์และแสดงความคิดเห็นในคลาส
                  ได้ทำความเข้าใจเหตุและผลของพฤติกรรมต่าง ๆ ไม่ด่วนตัดสินใคร
                  แต่ฝึกให้เราเป็นคนที่มองโลกและสังคมด้วยมุมมองที่กว้างขึ้น โดย โรส TU 80 (IG :
                  rose_nylit)
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
