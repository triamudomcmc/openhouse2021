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
              ชมรมภาพยนตร์สั้นเเละสื่อโทรทัศน์
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 60 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/triamudomsuksashortfilmclub_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              ทัศนศึกษาประจำปี2019
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมภาพยนตร์สั้นและสื่อโทรทัศน์ จัดทำขึ้นเพื่อให้สมาชิกในชมรมได้มีโอกาสมาพบปะ
              แลกเปลี่ยนความรู้ ความเข้าใจ เพื่อพัฒนาและแสดงศักยภาพในการทำภาพยนตร์สั้น
              พร้อมทั้งได้สร้างสรรค์ผลงานร่วมกัน
              โดยโครงการหลักที่จัดคือโครงการการจัดทำภาพยนตร์สั้นเพื่อนำไปฉายบนหอประชุมใหญ่ จำนวน 4
              เรื่อง ในงาน Triam Udom Open House ประจำปีการศึกษานั้น ๆ
              ทำให้ผู้ที่สนใจทางด้านภาพยนตร์สั้นสามารถแสดงศักยภาพออกมาได้เต็มที่
              และก่อนที่จะสร้างภาพยนตร์ของกลุ่มตัวเอง จะมีการ Workshop การทำงาน เพื่อให้มีความรู้
              ความเข้าใจ และมีทักษะเกี่ยวกับการออกแบบภาพเคลื่อนไหว การเขียนเค้าโครงเรื่อง
              และสามารถทำงานออกมาได้อย่างมีประสิทธิภาพ
              โดยมีสมาชิกชมรมเก่าคอยดูแลและให้คำแนะนำกับสมาชิกใหม่ พร้อมกับมีการทำงานร่วมกัน
              นอกจากนี้ ยังมีค่ายจัดในเวลาสั้น ๆ เพื่อให้สมาชิกได้ฝึกทำงานจริงอีกด้วย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudomsuksashortfilmclub_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ได้รับประสบการณ์การทำงานร่วมกัน ได้พัฒนาทักษะในถ่ายทำภาพยนตร์
              ได้ภาพยนตร์สั้นที่มีคุณภาพดีเป็นผลงานของสมาชิกในชมรมภาพยนตร์สั้นและสื่อโทรทัศน์
              ได้ร่วมสร้างสรรค์ผลงานเผยแพร่บนโซเชียลเน็ตเวิร์ค
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม ภาพยนตร์สั้นของปีก่อน ๆ สามารถดูได้ที่ YouTube : TUSF
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/triamudomsuksashortfilmclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">แจน</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: jannnese</span>
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
                  หรือสมาชิกเก่า เราคิดว่าส่วนที่ทำให้การใช้ชีวิต 3
                  ปีในเตรียมคุ้มค่าที่สุดคือการที่เราได้มีโอกาสอยู่ชมรมหนังสั้น
                  จากชื่อชมรมเราคิดว่าทุกคนน่าจะพอเดาได้ ใช่ค่ะ
                  ชมรมของเราได้รวบรวมคนที่มีความสนใจในการทำหนังแล้วก็สื่อโทรทัศน์ต่าง ๆ
                  กิจกรรมหลักจะเป็นการทำหนังopen house อื่น ๆ ก็เช่น Workshop ค่ายหนังสั้น
                  ซึ่งก็จะป็นส่วนที่ทุกคนในชมรมมีโอกาสแลกเปลี่ยนความรู้ ประสบการณ์ทำหนังตั้งแต่
                  การเขียนบท กำกับ ถ่ายทำ และตัดต่อ ก่อนที่จะได้ลงสนามจริงก็คือ ออกกอง
                  สำหรับเราแล้วการได้รู้จักคนในชมรมไม่ว่าจะเป็นคุณครู พี่ ๆ เพื่อน ๆ หรือน้อง ๆ
                  ที่มีความสนใจในด้านนี้ ได้เปิดประสบการณ์ใหม่ ๆ เกี่ยวกับหนังมากมาย
                  เรามีความสุขมากในการได้รู้จัก ได้ทำงานกับคนในชมรม การทำงานแม้ว่าจะมีอุปสรรคต่าง ๆ
                  แต่เมื่อเราผ่านมันไปได้ สิ่งที่เราได้รับกลับมามันไม่ใช่แค่ผลงานที่เราภูมิใจ
                  เรายังได้ Bond ที่ไม่รู้ว่าจะหาแบบนี้ที่ไหนได้อีกจากคนในกอง
                  ซึ่งไม่ใช่ว่าตลอดเวลาการอยู่หนังสั้นจะได้ออกกองกองเดียวนะ ยังมีโอกาสอีกเยอะมากกกกก
                  พี่ ๆ ในชมรมก็จะคอยส่งงานเสนอเข้าประกวดต่าง ๆ มาให้
                  หรือจะเป็นโปรเจคที่โคกับชมรมอื่นก็มี ที่พูดมาทั้งหมดนี้ฟังดูว่าต้องทำงานหนักมาก
                  แต่หนักแค่ไหนเราก็บอกไม่ได้ อยากรู้ต้องลอง อิอิ
                  สุดท้ายนี้เราก็ขอฝากติดตามรับชมหนังสั้น Open House และผลงานอื่น ๆ ใน TUSF ด้วยนะคะ
                  &lt;3 โดย แจน TU81 IG : jannnese
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
                    src="/assets/clubs/triamudomsuksashortfilmclub_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">พอช</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: sspkrt</span>
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
                  ชมรมหนังสั้นและสื่อโทรทัศน์หรือที่พวกเราเรียกกันว่าชมรมหนังสั้น หรือ TUSF
                  เป็นชมรมกิจกรรมที่เปิดโอกาสให้นักเรียนที่ชื่นชอบและสนใจในการทำหนังสั้นได้มาเจอกัน
                  รวมตัวกันเพื่อทำหนังให้ทุกคนได้ดูกันทุกปี ตอนเข้ามาชมรมนี้แรก ๆ
                  ก็กังวลนะว่าจะเข้ากับเพื่อน ๆ ได้รึเปล่า หนังที่เราทำออกมามันจะดีพอไหม
                  แต่พออยู่ไปเรื่อย ๆ ก็เริ่มสนิทกับเพื่อน ๆ ในชมรมมากขึ้น เพื่อน ๆ
                  ทุกคนเฟรนลี่มากจนแบบได้เพื่อนเพิ่มขึ้นเยอะมาก ๆ เลยแหละ
                  อาจารย์ที่ปรึกษาชมรมรับฟังความคิดเห็นของนักเรียนในชมรมทุกเรื่องเลย พี่ ๆ
                  ก็จะสอนเกี่ยวกับหน้าที่ต่าง ๆ ในชมรมเลย (ผู้กำกับ, คนเขียนบท, ตากล้อง, คนตัดต่อ)
                  ทั้งทฤษฎีและปฏิบัติ เราก็จะมีนัด Workshop กัน ได้แบ่งกลุ่มถ่ายหนังกันจริง ๆ เลย
                  ถือเป็นการลองทำงานก่อนจะถ่ายหนังสั้นที่สำคัญที่สุดในชมรมเราก็คือหนังสั้น Open
                  House ซึ่งงานนี้เป็นงานที่พวกเราตั้งใจกันทำมาก ๆๆ เลยแหละ (อย่าลืมไปดูน้าา)
                  แล้วชมรมเราก็จะมีไปทัศนศึกษาประจำปีด้วยย เฉพาะคนที่อยู่ชมรมนี้เท่านั้น
                  เราก็จะมาโหวตกันว่าอยากไปที่ไหนกัน เช่น สถานีโทรทัศน์, กองถ่ายหนังแบบจริง ๆ
                  เลยว่าเค้าทำงานกันยังไง เป็นประสบการณ์ที่หายากมาก ๆ
                  ถ้าอ่านถึงตรงนี้แล้วคิดว่าชมรมนี้เหมาะกับน้อง ๆ ก็อย่าลืมมาสมัครออดิชั่นกันนะ :)
                  โดย พอช TU82 IG : sspkrt
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
