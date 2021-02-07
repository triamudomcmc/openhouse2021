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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมวาทศิลป์</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 140 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/watasilp_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การแข่งขันโต้วาทีเวทีวาทะ
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมวาทศิลป์เป็นชมรมที่นักเรียนจะได้ฝึกฝนทักษะในด้านการพูด
              ทั้งทักษะการพูดพิธีกรในงานต่าง ๆ ทักษะการพูดดีเจ การโต้วาทีอย่างมีหลักการ
              ตลอดจนการกล่าวสุนทรพจน์ รวมไปถึงทักษะการสื่อสารในชีวิตประจำวัน
              โดยมีการฝึกฝนภายในคาบชมรมรวมทั้งกิจกรรมต่าง ๆ
              ให้สมาชิกได้เข้าร่วมพัฒนาทักษะและส่งเสริมประสบการณ์
              เพื่อให้ผู้เรียนได้มีทักษะการพูดด้านต่าง ๆ อย่างมีประสิทธิภาพ
              โดยใช้การพูดให้สัมฤทธิ์ผลและรู้จักใช้วาทศิลป์ในการพูด
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/watasilp_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                ค่ายปฐมบทวาทศิลป์
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1\. ได้รับความรู้และประสบการณ์ด้านการพูดในสายต่าง ๆ 2\.
              ส่งเสริมปฏิสัมพันธ์ระหว่างบุคคล 3\. พัฒนาบุคลิกภาพด้านต่าง ๆ เพื่อส่งเสริมการพูด 4\.
              ได้มีโอกาสไปทัศนศึกษานอกสถานที่เพื่อหาความรู้และประสบการณ์ 5\.
              ได้ทักษะในการทำงานร่วมกับผู้อื่น
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/watasilp_image_3.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3"></h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม 1\. กิจกรรมแฟนพันธุ์เนื่องในวันสุนทรภู่ 2\. สุนทรพจน์เนื่องในวันแม่แห่งชาติ
              3\. อ่านฟังเสียงเนื่องในวันภาษาไทย 4\. การประกวดเล่าข่าว 5\. กิจกรรมโต้วาทีเวทีวาทะ
              6\. กิจกรรมการประกวดดีเจในสวน 7\. พิธีกรเนื่องในกิจกรรมวันสืบสานวัฒนธรรมและประเพณีไทย
              8\. พิธีกรเนื่องในกิจกรรม Triam Udom Open House
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/watasilp_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">นิซาอ์</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: nizadans</span>
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
                  หรือสมาชิกเก่า สวัสดี น้อง ๆ ตื่นเต้นและดีใจที่ได้มารีวิวชมรมให้ฟังนะ
                  งั้นขอแนะนำตัวก่อนละกันเนอะ เราชื่อนิซาอ์น้า อยู่ม.5 ศิลป์จีน
                  เป็นสมาชิกชมรมวาทศิลป์ เป็นพิธีกรงาน OPH เป็นผู้ประกาศอินเตอคอม เป็นประชาสัมพันธ์
                  กช. อ่าวงงล่ะสิ กช. คืออะไร (กช.คือคนที่จัดงาน OPH ไง)
                  นั่นแหละคือตอนแรกเราก็เป็นคนนึงในชมรมเลยที่แบบงง ๆ
                  รู้แค่ว่าชมรมเกี่ยวกับการพูดและเราชอบพูด แรก ๆ
                  เรารู้สึกว่าโอ้วไม่นะนี่มันชมรมของคนพูดเก่งแต่เราแค่พูดมาก
                  แต่พอเราได้อยู่กับเพื่อน ๆ พี่ ๆ ได้ซ้อมพิธีกรและได้ทำจริง ๆ
                  มันทำให้รู้เลยว่าชมรมให้อะไรกับเราจริง ๆ เราเปลี่ยนเป็นอีกคนที่การพูดดีขึ้นมาก ๆ
                  และอีกอย่างที่เปลี่ยนไปคือเราได้อีก 1 ครอบครัวเพิ่มและเป็นครอบครัวที่ดีมาก ๆ
                  เป็นอีกสิ่งที่แบบรู้ว่า โอเคนัมเบ้อวัน แต่มันไม่ได้แค่นั้นนี่สิ
                  คือตอนนี้เราเป็นประชาสัมพันธ์ของ กช. มันเป็นหน้าที่ที่สำหรับเรามันยิ่งใหญ่มากนะ
                  คือมันแบบ โอ้วอะไรกันเนี่ย
                  แต่สิ่งหนึ่งที่มองย้อนไปเลยคือถ้าเราไม่ได้เป็นสมาชิกชมรมวาทศิลป์
                  เราคงไม่ได้เป็นนิซาอ์ในวันนี้ นั่นแหละคือรีวิวของเราอาจจะไม่ค่อยมีสาระ
                  แต่แต่อยากจะบอกว่าชมรมนี่มันดีอะ ถ้าแกมีโอกาสได้เป็นน้อง ๆ TU 84
                  เราก็อยากให้แกมาเป็นอีกคนในครอบครัววาทศิลป์เหมือนกันนะ โดย นิซาอ์ TU82 (IG :
                  nizadans)
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
                    src="/assets/clubs/watasilp_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">พิม</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: pimpetchpp</span>
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
                  สวัสดีค่ะ เราชื่อพิมนะคะ เป็น TU82 สายวิทย์ - คณิต อยู่ชมรมวาทศิลป์ค่ะ ! จริง ๆ
                  แล้วจุดเริ่มต้นที่ทำให้เราอยากอยู่ชมรมนี้ ก็มาจากงาน Triam Udom Open House
                  นี่แหละค่ะ แต่เป็นของปี 2019 นะคะ (พอบอกปีแล้วรู้สึกอายุเยอะเลย) 5555555
                  ตอนนั้นเราเป็นน้องม.4 ที่มาเดินดูงานนี่แหละค่ะ ซึ่งซุ้มแรกที่เราเจอ
                  เป็นซุ้มของชมรมวาทศิลป์ ตอนแรกเราก็เดินเข้าไปแบบมึน ๆ
                  แต่กลายเป็นว่าทำไปทำมาเราอยู่ในซุ้มยาวเลยค่ะ พี่ ๆ
                  ในซุ้มทุกคนพูดเก่งกันแล้วก็น่ารักกันมาก ก่อนออกจากซุ้มมาพี่ในซุ้มก็ติดสติกเกอร์
                  “ว่าที่ TU82” ให้ พร้อมกับเดินมาพูดให้กำลังใจกันเต็มที่เลยค่ะ
                  หลังจากวันนั้นเราก็เลยตั้งเป้าไว้ว่าถ้าติดเตรียมฯ จะมา audition ชมรมนี้ดูค่ะ
                  พอได้เข้ามาเป็นส่วนหนึ่งของชมรมวาทศิลป์แล้ว เราก็ไม่ผิดหวังเลยนะคะ
                  เพราะสำหรับเราเอง เรามองว่าความสามารถกับโอกาส เป็นอะไรที่กว่าจะได้มา
                  มันยากทั้งคู่เลย ขาดอย่างใดอย่างหนึ่งไม่ได้ ถ้ามีความสามารถแต่ไม่มีโอกาส
                  ไม่เปิดโอกาสให้ตัวเองก็ไม่มีใครมองเห็นถึงความสามารถของเรา
                  แต่ถ้ามีโอกาสแล้วมีความสามารถไม่มากพอ
                  โอกาสก็จะหลุดลอยไปเป็นของคนอื่นที่มีความสามารถมากกว่า ซึ่งชมรมวาทศิลป์เป็นชมรมที่
                  “พัฒนาความสามารถ” และ “ให้โอกาสกับคนที่สนใจ” มาโดยตลอดค่ะ ในคาบชมรมก็จะมี รุ่นพี่
                  ศิษย์เก่า คุณครู และผู้เชี่ยวชาญด้านการพูดต่าง ๆ แวะเวียนเข้ามา workshop
                  ให้ตลอดเลย ส่วนกิจกรรมในชมรมก็มีสำหรับแนวการพูดที่หลากหลายเลยค่ะ อย่างตัวเราเอง
                  ก็ได้เป็นพิธีกรในงานต่าง ๆ ของโรงเรียน มีได้ไปแข่งสุนทรพจน์นอกโรงเรียนบ้าง
                  มีโอกาสในการหาประสบการณ์ให้กับตัวเองอยู่เรื่อย ๆ ค่ะ
                  การที่เราได้ก้าวเข้ามาเป็นส่วนหนึ่งของชมรมวาทศิลป์ก็นับว่าเป็นการก้าวที่มีอิทธิพลต่อตัวเราในปัจจุบันมาก
                  ๆ เลย ถ้าใครชอบในเรื่องของการพูด เราก็อยากให้ลองมา audition เข้าชมรมวาทศิลป์ดูนะคะ
                  เพราะการเปิดโอกาสให้ตัวเอง ถือเป็นก้าวแรกที่สำคัญที่สุดเลย
                  เชื่อมั่นในตัวเองเข้าไว้นะคะ ให้ความมุ่งมั่นและความพยายามของเราทำหน้าที่ของมันค่ะ
                  สู้ ๆ นะคะ ~ โดย พิม TU82 (IG : pimpetchpp)
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
                    src="/assets/clubs/watasilp_profile_3.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เอี๊ยม</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">
                    IG: emprtxp [
                    <u>https//drive.google.com/open?id=19vuy-oelxnq4sclr3r8o7p_vpz1_aby</u>
                    ]https//drive.google.com/open?id=19vuy-oelxnq4sclr3r8o7p_vpz1_abyw
                  </span>
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
                  "ชมรมวาทศิลป์ ชมรมที่ให้คุณมากกว่าคำว่าพูดเป็น" วลีที่หลาย ๆ คนก็น่าจะเคยได้ยิน
                  ตอนแรกเราก็ไม่รู้หรอกว่า "ให้คุณมากกว่าคำว่าพูดเป็น" แล้วเค้าจะให้อะไรเรานะ
                  แต่พอได้เข้ามาเป็นส่วนหนึ่งของชมรมแล้ว ยิ่งได้ทำกิจกรรมร่วมกับเพื่อน ๆ พี่ ๆ
                  ในชมรม เราก็เริ่มเข้าใจว่า "ให้คุณมากกว่าคำว่าพูดเป็น" ชมรมให้อะไรกับเราบ้าง
                  ตอนที่เราเข้าชมรมมาแรก ๆ ก็รู้สึกเขิน ๆ ที่จะต้องออกไปพูดหน้าห้องในคาบชมรม
                  เพราะที่นั่นทุกคนคือคนที่มีวาทศิลป์ แต่พอเราได้ลองครั้งหนึ่งแล้ว
                  มันทำให้เราข้ามกำแพงของตัวเองมาได้ ได้ฝึกฝน เรียนรู้อะไรหลาย ๆ อย่งจากทั้งเพื่อน ๆ
                  พี่ ๆ และคุณครูที่ปรึกษาชมรม ที่คอยให้คำแนะนำเราเสมอ ตลอดช่วงม.4 ที่ผ่านมา
                  เราเติบโตขึ้น พัฒนาตัวเองขึ้นมาก ส่วนหนึ่งก็เพราะวาทศิลป์เลย พอขึ้นมา ม.5
                  ได้อยู่ในฐานะกรรมการชมรม ได้จัดกิจกรรมให้กับสมาชิกใหม่ในปีนี้
                  ยิ่งทำให้เราได้เรียนรู้และพัมนาตัวเองขึ้นไปอีก ทุก ๆ ก้าวในวาทศิลป์ของเรา
                  ทำให้เราเป็นคนที่เก่งขึ้น ไม่ใช่แค่ด้านการพูด แต่ยังมีเรื่องการติดต่อประสานงาน
                  การทำงานร่วมกับเพื่อน ๆ และอีกหลายอย่างเลย นอกจากนี้ เราก็ยังได้รับโอกาสหลาย ๆ
                  ครั้งจากชมรม ไม่ว่าจะเป็นการเป็นตัวแทนแข่งขัน เข้าร่วมอบรมและฝึกทักษะต่าง ๆ
                  จนถึงตอนนี้ เรารู้สึกว่า วาทศิลป์ไม่ใช่แค่ชมรม แต่เป็นผู้คน
                  เราสามารถเรียนรู้จากกันและกันได้เพราะแต่ละคนก็มีเอกลักษณ์ของตัวเอง
                  ซึ่งเราสามารถนำจุดเด่นของแต่ละคนมาปรับใช้กับตัวเองได้ด้วย
                  และที่สำคัญยิ่งได้อยู่ด้วยกันเท่าไหร่
                  เราก็ยิ่งรู้สึกรักและผูกพันกับวาทศิลป์มากขึ้น
                  เรียกได้ว่าเป็นอีกหนึ่งครอบครัวที่น่ารักและอบอุ่นมาก ๆ ของเราเลย
                  สุดท้ายอยากจะบอกว่า ไม่ว่าใครก็สามารถมาเป็นส่วนหนึ่งของชมรมเราได้
                  ขอแค่เป็นคนที่มีใจรักในการพูด และอยากพัฒนาตัวเองต่อไปเรื่อย ๆ
                  ครอบครัวของเรายินดีต้อนรับเสมอ
                  เราดีใจที่ได้รู้จักกับชาววาทศิลป์และได้เป็นส่วนหนึ่งของครอบครัวนี้
                  อยู่ด้วยกันไปนาน ๆ เลยนะ :) โดย เอี๊ยม TU82 (IG: emprtxp) [
                  <u>https://drive.google.com/open?id=19VUy-OElXNq4sCLR3r8o7p_VPz1_AbY</u>
                  ](https://drive.google.com/open?id=19VUy-OElXNq4sCLR3r8o7p_VPz1_AbYW)
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
