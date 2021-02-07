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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมถ่ายภาพ</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 30 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/triamudomphotoclub_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การทำหน้าที่ช่างภาพในกิจกรรม งาน ต.อ.-ต.ท.
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมถ่ายภาพโรงเรียนเตรียมอุดมศึกษา
              เป็นชมรมที่รวบรวมนักเรียนเตรียมอุดมศึกษาที่มีความสนใจหรือชื่นชอบ
              และมีความสามารถในด้านการถ่ายภาพ สมาชิกจะได้ร่วมกันเรียนรู้และฝึกฝน
              เพื่อพัฒนาทักษะฝีมือในการถ่ายภาพ ผ่านกิจกรรมต่าง ๆ ที่ชมรมได้จัดขึ้น เช่น
              การเวิร์คชอปนอกสถานที่ การฝึกล้างฟิล์ม นอกจากนี้
              ชมรมถ่ายภาพยังมีหน้าที่ในการทำงานเป็นช่างภาพของโรงเรียน
              เป็นผู้ที่บันทึกความทรงจำที่มีคุณค่าในกิจกรรมต่าง ๆ ตลอดทั้งปี เช่น งานสืบสานฯ
              งานกีฬาสี โดยสมาชิกจะได้พัฒนาทักษะในการทำงานร่วมกับผู้อื่นอย่างเป็นระบบและเป็นมืออาชีพ
              และยังได้ประสบการณ์ต่าง ๆ มากมายซึ่งสมาชิกสามารถนำไปประยุกต์ใช้และต่อยอดได้
              รวมถึงจะได้มิตรภาพอันทรงคุณค่าที่จะได้จากการได้ทำงานร่วมกันของสมาชิกในชมรม
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudomphotoclub_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                บรรยากาศการทำงานของสมาชิกชมรม
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1.ได้รู้จักกับเพื่อน ๆ ที่มีความสนใจเหมือนกัน 2.ได้พัฒนาทักษะและเรียนรู้เทคนิคใหม่ ๆ
              ในการถ่ายภาพ 3.ได้ประสบการณ์การทำงานเป็นช่างภาพในกิจกรรมของโรงเรียน
              4.ได้เรียนรู้การวางแผนการทำงานอย่างเป็นระบบและเป็นมืออาชีพ
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudomphotoclub_image_3.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                การถ่ายภาพกิจกรรมภายในโรงเรียน
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม การทำงานเป็นช่างภาพในกิจกรรมต่าง ๆ ของโรงเรียนเตรียมอุดมศึกษา เช่น งานสืบสานฯ
              กิจกรรมกีฬาสี งาน ต.อ.-ต.ท.
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/triamudomphotoclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เนส</h1>
                  <span className="text-xs">เตรียมอุดม 80</span>
                  <span className="w-max text-xs">IG: nes.wj</span>
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
                  หรือสมาชิกเก่า สำหรับพี่ ชมรมถ่ายภาพ เป็นชมรมที่ดีมาก
                  ได้ประสบการณ์การทำงานที่ไม่ใช่เเค่การถ่ายภาพ ชมรมยังให้มิตรภาพที่ดีอีกด้วย
                  เป็นเหมือนอีกครอบครัวหนึ่งที่อยู่เเล้วสบายใจมากพี่รู้จักชมรมครั้งเเรกจากรุ่นพี่คนหนึ่ง
                  ก่อนที่จะเข้าเตรียมอุดมฯ ตอนนั้น พี่ยังถ่ายรูปไม่ค่อยเป็นเท่าไหร่
                  ก็เลยตั้งเป้าหมายว่าถ้าเข้าเตรียมได้ ก็อยากที่จะเข้าชมรมนี้ พอติดเเล้วจริง ๆ
                  ก็ไปลองคัดที่ชมรมถ่ายภาพ จำได้ว่าวันคัดนี่ตื่นเต้นมาก
                  กลัวว่าจะไม่ติดเพราะไปคัดอยู่ชมรมเดียวเลย พอสัมภาษณ์เเล้วก็มีกลัว ๆ บ้าง
                  เเต่ก็พยายามเป็นตัวของตัวเองนี่ละ จนวันประกาศผลก็ติดมาจนได้ พอเข้ามาชมรม
                  ก็ได้เรียนรู้วิธีการทำงานมากยิ่งขึ้น การฝึกถ่ายรูป ฝึกการเเต่งรูป
                  ทำให้ฝีมือการถ่ายรูปพี่ดีขึ้นเรื่อย ๆ ความประทับใจต่อชมรมก็มีหลายอย่างมากเลย
                  ตั้งเเต่เรืองเพื่อน คือชมรมเราเนี่ยจะมีเเค่รุ่นละ 10 คน รวมจาก 3
                  รุ่นก็จะมีกันอยู่เเค่ 30 คน ทำให้ชมรมจะสนิทกันง่ายมาก เป็นชมรมที่อยู่เเล้วสบายใจ
                  เหมือนได้เจอคนที่ชอบทำอะไรเหมือนๆกัน เวลาทำงานก็จะมีเพื่อนทำงานด้วยกันเสมอ
                  ยิ่งเวลาไปเที่ยวนี่สนุกมากเพราะทุกคนถ่ายรูปเป็น พอกลับมารูปนี่ลงได้อีกนานเลย
                  คุณครูชมรมนี้ก็ถ้ารุ่นพี่ทันอาจารย์อยู่ 3 ท่าน คือ 1.อาจารย์วัฒนา 2.อาจารย์ตุลย์
                  3.อาจารย์ปฏิพัทธ์ อาจารย์ชมรมนี้ ให้คำปรึกษาได้ดีมาก
                  ถึงเเม้ท่านจะไม่ค่อยได้เข้ามาสอนในคาบชมรมเท่าไหร่ เนื่องจากให้เด็ก ๆ ได้สอนกันเอง
                  เเต่เวลาทำงานจริง ท่านก็จะอยู่ตลอดภายในงาน เวลาเราทำอะไรผิด ท่านก็จะเตือน
                  หรือให้คำเเนะนำตลอด รู้สึกสบายใจทุกครั้งเวลาอาจารย์อยู่ด้วย
                  อีกสิ่งหนึ่งที่ประทับใจคือการได้เป็นประธานชมรมนี้
                  รู้สึกเป็นงานที่ได้ฝึกความรับผิดชอบมากยิ่งขึ้น เพราะชมรมจะรอดได้
                  ก็ขึ้นกับประธานเเละรองประธาน ใช้เวลาติดต่องาน ประสานกับฝ่ายต่าง ๆ ในโรงเรียน
                  ยิ่งช่วง Open House นี่สนุกมาก จำได้ว่าทำงานหนักสุด ๆ ตั้งเเต่เคยทำมาเลย
                  ตอนนั้นทุ่มเทมาก ๆ ถึงเเม้จะมีข้อผิดพลาดไปบ้าง
                  เเต่ก็เป็นประสบการณ์ที่ดีมากๆเลยเเหละ
                  เเละที่พิเศษอย่างนึงของชมรมเราเนี่ยก็คือออออออ ห้องชมรม
                  โดยที่พี่ตอนเเรกก็ไม่คิดว่าห้องนี้จะเป็นห้องชมรม
                  ถ้าอยากรู้ว่าห้องนี้คือห้องไหนลองมาดูที่เตรียมอุดมดูสิ้ โดย เนส TU80 (ig : nes.wj)
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
                    src="/assets/clubs/triamudomphotoclub_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ยู่ยู้</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: yuyullows,peterpansaysbruh</span>
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
                  สังคมในชมรมเหรอ เอาแค่รุ่นเราก็ดูสนิทกันอยู่นะ น่าจะเพราะชมรมเรารุ่นนึงมีแค่ 10 คน
                  แถมมีงานเข้ามาให้ทำด้วยกันบ่อยในระดับนึง จะไม่ค่อยมีช่วงหายหน้าหายตากันไปนาน ๆ
                  เท่าไหร่ —แต่ก็ตีกันเพราะเรื่องงานอยู่ไม่ใช่น้อยนะ (ฮา)
                  ชมรมนี้มีอะไรให้ทำเยอะแยะเลย แต่คือส่วนใหญ่งานจะมาแบบ เป็นสิ่งที่ ‘ต้อง’
                  ทำละรับต่อ ๆ กันมา แบบเค ๆ รุ่นที่แล้วทำเราทำ มากกว่าเป็นงานที่ตกลงกันแล้ว
                  อะไรแบบนี้ พอมีเสียงแตก มันเลยออกจะวุ่นวายนิดนึง เก็ทมั้ย 55555
                  แต่ก็เป็นสีสันแห่งการแสดงความเห็น ดีกว่าไม่พูดนา (ยืมพื้นที่ encourage
                  ทุกคนให้กล้าพูดในสิ่งที่ตัวเองคิดนะ !&gt;&lt;)
                  เป็นการฝึกให้เรารู้จักการทำงานร่วมกับคนอื่นทั้งใน/นอกชมรม การแก้ปัญหาเฉพาะหน้า
                  เรียนรู้ปัญหาที่อยู่นอกเหนือการควบคุม บลา ๆ สนุกดี ๆ
                  มีอะไรประทับใจจากกิจกรรมพวกนี้หลายยยยอย่างเลย ไอ้ที่ไม่น่าประทับใจก็มีบ๊าง
                  แต่ไอตรงที่ไม่ประทับใจก็ทำให้เราโตขึ้นนะ ! แบบเหมือนที่พูดไป มันได้เจอปัญหาจริง ๆ
                  ลองแก้ปัญหาจริง ๆ ยิ่งเป็นโฟโต้ คือหลาย ๆ งานมันพลาดแล้วพลาดเลย
                  มันก็เพิ่มระดับความจริงจัง หรือบางงานที่มีเรื่องเงิน ๆ ทอง ๆ มาเกี่ยวข้อง
                  (แบบบางงานเราขายของ แหะ ๆ) ต้องดีลกับคนนอกเยอะ อะไรงี้ มันอาจจะไม่คอขาดบาดตาย
                  แต่ว่าถ้ารับมือกับปัญหาได้ไม่ดีก็เป๋อยู่ 🥲 เอ่อ
                  เอาเป็นว่ามันก็เหมือนไอคำคมที่ประมาณว่ากิจกรรมทำให้เราทำงานเป็น
                  (แต่คนไม่ทำก็ไม่ใช่ว่าเค้าทำงานไม่เป็นนะ5555555
                  -งานในโลกผู้ใหญ่อาจจะไม่เหมือนกิจกรรมในโรงเรียน ไม่รู้เหมือนกัน)
                  อ้อแล้วก็เรารู้สึกตอนนี้ชมรมยังไม่เปิดกว้างเท่าที่ควร
                  แนวทางยังไปในทางที่จะเอาคนมาทำงาน มากกว่าส่งเสริมการถ่ายภาพในแบบที่แต่ละคนชอบ
                  มันเลยทำให้ข้อจำกัดในการรับคนถูกจำกัดด้วยอุปกรณ์ (ว่าง่าย ๆ ถ้าจะเอามาทำงาน
                  มันก็ต้องใช้ดิจิตอลถ่ายอะนะ) ถ้าปรับตรงนี้ให้ลงตัวได้
                  แล้วเปิดรับคนนอกเข้าร่วมกิจกรรมบ้าง ชมรมถ่ายภาพ โรงเตรียมอุดมศึกษา
                  จะเป็นชุมชนให้ผู้ที่รักการถ่ายภาพได้มาพบปะพูดคุยกัน ก็คงจะดีมาก ๆ เลย🤍 โดย ยู่ยู้
                  TU81 (ig : yuyullows, peterpansaysbruh)
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
                    src="/assets/clubs/triamudomphotoclub_profile_3.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เลียม</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: _liamorourke</span>
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
                  ต้องบอกก่อนเลยว่าไม่ผิดหวังเลยที่ตัดสินใจเลือกเข้าชมรมนี้
                  ชมรมนี้มันไม่ใช่แค่ชมรมแต่เหมือนเป็นครอบครัวมากกว่า
                  ปีที่ผ่านมามีความสุขตลอดเลยทุกครั้งที่เข้าชมรม เพื่อน ๆ ทุกคนก็น่ารักมาก ๆ
                  มีปัญหาอะไรก็ช่วยกันตลอด อีกอย่างคือ ชมรมนี้ยังมีกิจกรรมให้ทำอยู่ตลอด ไม่ว่าจะเป็น
                  Workshop ล้างฟิล์มเอง หรือ Workshop สอนถ่ายภาพนอกสถานที่
                  โดยปกติแล้วทุกครั้งที่เข้าชมรมครูจะไม่เข้าด้วย ส่วนใหญ่จะเป็นพี่ ๆ น้อง ๆ คุยงาน
                  จัดการงานกันเองตลอดแต่จะมีงานที่ครูจะสั่งไว้ต้นเทอม งานชิว ๆ ถ้าใครชอบถ่ายรูป
                  อย่าลืมนึกถึงชมรมถ่ายภาพของพวกเราด้วยนะค้าบ โดย เลียม TU82 (ig : _liamorourke)
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
