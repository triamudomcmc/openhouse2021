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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมผู้บำเพ็ญประโยชน์</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 40 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/volunteerclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              กิจกรรมบำเพ็ญประโยชน์ที่วัดปทุมวนาราม
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมผู้บำเพ็ญประโยชน์เป็นชมรมที่สอนเรื่องความมีจิตอาสา เอื้อเฟื้อเผื่อแผ่
              และร่วมกันสร้างประโยชน์เพื่อช่วยเหลือเพื่อนมนุษย์ในสังคม
              กิจกรรมของชมรมจะเกี่ยวข้องกับการทำจิตอาสา เช่น
              การไปทำความสะอาดที่สถานสงเคราะห์เด็กอ่อนและได้พบปะกับเด็กที่กำพร้า การร่วมบริจาค
              เยี่ยมผู้คนที่ศูนย์พัฒนาการจัดสวัสดิการสังคมผู้สูงอายุ บ้านบางแค
              เพื่อให้สมาชิกชมรมทุกคนได้เห็นความยากลำบากของคนอื่น และให้ความช่วยเหลือคนอื่น
              เมื่อมีโอกาสและตนสามารถทำได้ ในเวลาปกติของคาบชมรม
              ชมรมจะมีการวางแผนเตรียมการสำหรับกิจกรรมบำเพ็ญประโยชน์นอกสถานที่อยู่เสมอและคอยหากิจกรรมที่เป็นกิจกรรมบำเพ็ญประโยชน์ใหม่
              ๆ เพื่อช่วยเหลือผู้อื่น นอกจากสอนเรื่องความมีจิตอาสาแล้ว
              ชมรมผู้บำเพ็ญประโยชน์ยังสอนให้เรียนรู้ความสามัคคีและการเป็นผู้นำและผู้ตามในสังคมได้
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/volunteerclub_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ได้เรียนรู้การเป็นจิตอาสา การมีจิตใจเอื้อเฟื้อเผื่อแผ่ต่อคนในสังคมที่ยากลำบากว่าตน
              เรียนรู้ทักษะการใช้ชีวิตนอกห้องเรียนและเรียนรู้การมีความสามัคคีกัน
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม กิจกรรมทำความสะอาดสถานสงเคราะห์บ้านเด็กอ่อน พญาไท
              กิจกรรมบำเพ็ญประโยชน์ที่วัดปทุมวนาราม
              กิจกรรมบริจาคและเยี่ยมที่ศูนย์พัฒนาการจัดสวัสดิการผู้สุงอายุ บ้านบางแค
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/volunteerclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">มด</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: modeieipong</span>
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
                  หรือสมาชิกเก่า ชมรมก็มีไปทำกิจกรรม​ข้างนอกบ่อย ๆ เช่น​
                  ล่าสุดก็มีไปทำความสะอาดลานวัด​ เวลาไปทำกิจกรรมข้างนอกงี้เราสามารถชวนเพื่อน ๆ
                  ไปด้วยได้ค่ะ​ ก็สนุกดีค่ะ​ แถมยังได้ทำประโยชน์ให้แก่ส่วนรวมอีก​ คุ้มค่ะ​
                  ส่วนกิจกรรมในห้องก็ส่วนใหญ่จะเป็นการพูดคุยเกี่ยวกับกิจกรรมที่จะไปทำกันค่ะ​ หลัก ๆ
                  ก็ประมาณนี้เลย โดย มด TU82 IG:modeieipong
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
                    src="/assets/clubs/volunteerclub_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ไข่มุก</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: _kmch_._</span>
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
                  ชมรมเราก็จะมีออกไปบำเพ็ญประโยชน์ตามชื่อชมรมเลย มีไปบ้านเด็กอ่อน
                  ช่วยทำความสะอาดสถานที่ แล้วปีนี้ก็ไปวัด ไปเช็ดหิ้งพระ กวาดลานวัดไรงี้อะค่ะ🥺
                  ก็ถือว่าเป็นการทำประโยชน์ให้กับส่วนรวมเลย มากับเพื่อนก็ได้ เอนจอยดีคั้บ ! โดย
                  ไข่มุก TU82 IG: _kmch_._
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
