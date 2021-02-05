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
              ชมรมภาษาอังกฤษ (English Debate)
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 40 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/englishdebate_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การแข่งขัน EUTH ครั้งที่ 14
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ภายในชมรมโต้วาทีภาษาอังกฤษ หรือ English Debate Club เรียกสั้น ๆ ว่า ชมรมดีเบต
              นักเรียนทุกคนจะได้เรียนรู้เกี่ยวกับการโต้วาทีเป็นภาษาอังกฤษ โดยใช้รูปแบบสากล
              ในการดีเบตหนึ่งครั้ง สมาชิกชมรมจะถูกแบ่งออกเป็นสองทีม ทีมละ 3 คน และได้รับญัตติ
              (Motion) หรือหัวข้อในการดีเบตครั้งนั้น ๆ เพื่อนำไประดมความคิด
              ก่อนที่จะมาร่วมดีเบตกันภายใต้หัวข้อดังกล่าว หลังจากนั้นจึงได้รับคำติชม (Feedback)
              จากรุ่นพี่หลาย ๆ รุ่นที่ผ่านมาและครูมืออาชีพที่มีประสบการณ์ในการดีเบต
              นักเรียนในชมรมจะได้เรียนรู้การดีเบตในหัวข้อที่หลากหลาย ไม่ว่าจะเป็นเศรษฐกิจ
              สิทธิของผู้หญิง สิ่งแวดล้อม กระบวนการยุติธรรม (Criminal Justice System)
              หรือการศึกษาในคาบชมรมและการนัดซ้อมเพิ่มเติมนอกเวลา นอกจากนี้ยังมีชั่วโมงเลคเชอร์
              ที่จะทำให้นักเรียนในชมรมได้ความรู้เกี่ยวกับข่าวสารที่เป็นที่ถกเถียงกันในปัจจุบันอีกด้วย
              สมาชิกในชมรมได้จะโอกาสไปแข่งขันในรายการต่าง ๆ ไม่ว่าจะเป็นการแข่งขันภายในชมรม
              (Internal Tournament), การแข่งขันกับโรงเรียนอื่น (Institutional Spar),
              การแข่งขันภายนอก และในระดับประเทศ เช่น THSDC, EUTH, TDO, TWSDC และ OBEC
              รวมถึงได้รับโอกาสที่จะเข้าร่วมการแข่งขันระดับชาติอย่าง WSDC และรายการอื่น ๆ อีกมากมาย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/englishdebate_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                Internal Tournament
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              สมาชิกชมรมนอกจากจะได้เพิ่มพูนความรู้รอบตัวเกี่ยวกับสังคมปัจจุบันแล้ว
              ยังได้พัฒนาทักษะในการใช้ภาษาอังกฤษ การพูดในที่สาธารณะ (Public Speaking)
              ความมั่นใจในตัวเอง การแก้ปัญหาเฉพาะหน้า การทำงานเป็นทีม
              การคิดวิเคราะห์อย่างเป็นระบบและมีเหตุผล
              และสำคัญที่สุดคือจะได้พบกับมิตรภาพระหว่างเพื่อน ๆ น้อง ๆ และพี่ ๆ
              ในชมรมและนอกชมรมอีกจำนวนมาก
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/englishdebate_image_3.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">Club Farewell</h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม ชมรมดีเบตได้จัดการแข่งขัน Triam Challenge ใน Triamudom Open House,
              การแข่งขันดีเบตระดับมัธยมศึกษา หรือ THSDC และการแข่งขันดีเบตออนไลน์ หรือ TODC
              ผลงานจากการแข่งขันระดับประเทศจากสมาชิกในชมรมอีกมากมาย เช่น 12th EUTH and 14th EUTH
              Grand Champion, OBEC 2019 Grand Champion และได้เป็นตัวแทน Thailand National Team
              Debater ไปแข่งขันใน WSDC 2019 และ AWSDC 2019
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/englishdebate_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">แองเจิ้ล</h1>
                  <span className="text-xs">เตรียมอุดม (Angel)</span>
                  <span className="w-max text-xs">IG: tu78angelllyc</span>
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
                  หรือสมาชิกเก่า ถ้าถามว่า triam debate ให้อะไรเราบ้าง
                  อย่างแรกเลยก็คือสอนให้เราคิดวิเคราะห์อย่างเป็นระบบ และพูดให้มี impact
                  โน้มน้าวคนฟัง
                  ทำให้เอาไปต่อยอดได้ในการแสดงความคิดเห็นอย่างมีเหตุผลภายใต้กรอบของการเคารพความคิดเห็นคนอื่น
                  และเป็น transferable skills ที่เป็นประโยชน์มากสำหรับเราตอนสอบชิงทุนคิง
                  ทั้งในรอบข้อเขียนและสัมภาษณ์
                  ถามว่านอกเหนือจากเรื่องวิชาการแล้วชมรมจะให้อะไรน้องบ้าง
                  สำหรับคนที่ไม่เคยดีเบทมาก่อน ก็จะได้ฝึกท้าทายตัวเอง เปลี่ยนตัวเองเป็นคนที่มี
                  growth mindset จะได้รู้จักเพื่อนใหม่ ๆ ที่เป็นเด็ก EP หรือเด็กอินเตอร์ใน debate
                  community
                  ที่สำคัญคือความน่ารักของรุ่นพี่และเวลาที่ใช้กับทีมเมตจะทำให้รู้สึกเหมือนมีครอบครัวอีกครอบครัวนึงในเตรียมฯ
                  สำหรับคนที่ยังไม่แน่ใจว่าจะลองไปออดิชั่นดีมั้ย ชมรมนี้จะเหมาะกับเรามั้ย
                  หรือยังกล้า ๆ กลัว ๆ อยู่ เราก็ขอแนะนำให้มาลองออดิชั่นดูก่อน จะได้ get a taste of
                  what debating is like หรืออย่างน้อยก็ได้ get out of your comfort zone who knows,
                  the next gen of triam debaters might be you :-) โดย แองเจิ้ล (Angel) TU78 ig:
                  angelllyc
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
                    src="/assets/clubs/englishdebate_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">บลูเจ</h1>
                  <span className="text-xs">เตรียมอุดม (Blue-j)</span>
                  <span className="w-max text-xs">IG: tu79fbasasakornpantbluejthedude</span>
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
                  Triam Debate เป็นชมรมโต้สาระเวทีภาษาอังกฤษนะ เป็นชมรมที่สนุกมาก ๆ
                  เหมาะกับคนที่ชอบคิดวิเคราะห์ ช่วยฝึก critical thinking on the spot ละก็ public
                  speaking ด้วย เรารู้สึกว่าชมรมนี้เป็นชมรมที่ช่วยให้เราโตขึ้นมาก ๆ
                  ช่วยให้ฉลาดขึ้นเป็นกรด
                  เพราะว่าเราฝึกซ้อมมีโค้ชไปแข่งทั้งในประเทศละก็ต่างประเทศเป็น challenge
                  ให้ตัวเองสูงขึ้นไปเรื่อย ๆ และที่สำคัญที่สุดคือเราได้อยู่รอบ ๆ
                  คนที่ฉลาดและก็ตั้งใจมาก ๆ ซึ่งเราคิดว่า environment
                  เป็นสิ่งสำคัญมากสำหรับการเจริญเติบโต
                  เป็นช่วงเวลาในชีวิตที่สนุกที่สุดแล้วถึงแม้ว่าจะมี commitment ที่ค่อนข้างสูงมาก
                  ละก็เป็นชมรมที่ค่อนข้าง prestigious แบบรุ่นพี่เพื่อน ๆ ได้ทุนคิง ทุนต่าง ๆ
                  ไปเรียนต่างประเทศกันทุกปี ก็ช่วย motivate ให้เราตั้งใจทำให้ได้เหมือนกันน
                  เป็นชมรมที่เรารักมาก ๆ เป็นเหมือนบ้านหลังที่สองเลย ก่อนเข้าเรียนก็มาที่นี่
                  หลังเลิกเรียนก็มาที่นี่ ละยังมีโอกาสต่าง ๆ เต็มไปหมด ทั้งไปแข่ง
                  รู้จักกับเพื่อนโรงเรียนอื่น ๆ คอนเนคกับรุ่นพี่ หรือว่าจัดการแข่งขันเยอะแยะมากมาย !
                  สนุกมาก ๆ ถือว่าเป็น one of the best experiences from triam udom เลยย โดย บลูเจ
                  (Blue-j) TU79 Fb: Asa Sakornpant Ig: bluejthedude
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
                    src="/assets/clubs/englishdebate_profile_3.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">นน</h1>
                  <span className="text-xs">เตรียมอุดม 80</span>
                  <span className="w-max text-xs">IG: nohnnanagara</span>
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
                  ชมรมดีเบตมอบโอกาสมากมายให้เรา ช่วงที่เราอยู่ชมรม
                  เราได้มีโอกาสไปแข่งดีเบตหลายรายการทั้งในและต่างประเทศ
                  ได้มีโอกาสเป็นผู้จัดงานดีเบตระดับชาติ
                  และได้ฝึกฝนทักษะดีเบตตลอดสามปีจนเป็นตัวแทนทีมชาติไทย
                  สังคมของชมรมดีเบตเป็นสังคมที่พิเศษ เราได้เจอรุ่นพี่เก่ง ๆ
                  หลายคนที่สร้างแรงบันดาลใจให้เรา เจอเพื่อน ๆ ที่มอบมิตรภาพอันน่าจดจำ
                  และเจอคุณครูที่พร้อมสนับสนุนเราเสมอ
                  ทั้งหมดนี้ทำให้เรามองว่าช่วงเวลาที่เราอยู่ชมรมนี้เป็นช่วงเวลาที่มีคุณค่ามาก โดย นน
                  TU80 ig: nohnnanagara
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
