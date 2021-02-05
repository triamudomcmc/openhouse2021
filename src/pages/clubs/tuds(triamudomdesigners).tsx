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
              ชมรมนิเทศศิลป (ฝ่ายเเฟชั่น)
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 20 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/tuds(triamudomdesigners)_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              รูปส่วนหนึ่งจาก photoshoot ของนิตยสาร ZODOTU pride edition
              โดยเป็นชุดที่พี่ในชมรมออกแบบ
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              มีงานหลักที่ต้องทำ 2 งาน 1.Photoshoot ของนิตยสาร ZODOTU ที่ทำร่วมกับชมรมนิเทศศิลป
              ฝ่ายนิตยสาร โดยทำการออกแบบหรือสไตล์ลิ่งชุด ให้เข้ากับธีมของนิตยสารปีนั้น ๆ
              และดำเนินการถ่ายร่วมกับชมรมอื่น 2.Fashion show ประจำปี ในงาน Open House
              ทุกคนในชมรมจะได้ออกแบบชุดและได้ตัดออกมาเพื่อเดินในงาน Fashion show นี้
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/tuds(triamudomdesigners)_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ได้ลองออกแบบและสไตล์ลิ่งเสื้อผ้าเอง และได้ความรู้ในการออกแบบจากรุ่นพี่ในชมรม และเพื่อน
              ๆ โดยการแลกเปลี่ยนความคิดกัน
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/tuds(triamudomdesigners)_image_3.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                รูปงาน fashion show ในงาน Open House 2020
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม Fashion show ในงาน Open House ในทุก ๆ ปีที่ผ่านมา และ photoshoot ในนิตยสาร
              ZODOTU
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/tuds(triamudomdesigners)_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ชมพู่</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: korakotchom</span>
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
                  หรือสมาชิกเก่า ชมรมนี้ทำให้เราสามารถเจอความสามารถที่เราคิดไม่ถึง
                  ก่อนที่เราจะเข้าเตรียมฯ เราตามแฟชั่นแค่เล็ก ๆ น้อย ๆ ไม่ได้โฟกัสอะไรมาก
                  แต่พอเข้ามาแล้วเจอว่ามีชมรมนิเทศศิลปฝ่ายแฟชั่นเราก็สนใจที่จะ audition ชมรมนี้
                  พอหลังจากเข้ามาได้เรารู้สึกว่าเราเจอสิ่งที่เราชอบขึ้นมาอีกหนึ่งอย่าง
                  ซึ่งงานในชมรมที่เราได้ทำไม่ใช่แค่ออกแบบเสื้อผ้าแต่เรายังได้ลองอะไรใหม่ ๆ
                  ทั้งการจัดสถานที่ เป็นคนปล่อยคิวตอนเดินแบบ ทำบัญชี คัดนางแบบ ถ่ายนิตยสาร
                  เราเลยรู้สึกว่าชมรมนี้ให้อะไรกับเราหลายอย่างไม่ว่าจะเป็นประสบการณ์
                  หรือว่าเพื่อนใหม่ที่ชอบอะไร ๆ เหมือนกับเรา
                  นอกจากนี้เรายังได้ความรู้มากมายเกี่ยวกับการดีไซน์และออกแบบเสื้อผ้า
                  ชมรมนี้ทำให้เรารู้สึกว่าการเข้าชมรมทำให้เราค้นหาตัวเองได้ว่าเราอยากจะทำอาชีพอะไรในอนาคต
                  และยังทำให้มีแพชชั่นในการทำมากขึ้นด้วย👠✨ โดย ชมพู่ TU82 IG korakotchom
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
                    src="/assets/clubs/tuds(triamudomdesigners)_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ชิน</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: ch7yn</span>
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
                  ด้วยความที่เราชอบแฟชั่นมาก่อนอยู่แล้ว พอได้เข้ามาชมรมนี้
                  ก็เลยได้ลองทำสิ่งที่อยากทำจริง ๆ ผลงานเราได้ออกมาเป็นชุดจริง ๆ
                  ไม่ได้เป็นแค่รูปวาดในกระดาษ ก็เลยรู้สึกสนุกมาก ๆ ที่ได้ลองทำสิ่งที่อยากทำ
                  ได้รู้ว่าเราไม่เก่งตรงไหน เราถนัดตรงไหน ได้รู้เรื่องที่ไม่เคยรู้
                  เช่นงานที่เราออกแบบแบบนี้ พอเป็นชุดจริง ๆ อาจจะออกมาไม่สวยก็ได้ 5555
                  แล้วก็ยังเป็นแนวทางเข้ามหาลัยได้อีกด้วย ตอนแรกเราก็อยากเข้าแฟชั่น พอได้ลองทำจริง ๆ
                  ก็รู้ว่า มีอะไรที่เราถนัดมากกว่านั้น
                  ก็ถือว่าได้ลองทำและได้เป็นประสบการณ์เพื่อนำไปตัดสินใจเรื่องมหาลัยด้วย ๆ
                  ชมรมเราก็ไม่ได้ทำงานเคร่งอะไรอยู่แล้ว ก็จะมีเหนื่อยแค่ช่วงทำงานจริงจังแค่นั้น
                  แล้วก็มีแนะนำกับช่วยงานกันกับเพื่อน ๆ พี่ ๆ ในชมรม
                  โดยรวมแล้วเราก็รู้สึกสนุกแล้วก็มีความสุขไปกับมันจริง ๆ ส่วนน้อง ๆ
                  อาจจะสงสัยว่าปีนี้จะมี fashion show มั้ย รอติดตามที่หน้า ig ชมรมเราได้เลย โดย ชิน
                  TU82 IG ch7yn
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
