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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมขับร้องประสานเสียง</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 60 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/englishperformancechorus_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การแสดง "A Midspring Daydream" ในงาน Triam Udom Open House 2020
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมขับร้องประสานเสียงมีกิจกรรมให้ผู้เรียนได้ทำในทุก ๆ คาบชมรม โดยในคาบแรก ๆ
              จะมีการสอนวิธีการอ่านโน้ต การดูคอนดักเตอร์ และในทุก ๆ คาบจะมีการฝึกซ้อมตามปกติ
              โดยเริ่มที่การเตรียมความพร้อมของเสียง การฝึกเทคนิคต่าง ๆ ในการขับร้องประสานเสียง
              การรวมวงขับร้องประสานเสียง ซึ่งจะเป็นการพัฒนาผู้เรียนในด้านการร้องเพลง โดยรวมแล้ว
              การฝึกทั้งหมดนั้นเพื่อที่จะนำไปแสดงให้นักเรียนและบุคลากรในโรงเรียนได้รับชมในงานกิจกรรมต่าง
              ๆ ของโรงเรียน ได้แก่งานส่งกำลังใจสู่ความเป็นเลิศ งานวันแม่ งาน English week
              งานมุทิตาจิตคุณครูเกษียณ งาน Triam Udom Open House และงานอื่น ๆ
              ซึ่งทุกงานจะมีขึ้นในทุก ๆ ปีการศึกษา ซึ่งก่อนที่จะได้เป็นสมาชิกของชมรม
              จะมีการคัดเลือกผู้สมัครก่อนตามความสามารถของผู้สมัคร
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/englishperformancechorus_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              สิ่งที่ผู้เรียนจะได้รับจากการเข้าร่วมชมรมขับร้องประสานเสียง คือ
              สมาชิกชมรมจะได้รับความรู้เกี่ยวกับการขับร้องประสานเสียงและด้านดนตรี
              ได้พัฒนาศักยภาพด้านการร้องเพลงและดนตรี
              และสามารถนำความรู้ไปประยุกต์ใช้ในชีวิตประจำวันได้
              ได้ค้นพบและรู้จักเกี่ยวกับความชอบในด้านดนตรีของตนเองมากขึ้น
              ได้พัฒนาความสามารถในการทำงานและปรับตัวเข้ากับผู้อื่น
              มีความรับผิดชอบและสามารถบริหารจัดการเวลาในการเรียนและการทำกิจกรรม
              ได้พัฒนาศักยภาพด้านการสร้างสรรค์การแสดง ความกล้าแสดงออก และใช้เวลาว่างให้เป็นประโยชน์
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม การแสดงขับร้องประสานเสียงในงานกิจกรรมของโรงเรียน ได้แก่ งานวันแม่ งาน English
              Week งานมุทิตาจิตคุณครูเกษียณ งาน Triam Udom Open House
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/englishperformancechorus_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ป๊อป</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: tulb_pop.8750</span>
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
                  หรือสมาชิกเก่า ชมรมอีพีคอรัสเป็นชมรมร้องเพลงประสานเสียงที่อบอุ่นมาก ๆๆ
                  ทุกคนในชมรมรักกันเหมือนเป็นครอบครัวเดียวกันเลย
                  เป็นชมรมที่รวบรวมคนที่ชอบในการร้องเพลงและดนตรีไว้ด้วยกัน
                  ได้ทำในสิ่งที่ชอบเหมือนกัน กิจกรรมแต่ละอย่างก็สนุกมาก ๆ
                  คาบชมรมทุกคนจะร่วมซ้อมร้องเพลงในพาร์ทของตัวเองและค่อยมารวมซ้อมทุกคนกันอีกที เพื่อน
                  ๆ ในชมรมน่ารักมาก ใจดีสุด ๆ ทุกคนเข้าหาง่ายและเฟรนด์ลี่
                  เวลามีเรื่องหรือปัญหาอะไรก็มาปรึกษากันช่วยกันตลอด
                  หรือมีเรื่องหนักใจอะไรก็มาระบายให้คนในชมรมฟังได้ นั่นแหละความประทับใจส่วนนึงของเรา
                  ดีใจแบบมาก ๆๆ จริง ๆ ที่ได้มีโอกาสเข้ามาอยู่ในชมรมนี้ โดย ป๊อป TU82 (TU :
                  lb_pop.8750)
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
                    src="/assets/clubs/englishperformancechorus_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เเพทริค</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: patpatlinkk</span>
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
                  เราอยากย้อนเวลากลับไปขอบคุณตัวเองที่ออดิชั่นเข้าชมรมนี้แล้วก็เลือกชมรมนี้
                  มันเป็นพื้นที่เซฟโซนที่สุดของเราในเตรียมอุดมเลยก็ว่าได้
                  ตอนแรกเราไม่ได้มีความคิดจะเข้าชมรมขับร้องประสานเสียงเลยเพราะคิดว่าอาจจะน่าเบื่อแต่พอเห็นคลิปโปรโมตชมรมของพี่
                  ๆ TU81 ตอนนั้นก็เลยเปลี่ยนความคิด
                  อยากให้ทุกคนลบภาพความจำว่าชมรมขับร้องประสานเสียงมีไว้ร้องเพลงชาติตอนเช้า
                  ชมรมเราไม่ได้ร้องแค่เพลงโรงเรียน พวกเราทำงานที่สเกลใหญ่กว่านั้น
                  เป็นชมรมที่ทุกคนช่วยกันพัฒนาเรื่องการร้องเพลงแล้วก็ทำให้เรามั่นใจมากขึ้นเวลาร้องเพลงแล้วก็มีความสุขไปกับเสียงเพลง
                  มันเหมือนเป็นสถานที่ที่รวมคนที่รักในการร้องเพลงเหมือนกัน ไม่รู้ดิ เอาจริง ๆ
                  ถ้าให้พูดถึงชมรมคงพูดได้ทั้งวันไม่มีเบื่อเลย ก็เลยอยากให้น้อง ๆ ว่าที่ tu84
                  ทุกคนติดตามการแสดงของ E.P. Chorus นะครับ💗 โดย เเพทริค TU82 (IG : patpatlinkk)
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
                    src="/assets/clubs/englishperformancechorus_profile_3.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ข้าว</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: kh.nms</span>
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
                  ชมรม E.P. Chorus ก็เป็นชมรมคอรัสตามชื่อแหละ งานร้องเพลงขับร้องประสานเสียง
                  สำหรับคนที่ชอบร้องเพลงเราก็แนะนำจริง ๆ จากใจ
                  อย่างน้อยเข้าเตรียมมาก็ได้มีช่วงเวลาให้ดึงตัวเองออกจากเรื่องเครียด ๆ
                  มาทำสิ่งที่ชอบ ด้วยความที่มันเป็นงานที่ต้องทำร่วมกันทั้งวง ซ้อมด้วยกันบ่อย
                  คนในชมรมจะสนิทกันไวมาก อยู่กับคนในชมรมเหมือนอยู่กับกลุ่มเพื่อนสนิท
                  ได้ร้องเพลงอย่างสบายใจที่สุดก็ตอนอยู่ชมรมนี่แหละ
                  ในฐานะคนที่อยู่ในชมรมมาสามปีแล้วได้ทำในสิ่งที่ตัวเองชอบกับเพื่อน
                  เราพูดได้เต็มปากนะว่าสำหรับเราชมรมคือความสบายใจ สำหรับงาน Triam Udom Online Open
                  House 2021 ปีนี้ ขอฝากโชว์การแสดงของชมรม E.P. Chorus ด้วยนะ
                  เราเข้าชมรมนี้มาเพราะรักการร้องเพลง จบออกมาก็ยังรักการร้องเพลงอยู่
                  หวังว่าการแสดงของพวกเราจะทำให้ทุกคนมีความสุขกับเสียงเพลงได้เหมือนกันนะคะ โดย ข้าว
                  TU81 (IG : kh.nms)
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
