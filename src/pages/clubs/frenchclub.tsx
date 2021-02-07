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
              ชมรมสีสรรพ์ภาษาต่างประเทศที่ 2 (ภาษาฝรั่งเศส)
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 60 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/frenchclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              เป็น กิจกรรม L’Atelier Gastronomique (กิจกรรมสาธิตการทำอาหาร)
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              เป็นชมรมที่สมาชิกทุกคนจะสามารถเรียนรู้เกี่ยวกับภาษาและวัฒนธรรมฝรั่งเศสผ่านสื่อโซเชี่ยวมีเดียต่าง
              ๆ ไม่ว่าจะเป็นวัฒนธรรมด้านอาหารการกิน ดนตรี สถานที่ท่องเที่ยว บทสนทนาเบื้องต้น
              เทศกาลสำคัญต่าง ๆ การใช้ชีวิตประจำวัน และเกร็ดความรู้ทั่วไปอีกมากมาย
              ซึ่งสามารถนำไปใช้ต่อยอดในการสอบวัดระดับภาษาต่างประเภทที่ 3
              ได้และสามารถนำมาประยุกต์ใช้ในชีวิตประจำวันได้ในโอกาสต่าง ๆ
              และยังเป็นแหล่งพบปะกันของนักเรียนที่มีความสนใจและหลงใหลในเสน่ห์ของประเทศฝรั่งเศสเหมือนกัน
              ที่จะมีโอกาสได้มาทำความรู้จักและทำกิจกรรมไปพร้อม ๆ กัน โดยจะได้ลงมือทำด้วยตนเอง เช่น
              กิจกรรม L’Atelier Gastronomique (กิจกรรมสาธิตการทำอาหาร) กิจกรรมจัดซุ้มงาน Open House
              และอีกมากมาย
              ทั้งนี้ชมรมยังเป็นเวลาที่สามารถผ่อนคลายควบคู่ไปกับการเรียนรู้วัฒนธรรมอีกด้วย
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1\. พบเจอและทำความรู้จักกับนักเรียนที่มีความสนใจด้านเดียวกัน 2\.
              ความรู้ทางด้านภาษาและวัฒนธรรมฝรั่งเศส
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม กิจกรรม L’Atelier Gastronomique (กิจกรรมสาธิตการทำอาหาร)
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/frenchclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เบลล่า</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: @issaquella</span>
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
                  หรือสมาชิกเก่า ชอบชมรมสีสรรพ์ภาษาฝรั่งเศสมาก ๆ
                  เพราะเป็นชมรมที่ให้ความรู้ใหม่ๆพร้อมความสนุกสนาน
                  ได้กินขนมและที่สำคัญที่สุดคือได้ลองทำอาหารที่มาจากฝรั่งเศส
                  อีกทั้งอาจารย์ประจำชมรมใจดีสุด ๆ รู้สึกดีใจที่ได้เป็นส่วนหนึ่งของชมรมนี้
                  ประธานชมก็น่ารักมากด้วย ^^ เพื่อนในชมรมคือช่วยกันทำงาน จริงจังกันมาก
                  ทำให้ได้อะไรจากตรงนี้เยอะทั้งความรู้และทักษะการทำงานเป็นทีม สถานที่เรียนโอเคเลย
                  เป็นห้องแอร์ มีโปรเจคเตอร์มีทีวี ครบมากชมรมนี้ ! โดย เบลล่า TU82 (IG :
                  @issaquella)
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
