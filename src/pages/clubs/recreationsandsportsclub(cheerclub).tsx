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
              ชมรมนันทนาการกีฬา (ชมรมเชียร์)
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 35 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/recreationsandsportsclub(cheerclub)_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              งานกีฬาประเพณีเตรียมอุดม-เตรียมทหารครั้งที่ 36
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมเชียร์ (Cheer Club) เป็นส่วนหนึ่งของชมรมนันทนาการกีฬา
              ซึ่งจะเป็นชมรมที่ผู้นำเชียร์แห่งโรงเรียนเตรียมอุดมศึกษา หรือ “หลีดโรงเรียน”
              ทุกคนจะต้องเข้าร่วม
              กิจกรรมในชมรมจะเป็นการฝึกซ้อมเพื่อเตรียมความพร้อมสำหรับงานแสดงต่างๆของผู้นำเชียร์ที่จะมีขึ้นตลอดทั้งปี
              โดยการฝึกซ้อมนั้นจะดำเนินการและควบคุมโดยคณะผู้นำเชียร์รุ่นก่อนหน้าเป็นหลัก
              และจะมีคุณครูประจำชมรมคอยควบคุมดูแลระหว่างการฝึกซ้อมในคาบชมรม
              ผู้นำเชียร์แห่งโรงเรียนเตรียมอุดมศึกษาทุกคนจึงจำเป็นต้องเข้าร่วมชมรมเชียร์
              เพื่อให้การฝึกซ้อมเป็นไปอย่างมีประสิทธิภาพและต่อเนื่องมากที่สุด
              เป็นการเตรียมพร้อมสำหรับงานต่างๆที่จะจัดขึ้นในตลอดปีการศึกษานั้น ๆ
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/recreationsandsportsclub(cheerclub)_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                พิธีเปิดกีฬาสีประจำปีการศึกษา 2563
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ได้ปฏิบัติหน้าที่ในงานต่าง ๆ ที่จัดขึ้นของโรงเรียน รวมถึงได้ฝึกความรับผิดชอบ
              ฝึกระเบียบวินัย ความตรงต่อเวลา ความอดทน
              ฝึกการทำงานเป็นหมู่คณะและการมีปฏิสัมพันธ์ร่วมกับผู้อื่น ฝึกการจัดสรรและแบ่งเวลา
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/recreationsandsportsclub(cheerclub)_image_3.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม งานเปิดตัวคณะผู้นำเชียร์ งานพิธีเปิด-ปิดกีฬาสีประจำปี
              งานประเพณีเตรียมอุดม-เตรียมทหาร งานเดิน-วิ่งปิ่นหทัย งานประชุมผู้ปกครอง งานTriam Udom
              Open house งานพัฒนาศักยภาพผู้เรียน
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/recreationsandsportsclub(cheerclub)_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">โอโซน</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: oznenon</span>
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
                  หรือสมาชิกเก่า สวัสดีค่า เราชื่อโอโซนน้า
                  เป็นประธานผู้นำเชียร์แห่งโรงเรียนเตรียมอุดมศึกษารุ่นที่ 37 ค่ะ เรียกอีกชื่อก็คือ
                  “หลีดโรงเรียน” นั่นเอง ซึ่งหน้าที่ของคณะผู้นำเชียร์ก็จะเป็นการแสดงในงานต่าง ๆ
                  ของโรงเรียนค่ะ ซึ่งก็จะมีงานให้แสดงตลอดทั้งปีการศึกษาเลย
                  ชมรมเชียร์เลยเป็นชมรมสำหรับการฝึกซ้อมเพื่อเตรียมงานแสดงของพวกเราค่ะ
                  สำหรับเราการได้มาเป็นส่วนหนึ่งของผู้นำเชียร์แห่งโรงเรียนเตรียมอุดมศึกษา
                  เหมือนเราได้ครอบครัวมาอีกครอบครัวนึงเลยค่ะ ทั้งเพื่อนร่วมรุ่น รุ่นพี่
                  รวมถึงรุ่นน้อง เราได้มิตรภาพดีๆจากที่นี่เยอะมาก ๆ
                  เราได้เจอเพื่อนที่พร้อมช่วยเหลือและให้กำลังใจกัน เป็นเพื่อนที่เราสนิทมาก ๆ
                  เพราะช่วงที่ซ้อมก็จะต้องเจอกันทุกวัน ซ้อมด้วยกัน กลับบ้านพร้อมกัน
                  เรียกว่าเจอกันจนเบื่อหน้าเลยทีเดียว5555
                  แต่นั่นเป็นสิ่งที่ดีที่สุดที่เราได้รับจากการเป็นหลีดเลยค่ะ
                  เนื่องจากการเป็นผู้นำเชียร์จะมีงานแสดงตลอดทั้งปี เลยต้องซ้อมกันอย่างจริงจังมาก ๆ
                  เพื่อให้งานออกมาดีที่สุด อาจจะเหนื่อยบ้าง ท้อบ้าง
                  แต่เพราะได้เพื่อนที่ให้กำลังใจแล้วก็พร้อมจะทำมันไปด้วยกัน
                  ก็ช่วยให้เราสามารถก้าวผ่านความเหนื่อยนั้นมาได้ แล้วพอได้ลองมองย้อนกลับไป
                  มันทำให้เรารู้สึกภูมิใจมากจริง ๆ ค่ะ การที่เราได้มาเป็นส่วนหนึ่งของชมรมนี้
                  ทำให้เราได้เจอคนดี ๆ เยอะมาก ทั้งคุณครูประจำชมรมที่พร้อมช่วยเหลือและให้คำปรึกษา
                  รุ่นพี่หลาย ๆ รุ่นที่แวะเวียนกันมาช่วยซ้อม เพื่อนร่วมรุ่น
                  และรวมถึงรุ่นน้องที่เราต้องทำการฝึกซ้อมให้
                  ทุกคนล้วนเป็นมิตรภาพดีๆที่เราได้รับทั้งนั้นเลยค่ะ การเดินทางตลอด 1
                  ปีที่เราทำหน้าที่ผู้นำเชียร์และตลอด 1 ปีที่เราได้ทำหน้าที่เป็นรุ่นพี่
                  เราได้รับประสบการณ์และความทรงจำดี ๆ เยอะแยะมากมายเลย
                  ถ้าเทียบกับสิ่งที่เราได้รับทั้งหมดนี้
                  ความเหนื่อยและความลำบากที่ต้องเจอมันทดแทนกันไม่ได้เลยค่ะ
                  สุดท้ายนี้เราก็ขอฝากชมรมเชียร์แล้วก็คณะผู้นำเชียร์แห่งโรงเรียนเตรียมอุดมศึกษาไว้ด้วยนะคะ
                  หากมีอะไรสงสัยหรืออยากพูดคุย อยากสอบถามเพิ่มเติม สามารถทักมาคุยกับเราหรือพี่ ๆ
                  ผู้นำเชียร์คนอื่นได้ตลอดเลยค่ะ แล้วมาเจอกันนะคะ :) โดย โอโซน TU82 IG : oznenon
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
                    src="/assets/clubs/recreationsandsportsclub(cheerclub)_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ฟางฟาง</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: fangfyyfang</span>
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
                  สวัสดีน้อง ๆ ว่าที่ TU84 ทุกคนเลยนะคับบ
                  วันนี้เราก็จะมารีวิวชมรมในฐานะประธานชมรมเนอะ
                  ชมรมเชียร์ก็เป็นชมรมสำหรับการฝึกซ้อมงานต่างๆของหลีดโรงเรียน
                  ไม่ว่าจะเป็นงานเปิดตัวหลีด พิธีเปิดกีฬาสี และพิธีปิดกีฬาสี
                  ส่วนเราก็จะคอยประสานงานต่าง ๆ ให้
                  คนที่เราจะต้องติดต่อบ่อยๆก็จะเป็นอาจารย์ที่ปรึกษาชมรมแล้วก็สมาชิกในชมรม
                  เราอยากบอกว่าทั้งอาจารย์แล้วก็คนในชมรมน่ารักมาก ๆ
                  เวลามีปัญหาหรือต้องการคำปรึกษาเกี่ยวกับงานชมรมเราก็จะพูดคุยกับอาจารย์ได้ทุกเรื่อง
                  รวมถึงเวลาประสานงานต่อให้คนในชมรมทุกๆคนก็จะคอยช่วยเหลือแล้วก็ซับพอร์ตเราตลอดเลย
                  ส่วนตอนซ้อมบรรยากาศก็ไม่ได้เครียดเหมือนกับที่หลายๆคนคิด
                  ด้วยความที่ต้องฝึกซ้อมด้วยกัน ใช้เวลาด้วยกันทำให้คนในชมรมสนิทกันมาก ๆ สำหรับน้อง ๆ
                  ที่สนใจในชมรมของเรา ก็อยากให้ลองมาสมัครดูนะ ลองให้โอกาสกับตัวเอง
                  การเข้ามาเป็นส่วนนึงของชมรมให้ประสบการณ์ดี ๆ กับเราเยอะมาก ๆ เราก็อยากให้น้อง ๆ
                  ได้ลองมาสัมผัสมันด้วยตัวเองนะ :-) โดย ฟางฟาง TU82 IG : fangfyyfang
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
