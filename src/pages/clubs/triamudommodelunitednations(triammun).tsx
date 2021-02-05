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
              ชมรมภาษาอังกฤษ (Triam Udom Model United Nations)
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 30 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/triamudommodelunitednations(triammun)_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              TriamMUNx 2020 ณ โรงเรียนเตรียมอุดมศึกษา
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              Model United Nations คือการจำลองการประชุมเพื่อแก้ไขสถานการณ์หรือวิกฤตต่าง ๆ
              ตามที่ถูกกำหนดขึ้น โดยเฉพาะการประชุมของสหประชาชาติ (United Nations)
              ซึ่งเราจะได้รับบทเป็นผู้แทนประเทศ เข้าร่วมประชุมกับผู้แทนจากประเทศอื่น ๆ
              และใช้ความร่วมมือในระดับนานาชาติแก้ไขปัญหาที่เกิดขึ้น ไม่ว่าจะเป็นด้านเศรษฐกิจ สังคม
              การเมือง ฯลฯ และนอกจากนี้ยังมีการประชุมที่จำลองมาจากเหตุการณ์จริงในประวัติศาสตร์
              (Historical) รวมไปเหตุการณ์สมมติจากนวนิยาย (Fiction) และฉากอนาคต (Future scenario)
              เราอาจจะได้สวมบทบาทเป็นผู้นำประเทศในสมัยสงครามโลกครั้งที่ 2
              หรือแม้กระทั่งเป็นสมาชิกกระทรวงเวทมนตร์อย่างในนวนิยายเรื่องแฮร์รี่ พอตเตอร์
              โดยกิจกรรมในคาบชมรมจะมีการจัดการประชุมภายใต้หัวข้อที่กำหนดขึ้น
              และมีการแลกเปลี่ยนข้อมูลข่าวสารเกี่ยวกับสถานการณ์ทางการเมืองทั้งในและนอกประเทศอย่างสม่ำเสมอ
              เพื่อร่วมกันฝึกฝนทักษะในการวิเคราะห์ วิจารณ์ และการแสดงความคิดเห็นในหัวข้อต่าง ๆ
              ทางชมรมมีเว็บไซต์ triammun.club ที่จะทำให้น้อง ๆ ได้เข้าใจเกี่ยวกับชมรม Triamudom
              Model United Nations มากขึ้น ผ่านกิจกรรมสนุก ๆ และข้อมูลความรู้ต่าง ๆ อีกมากมาย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudommodelunitednations(triammun)_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1\. ฝึกทักษะภาษาอังกฤษ ทั้งการฟัง พูด อ่าน และเขียน 2\. ฝึกความกล้าแสดงออก
              และการทำงานร่วมกับผู้อื่น 3\. ฝึกการคิดเชิงวิเคราะห์ 4\. เท่าทันเหตุการณ์
              รับรู้เรื่องราวที่เคยเกิดขึ้นทั้งในอดีตและปัจจุบัน 5\.
              ได้พบเจอเพื่อนใหม่ทั้งในโรงเรียนและนอกโรงเรียน
              และมีโอกาสได้รู้จักกับเพื่อนที่เป็นชาวต่างชาติ
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม 1\. WISMUN IV และ WISMUN V ณ Wells International School กรุงเทพฯ 2\. THAIMUN
              VI ณ Concordian International School กรุงเทพฯ 3\. MUIDS MUN II ณ Mahidol University
              International Demonstration School จ.นครปฐม 4\. EISMUN XII ณ Ekamai International
              School กรุงเทพฯ 5\. ICMUN 2020 จัดโดย International Circuit Jakarta, Indonesia
              ผ่านระบบออนไลน์ 6\. SMIS MUN 2020 จัดโดย Sancta Maria International School Hyderabad,
              India ผ่านระบบออนไลน์ 7\. WRD MUN 2020 จัดโดย MUN Refugee Challenge ผ่านระบบออนไลน์
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/triamudommodelunitednations(triammun)_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">มีน</h1>
                  <span className="text-xs">เตรียมอุดม 80</span>
                  <span className="w-max text-xs">IG: facebookpaphonsusikakosol</span>
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
                  หรือสมาชิกเก่า 1 ผมเป็นสมาชิกรุ่นแรกของ TriamMUN และต่อมาได้เป็นประธานในปี
                  2019-2020 ชมรมนี้ทำให้ผมและเพื่อน ๆ ได้ฝึกทักษะภาษาอังกฤษไปพร้อม ๆ
                  กับได้ความรู้เรื่องประวัติศาสตร์และการเมืองระหว่างประเทศในเวลาเดียวกัน
                  และยังทำให้ผมได้โอกาสเข้าร่วม conference ระดับนานาชาติซึ่งมีผู้เข้าร่วมจากทั่วโลก
                  TriamMUN ยังเป็นเหมือน community ของคนที่สนใจเรื่องการเมืองและเรื่องต่างประเทศ
                  คาบชมรมทุกคาบคึกคักและเต็มไปด้วยการ discuss ประเด็นและเรื่องราวต่าง ๆ
                  ที่เกิดขึ้นทั่วโลก ผมจึงมองว่า TriamMUN
                  เป็นชมรมที่สมบูรณ์แบบสำหรับทุกคนที่สนใจเรื่องเหล่านี้ และขอแนะนำให้ทุกคนมาลอง
                  audition ชมรมนี้ดูครับ "My Triam Udom life is incomplete without TriamMUN" โดย มีน
                  TU80 (Facebook : Paphon Susikakosol)
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
                    src="/assets/clubs/triamudommodelunitednations(triammun)_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">มาร์วี่</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: marvey_ppp</span>
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
                  รีวิวจากรุ่นพี่หรือสมาชิกเก่าหรือสมาชิกเก่า 2 สำหรับใครที่เพิ่งเคยรู้จัก MUN
                  ครั้งแรกอาจจะยังไม่ค่อยเข้าใจว่ามันคืออะไร หรือคิดว่าคงจะเป็นอะไรที่เครียดมากแน่ ๆ
                  ตอนที่เราได้ยินชื่อชมรมนี้ครั้งแรกก็คิดแบบนั้นเหมือนกัน แต่ความจริงแล้ว MUN
                  เป็นอะไรที่คุ้มค่าแก่การลองมากกกก
                  นึกดูว่าชีวิตนี้จะมีโอกาสมากเท่าไหนกันเชียวที่จะได้สวมบทบาทเป็น “นักการทูต”
                  แบบมืออาชีพ ได้ลองเจรจาต่อรองกับประเทศมหาอำนาจอย่างโปร
                  หรือถ้าใครที่ได้ดูรูปของชมรมเราแล้วก็คงเห็นว่าพวกเราใส่ชุดสูทเข้าประชุมกันด้วย
                  ถือว่าเป็น Gimmick เล็ก ๆ น้อย ๆ ของชมรมเราและการทำ MUN
                  อีกอย่างนึงที่น่าสนใจคือเราจะได้โอกาสไปร่วมประชุมสหประชาชาติจำลองกับเพื่อนต่างโรงเรียนอีกด้วย
                  ซึ่งในประเทศไทยก็มักจะเป็นเพื่อนโรงเรียนนานาชาติที่นิยมทำ MUN กัน
                  ในบางครั้งก็อาจจะมีเพื่อนต่างชาติมาร่วมประชุม
                  หรือถ้าโชคดีก็มีโอกาสไปร่วมประชุมที่ต่างประเทศ (ว้าว~)
                  อย่างเราเองก็เคยไปร่วมประชุมที่หลายโรงเรียนในไทย จริง ๆ
                  แล้วน่าจะได้ไปร่วมที่อินเดียกับอินโดนีเซียด้วย แต่ว่าติดสถานการณ์ COVID
                  เลยต้องประชุมแบบออนไลน์ไปก่อน การไปร่วมประชุมแต่ละครั้ง เขาก็จะมอบบทบาทประเทศให้
                  อย่างเราก็เคยเป็นนักการทูตจากตุรกี รัสเซีย เยอรมนี ไลบีเรีย ฯลฯ
                  ทำให้การไปร่วมแต่ละครั้งแตกต่างกันโดยสิ้นเชิง เพราะเราต้อง research
                  เกี่ยวกับบทประเทศที่ได้รับมอบหมายให้ละเอียดเพื่อมาสร้างจุดยืนให้ตัวเองในที่ประชุม
                  เวลาเขาขอความเห็นเราก็จะได้ตอบให้ถูก เพราะเราต้องให้ความเห็นตามจุดยืนประเทศนั้น ๆ
                  ไม่ใช่ตามใจเรา แม้ว่าจะขัดใจแค่ไหนก็ตาม (!!) นี่ก็เป็นเสน่ห์อีกอย่างของ MUN
                  เหมือนกัน อ่านมาถึงตรงนี้ หลายคนคงคิดว่าชมรมนี้ต้องซีเรียส ต้องน่ากลัวมากแน่ ๆ
                  ไม่จริงเลยครับ บรรยากาศของชมรมเราถือว่าอบอุ่นมาก ๆ เหมือนอยู่กันเป็นครอบครัว
                  บางครั้งก็มีมุมที่เล่นกันบ้าง มีมุมฮาบ้าง แล้วก็ได้ฝึกทักษะอีกหลายอย่างพร้อม ๆ กัน
                  เรียกได้ว่าลงทุนครั้งเดียวได้ประสบการณ์และความทรงจำดี ๆ กลับมาเยอะเลย
                  หลังจากที่อยู่ชมรมนี้มาสามปี พูดได้เลยว่ามองโลกเปลี่ยนไปเยอะเลยล่ะ สู้ ๆ กับ TU 84
                  85 86 ++ นะครับ แล้วเจอกันที่ TriamMUN !! โดย มาร์วี่ TU81 (ig:marvey_ppp)
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
                    src="/assets/clubs/triamudommodelunitednations(triammun)_profile_4.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ป๊อป</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: papa.oscar.papa</span>
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
                  รีวิวจากรุ่นพี่หรือสมาชิกเก่าหรือสมาชิกเก่า 3 ผมเชื่อว่า 80%
                  ของทุกคนที่กำลังอ่านข้อความของผมตอนนี้ไม่รู้จัก MUN
                  และหลังจากนี้แล้วทุกคนที่อ่านจะได้รู้จัก MUN กัน MUN ย่อมาจาก Model United Nations
                  ซึ่งแปลว่า สหประชาชาติจำลองแล้ว MUN ทำอะไรกันบ้าง?
                  ชมรมของเรามีการเรียนรู้เกี่ยวกับการประชุมสหประชาชาติ และจำลองการประชุมสหประชาชาติ
                  MUN ยากไหม ? ไม่ยากเลยครับ ขอแค่มีความสนใจ และความตั้งใจก็พอ
                  พอเราได้เรียนรู้ถึงหลักการต่าง ๆ แล้วเราจะเข้าใจเลย ผมขอพูดถึงตัวของชมรมด้วยนะครับ
                  ตอนแรกผมก็ไม่รู้จักว่า MUN คืออะไร แต่พอเข้าเตรียมอุดมฯ มาแล้ว ก็ได้มาเห็นชมรม
                  TriamMUN ผมเกิดความสนใจขึ้นมาทันทีด้วยความที่สนใจในด้านนี้อยู่แล้ว ชมรมเรามีการ
                  audition หรือการคัดคนเพื่อเข้าชมรมนั่นเอง ขอแค่พกความมั่นใจ
                  กับความชอบมาก็พอแล้วครับ โดยแต่ละปีชมรมจะจัดงาน TriamMUNx
                  ซึ่งเป็นงานจัดประชุมสหประชาชาติจำลองภายในโรงเรียน
                  เราจะเปิดให้คนนอกชมรมเข้ามาร่วมกิจกรรมด้วยนะครับ โดยจะมี workshop
                  ให้สำหรับคนที่จะมาเข้าร่วมแต่ไม่รู้ว่าต้องทำตัวอย่างไร
                  ประสบการณ์ของผมกับชมรมนี้ดีมากครับ ผมได้เรียนรู้มากมาย
                  และนอกจากนั้นก็ได้เพื่อนด้วย สำหรับใครที่คิดว่าชมรมนี้มีแต่คน nerd
                  ผมขอบอกเลยว่าไม่เป็นความจริงครับ สำหรับใครที่อยากรู้ข้อมูลของชมรมเพิ่มเติม
                  ผมขอเชิญชวนเข้าไปในเว็บไซต์ https://triammun.club ได้เลยครับ Chairing is caring !
                  โดย ป๊อป TU82 (ig:papa.oscar.papa)
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
