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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมดนตรีสากล</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 50 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/triamudommusicclub(tumc)_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              ชมรมเราได้มีโอกาสไปเล่นดนตรีในงานพื้นที่แห่งโอกาส ที่ Lido Connect
              ซึ่งเป็นงานสาธารณะที่เปิดให้บุคคลภายนอกได้มาชม
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ในคาบชมรม ทุกคนในชมรมจะได้ฝึกประสบการณ์เกี่ยวกับการเล่นดนตรี
              ไม่ว่าจะเป็นการขึ้นเวทีคอนเสิร์ตต่าง ๆ หรือการเล่นดนตรีกันเองในชมรม
              ทุกคาบชมรมเราจะมีการรวมกันเล่นเป็นวง
              โดยวงในแต่ละครั้งก็จะมีมาชิกไม่ซ้ำกันทำให้สมาชิกได้รู้จักกัน
              ได้ทำงานร่วมกับคนที่อาจจะไม่รู้จักกันมาก่อนและอีกจุดเด่นหนึ่งของชมรมดนตรีสากลก็คือ
              เราทุกคนในชมรมจะสนิทกันมาก เพราะได้ทำงานร่วมกัน และยังเป็นกลุ่มคนที่มีความชอบเหมือนกัน
              ทำให้นอกจากจะได้พัฒนาฝีมือด้านดนตรีแล้ว ก็ยังได้มิตรภาพที่ดีกลับไปด้วย
              สมาชิกจะแบ่งเป็น 2 พาร์ท คือวงแบนด์และวงแชมเบอร์ ซึ่งทั้ง 2
              พาร์ทนี้ก็จะมีงานและแนวเพลงที่แตกต่างกันออกไป
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudommusicclub(tumc)_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1\. ได้พัฒนาฝีมือด้านดนตรีของตน 2\. มีกิจกรรมให้ได้แสดงฝีมืออยู่บ่อยครั้ง
              ทำให้ได้รับประสบการณ์ 3\. ได้รู้จักกลุ่มคนใหม่ ๆ ทั้งเพื่อน รุ่นพี่ รุ่นน้อง
              ที่มีความชอบเหมือนกันกับเรา 4\. ได้รู้จักการทำงานร่วมกับผู้อื่นและความสามัคคี
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม แสดงในงานกีฬาประเพณี ต.อ.-ต.ท. และสามารถดูเพิ่มเติมได้ที่ Youtube channel :
              Triam Udom Music Club
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/triamudommusicclub(tumc)_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ลูกไม้</h1>
                  <span className="text-xs">เตรียมอุดม 80</span>
                  <span className="w-max text-xs">IG: yanisavara</span>
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
                  หรือสมาชิกเก่า ชมรมดนตรีสากลเป็นชมรมที่เรียกได้ว่าอบอุ่นมาก ๆ แล้วก็เป็นเหมือน
                  Comfort Zone ของเราตลอด 3 ปีในเตรียมอุดมเลย เป็นชมรมที่ทำให้เราได้เจอเพื่อนน่ารัก
                  ๆ รุ่นพี่ รุ่นน้องที่ก็สนิทกันผ่านงานนะ
                  แต่พอนอกเหนือจากงานแล้วก็ถือว่าเป็นเพื่อนที่ดี เป็นคนรู้จักที่ดีมาก ๆ ในชีวิตเลย
                  และนอกจากเป็นชมรมที่ทำให้ได้เจอคนน่ารัก ๆ คนที่ดีแล้ว ก็ยังทำให้ได้เจอคนเก่ง ๆ
                  เยอะมาก ๆ ทุกคนในชมรมเก่งมาก ๆ
                  ถ้าพูดในด้านดนตรีก็คือการที่เราได้เจอคนที่หลากหลายแล้วก็มีความสามารถเนี่ย
                  มันก็ช่วยผลักดันเราเองแล้วเราก็ได้เรียนรู้จากการทำงานกับพวกเขา
                  ได้ลองผิดลองถูกด้วยกัน มันก็เลยทำให้เราเก่งขึ้นและทำให้เราอยากพัฒนาตนเองมากขึ้น
                  ชมรมดนตรีสากลทำให้เราได้ลองทำอะไรหลาย ๆ อย่างที่เราไม่เคยทำ
                  ไม่ว่าจะเป็นการได้เล่นดนตรีกับเพื่อน ๆ การได้ไปแข่งขันในที่ต่าง ๆ การได้ทำโชว์
                  ทำชุดการแสดงต่าง ๆ ได้ฝึก Skill ของตัวเอง และนอกจากงานด้านดนตรีโดยตรงแล้ว
                  มันยังช่วยเราในการทำงานเป็นทีม ฝึกการตัดสินใจ ติดต่อกับชมรมอื่น ๆ ที่ทำงานร่วมกัน
                  ติดต่อกับครู อาจารย์ สถานที่ ห้องซ้อมที่ต่าง ๆ อะไรประมาณนี้ค่ะ
                  และถ้าพูดถึงในเรื่องของสถานที่หรืออุปกรณ์ ชมรมก็มีค่อนข้างพร้อม และเพื่อน ๆ
                  ทุกคนน่ารัก เวลาที่ทุกคนอยากยืมเครื่องดนตรีหรืออยากจะให้สอน
                  อยากทำอะไรก็สามารถแลกเปลี่ยนกันได้เต็มที่เลย
                  และโรงเรียนก็ค่อยข้างสนับสนุนเราในด้านของอุปกรณ์ได้ดีเลยทีเดียว โดย ลูกไม้ TU80
                  (IG : yanisavara)
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
                    src="/assets/clubs/triamudommusicclub(tumc)_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เจ</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: ___jyaaa</span>
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
                  สวัสดีครับ พี่ชื่อเจนะครับ เป็นประธานชมรมในปีการศึกษา 2563 อยู่พาร์ทร้องครับผม
                  สำหรับชมรมของเราก็เป็นชมรมสำหรับคนชอบดนตรี
                  โดยส่วนใหญ่พวกเราก็จะได้เล่นคอนเสิร์ตตามงานต่าง ๆ เช่น งาน Open House
                  งานกีฬาประเพณี ต.อ.-ตท. ฯลฯ สำหรับพี่นะครับ พี่เข้าชมรมมาตั้งแต่ ม.4
                  ด้วยความที่เป็นคนชอบร้องเพลงอยู่แล้ว ก็เลยอยากจะเข้าชมรมที่เกี่ยวกับดนตรี
                  จึงทำให้ได้มาเข้าชมรมนี้ และเมื่อได้เข้ามาแล้วก็ได้มีโอกาสเล่นดนตรีจริง ๆ
                  และยังได้ขึ้นแสดงในงานต่าง ๆ เป็นชมรมที่พร้อมจะผลักดันสมาชิกในชมรมให้ได้ลองขึ้น
                  เล่นในงานใหญ่ ๆ ในปีที่พี่เข้ามา ก็มีงานให้เล่นมากมาย
                  มันเลยทำให้เราได้มีโอกาสเข้าไปทำงานร่วมกับชมรม แต่ในตอนนั้นก็ไม่ได้รู้จักใคร
                  และพอยิ่งได้ทำงานมากขึ้น ก็ได้รู้จักกับคนเพิ่มขึ้น
                  จนในที่สุดคนทั้งชมรมก็สนิทสนมกัน และที่พี่ประทับใจคือ เราไม่ได้สนิทกัน
                  คุยกันแค่ในแง่ของดนตรี แต่นอกเหนือจากชมรม เราก็ยังเป็นเพื่อนสนิทกัน
                  คุยกันปรึกษากันได้ทุกเรื่อง โดย เจ TU82 (IG : ___jyaaa)
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
                    src="/assets/clubs/triamudommusicclub(tumc)_profile_3.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">โจได๋</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: jodaisrnn__</span>
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
                  สวัสดีครับ พี่ชื่อโจได๋นะครับ เป็นมือกลองชมรมดนตรีสากล
                  ชมรมดนตรีสากลเป็นชมรมที่ทุกคนเฟรนด์ลี่กันมากเลยครับ เป็นชมรมที่สนุกมาก
                  แล้วก็มีความสุขทุกครั้งที่ได้เข้าชมรมเลย พี่เป็นคนชอบเล่นดนตรีอยู่แล้ว
                  ก็เลยตัดสินใจมาเข้าชมรมนี้ ชมรมนี้เป็นชมรมที่เปิดประสบการณ์หลาย ๆ
                  ด้านให้พี่เลยครับ ไม่ว่าจะเป็นการเล่นดนตรีบนเวทีใหญ่ ๆ งานใหญ่ ๆ
                  การทำงานร่วมกับเพื่อน ๆ คนอื่น
                  แล้วก็การพัฒนาทักษะด้านดนตรีของตัวเองให้ดีขึ้นจากคำแนะนำของเพื่อน ๆ พี่ ๆ
                  ในชมรมครับ เวลาซ้อมทุกคนจะสนุกสนานกันมาก ๆ เพราะว่าเราสนิทกันมาก
                  บางครั้งก็เลยมัวแต่ปล่อยมุกจนบางทีก็ลืมเรื่องซ้อมไปเลย 55555
                  พี่คิดว่าการเข้ามาในชมรมนี้เป็นประสบการณ์ที่ดีที่สุดในเตรียมอุดมของพี่เลย
                  ทำให้ชีวิตในเตรียมของพี่ไม่น่าเบื่อ และคุ้มค่ามาก ๆ โดย โจได๋ TU82 (IG :
                  jodaisrnn__)
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
