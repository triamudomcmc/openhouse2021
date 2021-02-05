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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมดุริยางค์</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 50 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/tuband_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การแข่งศิลปหัตถกรรม
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมดุริยางค์เป็นชมรมที่มีทั้งเครื่องเป่า และ percussion มีหลากหลายกิจกรรมให้ได้ลองทำ
              เช่น การฝึกซ้อมรวมวง, การเดิน marching และ Colourguard เป็นต้น
              และยังมีการพาไปแข่งขันนอกโรงเรียนเพื่อให้นักเรียนได้เก็บเกี่ยวประสบการณ์ต่าง ๆ
              ทั้งการทำงานเป็นทีม การทำงานแบบ back stage และ on stage อีกด้วย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/tuband_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                การแข่ง Marching And Marching Arts International
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ได้เพื่อนเพิ่มขึ้น ได้ทักษะดนตรีติดตัว ได้ฝึกการทำงานเป็นทีม ฝึกการทำงานในรูปแบบต่าง ๆ
              ทั้ง back stage และ on stage ในส่วนของการเดิน marching
              ก็คือจะได้บุคลิกภาพและสมาธิที่ดีขึ้นอีกด้วยเช่นกัน
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/tuband_image_3.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม การแข่งขันศิลปหัตถกรรม wind ensemble (รองชนะเลิศอันดับ1) Music & Marching Arts
              International (เหรียญทอง) Valaya Alongkorn Music Competition (ชนะเลิศอันดับ1)
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/tuband_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เชน</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: chainpas_per</span>
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
                  หรือสมาชิกเก่า ความเห็นพี่ก็ ชมรมนี้ก็สนุกดีนะ ทุกคนได้เล่นดนตรีด้วยกัน
                  มีส่วนร่วมกันแทบทุกคน ซึ่งพี่ว่าพี่ประทับใจมากที่ 3 ปีในเตรียมฯ
                  ก็ยังคงวนเวียนอยู่ในชมรมนี้ มันเหมือนได้ทำสิ่งที่เราชอบอะเนาะ และเวลามีเรื่องอะไร
                  หรือจะนัดไปเที่ยว กินข้าว หรืออะไรก็ตามเนี่ย
                  เพื่อนหรือสังคมในวงนี่แหละแทบจะมาเป็นอันดับแรก มีไรเพื่อนวงมาก่อนเลย
                  และในส่วนสถานที่ซ้อมเนี่ย ห้องวงถ้า renovate หรือจัดใหม่ก็น่าจะดีกว่านี้
                  และสำหรับพี่ห้องวงมันก็เหมือนห้องในบ้านอีกห้องอะ อะไรประมาณนี้ โดย เชน TU81 IG :
                  chainpas_per
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
                    src="/assets/clubs/tuband_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">นิล</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: kantanill</span>
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
                  จริง ๆ ที่นี่มันเกินคำว่าชมรมไปอีกนะสำหรับเรา
                  ช่วงนี้อาจจะไม่ค่อยได้มาซ้อมมากินมานอนด้วยกัน เท่าไรด้วยโควิดหรืออะไรก็ตามแต่
                  แต่ช่วงที่ได้ทำกิจกรรมคือมันยุ่งมากจนลืมวันลืมคืนนี่ไม่เกินจริงเลย 555555555
                  แต่เอาดี ๆ มันสนุกนะ เหมือนที่เขาบอกว่าเวลาของความสุขมันจะผ่านไปไวเสมอ
                  เรามานั่งคิดก็แบบเออเราอยู่กับวงนี้มาสามปีแล้ว กำลังจะจบจากเตรียมฯ แล้ว
                  คงไม่ได้มาเล่นดนตรีกับเพื่อน ๆ พี่ ๆ น้อง ๆ บ่อยได้เท่าเมื่อก่อนแล้ว
                  พอเรามามองย้อนกลับไปเราจำอะไรไม่ค่อยถูกเท่าไรจำมั่วจำสลับกันไปหมดเพราะมันเยอะมากจริง
                  ๆ 555555555 จะแข่งจะซ้อมหรืออะไรเราใช้เวลากับชมรมนี้ไปประมาน 70%
                  ของชีวิตในเตรียมอุดมฯ เลยอะ มันคุ้มเกินคุ้มมาก
                  เวลามีอะไรที่ต้องช่วยเหลือคือไม่ต้องขออะ
                  คือพวกเราเต็มใจที่จะสนับสนุนซัพพอร์ตซึ่งกันและกันอะ
                  มันมีนะช่วงเวลาที่ทะเลาะหรือไม่เข้าใจกันอะ
                  มันเป็นธรรมดามากของการอยู่ร่วมกันของคนเป็นสามสิบสี่สิบคน
                  แต่ขอบคุณทุกคนที่อดทนผ่านจุดนั้นมาได้ ขอบคุณสำหรับช่วงเวลาดี ๆ ที่ผ่านมา ขอบ
                  คุณที่ทำให้ชีวิตม.ปลายเราสนุกได้มากขนาดนี้ หวังว่าชมรมดุริยางค์จะเป็นมากกว่าคำว่า
                  'ชมรม'ให้ทุกคนได้มาใช้ช่วงเวลาดี ๆ ร่วมกันที่นี่นะ โดย นิล TU81 IG : kantanill
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
                    src="/assets/clubs/tuband_profile_3.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">คิตตี้</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: </span>
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
                  ชมรมดุริยางค์เป็นเหมือนครอบครัวสําหรับเรา เพราะใช้เวลาส่วนมากอยู่ที่วง
                  ได้อยู่กับเพื่อน ๆ พี่ ๆ น้อง ๆ เป็นกลุ่มคนที่เรารู้สึกว่าเราสนิทที่สุดเเล้ว
                  นอกจากได้เรียนรู้ดนตรีก็ได้เรียนรู้ประสบการณ์ชีวิตเยอะมาก ๆ
                  ตั้งเเต่การเป็นผู้นําและผู้ตามที่ดี ความกล้าเเสดงออก เเละความอดทนเเละรับผิดชอบ
                  นอกจากนี้ เราได้ connection เยอะมาก ๆ ทั้งรุ่นพี่ศิษย์เก่า ทั้งคนในวงการดนตรี
                  ทั้งอาจารย์หลายๆท่าน ซึ่งเรารู้สึกว่ามันมีประโยชน์กับเราในอนาคตอีกด้วย โดย คิตตี้
                  TU81
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
